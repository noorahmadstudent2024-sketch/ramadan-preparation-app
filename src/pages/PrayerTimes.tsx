import { useState, useEffect } from 'react';
import { Clock, MapPin, Calendar, Sun, Sunrise, Sunset, Moon } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';

interface PrayerTime {
  name: string;
  time: string;
  icon: any;
  arabicName: string;
}

export default function PrayerTimes() {
  const [location, setLocation] = useState<string>('Getting location...');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Get user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation(`${position.coords.latitude.toFixed(2)}, ${position.coords.longitude.toFixed(2)}`);
        },
        () => {
          setLocation('Location not available');
        }
      );
    }

    return () => clearInterval(timer);
  }, []);

  // Example prayer times (these should be calculated based on location)
  const prayerTimes: PrayerTime[] = [
    {
      name: 'Fajr',
      arabicName: 'الفجر',
      time: '05:30 AM',
      icon: Sunrise
    },
    {
      name: 'Dhuhr',
      arabicName: 'الظهر',
      time: '01:15 PM',
      icon: Sun
    },
    {
      name: 'Asr',
      arabicName: 'العصر',
      time: '04:45 PM',
      icon: Sun
    },
    {
      name: 'Maghrib',
      arabicName: 'المغرب',
      time: '07:20 PM',
      icon: Sunset
    },
    {
      name: 'Isha',
      arabicName: 'العشاء',
      time: '08:45 PM',
      icon: Moon
    }
  ];

  const getCurrentPrayer = () => {
    const now = currentTime.getHours() * 60 + currentTime.getMinutes();
    const times = [
      { name: 'Fajr', minutes: 5 * 60 + 30 },
      { name: 'Dhuhr', minutes: 13 * 60 + 15 },
      { name: 'Asr', minutes: 16 * 60 + 45 },
      { name: 'Maghrib', minutes: 19 * 60 + 20 },
      { name: 'Isha', minutes: 20 * 60 + 45 }
    ];

    for (let i = 0; i < times.length; i++) {
      if (now < times[i].minutes) {
        return i === 0 ? times[times.length - 1].name : times[i - 1].name;
      }
    }
    return times[times.length - 1].name;
  };

  const currentPrayer = getCurrentPrayer();

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">Prayer Times</h1>
        <p className="text-gray-600">Stay connected with your daily prayers</p>
      </div>

      {/* Current Time & Location Card */}
      <Card className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <Clock className="w-8 h-8 text-blue-600" />
            <div>
              <div className="text-3xl font-bold text-gray-900">
                {format(currentTime, 'hh:mm:ss a')}
              </div>
              <div className="text-sm text-gray-600">
                {format(currentTime, 'EEEE, MMMM d, yyyy')}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <MapPin className="w-5 h-5" />
            <span className="text-sm">{location}</span>
          </div>
        </div>
      </Card>

      {/* Current Prayer */}
      <Card className="p-4 bg-green-50 border-green-200">
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-1">Current Prayer Time</p>
          <p className="text-2xl font-bold text-green-700">{currentPrayer}</p>
        </div>
      </Card>

      {/* Prayer Times Grid */}
      <div className="grid gap-4">
        {prayerTimes.map((prayer) => {
          const Icon = prayer.icon;
          const isCurrentPrayer = prayer.name === currentPrayer;

          return (
            <Card
              key={prayer.name}
              className={`p-5 transition-all ${
                isCurrentPrayer
                  ? 'bg-indigo-50 border-indigo-300 shadow-md'
                  : 'hover:shadow-md'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-full ${
                    isCurrentPrayer ? 'bg-indigo-100' : 'bg-gray-100'
                  }`}>
                    <Icon className={`w-6 h-6 ${
                      isCurrentPrayer ? 'text-indigo-600' : 'text-gray-600'
                    }`} />
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold ${
                      isCurrentPrayer ? 'text-indigo-900' : 'text-gray-900'
                    }`}>
                      {prayer.name}
                    </h3>
                    <p className="text-2xl font-arabic text-gray-600">
                      {prayer.arabicName}
                    </p>
                  </div>
                </div>
                <div className={`text-2xl font-bold ${
                  isCurrentPrayer ? 'text-indigo-700' : 'text-gray-700'
                }`}>
                  {prayer.time}
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Ramadan Suhoor & Iftar Times */}
      <Card className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Moon className="w-6 h-6 text-purple-600" />
          Ramadan Timing
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Suhoor Ends (Fajr)</p>
            <p className="text-2xl font-bold text-purple-700">05:30 AM</p>
            <p className="text-xs text-gray-500 mt-1">Stop eating/drinking</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Iftar (Maghrib)</p>
            <p className="text-2xl font-bold text-orange-700">07:20 PM</p>
            <p className="text-xs text-gray-500 mt-1">Break your fast</p>
          </div>
        </div>
      </Card>

      {/* Info Notice */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-800">
          <strong>Note:</strong> These are example prayer times. For accurate times based on your exact location,
          please enable location services or manually set your city. Prayer times may vary slightly
          based on calculation methods and local conventions.
        </p>
      </div>

      {/* Quick Links */}
      <div className="grid md:grid-cols-2 gap-4">
        <Button variant="outline" className="w-full">
          <Calendar className="w-4 h-4 mr-2" />
          Monthly Prayer Calendar
        </Button>
        <Button variant="outline" className="w-full">
          <MapPin className="w-4 h-4 mr-2" />
          Change Location
        </Button>
      </div>
    </div>
  );
}
