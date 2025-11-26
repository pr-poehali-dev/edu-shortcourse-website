import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

interface Course {
  id: number;
  title: string;
  duration: string;
  price: string;
  level: string;
  description: string;
  students: number;
  rating: number;
  image: string;
}

interface CoursesSectionProps {
  courses: Course[];
  handleRegistration: (e: React.FormEvent) => void;
  setSelectedCourse: (title: string) => void;
}

const CoursesSection = ({ courses, handleRegistration, setSelectedCourse }: CoursesSectionProps) => {
  return (
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
  );
};

export default CoursesSection;
