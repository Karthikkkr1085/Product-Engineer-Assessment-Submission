import { AnimatePresence } from 'framer-motion';
import { HashRouter, Navigate, Routes, Route, useLocation } from 'react-router-dom';
import { ApplicationProvider } from './context/ApplicationContext';
import RouteTransition from './components/motion/RouteTransition';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ApplyLoan from './pages/ApplyLoan';
import LoanDetails from './pages/LoanDetails';
import PersonalInfo from './pages/PersonalInfo';
import EmploymentIncome from './pages/EmploymentIncome';
import ReviewApplication from './pages/ReviewApplication';
import EligibilityResult from './pages/EligibilityResult';
import Submit from './pages/Submit';
import Confirmation from './pages/Confirmation';

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <RouteTransition key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/apply" element={<ApplyLoan />} />
          <Route path="/loan-details" element={<LoanDetails />} />
          <Route path="/personal-info" element={<PersonalInfo />} />
          <Route path="/employment" element={<EmploymentIncome />} />
          <Route path="/review" element={<ReviewApplication />} />
          <Route path="/eligibility" element={<EligibilityResult />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </RouteTransition>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <ApplicationProvider>
      <HashRouter>
        <AppRoutes />
      </HashRouter>
    </ApplicationProvider>
  );
}
