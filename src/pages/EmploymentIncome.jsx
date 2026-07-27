import { useNavigate } from 'react-router-dom';
import PageShell from '../components/layout/PageShell';
import FormField from '../components/shared/FormField';
import PageHeader from '../components/shared/PageHeader';
import { Input } from '../components/ui/input';
import { MotionButton } from '../components/ui/motion-button';
import { useApplication } from '../context/ApplicationContext';
import { EMPLOYMENT_TYPES } from '../data/mockData';

export default function EmploymentIncome() {
  const navigate = useNavigate();
  const { application, updateNested } = useApplication();
  const employment = application.employment;
  const updateEmployment = (field) => (event) => updateNested('employment', { [field]: event.target.value });

  function handleSubmit(event) { event.preventDefault(); navigate('/review'); }

  return <PageShell step={6}><PageHeader eyebrow="Step 4 of 5 · Employment & income" title="Your income details" description="This determines your eligibility and how much you can borrow." /><form onSubmit={handleSubmit} className="space-y-6"><div className="card space-y-5"><FormField id="employment-type" label="Employment type"><select id="employment-type" className="h-10 w-full rounded-xl border border-input bg-background px-3 text-sm shadow-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50" value={employment.type} onChange={updateEmployment('type')}>{EMPLOYMENT_TYPES.map((type) => <option key={type} value={type}>{type}</option>)}</select></FormField><FormField id="employer" label="Employer / business name"><Input id="employer" type="text" placeholder="e.g. Meridian Textiles Pvt Ltd" value={employment.employer} onChange={updateEmployment('employer')} /></FormField><div className="field-row"><FormField id="monthly-income" label="Monthly income"><Input id="monthly-income" type="number" placeholder="₹" value={employment.monthlyIncome} onChange={updateEmployment('monthlyIncome')} /></FormField><FormField id="experience" label="Years of experience"><Input id="experience" type="number" placeholder="e.g. 4" value={employment.experienceYears} onChange={updateEmployment('experienceYears')} /></FormField></div></div><div className="flex items-center justify-between gap-3"><MotionButton type="button" variant="outline" onClick={() => navigate('/personal-info')}>Back</MotionButton><MotionButton type="submit">Continue</MotionButton></div></form></PageShell>;
}
