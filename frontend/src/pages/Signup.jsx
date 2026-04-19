import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

export default function Signup() {
  const { register } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      await register(email, password);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="container flex justify-center items-center" style={{ minHeight: '60vh' }}>
      <div className="card" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Create Account</h2>
        {error && <div className="badge badge-expense" style={{ display: 'block', marginBottom: '1rem', textAlign: 'center' }}>{error}</div>}
        <form onSubmit={handleSubmit} className="flex-col gap-1">
          <div className="form-group">
            <label>Email</label>
            <input type="email" required className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Password</label>
            <div style={{ position: 'relative' }}>
              <input 
                type={showPassword ? "text" : "password"} 
                required 
                className="form-control" 
                style={{ width: '100%', paddingRight: '4rem' }}
                value={password} 
                onChange={e => setPassword(e.target.value)} 
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                style={{ position: 'absolute', right: '0.8rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'var(--primary-color)', cursor: 'pointer', fontWeight: 'bold', fontSize: '0.85rem' }}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <div style={{ position: 'relative' }}>
              <input 
                type={showPassword ? "text" : "password"} 
                required 
                className="form-control" 
                style={{ width: '100%', paddingRight: '4rem' }}
                value={confirmPassword} 
                onChange={e => setConfirmPassword(e.target.value)} 
              />
            </div>
          </div>
          <button disabled={loading} type="submit" className="btn btn-primary" style={{ marginTop: '1rem' }}>
            {loading ? 'Creating...' : 'Sign Up'}
          </button>
        </form>
        <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.9rem' }}>
          Already have an account? <Link to="/login" style={{ color: 'var(--primary-color)' }}>Log In</Link>
        </p>
      </div>
    </div>
  );
}
