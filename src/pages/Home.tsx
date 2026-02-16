import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Calendar, Clock, BookOpen, Heart, CheckSquare, Moon, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Home() {
  const { t } = useTranslation();

  const features = [
    {
      icon: Clock,
      title: 'Prayer Times',
      description: 'Get accurate prayer times for your location',
      link: '/prayer-times',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: BookOpen,
      title: 'Education',
      description: 'Learn about Ramadan, fasting rules, and Islamic knowledge',
      link: '/education',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Heart,
      title: 'Spiritual Tracker',
      description: 'Track your Quran reading, duas, and good deeds',
      link: '/spiritual',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: CheckSquare,
      title: 'Daily Checklist',
      description: 'Stay organized with your daily Ramadan tasks',
      link: '/checklist',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4 py-8">
        <div className="flex justify-center items-center gap-3 mb-4">
          <Moon className="w-12 h-12 text-indigo-600" />
          <Star className="w-8 h-8 text-yellow-500" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Ramadan Mubarak
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Prepare for the blessed month of Ramadan with prayer times, spiritual tracking,
          and educational resources
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <Button asChild size="lg">
            <Link to="/prayer-times">
              <Clock className="w-5 h-5 mr-2" />
              Prayer Times
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/education">
              <BookOpen className="w-5 h-5 mr-2" />
              Learn More
            </Link>
          </Button>
        </div>
      </div>

      {/* Ramadan Info Card */}
      <Card className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200">
        <div className="flex items-start gap-4">
          <Calendar className="w-8 h-8 text-indigo-600 flex-shrink-0" />
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              About Ramadan
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Ramadan is the ninth month of the Islamic lunar calendar and is considered
              the holiest month for Muslims worldwide. During this month, Muslims fast from
              dawn until sunset, abstaining from food, drink, and other physical needs.
              This is a time for spiritual reflection, increased devotion, worship, and charity.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              The month of Ramadan is when the Quran was revealed to Prophet Muhammad (peace be upon him).
              Muslims believe that during this month, the gates of heaven are opened,
              and the gates of hell are closed, making it an ideal time for seeking forgiveness
              and drawing closer to Allah.
            </p>
          </div>
        </div>
      </Card>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <Link key={feature.link} to={feature.link} className="group">
              <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${feature.bgColor}`}>
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>

      {/* Benefits Section */}
      <Card className="p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Benefits of Fasting
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Spiritual Growth</h3>
            <p className="text-gray-600 text-sm">
              Develop self-discipline, patience, and empathy for those less fortunate
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Physical Health</h3>
            <p className="text-gray-600 text-sm">
              Detoxification, improved metabolism, and better eating habits
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Community</h3>
            <p className="text-gray-600 text-sm">
              Strengthen bonds through shared experiences and group prayers
            </p>
          </div>
        </div>
      </Card>

      {/* Footer Quote */}
      <div className="text-center py-8">
        <blockquote className="text-lg italic text-gray-700 max-w-2xl mx-auto">
          "O you who have believed, decreed upon you is fasting as it was decreed
          upon those before you that you may become righteous"
          <footer className="text-gray-600 mt-2 not-italic">
            - Quran 2:183
          </footer>
        </blockquote>
      </div>
    </div>
  );
}
