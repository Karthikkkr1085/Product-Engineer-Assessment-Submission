import { useNavigate } from 'react-router-dom';
import PageShell from '../components/PageShell';
import { useApplication } from '../context/ApplicationContext';
import { EMPLOYMENT_TYPES } from '../data/mockData';

export default function EmploymentIncome() {
  const navigate = useNavigate();
  const { application, updateNested } = useApplication();
  const emp = application.employment;

  function handleSubmit(e) {
    e.preventDefault();
    navigate('/review');
  }

  return (
    <PageShell step={6}>
      <div className="eyebrow">Step 4 of 5 · Employment & income</div>
      <h1 style={{ fontSize: 26 }}>Your income details</h1>
      <p className="subhead">This determines your eligibility and how much you can borrow.</p>

      <form onSubmit={handleSubmit}>
        <div className="card">
          <div className="field">
            <label>Employment type</label>
            <select
              value={emp.type}
              onChange={(e) => updateNested('employment', { type: e.target.value })}
            >
              {EMPLOYMENT_TYPES.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
          <div className="field">
            <label>Employer / business name</label>
            <input
              type="text"
              placeholder="e.g. Meridian Textiles Pvt Ltd"
              value={emp.employer}
              onChange={(e) => updateNested('employment', { employer: e.target.value })}
            />
          </div>
          <div className="field-row">
            <div className="field">
              <label>Monthly income</label>
              <input
                type="number"
                placeholder="₹"
                value={emp.monthlyIncome}
                onChange={(e) => updateNested('employment', { monthlyIncome: e.target.value })}
              />
            </div>
            <div className="field">
              <label>Years of experience</label>
              <input
                type="number"
                placeholder="e.g. 4"
                value={emp.experienceYears}
                onChange={(e) => updateNested('employment', { experienceYears: e.target.value })}
              />
            </div>
          </div>
        </div>

        <div className="btn-row">
          <button type="button" className="btn btn-secondary" onClick={() => navigate('/personal-info')}>← Back</button>
          <button type="submit" className="btn btn-primary">Continue →</button>
        </div>
      </form>
    </PageShell>
  );
}
