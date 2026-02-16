import { useState } from 'react';
import { CheckCircle, Circle, Plus, Trash2, Calendar, RotateCcw } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Task {
  id: string;
  text: string;
  completed: boolean;
  category: 'prayer' | 'quran' | 'spiritual' | 'general';
}

export default function Checklist() {
  const defaultTasks: Task[] = [
    { id: '1', text: 'Perform Fajr prayer on time', completed: false, category: 'prayer' },
    { id: '2', text: 'Read morning adhkar', completed: false, category: 'spiritual' },
    { id: '3', text: 'Read Quran (at least 1 Juz)', completed: false, category: 'quran' },
    { id: '4', text: 'Perform Dhuhr prayer on time', completed: false, category: 'prayer' },
    { id: '5', text: 'Perform Asr prayer on time', completed: false, category: 'prayer' },
    { id: '6', text: 'Prepare for Iftar', completed: false, category: 'general' },
    { id: '7', text: 'Make dua before breaking fast', completed: false, category: 'spiritual' },
    { id: '8', text: 'Perform Maghrib prayer on time', completed: false, category: 'prayer' },
    { id: '9', text: 'Perform Isha prayer on time', completed: false, category: 'prayer' },
    { id: '10', text: 'Perform Taraweeh prayer', completed: false, category: 'prayer' },
    { id: '11', text: 'Give Sadaqah (charity)', completed: false, category: 'spiritual' },
    { id: '12', text: 'Read evening adhkar', completed: false, category: 'spiritual' },
    { id: '13', text: 'Wake up for Suhoor', completed: false, category: 'general' },
    { id: '14', text: 'Make intention for fasting', completed: false, category: 'spiritual' },
  ];

  const [tasks, setTasks] = useState<Task[]>(defaultTasks);
  const [newTaskText, setNewTaskText] = useState('');
  const [currentDay, setCurrentDay] = useState(1);

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const addTask = () => {
    if (newTaskText.trim()) {
      const newTask: Task = {
        id: Date.now().toString(),
        text: newTaskText,
        completed: false,
        category: 'general'
      };
      setTasks([...tasks, newTask]);
      setNewTaskText('');
    }
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const resetDaily = () => {
    if (confirm('Reset all tasks for a new day?')) {
      setTasks(tasks.map(task => ({ ...task, completed: false })));
      setCurrentDay(currentDay + 1);
    }
  };

  const resetToDefault = () => {
    if (confirm('Reset to default checklist? This will remove custom tasks.')) {
      setTasks(defaultTasks);
    }
  };

  const completedCount = tasks.filter(t => t.completed).length;
  const totalCount = tasks.length;
  const completionPercentage = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  const categoryColors = {
    prayer: 'bg-blue-50 border-blue-300 text-blue-700',
    quran: 'bg-green-50 border-green-300 text-green-700',
    spiritual: 'bg-purple-50 border-purple-300 text-purple-700',
    general: 'bg-gray-50 border-gray-300 text-gray-700'
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">Daily Checklist</h1>
        <p className="text-gray-600">Track your daily Ramadan tasks and stay organized</p>
      </div>

      {/* Day Counter */}
      <Card className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Calendar className="w-8 h-8 text-indigo-600" />
            <div>
              <p className="text-sm text-gray-600">Ramadan Day</p>
              <p className="text-2xl font-bold text-indigo-700">{currentDay}/30</p>
            </div>
          </div>
          <Button onClick={resetDaily} variant="outline" size="sm">
            <RotateCcw className="w-4 h-4 mr-2" />
            New Day
          </Button>
        </div>
      </Card>

      {/* Progress Bar */}
      <Card className="p-6">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold text-gray-900">Today's Progress</h2>
          <span className="text-sm font-semibold text-gray-700">
            {completedCount}/{totalCount}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
          <div
            className="bg-gradient-to-r from-green-500 to-emerald-600 h-3 rounded-full transition-all"
            style={{ width: `${completionPercentage}%` }}
          />
        </div>
        <p className="text-sm text-gray-600 text-center">
          {completionPercentage === 100 ? (
            <span className="text-green-600 font-semibold">
              Alhamdulillah! All tasks completed!
            </span>
          ) : (
            `${completionPercentage.toFixed(0)}% Complete`
          )}
        </p>
      </Card>

      {/* Add New Task */}
      <Card className="p-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTask()}
            placeholder="Add a new task..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <Button onClick={addTask}>
            <Plus className="w-4 h-4 mr-2" />
            Add
          </Button>
        </div>
      </Card>

      {/* Tasks List */}
      <Card className="divide-y">
        {tasks.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            <p>No tasks yet. Add your first task above!</p>
          </div>
        ) : (
          tasks.map((task) => (
            <div
              key={task.id}
              className={`p-4 flex items-center gap-3 hover:bg-gray-50 transition-colors ${
                task.completed ? 'bg-gray-50' : ''
              }`}
            >
              <button
                onClick={() => toggleTask(task.id)}
                className="flex-shrink-0 focus:outline-none"
              >
                {task.completed ? (
                  <CheckCircle className="w-6 h-6 text-green-600" />
                ) : (
                  <Circle className="w-6 h-6 text-gray-400 hover:text-gray-600" />
                )}
              </button>

              <span
                className={`flex-1 ${
                  task.completed
                    ? 'line-through text-gray-500'
                    : 'text-gray-900'
                }`}
              >
                {task.text}
              </span>

              <span className={`text-xs px-2 py-1 rounded-full border ${categoryColors[task.category]}`}>
                {task.category}
              </span>

              <button
                onClick={() => deleteTask(task.id)}
                className="flex-shrink-0 text-red-500 hover:text-red-700 focus:outline-none"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))
        )}
      </Card>

      {/* Category Legend */}
      <Card className="p-4">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Categories</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span className="text-xs text-gray-600">Prayer</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-xs text-gray-600">Quran</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-purple-500"></div>
            <span className="text-xs text-gray-600">Spiritual</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gray-500"></div>
            <span className="text-xs text-gray-600">General</span>
          </div>
        </div>
      </Card>

      {/* Motivational Quote */}
      {completionPercentage === 100 && (
        <Card className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 text-center">
          <p className="text-green-800 font-semibold text-lg mb-2">
            MashAllah! You've completed all your tasks today!
          </p>
          <p className="text-green-700 text-sm italic">
            "And those who strive for Us - We will surely guide them to Our ways."
            <br />
            <span className="text-xs">(Quran 29:69)</span>
          </p>
        </Card>
      )}

      {/* Action Buttons */}
      <div className="flex gap-3 justify-center">
        <Button onClick={resetToDefault} variant="outline" size="sm">
          <RotateCcw className="w-4 h-4 mr-2" />
          Reset to Default
        </Button>
      </div>

      {/* Tips */}
      <Card className="p-4 bg-blue-50 border-blue-200">
        <h3 className="text-sm font-semibold text-blue-900 mb-2">Tips</h3>
        <ul className="text-xs text-blue-800 space-y-1 list-disc list-inside">
          <li>Check off tasks as you complete them throughout the day</li>
          <li>Add custom tasks specific to your personal goals</li>
          <li>Use "New Day" button to reset for the next day of Ramadan</li>
          <li>Try to complete all tasks before sleeping for maximum barakah</li>
        </ul>
      </Card>
    </div>
  );
}
