import { useNavigate } from 'react-router-dom';
import PageShell from '../components/PageShell';
import { useApplication } from '../context/ApplicationContext';

export default function PersonalInfo() {
  const navigate = useNavigate();
  const { application, updateNested } = useApplication();
  const p = application.personal;

  function handleSubmit(e) {
    e.preventDefault();
    navigate('/employment');
  }

  return (
    <PageShell step={5}>
      <div className="eyebrow">Step 3 of 5 · Personal information</div>
      <h1 style={{ fontSize: 26 }}>Tell us about yourself</h1>
      <p className="subhead">We use this to verify your identity. All fields are mocked for this prototype.</p>

      <form onSubmit={handleSubmit}>
        <div className="card">
          <div className="field">
            <label>Full legal name</label>
            <input
              type="text"
              placeholder="As per PAN card"
              value={p.fullName}
              onChange={(e) => updateNested('personal', { fullName: e.target.value })}
            />
          </div>
          <div className="field-row">
            <div className="field">
              <label>Date of birth</label>
              <input
                type="date"
                value={p.dob}
                onChange={(e) => updateNested('personal', { dob: e.target.value })}
              />
            </div>
            <div className="field">
              <label>PAN number</label>
              <input
                type="text"
                placeholder="ABCDE1234F"
                value={p.pan}
                onChange={(e) => updateNested('personal', { pan: e.target.value })}
              />
            </div>
          </div>
          <div className="field">
            <label>Mobile number</label>
            <input
              type="tel"
              placeholder="+91 98XXXXXX00"
              value={p.phone}
              onChange={(e) => updateNested('personal', { phone: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Residential address</label>
            <input
              type="text"
              placeholder="Flat / street / city / pincode"
              value={p.address}
              onChange={(e) => updateNested('personal', { address: e.target.value })}
            />
          </div>
        </div>

        <div className="btn-row">
          <button type="button" className="btn btn-secondary" onClick={() => navigate('/loan-details')}>← Back</button>
          <button type="submit" className="btn btn-primary">Continue →</button>
        </div>
      </form>
    </PageShell>
  );
}
