import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  scrollToSection: (section: string) => void;
  handleRegistration: (e: React.FormEvent) => void;
  courses: Array<{
    id: number;
    title: string;
    duration: string;
    price: string;
    level: string;
    description: string;
    students: number;
    rating: number;
    image: string;
  }>;
}

const Header = ({ scrollToSection, handleRegistration, courses }: HeaderProps) => {
  return (
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
  );
};

export default Header;
