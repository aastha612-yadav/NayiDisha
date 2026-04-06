import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import API from '../api/axios';
import { useAuth } from '../context/AuthContext';

export default function JobDetail() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [msg, setMsg] = useState('');
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    API.get(`/jobs/${id}`).then(res => setJob(res.data));
  }, [id]);

  const handleApply = async () => {
    if (!user) { navigate('/login'); return; }
    try {
      await API.post('/applications', { job_id: id });
      setMsg('✅ Applied successfully!');
    } catch (err) {
      setMsg(err.response?.data?.message || 'Already applied or error.');
    }
  };

  if (!job) return <div className="container mt-5">Loading...</div>;

  return (
    <div className="container mt-5" style={{ maxWidth: 700 }}>
      <button className="btn btn-outline-secondary mb-3" onClick={() => navigate('/jobs')}>← Back</button>
      <h2>{job.title}</h2>
      <p className="text-muted">Posted by: {job.employer_name}</p>
      <hr />
      <p>📍 <strong>Location:</strong> {job.location}</p>
      <p>💰 <strong>Salary:</strong> {job.salary}</p>
      <p>🏷️ <strong>Category:</strong> {job.category}</p>
      {job.is_returnship && <span className="badge bg-success mb-3">Returnship Friendly</span>}
      <h5 className="mt-3">Job Description</h5>
      <p>{job.description}</p>
      {msg && <div className="alert alert-info">{msg}</div>}
      {user?.role === 'seeker' && (
        <button className="btn btn-primary w-100 mt-3" onClick={handleApply}>Apply Now</button>
      )}
      {!user && (
        <button className="btn btn-primary w-100 mt-3" onClick={() => navigate('/login')}>Login to Apply</button>
      )}
    </div>
  );
}