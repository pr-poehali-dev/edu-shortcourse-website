import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CoursesSection from '@/components/CoursesSection';
import Footer from '@/components/Footer';

const Index = () => {
  const { toast } = useToast();
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState('home');

  const courses = [
    {
      id: 1,
      title: 'Цифровой маркетинг',
      duration: '4 недели',
      price: '25 000 ₽',
      level: 'Начальный',
      description: 'Освойте основы digital-маркетинга, SMM и контекстную рекламу',
      students: 156,
      rating: 4.8,
      image: 'https://cdn.poehali.dev/projects/85637983-20d6-4bf0-9074-9e3cd0a9e946/files/4cd7c095-6491-4bb0-a2de-9c013f3c25f9.jpg'
    },
    {
      id: 2,
      title: 'Управление проектами',
      duration: '6 недель',
      price: '35 000 ₽',
      level: 'Продвинутый',
      description: 'Методологии Agile, Scrum и практические навыки управления командой',
      students: 203,
      rating: 4.9,
      image: 'https://cdn.poehali.dev/projects/85637983-20d6-4bf0-9074-9e3cd0a9e946/files/4cd7c095-6491-4bb0-a2de-9c013f3c25f9.jpg'
    },
    {
      id: 3,
      title: 'Финансовая грамотность',
      duration: '3 недели',
      price: '18 000 ₽',
      level: 'Начальный',
      description: 'Личные финансы, инвестиции и управление бюджетом',
      students: 340,
      rating: 4.7,
      image: 'https://cdn.poehali.dev/projects/85637983-20d6-4bf0-9074-9e3cd0a9e946/files/4cd7c095-6491-4bb0-a2de-9c013f3c25f9.jpg'
    },
    {
      id: 4,
      title: 'Аналитика данных',
      duration: '8 недель',
      price: '45 000 ₽',
      level: 'Продвинутый',
      description: 'Excel, Power BI и основы SQL для анализа данных',
      students: 178,
      rating: 4.9,
      image: 'https://cdn.poehali.dev/projects/85637983-20d6-4bf0-9074-9e3cd0a9e946/files/4cd7c095-6491-4bb0-a2de-9c013f3c25f9.jpg'
    }
  ];

  const teachers = [
    {
      id: 1,
      name: 'Елена Смирнова',
      position: 'Эксперт по маркетингу',
      experience: '12 лет',
      courses: 'Цифровой маркетинг',
      image: 'https://cdn.poehali.dev/projects/85637983-20d6-4bf0-9074-9e3cd0a9e946/files/82ace06d-062a-49d6-9332-25823b1f9827.jpg',
      bio: 'Работала в крупных digital-агентствах, запустила более 100 успешных рекламных кампаний'
    },
    {
      id: 2,
      name: 'Дмитрий Петров',
      position: 'Project Manager',
      experience: '15 лет',
      courses: 'Управление проектами',
      image: 'https://cdn.poehali.dev/projects/85637983-20d6-4bf0-9074-9e3cd0a9e946/files/82ace06d-062a-49d6-9332-25823b1f9827.jpg',
      bio: 'Сертифицированный специалист PMP, руководил проектами в IT-компаниях международного уровня'
    },
    {
      id: 3,
      name: 'Анна Волкова',
      position: 'Финансовый консультант',
      experience: '10 лет',
      courses: 'Финансовая грамотность',
      image: 'https://cdn.poehali.dev/projects/85637983-20d6-4bf0-9074-9e3cd0a9e946/files/82ace06d-062a-49d6-9332-25823b1f9827.jpg',
      bio: 'Эксперт в области личных финансов, автор книги "Инвестиции для начинающих"'
    }
  ];

  const schedule = [
    { day: 'Понедельник', time: '18:00 - 20:00', course: 'Цифровой маркетинг', teacher: 'Е. Смирнова' },
    { day: 'Вторник', time: '19:00 - 21:00', course: 'Управление проектами', teacher: 'Д. Петров' },
    { day: 'Среда', time: '18:30 - 20:30', course: 'Финансовая грамотность', teacher: 'А. Волкова' },
    { day: 'Четверг', time: '19:00 - 21:00', course: 'Аналитика данных', teacher: 'С. Иванов' },
    { day: 'Пятница', time: '18:00 - 20:00', course: 'Цифровой маркетинг', teacher: 'Е. Смирнова' }
  ];

  const reviews = [
    {
      id: 1,
      name: 'Мария Козлова',
      course: 'Цифровой маркетинг',
      rating: 5,
      text: 'Отличный курс! Преподаватель объясняет сложные вещи простым языком. Уже применяю знания на практике.',
      date: '15 ноября 2024'
    },
    {
      id: 2,
      name: 'Алексей Новиков',
      course: 'Управление проектами',
      rating: 5,
      text: 'Получил сертификат и повышение на работе. Рекомендую всем, кто хочет развиваться в управлении.',
      date: '10 ноября 2024'
    },
    {
      id: 3,
      name: 'Ольга Сидорова',
      course: 'Финансовая грамотность',
      rating: 4,
      text: 'Очень полезная информация о личных финансах. Теперь уверенно планирую свой бюджет.',
      date: '5 ноября 2024'
    }
  ];

  const handleRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время для подтверждения регистрации.',
    });
  };

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header scrollToSection={scrollToSection} handleRegistration={handleRegistration} courses={courses} />
      
      <HeroSection scrollToSection={scrollToSection} />

      <CoursesSection courses={courses} handleRegistration={handleRegistration} setSelectedCourse={setSelectedCourse} />

      <section className="py-20 bg-primary text-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Получите сертификат после обучения</h2>
              <p className="text-white/90 text-lg">
                По окончании курса каждый студент получает сертификат о прохождении обучения, подтверждающий ваши новые профессиональные навыки.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={24} className="text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Государственный образец</h3>
                    <p className="text-white/80 text-sm">Сертификат признается работодателями по всей стране</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={24} className="text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Цифровая верификация</h3>
                    <p className="text-white/80 text-sm">Возможность проверки подлинности онлайн</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={24} className="text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Добавьте в портфолио</h3>
                    <p className="text-white/80 text-sm">Укажите в резюме и LinkedIn профиле</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/85637983-20d6-4bf0-9074-9e3cd0a9e946/files/292beea4-ba20-4898-9d2a-486bb50ca946.jpg"
                alt="Сертификат"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="teachers" className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-4">Наша команда</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Преподаватели</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Практикующие эксперты с многолетним опытом работы в своих областях
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {teachers.map((teacher, index) => (
              <Card key={teacher.id} className="hover-scale transition-all duration-300" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="relative w-full h-64 mb-4 overflow-hidden rounded-lg">
                    <img src={teacher.image} alt={teacher.name} className="w-full h-full object-cover" />
                  </div>
                  <CardTitle className="text-xl">{teacher.name}</CardTitle>
                  <CardDescription className="text-secondary font-semibold">{teacher.position}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Briefcase" size={16} className="text-muted-foreground" />
                    <span>Опыт: {teacher.experience}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="BookOpen" size={16} className="text-muted-foreground" />
                    <span>{teacher.courses}</span>
                  </div>
                  <p className="text-sm text-muted-foreground pt-2">{teacher.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-4">Планирование</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Расписание занятий</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Удобное время проведения занятий для работающих специалистов
            </p>
          </div>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-6">
              <div className="space-y-4">
                {schedule.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-lg border hover:border-secondary transition-colors"
                  >
                    <div className="space-y-1 mb-2 md:mb-0">
                      <div className="font-semibold text-primary">{item.day}</div>
                      <div className="text-sm text-muted-foreground flex items-center gap-2">
                        <Icon name="Clock" size={14} />
                        {item.time}
                      </div>
                    </div>
                    <div className="space-y-1 md:text-right">
                      <div className="font-medium">{item.course}</div>
                      <div className="text-sm text-muted-foreground flex items-center gap-2 md:justify-end">
                        <Icon name="User" size={14} />
                        {item.teacher}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="reviews" className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-4">Отзывы студентов</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Что говорят наши выпускники</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Реальные отзывы от людей, которые уже прошли обучение
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={review.id} className="hover-scale transition-all duration-300" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </div>
                  <CardDescription>{review.course}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{review.text}</p>
                  <div className="text-xs text-muted-foreground">{review.date}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              <div>
                <Badge className="mb-4">Свяжитесь с нами</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Контакты</h2>
                <p className="text-muted-foreground">
                  Остались вопросы? Мы всегда готовы помочь вам с выбором курса
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" size={24} className="text-secondary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Адрес</h3>
                    <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 123</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Phone" size={24} className="text-secondary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Mail" size={24} className="text-secondary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">info@edupro.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" size={24} className="text-secondary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Время работы</h3>
                    <p className="text-muted-foreground">Пн-Пт: 9:00 - 20:00<br />Сб-Вс: 10:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Задайте вопрос</CardTitle>
                <CardDescription>Заполните форму, и мы ответим в ближайшее время</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleRegistration} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Имя</Label>
                    <Input id="contact-name" placeholder="Ваше имя" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Email</Label>
                    <Input id="contact-email" type="email" placeholder="your@email.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea id="message" placeholder="Ваш вопрос..." rows={4} required />
                  </div>
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
