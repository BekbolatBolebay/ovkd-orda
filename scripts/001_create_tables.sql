-- ========================================
-- 1️⃣ Кестелер
-- ========================================

-- News
create table if not exists public.news (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  content text not null,
  icon text,
  image_url text,
  published_date timestamp with time zone default now(),
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Services
create table if not exists public.services (
  id uuid primary key default gen_random_uuid(),
  category text not null,
  name text not null,
  price numeric not null,
  unit text,
  sort_order integer default 0,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Doctors
create table if not exists public.doctors (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  specialty text not null,
  description text,
  image_url text,
  sort_order integer default 0,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Site content
create table if not exists public.site_content (
  id uuid primary key default gen_random_uuid(),
  section text not null unique,
  content jsonb not null,
  updated_at timestamp with time zone default now()
);

-- ========================================
-- 2️⃣ RLS қосу
-- ========================================
alter table public.news enable row level security;
alter table public.services enable row level security;
alter table public.doctors enable row level security;
alter table public.site_content enable row level security;

-- ========================================
-- 3️⃣ Public оқуға саясаттар
-- ========================================
create policy "Public read news" on public.news for select using (true);
create policy "Public read services" on public.services for select using (true);
create policy "Public read doctors" on public.doctors for select using (true);
create policy "Public read site_content" on public.site_content for select using (true);

-- ========================================
-- 4️⃣ Admin (authenticated) толық CRUD саясаттар
-- ========================================

-- News
create policy "Admin insert news" on public.news for insert with check (auth.role() = 'authenticated');
create policy "Admin update news" on public.news for update using (auth.role() = 'authenticated');
create policy "Admin delete news" on public.news for delete using (auth.role() = 'authenticated');

-- Services
create policy "Admin insert services" on public.services for insert with check (auth.role() = 'authenticated');
create policy "Admin update services" on public.services for update using (auth.role() = 'authenticated');
create policy "Admin delete services" on public.services for delete using (auth.role() = 'authenticated');

-- Doctors
create policy "Admin insert doctors" on public.doctors for insert with check (auth.role() = 'authenticated');
create policy "Admin update doctors" on public.doctors for update using (auth.role() = 'authenticated');
create policy "Admin delete doctors" on public.doctors for delete using (auth.role() = 'authenticated');

-- Site content
create policy "Admin insert site_content" on public.site_content for insert with check (auth.role() = 'authenticated');
create policy "Admin update site_content" on public.site_content for update using (auth.role() = 'authenticated');

-- ========================================
-- 5️⃣ Индекстер (оқу жылдамдығы үшін)
-- ========================================
create index if not exists news_published_date_idx on public.news(published_date desc);
create index if not exists services_category_idx on public.services(category);
create index if not exists doctors_sort_order_idx on public.doctors(sort_order);

-- ========================================
-- 6️⃣ Тест үшін уақытша RLS өшіру (қажет болса)
-- ========================================
-- alter table public.news disable row level security;
-- alter table public.services disable row level security;
-- alter table public.doctors disable row level security;
-- alter table public.site_content disable row level security;
