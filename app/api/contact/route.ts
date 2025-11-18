import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

type Body = {
  name?: string
  email?: string
  subject?: string
  message?: string
}

async function trySendEmail(body: Body) {
  // Attempt to dynamically import nodemailer if configured
  try {
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_RECIPIENT } = process.env
    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_RECIPIENT) return { sent: false, reason: "SMTP not configured" }

    // Dynamically require nodemailer at runtime only if available.
    // Use eval to avoid bundlers attempting to resolve the dependency at build time.
    try {
      // acquire require in runtime
      // eslint-disable-next-line no-eval
      const requireFn = eval("typeof require !== 'undefined' ? require : null") as any
      if (!requireFn) return { sent: false, reason: "require not available" }

      const nodemailer = requireFn("nodemailer")
      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT) || 587,
        secure: false,
        auth: { user: SMTP_USER, pass: SMTP_PASS },
      })

      const info = await transporter.sendMail({
        from: `${body.name || "Website"} <${SMTP_USER}>`,
        to: CONTACT_RECIPIENT,
        subject: `[Байланыс] ${body.subject || "Жаңа хабарлама"}`,
        text: `Аты: ${body.name || "-"}\nEmail: ${body.email || "-"}\n\n${body.message || "-"}`,
      })

      return { sent: true, info }
    } catch (e: any) {
      return { sent: false, reason: e?.message || String(e) }
    }
  } catch (err: any) {
    return { sent: false, reason: err?.message || String(err) }
  }
}

export async function POST(req: Request) {
  try {
    const json = await req.json().catch(() => ({})) as Body

    const name = (json.name || "").toString().trim()
    const email = (json.email || "").toString().trim()
    const subject = (json.subject || "").toString().trim()
    const message = (json.message || "").toString().trim()

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ message: "Барлық өрістер толтырылуы керек" }, { status: 400 })
    }

    const record = {
      id: Date.now(),
      name,
      email,
      subject,
      message,
      createdAt: new Date().toISOString(),
    }

    // Persist to data/contact-submissions.json
    const dataDir = path.join(process.cwd(), "data")
    if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true })
    const file = path.join(dataDir, "contact-submissions.json")
    let existing: any[] = []
    try {
      if (fs.existsSync(file)) {
        const raw = fs.readFileSync(file, "utf8")
        existing = JSON.parse(raw || "[]")
      }
    } catch (e) {
      existing = []
    }

    existing.push(record)
    fs.writeFileSync(file, JSON.stringify(existing, null, 2), "utf8")

    // Try to send email if SMTP configured
    const mailResult = await trySendEmail({ name, email, subject, message })

    return NextResponse.json({ ok: true, persisted: true, mail: mailResult })
  } catch (err: any) {
    console.error("/api/contact error:", err)
    return NextResponse.json({ message: "Сервер қатесі" }, { status: 500 })
  }
}
