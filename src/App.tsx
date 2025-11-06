import { lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toast';
import ErrorBoundary from '@/components/ErrorBoundary';
import LoadingSpinner from '@/components/LoadingSpinner';
import { Navigation } from '@/components/layout/Navigation';
import { Dashboard } from '@/pages/Dashboard';
import { ThemeProvider } from '@/contexts/ThemeContext';
import './App.css';

// Lazy load pages for code splitting
const SyllabusGenerator = lazy(() => import('@/pages/SyllabusGenerator').then(module => ({ default: module.SyllabusGenerator })));
const RubricBuilder = lazy(() => import('@/pages/RubricBuilder').then(module => ({ default: module.RubricBuilder })));
const AssignmentGenerator = lazy(() => import('@/pages/AssignmentGenerator').then(module => ({ default: module.AssignmentGenerator })));
const FeedbackGenerator = lazy(() => import('@/pages/FeedbackGenerator').then(module => ({ default: module.FeedbackGenerator })));
const UserGuide = lazy(() => import('@/pages/UserGuide').then(module => ({ default: module.UserGuide })));
const Settings = lazy(() => import('@/pages/Settings').then(module => ({ default: module.Settings })));

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Router>
          <div className="min-h-screen bg-background">
            <Navigation />
            <main className="container mx-auto px-6 py-8 max-w-7xl">
              <div className="animate-fadeIn">
                <ErrorBoundary>
                  <Suspense fallback={<LoadingSpinner size="lg" text="페이지를 불러오는 중..." />}>
                    <Routes>
                      <Route path="/" element={<Dashboard />} />
                      <Route path="/syllabus" element={<SyllabusGenerator />} />
                      <Route path="/rubric" element={<RubricBuilder />} />
                      <Route path="/assignment" element={<AssignmentGenerator />} />
                      <Route path="/feedback" element={<FeedbackGenerator />} />
                      <Route path="/guide" element={<UserGuide />} />
                      <Route path="/settings" element={<Settings />} />
                    </Routes>
                  </Suspense>
                </ErrorBoundary>
              </div>
            </main>
            <Toaster />
          </div>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;