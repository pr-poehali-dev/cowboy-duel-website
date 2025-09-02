import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const screenshots = [
    {
      src: '/img/c85f2039-88bd-4c69-81eb-5f8c61650ff9.jpg',
      title: 'Дуэль на главной площади',
      desc: 'Эпичная дуэль в стиле PS1'
    },
    {
      src: '/img/d6d09849-b048-4e91-914d-4fed18a5cb9c.jpg',
      title: 'Заброшенный салун',
      desc: 'Атмосферная локация'
    },
    {
      src: '/img/9bcf6aa3-e3b5-4e4a-a7c5-46424815c45c.jpg',
      title: 'Церковь в пустыне',
      desc: 'Мистическое место'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-western-dark-brown via-western-saddle to-western-chocolate text-western-dusty">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-western-black/80 backdrop-blur-sm z-50 border-b border-western-sand/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="font-western text-2xl font-bold text-western-dusty animate-western-glow">
            SNUFF & DUST
          </h1>
          <div className="flex space-x-6">
            {['home', 'about', 'screenshots', 'arena'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`font-cowboy text-lg transition-all duration-300 hover:text-western-sand hover:animate-screen-shake ${
                  activeSection === section ? 'text-western-sand border-b border-western-sand' : 'text-western-dusty'
                }`}
              >
                {section === 'home' && 'Главная'}
                {section === 'about' && 'О игре'}
                {section === 'screenshots' && 'Скриншоты'}
                {section === 'arena' && 'Арена дуэлей'}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      {activeSection === 'home' && (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{
              backgroundImage: 'url(/img/9bcf6aa3-e3b5-4e4a-a7c5-46424815c45c.jpg)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-western-black via-transparent to-western-dark-brown/50" />
          
          <div className="relative z-10 text-center space-y-8 animate-dust-fade">
            <h1 className="font-western text-8xl font-bold text-western-dusty drop-shadow-2xl animate-western-glow">
              SNUFF & DUST
            </h1>
            <p className="font-cowboy text-2xl text-western-sand max-w-2xl mx-auto">
              Смертельные дуэли в стиле PS1. Выстрели быстрее или умри в пыли пустыни.
            </p>
            <div className="flex justify-center space-x-6">
              <Button 
                size="lg" 
                className="bg-western-chocolate hover:bg-western-sand text-western-black font-cowboy text-xl px-8 py-4 animate-western-glow hover:animate-screen-shake"
                onClick={() => setActiveSection('arena')}
              >
                <Icon name="Zap" className="mr-2" size={24} />
                Начать дуэль
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-western-sand text-western-sand hover:bg-western-sand hover:text-western-black font-cowboy text-xl px-8 py-4"
                onClick={() => setActiveSection('about')}
              >
                <Icon name="Info" className="mr-2" size={24} />
                Узнать больше
              </Button>
            </div>
          </div>

          {/* Floating dust particles */}
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-western-sand/30 rounded-full animate-dust-fade"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        </section>
      )}

      {/* About Section */}
      {activeSection === 'about' && (
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-western text-6xl text-center mb-12 text-western-dusty animate-western-glow">
              О ИГРЕ
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Card className="bg-western-dark-brown/80 border-western-sand/20 p-8">
                  <h3 className="font-cowboy text-2xl mb-4 text-western-sand">
                    <Icon name="Target" className="inline mr-2" size={24} />
                    Быстрые дуэли
                  </h3>
                  <p className="text-western-dusty">
                    Молниеносные поединки на диком западе. Один выстрел решает всё. 
                    Тренируй реакцию и становись легендарным стрелком.
                  </p>
                </Card>
                
                <Card className="bg-western-dark-brown/80 border-western-sand/20 p-8">
                  <h3 className="font-cowboy text-2xl mb-4 text-western-sand">
                    <Icon name="Gamepad2" className="inline mr-2" size={24} />
                    Стиль PS1
                  </h3>
                  <p className="text-western-dusty">
                    Уникальная low-poly графика с хоррор-элементами. 
                    Атмосферные локации и драматичная подача в духе ретро-игр.
                  </p>
                </Card>

                <Card className="bg-western-dark-brown/80 border-western-sand/20 p-8">
                  <h3 className="font-cowboy text-2xl mb-4 text-western-sand">
                    <Icon name="Skull" className="inline mr-2" size={24} />
                    Тёмная атмосфера
                  </h3>
                  <p className="text-western-dusty">
                    Мрачные истории забытых городов. Каждая дуэль - это последний шанс 
                    на выживание в безжалостном мире.
                  </p>
                </Card>
              </div>
              
              <div className="relative">
                <img 
                  src="/img/c85f2039-88bd-4c69-81eb-5f8c61650ff9.jpg" 
                  alt="Game Screenshot"
                  className="rounded-lg shadow-2xl w-full hover:animate-screen-shake transition-all duration-300"
                />
                <div className="absolute inset-0 bg-western-black/20 rounded-lg" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Screenshots Section */}
      {activeSection === 'screenshots' && (
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="font-western text-6xl text-center mb-12 text-western-dusty animate-western-glow">
              СКРИНШОТЫ
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {screenshots.map((screenshot, index) => (
                <Card key={index} className="bg-western-dark-brown/80 border-western-sand/20 overflow-hidden group hover:animate-screen-shake">
                  <div className="relative">
                    <img 
                      src={screenshot.src} 
                      alt={screenshot.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-western-black/80 via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-cowboy text-xl mb-2 text-western-sand">{screenshot.title}</h3>
                    <p className="text-western-dusty">{screenshot.desc}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Arena Section */}
      {activeSection === 'arena' && (
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="font-western text-6xl mb-12 text-western-dusty animate-western-glow">
              АРЕНА ДУЭЛЕЙ
            </h2>
            
            <div className="max-w-2xl mx-auto space-y-8">
              <Card className="bg-western-dark-brown/80 border-western-sand/20 p-8">
                <Icon name="Clock" className="mx-auto mb-4 text-western-sand" size={48} />
                <h3 className="font-cowboy text-3xl mb-4 text-western-sand">Готов к дуэли?</h3>
                <p className="text-western-dusty mb-6">
                  Встань лицом к лицу с опасными противниками. 
                  Один выстрел, одна жизнь, одна возможность стать легендой.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="text-center">
                    <Icon name="Target" className="mx-auto mb-2 text-western-chocolate" size={32} />
                    <p className="font-cowboy text-lg text-western-sand">Точность</p>
                    <p className="text-western-dusty text-sm">Один выстрел в цель</p>
                  </div>
                  <div className="text-center">
                    <Icon name="Zap" className="mx-auto mb-2 text-western-chocolate" size={32} />
                    <p className="font-cowboy text-lg text-western-sand">Скорость</p>
                    <p className="text-western-dusty text-sm">Быстрая реакция</p>
                  </div>
                </div>

                <Button 
                  size="lg"
                  className="bg-western-chocolate hover:bg-western-sand text-western-black font-cowboy text-2xl px-12 py-6 animate-western-glow hover:animate-screen-shake w-full"
                >
                  <Icon name="Play" className="mr-2" size={24} />
                  ВСТУПИТЬ В БОЙ
                </Button>
                
                <p className="text-western-dusty/60 text-sm mt-4">
                  * Игра находится в разработке
                </p>
              </Card>

              {/* Leaderboard Preview */}
              <Card className="bg-western-dark-brown/80 border-western-sand/20 p-8">
                <h3 className="font-cowboy text-2xl mb-6 text-western-sand">
                  <Icon name="Trophy" className="inline mr-2" size={24} />
                  Зал славы
                </h3>
                <div className="space-y-3">
                  {[
                    { name: 'Quickdraw McGraw', time: '0.187s', rank: 1 },
                    { name: 'Dead Eye Dan', time: '0.203s', rank: 2 },
                    { name: 'Lightning Luke', time: '0.245s', rank: 3 }
                  ].map((player, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-western-sand/20 last:border-0">
                      <div className="flex items-center space-x-3">
                        <span className="font-cowboy text-western-chocolate">#{player.rank}</span>
                        <span className="text-western-dusty">{player.name}</span>
                      </div>
                      <span className="font-cowboy text-western-sand">{player.time}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-western-black/90 py-8 border-t border-western-sand/20">
        <div className="container mx-auto px-4 text-center">
          <p className="font-cowboy text-western-dusty">
            © 2024 Snuff & Dust. Выживает только самый быстрый.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <Icon name="Github" className="text-western-sand hover:text-western-chocolate cursor-pointer transition-colors" size={24} />
            <Icon name="Twitter" className="text-western-sand hover:text-western-chocolate cursor-pointer transition-colors" size={24} />
            <Icon name="Youtube" className="text-western-sand hover:text-western-chocolate cursor-pointer transition-colors" size={24} />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;