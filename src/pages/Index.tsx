
import { Button } from "@/components/ui/button";
import { 
  Coffee, 
  ShoppingBag, 
  Droplets, 
  Zap, 
  MessageSquare, 
  CheckCircle, 
  Users, 
  Award, 
  Clock, 
  Layers, 
  MapPin,
  ChevronDown,
  Star,
  Building
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Навигация */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Coffee className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold">КофеВендинг</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors">О нас</a>
              <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Услуги</a>
              <a href="#catalog" className="text-gray-700 hover:text-primary transition-colors">Оборудование</a>
              <a href="#cases" className="text-gray-700 hover:text-primary transition-colors">Кейсы</a>
              <a href="#testimonials" className="text-gray-700 hover:text-primary transition-colors">Отзывы</a>
              <a href="#faq" className="text-gray-700 hover:text-primary transition-colors">FAQ</a>
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

      {/* О компании */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1606791405792-1004f1718d0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Команда КофеВендинг" 
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2 md:pl-10">
              <h2 className="text-3xl font-bold mb-6">О компании КофеВендинг</h2>
              <p className="text-gray-600 mb-4">
                Мы — ведущая компания на рынке вендингового оборудования и кофемашин с опытом более 10 лет. 
                Наша миссия — обеспечивать бизнес клиентов качественным оборудованием, которое приносит 
                прибыль и радует конечных потребителей.
              </p>
              <p className="text-gray-600 mb-6">
                Специалисты компании КофеВендинг имеют сертификаты от ведущих производителей и регулярно 
                проходят обучение, чтобы оставаться в курсе последних технологических новинок.
              </p>
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">10+</div>
                  <div className="text-sm text-gray-500">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-500">установок</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">300+</div>
                  <div className="text-sm text-gray-500">клиентов</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Мы предлагаем полный спектр услуг по установке и обслуживанию вендингового оборудования
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Coffee className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Установка кофемашин</h3>
              <p className="text-gray-600">Профессиональная установка кофемашин для офисов, кафе и ресторанов с настройкой и обучением персонала.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <ShoppingBag className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Вендинговые аппараты</h3>
              <p className="text-gray-600">Поставка и настройка вендинговых аппаратов для продажи снеков, напитков и других товаров.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Droplets className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Сервисное обслуживание</h3>
              <p className="text-gray-600">Регулярное техническое обслуживание и ремонт оборудования для бесперебойной работы.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Каталог оборудования */}
      <section id="catalog" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Каталог оборудования</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Мы работаем только с проверенными производителями кофемашин и вендингового оборудования
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Профессиональные кофемашины</CardTitle>
                <CardDescription>Для кафе, ресторанов и офисов</CardDescription>
              </CardHeader>
              <CardContent>
                <img 
                  src="https://images.unsplash.com/photo-1611162458324-a1a374a6bd51?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Профессиональные кофемашины" 
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="text-gray-600 mb-4">Автоматические и полуавтоматические кофемашины ведущих брендов с программируемыми настройками.</p>
                <Button className="w-full">Подробнее</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Торговые автоматы</CardTitle>
                <CardDescription>Для бизнес-центров и общественных мест</CardDescription>
              </CardHeader>
              <CardContent>
                <img 
                  src="https://images.unsplash.com/photo-1625401586060-479c2ea44b2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Торговые автоматы" 
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="text-gray-600 mb-4">Автоматы для продажи снеков, напитков, готовой еды с системой безналичной оплаты.</p>
                <Button className="w-full">Подробнее</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Ингредиенты и расходники</CardTitle>
                <CardDescription>Для бесперебойной работы</CardDescription>
              </CardHeader>
              <CardContent>
                <img 
                  src="https://images.unsplash.com/photo-1566305977571-5666677c6e56?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Ингредиенты и расходники" 
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="text-gray-600 mb-4">Зерновой кофе, сиропы, стаканчики, крышки и другие расходные материалы для вашего оборудования.</p>
                <Button className="w-full">Подробнее</Button>
              </CardContent>
            </Card>
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

      {/* Кейсы и проекты */}
      <section id="cases" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Наши проекты</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Более 300 компаний выбрали нас для установки и обслуживания оборудования
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Бизнес-центр Альфа" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Бизнес-центр "Альфа"</h3>
                <p className="text-gray-600 mb-4">Установка 12 кофемашин в зонах отдыха и 5 вендинговых аппаратов на этажах.</p>
                <div className="flex items-center text-gray-500 text-sm">
                  <Building className="h-4 w-4 mr-1" />
                  <span>Бизнес-центр</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>2024 год</span>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1559305616-3f99cd43e353?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Сеть кафе Брэд" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Сеть кафе "Брэд"</h3>
                <p className="text-gray-600 mb-4">Оснащение 8 точек профессиональными кофемашинами с регулярным обслуживанием.</p>
                <div className="flex items-center text-gray-500 text-sm">
                  <Coffee className="h-4 w-4 mr-1" />
                  <span>Сеть кафе</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>2023 год</span>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1577301656330-783c0a64a584?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Технопарк Сколково" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Технопарк "Сколково"</h3>
                <p className="text-gray-600 mb-4">Комплексное оснащение: 20 торговых автоматов и 15 кофемашин в разных корпусах.</p>
                <div className="flex items-center text-gray-500 text-sm">
                  <Layers className="h-4 w-4 mr-1" />
                  <span>Технопарк</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>2022 год</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Отзывы клиентов */}
      <section id="testimonials" className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Отзывы наших клиентов</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Узнайте, что говорят о нашей работе клиенты
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex text-yellow-400 mb-4">
                <Star className="h-5 w-5" />
                <Star className="h-5 w-5" />
                <Star className="h-5 w-5" />
                <Star className="h-5 w-5" />
                <Star className="h-5 w-5" />
              </div>
              <p className="text-gray-600 mb-6">
                "Работаем с КофеВендинг уже 3 года. Оборудование всегда исправно, а сервисное обслуживание производится точно по графику. Рекомендую!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                    alt="Анна Смирнова" 
                  />
                </div>
                <div>
                  <div className="font-semibold">Анна Смирнова</div>
                  <div className="text-gray-500 text-sm">Директор, ООО "Бизнес Стандарт"</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex text-yellow-400 mb-4">
                <Star className="h-5 w-5" />
                <Star className="h-5 w-5" />
                <Star className="h-5 w-5" />
                <Star className="h-5 w-5" />
                <Star className="h-5 w-5" />
              </div>
              <p className="text-gray-600 mb-6">
                "Установили 5 кофемашин в наш офисный центр. Сотрудники очень довольны качеством напитков, а я доволен профессионализмом компании."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                    alt="Михаил Петров" 
                  />
                </div>
                <div>
                  <div className="font-semibold">Михаил Петров</div>
                  <div className="text-gray-500 text-sm">Управляющий, БЦ "Панорама"</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex text-yellow-400 mb-4">
                <Star className="h-5 w-5" />
                <Star className="h-5 w-5" />
                <Star className="h-5 w-5" />
                <Star className="h-5 w-5" />
                <Star className="h-5 w-5 text-gray-300" />
              </div>
              <p className="text-gray-600 mb-6">
                "Специалисты КофеВендинг быстро отреагировали на нашу заявку и предложили оптимальное решение для нашей сети заправок. Очень доволен сотрудничеством."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                    alt="Алексей Иванов" 
                  />
                </div>
                <div>
                  <div className="font-semibold">Алексей Иванов</div>
                  <div className="text-gray-500 text-sm">Директор, АЗС "ПетроГаз"</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Наши партнеры */}
      <section id="partners" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши партнеры</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all">
              <img src="https://via.placeholder.com/150x80?text=LOGO+1" alt="Партнер 1" className="max-h-16" />
            </div>
            <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all">
              <img src="https://via.placeholder.com/150x80?text=LOGO+2" alt="Партнер 2" className="max-h-16" />
            </div>
            <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all">
              <img src="https://via.placeholder.com/150x80?text=LOGO+3" alt="Партнер 3" className="max-h-16" />
            </div>
            <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all">
              <img src="https://via.placeholder.com/150x80?text=LOGO+4" alt="Партнер 4" className="max-h-16" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Часто задаваемые вопросы</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Ответы на популярные вопросы о наших услугах
          </p>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="bg-white rounded-lg shadow">
              <AccordionItem value="item-1">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  Какие виды вендингового оборудования вы предлагаете?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  Мы предлагаем широкий спектр вендингового оборудования: профессиональные кофемашины, 
                  торговые автоматы для продажи снеков и напитков, автоматы по продаже готовой еды, 
                  а также специализированные автоматы под различные задачи.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  Как часто нужно проводить техническое обслуживание оборудования?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  Для большинства видов оборудования рекомендуется проводить базовое техническое обслуживание 
                  раз в месяц, а полное - раз в 3-6 месяцев, в зависимости от интенсивности использования. 
                  Мы составляем индивидуальный график для каждого клиента.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  Предоставляете ли вы оборудование в аренду?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  Да, мы предлагаем гибкие условия аренды вендингового оборудования с возможностью 
                  последующего выкупа. Это отличное решение для бизнеса, который хочет протестировать 
                  новые форматы или не готов к разовым крупным вложениям.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  Что делать в случае поломки оборудования?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  В случае поломки оборудования вы можете обратиться в нашу службу поддержки, которая 
                  работает 24/7. В большинстве случаев наши специалисты выезжают на место в течение 24 часов 
                  после обращения. Для клиентов на сервисном обслуживании ремонт производится в приоритетном порядке.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Карта и адреса */}
      <section id="locations" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Наши офисы</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Работаем в Москве и Московской области
          </p>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm h-full">
                <h3 className="text-xl font-semibold mb-4">Адреса офисов</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium">Центральный офис</h4>
                      <p className="text-gray-600">г. Москва, ул. Ленинская, д. 15, офис 203</p>
                      <p className="text-gray-500 text-sm">Пн-Пт: 9:00 - 18:00</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium">Сервисный центр</h4>
                      <p className="text-gray-600">г. Москва, ул. Технологическая, д. 7</p>
                      <p className="text-gray-500 text-sm">Пн-Сб: 8:00 - 20:00</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium">Склад</h4>
                      <p className="text-gray-600">г. Москва, Складской проезд, д. 5, стр. 3</p>
                      <p className="text-gray-500 text-sm">Пн-Пт: 8:00 - 17:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="bg-gray-200 rounded-lg overflow-hidden h-full min-h-[300px]">
                {/* Здесь можно встроить Google Maps или Яндекс.Карты */}
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-gray-500">Карта с расположением офисов</p>
                </div>
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
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <Coffee className="h-6 w-6" />
                <span className="ml-2 text-lg font-bold">КофеВендинг</span>
              </div>
              <p className="text-gray-400">Профессиональная установка и обслуживание вендингового оборудования и кофемашин для вашего бизнеса</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Установка кофемашин</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Вендинговые аппараты</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Сервисное обслуживание</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Поставка ингредиентов</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Информация</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">О компании</a></li>
                <li><a href="#cases" className="text-gray-400 hover:text-white transition-colors">Наши проекты</a></li>
                <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#blog" className="text-gray-400 hover:text-white transition-colors">Блог</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-gray-400" />
                  <span className="text-gray-400">г. Москва, ул. Ленинская, д. 15</span>
                </li>
                <li className="flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2 text-gray-400" />
                  <a href="mailto:info@kofevendng.ru" className="text-gray-400 hover:text-white transition-colors">info@kofevendng.ru</a>
                </li>
                <li className="flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-gray-400" />
                  <a href="tel:+78005553535" className="text-gray-400 hover:text-white transition-colors">+7 (800) 555-35-35</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2025 КофеВендинг. Все права защищены.
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
