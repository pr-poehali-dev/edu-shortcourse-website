import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (section: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
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
  );
};

export default HeroSection;
