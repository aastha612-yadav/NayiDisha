import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import API from '../api/axios';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'seeker' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/auth/register', form);
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: 450 }}>
      <h2 className="mb-4 text-center">Join NayiDisha</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Full Name</label>
          <input className="form-control" value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })} required />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })} required />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control" value={form.password}
            onChange={e => setForm({ ...form, password: e.target.value })} required />
        </div>
        <div className="mb-3">
          <label>I am a</label>
          <select className="form-control" value={form.role}
            onChange={e => setForm({ ...form, role: e.target.value })}>
            <option value="seeker">Job Seeker</option>
            <option value="employer">Employer</option>
          </select>
        </div>
        <button className="btn btn-primary w-100">Register</button>
      </form>
      <p className="mt-3 text-center">Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
}