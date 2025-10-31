import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toast';
import { Navigation } from '@/components/layout/Navigation';
import { Dashboard } from '@/pages/Dashboard';
import { SyllabusGenerator } from '@/pages/SyllabusGenerator';
import { RubricBuilder } from '@/pages/RubricBuilder';
import { AssignmentGenerator } from '@/pages/AssignmentGenerator';
import { FeedbackGenerator } from '@/pages/FeedbackGenerator';
import { Settings } from '@/pages/Settings';
import './App.css';

function App() {
  return (
    <Router basename="/hs_llm">
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/syllabus" element={<SyllabusGenerator />} />
            <Route path="/rubric" element={<RubricBuilder />} />
            <Route path="/assignment" element={<AssignmentGenerator />} />
            <Route path="/feedback" element={<FeedbackGenerator />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;