import { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API from '../api/axios';
import { useAuth } from '../context/AuthContext';

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const { user, logout } = useAuth();
  const navigate = useNavigate();

 const fetchJobs = useCallback(async () => {
  const res = await API.get('/jobs', { params: { search, category } });
  setJobs(Array.isArray(res.data) ? res.data : []);
}, [search, category]);

useEffect(() => {
  fetchJobs();
}, [fetchJobs]);

  const handleLogout = () => { logout(); navigate('/login'); };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2> NayiDisha </h2>
        <div>
          {user ? (
            <>
              <span className="me-3">Hi, {user.name}</span>
              {user.role === 'seeker' && <Link to="/my-applications" className="btn btn-outline-primary me-2">My Applications</Link>}
              {user.role === 'employer' && <Link to="/employer/dashboard" className="btn btn-outline-primary me-2">Dashboard</Link>}
              <Link to="/returnship" className="btn btn-outline-success me-2">Returnship</Link>
              <button className="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline-primary me-2">Login</Link>
              <Link to="/register" className="btn btn-primary">Register</Link>
            </>
          )}
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-8">
          <input className="form-control" placeholder="Search jobs..." value={search}
            onChange={e => setSearch(e.target.value)} />
        </div>
        <div className="col-md-3">
          <select className="form-control" value={category} onChange={e => setCategory(e.target.value)}>
            <option value="">All Categories</option>
            <option value="IT">IT</option>
            <option value="Marketing">Marketing</option>
            <option value="Finance">Finance</option>
            <option value="HR">HR</option>
            <option value="Design">Design</option>
          </select>
        </div>
        <div className="col-md-1">
          <button className="btn btn-primary w-100" onClick={fetchJobs}>Go</button>
        </div>
      </div>

      <div className="row">
        {jobs.length === 0 && <p className="text-center text-muted">No jobs found.</p>}
        {jobs.map(job => (
          <div className="col-md-4 mb-3" key={job.id}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{job.title}</h5>
                <p className="text-muted">{job.employer_name}</p>
                <p>📍 {job.location} | 💰 {job.salary}</p>
                <span className="badge bg-secondary me-1">{job.category}</span>
                {job.is_returnship ? <span className="badge bg-success">Returnship Friendly</span> : null}
              </div>
              <div className="card-footer">
                <Link to={`/jobs/${job.id}`} className="btn btn-primary w-100">View & Apply</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}