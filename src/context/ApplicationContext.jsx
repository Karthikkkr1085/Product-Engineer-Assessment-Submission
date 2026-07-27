import { createContext, useContext, useState } from 'react';
import { LOAN_TYPES } from '../data/mockData';

const ApplicationContext = createContext(null);

const initialState = {
  loanTypeId: LOAN_TYPES[0].id,
  amount: 300000,
  tenureMonths: 36,
  personal: {
    fullName: '',
    dob: '',
    pan: '',
    phone: '',
    address: '',
  },
  employment: {
    type: 'Salaried',
    employer: '',
    monthlyIncome: '',
    experienceYears: '',
  },
};

export function ApplicationProvider({ children }) {
  const [application, setApplication] = useState(initialState);

  function updateApplication(patch) {
    setApplication((prev) => ({ ...prev, ...patch }));
  }

  function updateNested(section, patch) {
    setApplication((prev) => ({
      ...prev,
      [section]: { ...prev[section], ...patch },
    }));
  }

  return (
    <ApplicationContext.Provider value={{ application, updateApplication, updateNested }}>
      {children}
    </ApplicationContext.Provider>
  );
}

export function useApplication() {
  const ctx = useContext(ApplicationContext);
  if (!ctx) throw new Error('useApplication must be used within ApplicationProvider');
  return ctx;
}
