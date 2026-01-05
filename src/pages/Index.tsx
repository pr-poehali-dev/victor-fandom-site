import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [votes, setVotes] = useState({
    meme1: 245,
    meme2: 189,
    meme3: 312,
    meme4: 156,
  });
  const [userVotes, setUserVotes] = useState<Record<string, boolean>>({});

  const handleVote = (memeId: string) => {
    if (userVotes[memeId]) {
      setVotes(prev => ({ ...prev, [memeId]: prev[memeId] - 1 }));
      setUserVotes(prev => ({ ...prev, [memeId]: false }));
    } else {
      setVotes(prev => ({ ...prev, [memeId]: prev[memeId] + 1 }));
      setUserVotes(prev => ({ ...prev, [memeId]: true }));
    }
  };

  const sections = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'about', label: 'О герое', icon: 'User' },
    { id: 'gallery', label: 'Галерея', icon: 'Image' },
    { id: 'memes', label: 'Мемы', icon: 'Smile' },
    { id: 'community', label: 'Сообщество', icon: 'Users' },
    { id: 'contacts', label: 'Контакты', icon: 'Mail' },
  ];

  const memes = [
    { id: 'meme1', title: 'Когда нашёл баг в проде', image: '/placeholder.svg' },
    { id: 'meme2', title: 'Пятница 17:59', image: '/placeholder.svg' },
    { id: 'meme3', title: 'Code review be like', image: '/placeholder.svg' },
    { id: 'meme4', title: 'Deploy на продакшн', image: '/placeholder.svg' },
  ];

  const stats = [
    { label: 'Участников', value: '12,453', icon: 'Users', color: 'text-purple-400' },
    { label: 'Мемов', value: '3,891', icon: 'Smile', color: 'text-pink-400' },
    { label: 'Голосов', value: '48,392', icon: 'ThumbsUp', color: 'text-orange-400' },
    { label: 'Онлайн', value: '1,234', icon: 'Activity', color: 'text-blue-400' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center animate-pulse-glow">
                <Icon name="Crown" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gradient">Безденежный В.С.</h1>
                <p className="text-sm text-muted-foreground">Официальный фандом</p>
              </div>
            </div>
            <div className="hidden md:flex gap-2">
              {sections.map((section) => (
                <Button
                  key={section.id}
                  variant={activeSection === section.id ? 'default' : 'ghost'}
                  onClick={() => setActiveSection(section.id)}
                  className={activeSection === section.id ? 'gradient-primary' : ''}
                >
                  <Icon name={section.icon as any} size={18} className="mr-2" />
                  {section.label}
                </Button>
              ))}
            </div>
            <Button variant="outline" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-12">
        {activeSection === 'home' && (
          <div className="container mx-auto px-4 space-y-12 animate-fade-in">
            <section className="relative overflow-hidden rounded-3xl gradient-primary p-12 text-center">
              <div className="relative z-10">
                <Badge className="mb-4 bg-white/20 text-white border-white/30">
                  🚀 Президент фандома
                </Badge>
                <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                  Безденежный<br />Виктор Сергеевич
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Легендарная личность, вдохновляющая тысячи поклонников по всему миру
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90">
                    <Icon name="Heart" size={20} className="mr-2" />
                    Присоединиться
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <Icon name="ArrowRight" size={20} className="mr-2" />
                    Узнать больше
                  </Button>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
            </section>

            <section className="grid md:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <Card key={idx} className="glass-card hover-scale cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center ${stat.color}`}>
                        <Icon name={stat.icon as any} size={32} />
                      </div>
                    </div>
                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </section>
          </div>
        )}

        {activeSection === 'about' && (
          <div className="container mx-auto px-4 space-y-8 animate-fade-in">
            <Card className="glass-card overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center">
                    <Icon name="Star" size={40} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold text-gradient mb-2">О герое фандома</h2>
                    <p className="text-muted-foreground">Биография и достижения</p>
                  </div>
                </div>
                
                <div className="space-y-6 text-lg">
                  <p className="leading-relaxed">
                    <strong className="text-primary">Безденежный Виктор Сергеевич</strong> — харизматичная личность, 
                    ставшая символом и вдохновением для тысяч людей. Его уникальный стиль, неординарный подход 
                    к жизни и яркая индивидуальность привлекли внимание огромного сообщества единомышленников.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 my-8">
                    <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20">
                      <Icon name="Award" size={32} className="text-purple-400 mb-4" />
                      <h3 className="text-xl font-bold mb-2">Достижения</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Основатель движения</li>
                        <li>• 12K+ последователей</li>
                        <li>• 500+ публикаций</li>
                      </ul>
                    </div>
                    <div className="p-6 rounded-xl bg-gradient-to-br from-pink-500/10 to-transparent border border-pink-500/20">
                      <Icon name="Sparkles" size={32} className="text-pink-400 mb-4" />
                      <h3 className="text-xl font-bold mb-2">Особенности</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Уникальный стиль</li>
                        <li>• Активная позиция</li>
                        <li>• Вдохновляет людей</li>
                      </ul>
                    </div>
                  </div>

                  <p className="leading-relaxed">
                    Виктор Сергеевич известен своими яркими выступлениями, оригинальными идеями и способностью 
                    объединять людей вокруг общих ценностей. Его фандом — это не просто сообщество, 
                    это целое движение единомышленников.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'gallery' && (
          <div className="container mx-auto px-4 animate-fade-in">
            <div className="mb-8 text-center">
              <h2 className="text-4xl font-bold text-gradient mb-4">Галерея</h2>
              <p className="text-muted-foreground">Фотографии президента фандома</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Card key={item} className="glass-card overflow-hidden hover-scale cursor-pointer group">
                  <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-pink-500/20 relative">
                    <img 
                      src="/placeholder.svg" 
                      alt={`Фото ${item}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <div className="text-white">
                        <p className="font-bold">Фотография #{item}</p>
                        <p className="text-sm text-white/80">Нажмите для просмотра</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'memes' && (
          <div className="container mx-auto px-4 animate-fade-in">
            <div className="mb-8 text-center">
              <h2 className="text-4xl font-bold text-gradient mb-4">Мемы фандома</h2>
              <p className="text-muted-foreground">Голосуй за лучшие мемы!</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {memes.map((meme) => (
                <Card key={meme.id} className="glass-card overflow-hidden hover-scale">
                  <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-pink-500/20 relative">
                    <img 
                      src={meme.image} 
                      alt={meme.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">{meme.title}</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Icon name="ThumbsUp" size={20} className="text-primary" />
                        <span className="text-2xl font-bold">{votes[meme.id]}</span>
                        <span className="text-muted-foreground">голосов</span>
                      </div>
                      <Button
                        onClick={() => handleVote(meme.id)}
                        variant={userVotes[meme.id] ? 'default' : 'outline'}
                        className={userVotes[meme.id] ? 'gradient-primary' : ''}
                      >
                        <Icon name="Heart" size={18} className="mr-2" />
                        {userVotes[meme.id] ? 'Voted!' : 'Vote'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'community' && (
          <div className="container mx-auto px-4 space-y-8 animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gradient mb-4">Сообщество</h2>
              <p className="text-muted-foreground">Статистика и активность фандома</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="glass-card col-span-full md:col-span-2">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Icon name="TrendingUp" size={28} className="text-primary" />
                    Рост сообщества
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-muted-foreground">Новых участников</span>
                        <span className="font-bold">+234 за неделю</span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <div className="h-full gradient-primary w-[78%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-muted-foreground">Активность</span>
                        <span className="font-bold">+456 действий</span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <div className="h-full gradient-accent w-[92%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-muted-foreground">Новых мемов</span>
                        <span className="font-bold">+89 за неделю</span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 w-[65%]"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Icon name="Trophy" size={28} className="text-yellow-400" />
                    Топ участник
                  </h3>
                  <div className="text-center">
                    <div className="w-24 h-24 gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
                      🏆
                    </div>
                    <div className="font-bold text-xl mb-2">@supermemer2024</div>
                    <Badge className="gradient-primary border-0">+892 votes</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="glass-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Icon name="MessageCircle" size={28} className="text-primary" />
                  Последняя активность
                </h3>
                <div className="space-y-4">
                  {[
                    { user: '@ivan_2024', action: 'проголосовал за мем "Когда нашёл баг в проде"', time: '2 мин назад' },
                    { user: '@maria_dev', action: 'добавила новый мем', time: '15 мин назад' },
                    { user: '@alex_coder', action: 'присоединился к фандому', time: '1 час назад' },
                    { user: '@kate_design', action: 'проголосовала за 3 мема', time: '2 часа назад' },
                  ].map((activity, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center font-bold text-white">
                        {activity.user[1].toUpperCase()}
                      </div>
                      <div className="flex-1">
                        <p>
                          <span className="font-bold text-primary">{activity.user}</span>{' '}
                          <span className="text-muted-foreground">{activity.action}</span>
                        </p>
                        <p className="text-sm text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'contacts' && (
          <div className="container mx-auto px-4 max-w-2xl animate-fade-in">
            <Card className="glass-card">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-4xl font-bold text-gradient mb-4">Контакты</h2>
                  <p className="text-muted-foreground">Свяжитесь с администрацией фандома</p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-6 rounded-xl bg-gradient-to-r from-purple-500/10 to-transparent border border-purple-500/20 hover-scale cursor-pointer">
                    <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center">
                      <Icon name="Mail" size={28} className="text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-lg">Email</div>
                      <div className="text-muted-foreground">admin@fandom.ru</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-6 rounded-xl bg-gradient-to-r from-pink-500/10 to-transparent border border-pink-500/20 hover-scale cursor-pointer">
                    <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center">
                      <Icon name="MessageCircle" size={28} className="text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-lg">Telegram</div>
                      <div className="text-muted-foreground">@fandom_chat</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-6 rounded-xl bg-gradient-to-r from-blue-500/10 to-transparent border border-blue-500/20 hover-scale cursor-pointer">
                    <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center">
                      <Icon name="Send" size={28} className="text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-lg">VK</div>
                      <div className="text-muted-foreground">vk.com/fandom</div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-border">
                    <Button className="w-full gradient-primary" size="lg">
                      <Icon name="Heart" size={20} className="mr-2" />
                      Присоединиться к фандому
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      <footer className="bg-card border-t border-border py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center">
              <Icon name="Crown" size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold text-gradient">Безденежный В.С. Фандом</span>
          </div>
          <p className="text-muted-foreground mb-4">
            Официальное сообщество поклонников • 2024
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="ghost" size="icon" className="hover-scale">
              <Icon name="Heart" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="hover-scale">
              <Icon name="Share2" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="hover-scale">
              <Icon name="Star" size={20} />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
