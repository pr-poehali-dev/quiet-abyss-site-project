import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';

const Index = () => {
  const [stars, setStars] = useState<Array<{ id: number; left: string; top: string; size: string; twinkleDuration: string; floatDuration: string; delay: string }>>([]);
  const [dorkQuery, setDorkQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneInfo, setPhoneInfo] = useState<any>(null);
  const [isChecking, setIsChecking] = useState(false);

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

  const checkPhoneNumber = () => {
    setIsChecking(true);
    
    const cleanPhone = phoneNumber.replace(/\D/g, '');
    
    if (cleanPhone.length < 10) {
      setPhoneInfo({ error: 'Некорректный номер телефона' });
      setIsChecking(false);
      return;
    }

    const phoneData: Record<string, any> = {
      '495': { region: 'Москва', timezone: 'UTC+3', operator: 'МТС/Билайн/Мегафон', status: 'Обслуживается' },
      '499': { region: 'Москва', timezone: 'UTC+3', operator: 'МТС/Билайн/Мегафон', status: 'Обслуживается' },
      '812': { region: 'Санкт-Петербург', timezone: 'UTC+3', operator: 'МТС/Билайн/Мегафон', status: 'Обслуживается' },
      '383': { region: 'Новосибирск', timezone: 'UTC+7', operator: 'МТС/Билайн/Мегафон', status: 'Обслуживается' },
      '343': { region: 'Екатеринбург', timezone: 'UTC+5', operator: 'МТС/Билайн/Мегафон', status: 'Обслуживается' },
      '846': { region: 'Самара', timezone: 'UTC+4', operator: 'МТС/Билайн/Мегафон', status: 'Обслуживается' },
      '861': { region: 'Краснодар', timezone: 'UTC+3', operator: 'МТС/Билайн/Мегафон', status: 'Обслуживается' },
      '391': { region: 'Красноярск', timezone: 'UTC+7', operator: 'МТС/Билайн/Мегафон', status: 'Обслуживается' },
      '423': { region: 'Казань', timezone: 'UTC+3', operator: 'МТС/Билайн/Мегафон', status: 'Обслуживается' },
    };

    const mobileOperators: Record<string, string> = {
      '900': 'МТС',
      '901': 'МТС', 
      '902': 'МТС',
      '903': 'Билайн',
      '904': 'Билайн',
      '905': 'Билайн',
      '906': 'Билайн',
      '908': 'Билайн',
      '909': 'Билайн',
      '910': 'МТС',
      '911': 'МТС',
      '912': 'МТС',
      '913': 'МТС',
      '914': 'МТС',
      '915': 'МТС',
      '916': 'МТС',
      '917': 'МТС',
      '918': 'МТС',
      '919': 'МТС',
      '920': 'Мегафон',
      '921': 'Мегафон',
      '922': 'Мегафон',
      '923': 'Мегафон',
      '924': 'Мегафон',
      '925': 'Мегафон',
      '926': 'Мегафон',
      '927': 'Мегафон',
      '928': 'Мегафон',
      '929': 'Мегафон',
      '930': 'Мегафон',
      '931': 'Мегафон',
      '932': 'Мегафон',
      '933': 'Мегафон',
      '934': 'Мегафон',
      '936': 'Мегафон',
      '937': 'Мегафон',
      '938': 'Мегафон',
      '939': 'Мегафон',
      '950': 'Билайн',
      '951': 'Билайн',
      '952': 'Билайн',
      '953': 'Билайн',
      '960': 'Билайн',
      '961': 'Билайн',
      '962': 'Билайн',
      '963': 'Билайн',
      '964': 'Билайн',
      '965': 'Билайн',
      '966': 'Билайн',
      '967': 'Билайн',
      '968': 'Билайн',
      '969': 'Билайн',
      '977': 'МТС',
      '978': 'МТС',
      '980': 'МТС',
      '981': 'МТС',
      '982': 'МТС',
      '983': 'МТС',
      '984': 'МТС',
      '985': 'МТС',
      '986': 'МТС',
      '987': 'МТС',
      '988': 'МТС',
      '989': 'МТС',
    };

    let code = cleanPhone.substring(1, 4);
    let info = phoneData[code];

    if (!info) {
      code = cleanPhone.substring(0, 3);
      const operator = mobileOperators[code];
      
      if (operator) {
        info = {
          region: 'Мобильный номер',
          timezone: 'Зависит от региона',
          operator: operator,
          status: 'Обслуживается'
        };
      } else {
        info = {
          region: 'Неизвестный регион',
          timezone: 'Неизвестно',
          operator: 'Неизвестный оператор',
          status: 'Не обслуживается'
        };
      }
    }

    setTimeout(() => {
      setPhoneInfo(info);
      setIsChecking(false);
    }, 800);
  };

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

            <Button 
              onClick={() => {
                const dorkSection = document.getElementById('dorking-section');
                dorkSection?.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }}
              className="bg-[#404040] hover:bg-[#505050] text-white border-none transition-all duration-300 hover:scale-105 px-8 py-6 text-base w-full sm:w-auto"
            >
              <Icon name="Search" className="mr-2" size={20} />
              Google Dorking
            </Button>

            <Button 
              onClick={() => {
                const phoneSection = document.getElementById('phone-check-section');
                phoneSection?.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }}
              className="bg-[#404040] hover:bg-[#505050] text-white border-none transition-all duration-300 hover:scale-105 px-8 py-6 text-base w-full sm:w-auto"
            >
              <Icon name="Phone" className="mr-2" size={20} />
              Проверка номера
            </Button>
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
              <div className="text-4xl font-bold text-white mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>35+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Под защитой</div>
            </div>

            <div className="bg-[#252525] rounded-xl p-6 border border-gray-700 text-center transition-all duration-300 hover:scale-105 hover:border-gray-600">
              <Icon name="Briefcase" className="mx-auto mb-4 text-gray-400" size={48} />
              <div className="text-4xl font-bold text-white mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>25+</div>
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

        <div id="dorking-section" className="bg-[#1a1a1a] rounded-2xl p-8 md:p-12 border border-gray-800 animate-[fadeIn_3s_ease-out]">
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

        <div id="phone-check-section" className="bg-[#1a1a1a] rounded-2xl p-8 md:p-12 border border-gray-800 animate-[fadeIn_3s_ease-out]">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Проверка номера телефона
          </h2>

          <div className="space-y-6">
            <div className="flex gap-3">
              <Input
                type="tel"
                placeholder="+7 (900) 123-45-67"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="flex-1 bg-[#252525] border-gray-700 text-white placeholder:text-gray-500 focus:border-gray-600"
              />
              <Button 
                onClick={checkPhoneNumber}
                disabled={isChecking || !phoneNumber}
                className="bg-white text-black hover:bg-gray-200 transition-colors"
              >
                {isChecking ? (
                  <>
                    <Icon name="Loader2" className="mr-2 animate-spin" size={18} />
                    Проверка...
                  </>
                ) : (
                  <>
                    <Icon name="Phone" className="mr-2" size={18} />
                    Проверить
                  </>
                )}
              </Button>
            </div>

            {phoneInfo && !phoneInfo.error && (
              <div className="bg-[#252525] rounded-xl p-6 border border-gray-700 space-y-4 animate-[fadeIn_0.5s_ease-out]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#1a1a1a] rounded-lg p-4 border border-gray-800">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="MapPin" className="text-gray-400" size={20} />
                      <span className="text-gray-400 text-sm">Регион</span>
                    </div>
                    <p className="text-white text-lg font-semibold">{phoneInfo.region}</p>
                  </div>

                  <div className="bg-[#1a1a1a] rounded-lg p-4 border border-gray-800">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="Clock" className="text-gray-400" size={20} />
                      <span className="text-gray-400 text-sm">Часовой пояс</span>
                    </div>
                    <p className="text-white text-lg font-semibold">{phoneInfo.timezone}</p>
                  </div>

                  <div className="bg-[#1a1a1a] rounded-lg p-4 border border-gray-800">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="Signal" className="text-gray-400" size={20} />
                      <span className="text-gray-400 text-sm">Оператор</span>
                    </div>
                    <p className="text-white text-lg font-semibold">{phoneInfo.operator}</p>
                  </div>

                  <div className="bg-[#1a1a1a] rounded-lg p-4 border border-gray-800">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="CheckCircle2" className="text-gray-400" size={20} />
                      <span className="text-gray-400 text-sm">Состояние</span>
                    </div>
                    <p className={`text-lg font-semibold ${phoneInfo.status === 'Обслуживается' ? 'text-green-400' : 'text-red-400'}`}>
                      {phoneInfo.status}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {phoneInfo?.error && (
              <div className="bg-red-900/20 border border-red-800 rounded-xl p-4 flex items-center gap-3">
                <Icon name="AlertCircle" className="text-red-400" size={24} />
                <p className="text-red-400">{phoneInfo.error}</p>
              </div>
            )}

            {!phoneInfo && (
              <div className="bg-[#252525] rounded-xl p-6 border border-gray-700 text-center">
                <Icon name="Phone" className="mx-auto mb-4 text-gray-500" size={48} />
                <p className="text-gray-400">Введите номер телефона для проверки</p>
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