import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
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
  );
};

export default Footer;
