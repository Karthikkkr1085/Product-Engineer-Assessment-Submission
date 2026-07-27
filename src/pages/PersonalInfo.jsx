import { useNavigate } from 'react-router-dom';
import PageShell from '../components/layout/PageShell';
import FormField from '../components/shared/FormField';
import PageHeader from '../components/shared/PageHeader';
import { Input } from '../components/ui/input';
import { MotionButton } from '../components/ui/motion-button';
import { useApplication } from '../context/ApplicationContext';

export default function PersonalInfo() {
  const navigate = useNavigate();
  const { application, updateNested } = useApplication();
  const personal = application.personal;
  const updatePersonal = (field) => (event) => updateNested('personal', { [field]: event.target.value });

  function handleSubmit(event) { event.preventDefault(); navigate('/employment'); }

  return <PageShell step={5}><PageHeader eyebrow="Step 3 of 5 · Personal information" title="Tell us about yourself" description="We use this to verify your identity. All fields are mocked for this prototype." /><form onSubmit={handleSubmit} className="space-y-6"><div className="card space-y-5"><FormField id="full-name" label="Full legal name"><Input id="full-name" type="text" placeholder="As per PAN card" value={personal.fullName} onChange={updatePersonal('fullName')} /></FormField><div className="field-row"><FormField id="date-of-birth" label="Date of birth"><Input id="date-of-birth" type="date" value={personal.dob} onChange={updatePersonal('dob')} /></FormField><FormField id="pan" label="PAN number"><Input id="pan" type="text" placeholder="ABCDE1234F" value={personal.pan} onChange={updatePersonal('pan')} /></FormField></div><FormField id="phone" label="Mobile number"><Input id="phone" type="tel" placeholder="+91 98XXXXXX00" value={personal.phone} onChange={updatePersonal('phone')} /></FormField><FormField id="address" label="Residential address"><Input id="address" type="text" placeholder="Flat / street / city / pincode" value={personal.address} onChange={updatePersonal('address')} /></FormField></div><div className="flex items-center justify-between gap-3"><MotionButton type="button" variant="outline" onClick={() => navigate('/loan-details')}>Back</MotionButton><MotionButton type="submit">Continue</MotionButton></div></form></PageShell>;
}
