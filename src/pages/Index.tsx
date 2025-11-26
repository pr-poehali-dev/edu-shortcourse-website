import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

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
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="GraduationCap" size={32} className="text-secondary" />
            <span className="text-2xl font-bold text-primary">EduPro</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-secondary transition-colors">Главная</button>
            <button onClick={() => scrollToSection('courses')} className="text-sm font-medium hover:text-secondary transition-colors">Курсы</button>
            <button onClick={() => scrollToSection('teachers')} className="text-sm font-medium hover:text-secondary transition-colors">Преподаватели</button>
            <button onClick={() => scrollToSection('schedule')} className="text-sm font-medium hover:text-secondary transition-colors">Расписание</button>
            <button onClick={() => scrollToSection('reviews')} className="text-sm font-medium hover:text-secondary transition-colors">Отзывы</button>
            <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-secondary transition-colors">Контакты</button>
          </nav>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-accent hover:bg-accent/90">
                Записаться на курс
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Регистрация на курс</DialogTitle>
                <DialogDescription>
                  Заполните форму, и мы свяжемся с вами для подтверждения записи
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleRegistration} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя и фамилия</Label>
                  <Input id="name" placeholder="Иван Иванов" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="ivan@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="course">Выберите курс</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите курс" />
                    </SelectTrigger>
                    <SelectContent>
                      {courses.map((course) => (
                        <SelectItem key={course.id} value={course.id.toString()}>
                          {course.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                  Отправить заявку
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </header>

      <section id="home" className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-background to-accent/10"></div>
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-secondary/10 text-secondary hover:bg-secondary/20">Профессиональное образование</Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-primary leading-tight">
                Краткосрочные курсы для карьерного роста
              </h1>
              <p className="text-lg text-muted-foreground">
                Получите востребованные навыки за 3-8 недель. Обучение у практикующих экспертов с выдачей сертификата государственного образца.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90" onClick={() => scrollToSection('courses')}>
                  Выбрать курс
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('schedule')}>
                  Расписание занятий
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-8 border-t">
                <div>
                  <div className="text-3xl font-bold text-secondary">500+</div>
                  <div className="text-sm text-muted-foreground">Выпускников</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">15+</div>
                  <div className="text-sm text-muted-foreground">Курсов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">4.8</div>
                  <div className="text-sm text-muted-foreground">Рейтинг</div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/85637983-20d6-4bf0-9074-9e3cd0a9e946/files/4cd7c095-6491-4bb0-a2de-9c013f3c25f9.jpg"
                alt="Обучение"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-white p-6 rounded-lg shadow-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="Award" size={24} />
                  <span className="font-bold">Сертификат</span>
                </div>
                <p className="text-sm">После окончания курса</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="courses" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4">Наши программы</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Популярные курсы</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Актуальные программы обучения от ведущих экспертов индустрии
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <Card key={course.id} className="hover-scale hover:shadow-xl transition-all duration-300" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                  <Badge className="absolute top-4 right-4 bg-white/90 text-primary">{course.level}</Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">{course.duration}</Badge>
                    <div className="flex items-center gap-1 text-sm">
                      <Icon name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                      <span className="font-semibold">{course.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Icon name="Users" size={16} />
                      <span>{course.students} студентов</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-secondary">{course.price}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-accent hover:bg-accent/90" onClick={() => setSelectedCourse(course.title)}>
                        Записаться
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Регистрация на курс</DialogTitle>
                        <DialogDescription>
                          {course.title}
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleRegistration} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="reg-name">Имя и фамилия</Label>
                          <Input id="reg-name" placeholder="Иван Иванов" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="reg-email">Email</Label>
                          <Input id="reg-email" type="email" placeholder="ivan@example.com" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="reg-phone">Телефон</Label>
                          <Input id="reg-phone" type="tel" placeholder="+7 (999) 123-45-67" required />
                        </div>
                        <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                          Отправить заявку
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

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

      <footer className="bg-primary text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="GraduationCap" size={32} />
                <span className="text-2xl font-bold">EduPro</span>
              </div>
              <p className="text-white/80 text-sm">
                Профессиональные краткосрочные курсы для вашего карьерного роста
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Курсы</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li>Цифровой маркетинг</li>
                <li>Управление проектами</li>
                <li>Финансовая грамотность</li>
                <li>Аналитика данных</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li>О нас</li>
                <li>Преподаватели</li>
                <li>Отзывы</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Социальные сети</h3>
              <div className="flex gap-3">
                <Button size="icon" variant="ghost" className="text-white hover:bg-white/10">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button size="icon" variant="ghost" className="text-white hover:bg-white/10">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button size="icon" variant="ghost" className="text-white hover:bg-white/10">
                  <Icon name="Linkedin" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
            <p>© 2024 EduPro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
