import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Plus, RotateCcw, Vibrate, Volume2, VolumeX } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface TasbeehPreset {
  name: string;
  nameAr: string;
  nameUr: string;
  arabic: string;
  transliteration: string;
  target: number;
}

export default function Tasbeeh() {
  const { t, i18n } = useTranslation('common');
  const [count, setCount] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [selectedPreset, setSelectedPreset] = useState<number>(0);

  const presets: TasbeehPreset[] = [
    {
      name: 'SubhanAllah',
      nameAr: 'سبحان الله',
      nameUr: 'سبحان اللہ',
      arabic: 'سُبْحَانَ اللَّهِ',
      transliteration: 'SubhanAllah',
      target: 33
    },
    {
      name: 'Alhamdulillah',
      nameAr: 'الحمد لله',
      nameUr: 'الحمد للہ',
      arabic: 'الْحَمْدُ لِلَّهِ',
      transliteration: 'Alhamdulillah',
      target: 33
    },
    {
      name: 'Allahu Akbar',
      nameAr: 'الله أكبر',
      nameUr: 'اللہ اکبر',
      arabic: 'اللَّهُ أَكْبَرُ',
      transliteration: 'Allahu Akbar',
      target: 34
    },
    {
      name: 'La ilaha illallah',
      nameAr: 'لا إله إلا الله',
      nameUr: 'لا الہ الا اللہ',
      arabic: 'لَا إِلَٰهَ إِلَّا اللَّهُ',
      transliteration: 'La ilaha illallah',
      target: 100
    },
    {
      name: 'Astaghfirullah',
      nameAr: 'أستغفر الله',
      nameUr: 'استغفر اللہ',
      arabic: 'أَسْتَغْفِرُ اللَّهَ',
      transliteration: 'Astaghfirullah',
      target: 100
    },
    {
      name: 'Custom',
      nameAr: 'مخصص',
      nameUr: 'اپنی مرضی',
      arabic: '',
      transliteration: 'Custom Count',
      target: 100
    }
  ];

  const currentPreset = presets[selectedPreset];

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);

    // Play sound
    if (soundEnabled) {
      playClickSound();
    }

    // Vibrate on milestones
    if (newCount % 33 === 0 || newCount === currentPreset.target) {
      if ('vibrate' in navigator) {
        navigator.vibrate(200);
      }
    }

    // Alert on target reached
    if (newCount === currentPreset.target) {
      setTimeout(() => {
        if (confirm(`MashAllah! ${currentPreset.target} complete. Continue counting?`)) {
          // Continue
        } else {
          reset();
        }
      }, 300);
    }
  };

  const playClickSound = () => {
    // Simple beep using Web Audio API
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = 800;
    oscillator.type = 'sine';
    gainNode.gain.value = 0.1;

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.05);
  };

  const reset = () => {
    setCount(0);
  };

  const progress = (count / currentPreset.target) * 100;
  const remaining = Math.max(0, currentPreset.target - count);

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">
          {i18n.language === 'ar' ? 'التسبيح الرقمي' : i18n.language === 'ur' ? 'ڈیجیٹل تسبیح' : 'Digital Tasbeeh'}
        </h1>
        <p className="text-gray-600">
          {i18n.language === 'ar' ? 'عد أذكارك اليومية' : i18n.language === 'ur' ? 'اپنے روزانہ اذکار گنیں' : 'Count your daily dhikr'}
        </p>
      </div>

      {/* Preset Selection */}
      <Card className="p-4">
        <h2 className="text-sm font-semibold text-gray-700 mb-3">
          {i18n.language === 'ar' ? 'اختر الذكر' : i18n.language === 'ur' ? 'ذکر منتخب کریں' : 'Select Dhikr'}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {presets.map((preset, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedPreset(index);
                reset();
              }}
              className={`p-3 rounded-lg border-2 transition-all text-center ${
                selectedPreset === index
                  ? 'bg-indigo-50 border-indigo-500 shadow-md'
                  : 'bg-white border-gray-200 hover:border-indigo-300'
              }`}
            >
              <div className="text-sm font-semibold text-gray-900">
                {i18n.language === 'ar' ? preset.nameAr : i18n.language === 'ur' ? preset.nameUr : preset.name}
              </div>
              {preset.arabic && (
                <div className="text-lg text-gray-700 font-arabic mt-1">{preset.arabic}</div>
              )}
              <div className="text-xs text-gray-500 mt-1">× {preset.target}</div>
            </button>
          ))}
        </div>
      </Card>

      {/* Main Counter */}
      <Card className="p-8 bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-200">
        <div className="text-center space-y-6">
          {/* Current Dhikr */}
          {currentPreset.arabic && (
            <div>
              <p className="text-4xl md:text-5xl font-arabic text-gray-800 mb-2">
                {currentPreset.arabic}
              </p>
              <p className="text-gray-600 italic">{currentPreset.transliteration}</p>
            </div>
          )}

          {/* Count Display */}
          <div>
            <div className="text-8xl md:text-9xl font-bold text-indigo-700 mb-2">
              {count}
            </div>
            <div className="text-sm text-gray-600">
              {i18n.language === 'ar' ? 'الهدف' : i18n.language === 'ur' ? 'ہدف' : 'Target'}: {currentPreset.target} | {' '}
              {i18n.language === 'ar' ? 'الباقي' : i18n.language === 'ur' ? 'باقی' : 'Remaining'}: {remaining}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-indigo-500 to-purple-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>

          {/* Main Counter Button */}
          <button
            onClick={increment}
            className="w-64 h-64 mx-auto rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 active:scale-95 transition-all shadow-2xl flex items-center justify-center group"
          >
            <div className="text-white">
              <Plus className="w-20 h-20 group-active:scale-110 transition-transform" />
            </div>
          </button>

          <p className="text-sm text-gray-600">
            {i18n.language === 'ar' ? 'اضغط أو انقر للعد' : i18n.language === 'ur' ? 'گننے کے لیے ٹیپ کریں' : 'Tap or click to count'}
          </p>
        </div>
      </Card>

      {/* Controls */}
      <div className="grid grid-cols-2 gap-4">
        <Button
          onClick={reset}
          variant="outline"
          size="lg"
          className="w-full"
        >
          <RotateCcw className="w-5 h-5 mr-2" />
          {i18n.language === 'ar' ? 'إعادة تعيين' : i18n.language === 'ur' ? 'دوبارہ شروع کریں' : 'Reset'}
        </Button>

        <Button
          onClick={() => setSoundEnabled(!soundEnabled)}
          variant="outline"
          size="lg"
          className="w-full"
        >
          {soundEnabled ? (
            <>
              <Volume2 className="w-5 h-5 mr-2" />
              {i18n.language === 'ar' ? 'صوت مفعل' : i18n.language === 'ur' ? 'آواز آن' : 'Sound On'}
            </>
          ) : (
            <>
              <VolumeX className="w-5 h-5 mr-2" />
              {i18n.language === 'ar' ? 'صوت معطل' : i18n.language === 'ur' ? 'آواز بند' : 'Sound Off'}
            </>
          )}
        </Button>
      </div>

      {/* Milestones */}
      {count > 0 && (
        <Card className="p-4 bg-green-50 border-green-200">
          <h3 className="text-sm font-semibold text-green-900 mb-2">
            {i18n.language === 'ar' ? 'إنجازات' : i18n.language === 'ur' ? 'کامیابیاں' : 'Milestones'}
          </h3>
          <div className="flex flex-wrap gap-2">
            {[33, 66, 99, 100, 200, 300, 500, 1000].map((milestone) => (
              <span
                key={milestone}
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  count >= milestone
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-400 border border-gray-200'
                }`}
              >
                {milestone}
              </span>
            ))}
          </div>
        </Card>
      )}

      {/* Tips */}
      <Card className="p-4 bg-blue-50 border-blue-200">
        <h3 className="text-sm font-semibold text-blue-900 mb-2">
          {i18n.language === 'ar' ? 'نصائح' : i18n.language === 'ur' ? 'مشورے' : 'Tips'}
        </h3>
        <ul className="text-xs text-blue-800 space-y-1 list-disc list-inside">
          <li>
            {i18n.language === 'ar'
              ? 'بعد صلاة الفريضة، اذكر الله ٣٣ مرة لكل ذكر'
              : i18n.language === 'ur'
              ? 'فرض نماز کے بعد ہر ذکر ۳۳ مرتبہ پڑھیں'
              : 'After each fard prayer, recite each dhikr 33 times'}
          </li>
          <li>
            {i18n.language === 'ar'
              ? 'استغفر الله ١٠٠ مرة يوميا'
              : i18n.language === 'ur'
              ? 'روزانہ ۱۰۰ مرتبہ استغفار کریں'
              : 'Seek forgiveness (Astaghfirullah) 100 times daily'}
          </li>
          <li>
            {i18n.language === 'ar'
              ? 'صلِّ على النبي ﷺ ١٠٠ مرة يوميا'
              : i18n.language === 'ur'
              ? 'روزانہ ۱۰۰ مرتبہ درود شریف پڑھیں'
              : 'Send blessings upon the Prophet ﷺ 100 times daily'}
          </li>
        </ul>
      </Card>

      {/* Hadith */}
      <Card className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
        <blockquote className="text-sm italic text-gray-800 text-center">
          {i18n.language === 'ar'
            ? '"من قال: سبحان الله وبحمده، في يوم مائة مرة، حُطت خطاياه وإن كانت مثل زبد البحر"'
            : i18n.language === 'ur'
            ? '"جس نے دن میں سو مرتبہ سبحان اللہ وبحمدہ کہا، اس کے گناہ معاف کر دیے جائیں گے خواہ وہ سمندر کی جھاگ کے برابر ہی کیوں نہ ہوں"'
            : '"Whoever says SubhanAllah wa bihamdihi 100 times a day, his sins will be forgiven even if they are like the foam of the sea"'}
          <footer className="text-gray-600 mt-2 not-italic text-xs">
            - {i18n.language === 'ar' ? 'صحيح البخاري' : i18n.language === 'ur' ? 'صحیح بخاری' : 'Sahih Bukhari'}
          </footer>
        </blockquote>
      </Card>
    </div>
  );
}
