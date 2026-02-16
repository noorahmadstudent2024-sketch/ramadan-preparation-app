import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

export default function Header() {
  const { t } = useTranslation('common');
  const location = useLocation();
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const initialTheme = savedTheme || 'light';
    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const navItems = [
    { path: '/', label: t('navigation.home') },
    { path: '/prayer-times', label: t('navigation.prayerTimes') },
    { path: '/tasbeeh', label: t('navigation.tasbeeh') },
    { path: '/education', label: t('navigation.education') },
    { path: '/spiritual', label: t('navigation.spiritual') },
    { path: '/checklist', label: t('navigation.checklist') },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-100/50 bg-white/80 backdrop-blur-xl shadow-luxury supports-[backdrop-filter]:bg-white/70 transition-all duration-300">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center shadow-lg group-hover:shadow-glow-purple transition-all duration-300 group-hover:scale-110">
              <span className="text-white text-xl animate-float">🌙</span>
            </div>
            <span className="font-bold text-lg hidden sm:inline-block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              {t('appName')}
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={t('theme.toggle')}
          >
            {theme === 'light' ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>

          <LanguageSwitcher />
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav className="md:hidden border-t border-purple-100/50 bg-white/50 backdrop-blur-md">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-wrap gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
