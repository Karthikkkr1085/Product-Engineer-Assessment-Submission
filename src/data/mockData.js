export const MOCK_USER = {
  name: 'Ananya Rao',
  accountNumber: '•••• 4471',
  email: 'ananya.rao@email.com',
  creditScore: 742,
};

export const ACCOUNT_SUMMARY = {
  savingsBalance: 214300,
  activeLoans: 1,
  creditLimit: 500000,
};

export const LOAN_TYPES = [
  { id: 'personal', title: 'Personal Loan', desc: 'For any personal expense, no collateral needed.', rate: 11.5 },
  { id: 'home-improve', title: 'Home Improvement', desc: 'Renovation, repair, or furnishing.', rate: 10.75 },
  { id: 'medical', title: 'Medical Expense', desc: 'Planned or emergency medical costs.', rate: 10.25 },
  { id: 'debt-consolidation', title: 'Debt Consolidation', desc: 'Combine existing debts into one EMI.', rate: 11.0 },
];

export const EMPLOYMENT_TYPES = ['Salaried', 'Self-Employed', 'Business Owner'];

// simple flat EMI estimate for the prototype — not a real amortization engine
export function estimateEMI(principal, annualRatePct, months) {
  const r = annualRatePct / 12 / 100;
  if (r === 0) return principal / months;
  const emi = (principal * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
  return Math.round(emi);
}

export function formatINR(amount) {
  return '₹' + Math.round(amount).toLocaleString('en-IN');
}
