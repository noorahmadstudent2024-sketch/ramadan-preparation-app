import { useState } from 'react';
import { BookOpen, Heart, Star, Plus, Minus, RotateCcw } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface TrackerState {
  quranPages: number;
  quranJuz: number;
  prayersMissed: number;
  taraweehRakats: number;
  tahajjudRakats: number;
  sadaqah: number;
  dhikr: number;
  dua: number;
}

export default function Spiritual() {
  const [tracker, setTracker] = useState<TrackerState>({
    quranPages: 0,
    quranJuz: 0,
    prayersMissed: 0,
    taraweehRakats: 0,
    tahajjudRakats: 0,
    sadaqah: 0,
    dhikr: 0,
    dua: 0
  });

  const updateTracker = (key: keyof TrackerState, change: number) => {
    setTracker(prev => ({
      ...prev,
      [key]: Math.max(0, prev[key] + change)
    }));
  };

  const resetTracker = () => {
    if (confirm('Are you sure you want to reset all counters?')) {
      setTracker({
        quranPages: 0,
        quranJuz: 0,
        prayersMissed: 0,
        taraweehRakats: 0,
        tahajjudRakats: 0,
        sadaqah: 0,
        dhikr: 0,
        dua: 0
      });
    }
  };

  const quranProgress = (tracker.quranPages / 604) * 100; // 604 pages in Quran
  const juzProgress = (tracker.quranJuz / 30) * 100;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">Spiritual Tracker</h1>
        <p className="text-gray-600">Track your worship and good deeds this Ramadan</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
          <div className="text-center">
            <BookOpen className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-green-700">{tracker.quranJuz}/30</p>
            <p className="text-xs text-green-600">Juz Completed</p>
          </div>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
          <div className="text-center">
            <Star className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-blue-700">{tracker.taraweehRakats}</p>
            <p className="text-xs text-blue-600">Taraweeh Rakats</p>
          </div>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
          <div className="text-center">
            <Heart className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-purple-700">{tracker.sadaqah}</p>
            <p className="text-xs text-purple-600">Times Given Sadaqah</p>
          </div>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200">
          <div className="text-center">
            <Star className="w-8 h-8 text-orange-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-orange-700">{tracker.tahajjudRakats}</p>
            <p className="text-xs text-orange-600">Tahajjud Rakats</p>
          </div>
        </Card>
      </div>

      {/* Quran Reading Tracker */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-green-600" />
          Quran Reading
        </h2>

        <div className="space-y-4">
          {/* Pages */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">Pages Read</span>
              <span className="text-sm font-semibold text-gray-900">{tracker.quranPages}/604</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
              <div
                className="bg-green-600 h-2 rounded-full transition-all"
                style={{ width: `${Math.min(quranProgress, 100)}%` }}
              />
            </div>
            <div className="flex gap-2">
              <Button
                onClick={() => updateTracker('quranPages', 1)}
                size="sm"
                variant="outline"
                className="flex-1"
              >
                <Plus className="w-4 h-4 mr-1" /> 1 Page
              </Button>
              <Button
                onClick={() => updateTracker('quranPages', 10)}
                size="sm"
                variant="outline"
                className="flex-1"
              >
                <Plus className="w-4 h-4 mr-1" /> 10 Pages
              </Button>
              <Button
                onClick={() => updateTracker('quranPages', -1)}
                size="sm"
                variant="outline"
              >
                <Minus className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Juz */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">Juz Completed</span>
              <span className="text-sm font-semibold text-gray-900">{tracker.quranJuz}/30</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
              <div
                className="bg-emerald-600 h-2 rounded-full transition-all"
                style={{ width: `${Math.min(juzProgress, 100)}%` }}
              />
            </div>
            <div className="flex gap-2">
              <Button
                onClick={() => updateTracker('quranJuz', 1)}
                size="sm"
                variant="outline"
                className="flex-1"
              >
                <Plus className="w-4 h-4 mr-1" /> 1 Juz
              </Button>
              <Button
                onClick={() => updateTracker('quranJuz', -1)}
                size="sm"
                variant="outline"
              >
                <Minus className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {tracker.quranJuz === 30 && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <p className="text-green-800 font-semibold">
                Alhamdulillah! You've completed the entire Quran!
              </p>
            </div>
          )}
        </div>
      </Card>

      {/* Prayer Tracker */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Star className="w-6 h-6 text-blue-600" />
          Prayer Tracker
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Taraweeh */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Taraweeh Rakats</label>
            <div className="flex items-center gap-2">
              <Button
                onClick={() => updateTracker('taraweehRakats', -2)}
                size="sm"
                variant="outline"
              >
                <Minus className="w-4 h-4" />
              </Button>
              <div className="flex-1 text-center p-2 bg-blue-50 rounded-lg">
                <span className="text-2xl font-bold text-blue-700">{tracker.taraweehRakats}</span>
              </div>
              <Button
                onClick={() => updateTracker('taraweehRakats', 2)}
                size="sm"
                variant="outline"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex gap-2">
              <Button
                onClick={() => updateTracker('taraweehRakats', 8)}
                size="sm"
                variant="outline"
                className="flex-1 text-xs"
              >
                + 8 Rakats
              </Button>
              <Button
                onClick={() => updateTracker('taraweehRakats', 20)}
                size="sm"
                variant="outline"
                className="flex-1 text-xs"
              >
                + 20 Rakats
              </Button>
            </div>
          </div>

          {/* Tahajjud */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Tahajjud Rakats</label>
            <div className="flex items-center gap-2">
              <Button
                onClick={() => updateTracker('tahajjudRakats', -2)}
                size="sm"
                variant="outline"
              >
                <Minus className="w-4 h-4" />
              </Button>
              <div className="flex-1 text-center p-2 bg-orange-50 rounded-lg">
                <span className="text-2xl font-bold text-orange-700">{tracker.tahajjudRakats}</span>
              </div>
              <Button
                onClick={() => updateTracker('tahajjudRakats', 2)}
                size="sm"
                variant="outline"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex gap-2">
              <Button
                onClick={() => updateTracker('tahajjudRakats', 4)}
                size="sm"
                variant="outline"
                className="flex-1 text-xs"
              >
                + 4 Rakats
              </Button>
              <Button
                onClick={() => updateTracker('tahajjudRakats', 8)}
                size="sm"
                variant="outline"
                className="flex-1 text-xs"
              >
                + 8 Rakats
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Good Deeds Tracker */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Heart className="w-6 h-6 text-purple-600" />
          Good Deeds
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          {/* Sadaqah */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Sadaqah Given</label>
            <div className="flex items-center gap-2">
              <Button
                onClick={() => updateTracker('sadaqah', -1)}
                size="sm"
                variant="outline"
              >
                <Minus className="w-4 h-4" />
              </Button>
              <div className="flex-1 text-center p-2 bg-purple-50 rounded-lg">
                <span className="text-2xl font-bold text-purple-700">{tracker.sadaqah}</span>
              </div>
              <Button
                onClick={() => updateTracker('sadaqah', 1)}
                size="sm"
                variant="outline"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Dhikr */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Dhikr Sessions</label>
            <div className="flex items-center gap-2">
              <Button
                onClick={() => updateTracker('dhikr', -1)}
                size="sm"
                variant="outline"
              >
                <Minus className="w-4 h-4" />
              </Button>
              <div className="flex-1 text-center p-2 bg-teal-50 rounded-lg">
                <span className="text-2xl font-bold text-teal-700">{tracker.dhikr}</span>
              </div>
              <Button
                onClick={() => updateTracker('dhikr', 1)}
                size="sm"
                variant="outline"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Dua */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Special Duas</label>
            <div className="flex items-center gap-2">
              <Button
                onClick={() => updateTracker('dua', -1)}
                size="sm"
                variant="outline"
              >
                <Minus className="w-4 h-4" />
              </Button>
              <div className="flex-1 text-center p-2 bg-pink-50 rounded-lg">
                <span className="text-2xl font-bold text-pink-700">{tracker.dua}</span>
              </div>
              <Button
                onClick={() => updateTracker('dua', 1)}
                size="sm"
                variant="outline"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Motivation Section */}
      <Card className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Daily Reminder</h2>
        <p className="text-gray-700 italic mb-2">
          "The best of deeds are those done regularly, even if they are small."
        </p>
        <p className="text-sm text-gray-600">- Prophet Muhammad (peace be upon him)</p>
      </Card>

      {/* Reset Button */}
      <div className="flex justify-center">
        <Button
          onClick={resetTracker}
          variant="outline"
          className="text-red-600 border-red-300 hover:bg-red-50"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Reset All Counters
        </Button>
      </div>

      {/* Info Note */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
        <p className="text-sm text-blue-800">
          This tracker helps you stay motivated. Remember, Allah knows all your efforts,
          recorded or not. Keep striving for excellence!
        </p>
      </div>
    </div>
  );
}
