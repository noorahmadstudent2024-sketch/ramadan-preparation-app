import { useState } from 'react';
import { BookOpen, Info, Heart, Star, CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface Topic {
  id: string;
  title: string;
  icon: any;
  content: React.ReactNode;
}

export default function Education() {
  const [selectedTopic, setSelectedTopic] = useState<string>('basics');

  const topics: Topic[] = [
    {
      id: 'basics',
      title: 'Ramadan Basics',
      icon: BookOpen,
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900">What is Ramadan?</h3>
          <p className="text-gray-700 leading-relaxed">
            Ramadan is the ninth month of the Islamic lunar calendar, during which Muslims
            worldwide observe a month of fasting from dawn to sunset. It commemorates the
            first revelation of the Quran to Prophet Muhammad (peace be upon him).
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6">Why Do Muslims Fast?</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>To obey Allah's command and fulfill one of the Five Pillars of Islam</li>
            <li>To develop self-discipline and patience (Sabr)</li>
            <li>To understand the suffering of those who are less fortunate</li>
            <li>To purify the soul and develop God-consciousness (Taqwa)</li>
            <li>To seek forgiveness for past sins</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
            <p className="text-blue-900 font-semibold">
              "O you who have believed, decreed upon you is fasting as it was decreed upon
              those before you that you may become righteous." (Quran 2:183)
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'fasting-rules',
      title: 'Fasting Rules',
      icon: Info,
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900">Who Must Fast?</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Every adult Muslim (reached puberty)</li>
            <li>Must be mentally and physically able</li>
            <li>Must be in a state of ritual purity (not menstruating or in postpartum)</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6">Who is Exempt?</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Children who have not reached puberty</li>
            <li>The elderly who cannot physically fast</li>
            <li>Those who are ill or traveling</li>
            <li>Pregnant or nursing women if fasting may harm them or their child</li>
            <li>Women during menstruation or postpartum bleeding</li>
          </ul>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mt-4">
            <p className="text-amber-900">
              <strong>Note:</strong> Those who miss fasts due to valid reasons must make them up later.
              Those who cannot fast at all should feed a poor person for each day missed (Fidya).
            </p>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-6">What Breaks the Fast?</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Eating or drinking anything</li>
            <li>Smoking or vaping</li>
            <li>Intentional vomiting</li>
            <li>Sexual relations</li>
            <li>Menstruation or postpartum bleeding</li>
          </ul>
        </div>
      )
    },
    {
      id: 'good-deeds',
      title: 'Good Deeds',
      icon: Heart,
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900">Recommended Acts of Worship</h3>

          <div className="space-y-3">
            <Card className="p-4 bg-green-50 border-green-200">
              <h4 className="font-semibold text-green-900 mb-2">Reading Quran</h4>
              <p className="text-green-800 text-sm">
                Try to complete the entire Quran during Ramadan. Many divide it into 30 parts (Juz),
                reading one per day. Each letter brings rewards multiplied many times.
              </p>
            </Card>

            <Card className="p-4 bg-blue-50 border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">Night Prayers (Taraweeh & Tahajjud)</h4>
              <p className="text-blue-800 text-sm">
                Offer Taraweeh prayers after Isha and wake up for Tahajjud before Fajr.
                These voluntary prayers bring immense rewards during Ramadan.
              </p>
            </Card>

            <Card className="p-4 bg-purple-50 border-purple-200">
              <h4 className="font-semibold text-purple-900 mb-2">Charity (Sadaqah & Zakat)</h4>
              <p className="text-purple-800 text-sm">
                Give generously to the poor and needy. The Prophet (PBUH) was most generous
                during Ramadan. Calculate and pay your Zakat during this blessed month.
              </p>
            </Card>

            <Card className="p-4 bg-orange-50 border-orange-200">
              <h4 className="font-semibold text-orange-900 mb-2">Dua (Supplication)</h4>
              <p className="text-orange-800 text-sm">
                Make sincere dua throughout the day, especially at the time of breaking the fast.
                The dua of a fasting person is not rejected.
              </p>
            </Card>

            <Card className="p-4 bg-pink-50 border-pink-200">
              <h4 className="font-semibold text-pink-900 mb-2">Seek Laylatul Qadr</h4>
              <p className="text-pink-800 text-sm">
                The Night of Decree (Laylatul Qadr) is better than 1000 months. It typically
                falls in the last 10 nights of Ramadan, especially on odd nights (21, 23, 25, 27, 29).
              </p>
            </Card>

            <Card className="p-4 bg-indigo-50 border-indigo-200">
              <h4 className="font-semibold text-indigo-900 mb-2">Good Character</h4>
              <p className="text-indigo-800 text-sm">
                Control your anger, speak kindly, forgive others, maintain family ties,
                and avoid backbiting and idle talk. Fasting is not just from food and drink.
              </p>
            </Card>
          </div>
        </div>
      )
    },
    {
      id: 'duas',
      title: 'Important Duas',
      icon: Star,
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900">Essential Ramadan Duas</h3>

          <Card className="p-4 border-indigo-200">
            <h4 className="font-semibold text-gray-900 mb-2">Dua for Starting Fast (Suhoor)</h4>
            <p className="text-xl font-arabic text-right mb-2 text-gray-800">
              وَبِصَوْمِ غَدٍ نَّوَيْتُ مِنْ شَهْرِ رَمَضَانَ
            </p>
            <p className="text-sm text-gray-600 italic mb-2">
              "Wa bisawmi ghadinn nawaiytu min shahri ramadan"
            </p>
            <p className="text-sm text-gray-700">
              I intend to fast tomorrow for the month of Ramadan.
            </p>
          </Card>

          <Card className="p-4 border-indigo-200">
            <h4 className="font-semibold text-gray-900 mb-2">Dua for Breaking Fast (Iftar)</h4>
            <p className="text-xl font-arabic text-right mb-2 text-gray-800">
              اللَّهُمَّ إِنِّي لَكَ صُمْتُ وَبِكَ آمَنْتُ وَعَلَيْكَ تَوَكَّلْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ
            </p>
            <p className="text-sm text-gray-600 italic mb-2">
              "Allahumma inni laka sumtu wa bika aamantu wa 'alayka tawakkaltu wa 'ala rizq-ika aftartu"
            </p>
            <p className="text-sm text-gray-700">
              O Allah! I fasted for You and I believe in You and I put my trust in You and I break my fast with Your sustenance.
            </p>
          </Card>

          <Card className="p-4 border-indigo-200">
            <h4 className="font-semibold text-gray-900 mb-2">Short Iftar Dua</h4>
            <p className="text-xl font-arabic text-right mb-2 text-gray-800">
              ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوقُ وَثَبَتَ الأَجْرُ إِنْ شَاءَ اللَّهُ
            </p>
            <p className="text-sm text-gray-600 italic mb-2">
              "Dhahaba al-zama' wa abtalat al-'urooq wa thabat al-ajr in sha Allah"
            </p>
            <p className="text-sm text-gray-700">
              The thirst is gone, the veins are moistened, and the reward is confirmed, if Allah wills.
            </p>
          </Card>

          <Card className="p-4 border-indigo-200">
            <h4 className="font-semibold text-gray-900 mb-2">Laylatul Qadr Dua</h4>
            <p className="text-xl font-arabic text-right mb-2 text-gray-800">
              اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي
            </p>
            <p className="text-sm text-gray-600 italic mb-2">
              "Allahumma innaka 'afuwwun tuhibbul 'afwa fa'fu 'anni"
            </p>
            <p className="text-sm text-gray-700">
              O Allah, You are Forgiving and love forgiveness, so forgive me.
            </p>
            <p className="text-xs text-gray-500 mt-2">
              (Recommended by Prophet Muhammad ﷺ for Laylatul Qadr)
            </p>
          </Card>
        </div>
      )
    },
    {
      id: 'tips',
      title: 'Practical Tips',
      icon: CheckCircle,
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900">Tips for a Successful Ramadan</h3>

          <div className="space-y-3">
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900">Suhoor is Essential</h4>
                <p className="text-sm text-gray-600">
                  Never skip suhoor. Wake up early and eat a nutritious meal with dates, fruits,
                  complex carbs, and plenty of water.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900">Break Fast Gradually</h4>
                <p className="text-sm text-gray-600">
                  Start with dates and water, pray Maghrib, then eat a moderate meal.
                  Avoid overeating to prevent discomfort.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900">Stay Hydrated</h4>
                <p className="text-sm text-gray-600">
                  Drink plenty of water between iftar and suhoor. Avoid caffeinated drinks
                  that can cause dehydration.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900">Manage Energy</h4>
                <p className="text-sm text-gray-600">
                  Take short naps if needed. Reduce strenuous activities during peak heat hours.
                  Prioritize rest to maintain energy for worship.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900">Control Your Tongue</h4>
                <p className="text-sm text-gray-600">
                  The Prophet (PBUH) said: "Whoever does not give up false speech and evil actions,
                  Allah is not in need of his leaving his food and drink."
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900">Set Spiritual Goals</h4>
                <p className="text-sm text-gray-600">
                  Set realistic goals: complete Quran, memorize new Surahs, increase charity,
                  improve character, fix relationships, and seek knowledge.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900">Last 10 Nights</h4>
                <p className="text-sm text-gray-600">
                  Increase worship in the last 10 nights. Perform I'tikaf if possible.
                  Seek Laylatul Qadr with sincere devotion.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const currentTopic = topics.find(t => t.id === selectedTopic);

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">Ramadan Education</h1>
        <p className="text-gray-600">Learn about the blessed month and how to make the most of it</p>
      </div>

      {/* Topic Navigation */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {topics.map((topic) => {
          const Icon = topic.icon;
          return (
            <button
              key={topic.id}
              onClick={() => setSelectedTopic(topic.id)}
              className={`p-4 rounded-lg border-2 transition-all ${
                selectedTopic === topic.id
                  ? 'bg-indigo-50 border-indigo-500 shadow-md'
                  : 'bg-white border-gray-200 hover:border-indigo-300'
              }`}
            >
              <Icon className={`w-6 h-6 mx-auto mb-2 ${
                selectedTopic === topic.id ? 'text-indigo-600' : 'text-gray-600'
              }`} />
              <p className={`text-sm font-medium ${
                selectedTopic === topic.id ? 'text-indigo-900' : 'text-gray-700'
              }`}>
                {topic.title}
              </p>
            </button>
          );
        })}
      </div>

      {/* Content Area */}
      <Card className="p-6 min-h-[500px]">
        {currentTopic?.content}
      </Card>

      {/* Footer Note */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-4 text-center">
        <p className="text-sm text-indigo-900">
          May Allah accept our fasts and make this Ramadan a means of forgiveness and mercy for all of us. Ameen.
        </p>
      </div>
    </div>
  );
}
