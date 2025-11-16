import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [stars, setStars] = useState<Array<{ id: number; left: string; top: string; size: string; duration: string; delay: string }>>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      duration: `${Math.random() * 3 + 2}s`,
      delay: `${Math.random() * 2}s`
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden flex flex-col items-center justify-center px-4">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animationDuration: star.duration,
            animationDelay: star.delay
          }}
        />
      ))}

      <div className="relative z-10 text-center max-w-2xl mx-auto space-y-8 animate-[fadeIn_1s_ease-out]">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Приветствуем в адаптере<br />
          <span className="text-gray-300">Тихого Омута</span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl mb-12">
          Присоединяйтесь к нашему сообществу
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="https://t.me/+KRT20SAnApA3ZThh" target="_blank" rel="noopener noreferrer">
            <Button 
              className="bg-[#404040] hover:bg-[#505050] text-white border-none transition-all duration-300 hover:scale-105 px-8 py-6 text-base w-full sm:w-auto"
            >
              <Icon name="Send" className="mr-2" size={20} />
              Тихий Омут
            </Button>
          </a>

          <a href="https://t.me/freedefto" target="_blank" rel="noopener noreferrer">
            <Button 
              className="bg-[#404040] hover:bg-[#505050] text-white border-none transition-all duration-300 hover:scale-105 px-8 py-6 text-base w-full sm:w-auto"
            >
              <Icon name="Heart" className="mr-2" size={20} />
              Бесплатная помощь
            </Button>
          </a>
        </div>
      </div>

      <footer className="absolute bottom-6 left-0 right-0 text-center z-10">
        <p className="text-gray-500 text-sm">
          Админ проекта: <a href="https://t.me/fuckIsolated" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">@fuckIsolated</a>
        </p>
      </footer>
    </div>
  );
};

export default Index;
