import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('ananya.rao@email.com');
  const [password, setPassword] = useState('••••••••');

  function handleSubmit(e) {
    e.preventDefault();
    navigate('/dashboard');
  }

  return (
    <div className="login-wrap">
      <div className="login-card">
        <div className="login-brand">
          <span className="mark" />
          <span className="name">Horizon Bank</span>
        </div>
        <h2 style={{ fontSize: 22, marginBottom: 6 }}>Welcome back</h2>
        <p style={{ color: 'var(--ink-soft)', fontSize: 14, marginBottom: 28 }}>
          Log in to manage your accounts and apply for credit.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="email">Email or customer ID</label>
            <input id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button className="btn btn-primary" type="submit" style={{ width: '100%', justifyContent: 'center' }}>
            Log in
          </button>
        </form>

        <div className="demo-note">
          Prototype note: this is mocked authentication. Any credentials will log you in — there is no real backend.
        </div>
      </div>
    </div>
  );
}
