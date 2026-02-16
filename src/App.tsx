import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useDirection } from '@/features/i18n/hooks/useDirection';
import Header from '@/components/layout/Header';
import Home from '@/pages/Home';
import PrayerTimes from '@/pages/PrayerTimes';
import Education from '@/pages/Education';
import Spiritual from '@/pages/Spiritual';
import Checklist from '@/pages/Checklist';
import Tasbeeh from '@/pages/Tasbeeh';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 60 * 24, // 24 hours
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function AppContent() {
  useDirection(); // This hook ensures RTL is applied when language changes

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prayer-times" element={<PrayerTimes />} />
          <Route path="/education" element={<Education />} />
          <Route path="/spiritual" element={<Spiritual />} />
          <Route path="/checklist" element={<Checklist />} />
          <Route path="/tasbeeh" element={<Tasbeeh />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <AppContent />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
