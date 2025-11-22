import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';

const Index = () => {
  const [stars, setStars] = useState<Array<{ id: number; left: string; top: string; size: string; twinkleDuration: string; floatDuration: string; delay: string }>>([]);
  const [dorkQuery, setDorkQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const generatedStars = Array.from({ length: 250 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 3 + 1}px`,
      twinkleDuration: `${Math.random() * 3 + 2}s`,
      floatDuration: `${Math.random() * 15 + 10}s`,
      delay: `${Math.random() * 5}s`
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden px-4 py-12">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animationDuration: `${star.twinkleDuration}, ${star.floatDuration}`,
            animationDelay: star.delay
          }}
        />
      ))}

      <div className="relative z-10 max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-8 animate-[fadeIn_1s_ease-out] pt-12">
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

        <div className="bg-[#1a1a1a] rounded-2xl p-8 md:p-12 border border-gray-800 animate-[fadeIn_1.5s_ease-out]">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            О нас
          </h2>
          
          <div className="space-y-6 text-gray-300 text-lg">
            <p className="leading-relaxed">
              Мы бесплатно помогаем за подписку на наши каналы. Наша команда предоставляет профессиональную поддержку всем участникам сообщества.
            </p>
            
            <div className="bg-[#252525] rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Icon name="Info" className="mr-2" size={24} />
                Как получить помощь?
              </h3>
              <ol className="list-decimal list-inside space-y-3 text-gray-300">
                <li>Подпишитесь на 2 канала выше (Тихий Омут и Бесплатная помощь)</li>
                <li>Сделайте скриншоты подписок</li>
                <li>Отправьте скриншоты <a href="https://t.me/fuckIsolated" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors underline">@fuckIsolated</a> в Telegram</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="bg-[#1a1a1a] rounded-2xl p-8 md:p-12 border border-gray-800 animate-[fadeIn_2s_ease-out]">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Наша статистика
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#252525] rounded-xl p-6 border border-gray-700 text-center transition-all duration-300 hover:scale-105 hover:border-gray-600">
              <Icon name="Users" className="mx-auto mb-4 text-gray-400" size={48} />
              <div className="text-4xl font-bold text-white mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>300+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Подписчиков</div>
            </div>

            <div className="bg-[#252525] rounded-xl p-6 border border-gray-700 text-center transition-all duration-300 hover:scale-105 hover:border-gray-600">
              <Icon name="Shield" className="mx-auto mb-4 text-gray-400" size={48} />
              <div className="text-4xl font-bold text-white mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>30+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Под защитой</div>
            </div>

            <div className="bg-[#252525] rounded-xl p-6 border border-gray-700 text-center transition-all duration-300 hover:scale-105 hover:border-gray-600">
              <Icon name="Briefcase" className="mx-auto mb-4 text-gray-400" size={48} />
              <div className="text-4xl font-bold text-white mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>20+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Работ выполнено</div>
            </div>
          </div>
        </div>

        <div className="bg-[#1a1a1a] rounded-2xl p-8 md:p-12 border border-gray-800 animate-[fadeIn_2.5s_ease-out]">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Поддержать проект
          </h2>
          
          <div className="space-y-6 text-gray-300 text-lg">
            <p className="leading-relaxed text-center">
              Если вам понравился наш проект и вы хотите поддержать его развитие, будем благодарны за любую помощь!
            </p>
            
            <div className="bg-[#252525] rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center justify-center">
                <Icon name="Gift" className="mr-2" size={24} />
                Способы поддержки
              </h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start gap-3">
                  <Icon name="Star" className="text-gray-400 mt-1 flex-shrink-0" size={20} />
                  <p>Отправьте подарок в Telegram на <a href="https://t.me/fuckIsolated" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors underline">@fuckIsolated</a></p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CreditCard" className="text-gray-400 mt-1 flex-shrink-0" size={20} />
                  <p>Напишите <a href="https://t.me/fuckIsolated" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors underline">@fuckIsolated</a>, чтобы уточнить карту для денежной поддержки</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#1a1a1a] rounded-2xl p-8 md:p-12 border border-gray-800 animate-[fadeIn_3s_ease-out]">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Google Dorking
          </h2>
          
          <div className="space-y-6">
            <p className="text-gray-300 text-lg text-center leading-relaxed">
              Введите запрос для поиска в Google с точными совпадениями
            </p>
            
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Input
                  type="text"
                  placeholder='Например: site:example.com "admin panel"'
                  value={dorkQuery}
                  onChange={(e) => setDorkQuery(e.target.value)}
                  className="w-full bg-[#252525] border-gray-700 text-white placeholder:text-gray-500 h-14 text-lg px-6 pr-14 focus:border-gray-600 focus:ring-2 focus:ring-gray-600"
                />
                <Icon name="Search" className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
              </div>
            </div>

            {dorkQuery && (
              <div className="bg-[#252525] rounded-xl p-6 border border-gray-700 mt-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white flex items-center">
                    <Icon name="ExternalLink" className="mr-2" size={20} />
                    Результаты поиска
                  </h3>
                  {isSearching && (
                    <div className="flex items-center gap-2 text-gray-400">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span className="text-sm">Поиск...</span>
                    </div>
                  )}
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-[#1a1a1a] rounded-lg border border-gray-800">
                    <p className="text-gray-300 mb-3">
                      Ваш запрос: <span className="text-white font-mono bg-[#0a0a0a] px-2 py-1 rounded">{dorkQuery}</span>
                    </p>
                    <a
                      href={`https://www.google.com/search?q=${encodeURIComponent(dorkQuery)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsSearching(true)}
                      className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                    >
                      <Icon name="Search" size={20} />
                      Открыть результаты в Google
                    </a>
                  </div>

                  <div className="p-4 bg-[#1a1a1a] rounded-lg border border-gray-800">
                    <h4 className="text-white font-semibold mb-3 flex items-center">
                      <Icon name="Info" className="mr-2" size={18} />
                      Полезные операторы Google Dork:
                    </h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-gray-500">•</span>
                        <span><code className="bg-[#0a0a0a] px-2 py-0.5 rounded text-white">site:</code> - поиск на конкретном сайте</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gray-500">•</span>
                        <span><code className="bg-[#0a0a0a] px-2 py-0.5 rounded text-white">filetype:</code> - поиск по типу файла</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gray-500">•</span>
                        <span><code className="bg-[#0a0a0a] px-2 py-0.5 rounded text-white">intitle:</code> - поиск в заголовке страницы</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gray-500">•</span>
                        <span><code className="bg-[#0a0a0a] px-2 py-0.5 rounded text-white">inurl:</code> - поиск в URL адресе</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gray-500">•</span>
                        <span><code className="bg-[#0a0a0a] px-2 py-0.5 rounded text-white">"точная фраза"</code> - поиск точного совпадения</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {!dorkQuery && (
              <div className="bg-[#252525] rounded-xl p-6 border border-gray-700 text-center">
                <Icon name="Search" className="mx-auto mb-4 text-gray-500" size={48} />
                <p className="text-gray-400">Начните вводить запрос для поиска</p>
              </div>
            )}
          </div>
        </div>

        <footer className="text-center py-8">
          <p className="text-gray-500 text-sm">
            Админ проекта: <a href="https://t.me/fuckIsolated" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">@fuckIsolated</a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;