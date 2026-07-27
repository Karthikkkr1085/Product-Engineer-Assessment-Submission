import { HashRouter, Routes, Route } from 'react-router-dom';
import { ApplicationProvider } from './context/ApplicationContext';

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

export default function App() {
  return (
    <ApplicationProvider>
      <HashRouter>
        <Routes>
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
        </Routes>
      </HashRouter>
    </ApplicationProvider>
  );
}
