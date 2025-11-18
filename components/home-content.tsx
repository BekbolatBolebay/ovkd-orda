{/* Center Content - Featured News */}
          <div className="lg:col-span-6">
            <Card className="mb-6">
              <CardContent className="p-0">
                <img
                  src="/image.png"
                  alt="Featured"
                  className="w-full h-64 md:h-96 object-cover rounded-t"
                />
                <div className="p-6">
                  <h2 className="text-xl md:text-2xl font-bold text-cyan-600 mb-2">
                    {language === 'ru' ? 'Справка по использованию' : 'Қолданысқа арналған жадынама'}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {language === 'ru' 
                      ? 'Онлайн запись через систему электронного приема государственных документов'
                      : 'Мемлекеттік құжаттарды электронды түрде қабылдау жүйесі арқылы онлайн жазылу'
                    }
                  </p>
                  <Link href="/patients">
                    <Button className="bg-red-500 hover:bg-red-600">
                      {language === 'ru' ? 'Подробнее' : 'Толығырақ'}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar - Director & Quick Actions */}
          <div className="lg:col-span-3 space-y-6">
