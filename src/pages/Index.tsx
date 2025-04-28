
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Coffee, ShoppingBag, Droplets, Zap, MessageSquare, CheckCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Навигация */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Coffee className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold">КофеВендинг</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Услуги</a>
              <a href="#advantages" className="text-gray-700 hover:text-primary transition-colors">Преимущества</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
            </div>
            <div>
              <Button>Связаться с нами</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Главный баннер */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Вендинговое оборудование и кофемашины</h1>
              <p className="text-xl mb-8">Профессиональная установка и обслуживание для вашего бизнеса</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                  Получить консультацию
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Узнать цены
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Кофемашина" 
                className="rounded-lg shadow-xl max-w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Coffee className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Установка кофемашин</h3>
              <p className="text-gray-600">Профессиональная установка кофемашин для офисов, кафе и ресторанов с настройкой и обучением персонала.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <ShoppingBag className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Вендинговые аппараты</h3>
              <p className="text-gray-600">Поставка и настройка вендинговых аппаратов для продажи снеков, напитков и других товаров.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Droplets className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Сервисное обслуживание</h3>
              <p className="text-gray-600">Регулярное техническое обслуживание и ремонт оборудования для бесперебойной работы.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section id="advantages" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Опыт работы более 10 лет</h3>
                <p className="text-gray-600">Мы устанавливаем и обслуживаем вендинговое оборудование с 2013 года</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Сертифицированные специалисты</h3>
                <p className="text-gray-600">Наши мастера проходят обучение у производителей оборудования</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Гарантия на работы</h3>
                <p className="text-gray-600">Предоставляем гарантию на все виды работ и запасные части</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Оперативность</h3>
                <p className="text-gray-600">Быстрый выезд специалиста в течение 24 часов после обращения</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="contact" className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Остались вопросы?</h2>
              <p className="text-xl mb-6">Свяжитесь с нами для консультации и расчета стоимости</p>
              <div className="flex items-center mb-4">
                <MessageSquare className="h-6 w-6 mr-3" />
                <span>info@kofevendng.ru</span>
              </div>
              <div className="flex items-center">
                <Zap className="h-6 w-6 mr-3" />
                <span>+7 (800) 555-35-35</span>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-blue-800">Оставьте заявку</h3>
                <form>
                  <div className="mb-4">
                    <input 
                      type="text" 
                      placeholder="Ваше имя" 
                      className="w-full p-3 border border-gray-300 rounded-md text-gray-700" 
                    />
                  </div>
                  <div className="mb-4">
                    <input 
                      type="tel" 
                      placeholder="Ваш телефон" 
                      className="w-full p-3 border border-gray-300 rounded-md text-gray-700" 
                    />
                  </div>
                  <div className="mb-4">
                    <textarea 
                      placeholder="Ваше сообщение" 
                      className="w-full p-3 border border-gray-300 rounded-md text-gray-700 h-24"
                    ></textarea>
                  </div>
                  <Button className="w-full">Отправить заявку</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Coffee className="h-6 w-6" />
              <span className="ml-2 text-lg font-bold">КофеВендинг</span>
            </div>
            <div className="text-sm text-gray-400">
              © 2025 КофеВендинг. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
