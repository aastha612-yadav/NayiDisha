import { Link } from 'react-router-dom';

const programs = [
  { id: 1, title: 'Back to Work Program', org: 'TCS', type: 'Mentorship', skills: 'Java, Python, Leadership' },
  { id: 2, title: 'Women in Tech Returnship', org: 'Infosys', type: 'Flexible Hours', skills: 'React, Node.js, SQL' },
  { id: 3, title: 'Career Relaunch Program', org: 'Wipro', type: 'Part-time', skills: 'Data Analysis, Excel, Power BI' },
  { id: 4, title: 'Rising Again Initiative', org: 'Accenture', type: 'Mentorship', skills: 'Project Management, Agile' },
  { id: 5, title: 'FlexWork for Women', org: 'HCL', type: 'Remote Friendly', skills: 'Digital Marketing, SEO, Content' },
];

export default function Returnship() {
  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between mb-4">
        <div>
          <h2>👩‍💼 Women Returnship Programs</h2>
          <p className="text-muted">Special opportunities for women returning after a career break</p>
        </div>
        <Link to="/jobs" className="btn btn-outline-secondary">← Back to Jobs</Link>
      </div>

      <div className="alert alert-success">
        🌟 These programs offer flexible hours, mentorship, and supportive environments for women re-entering the workforce.
      </div>

      <div className="row">
        {programs.map(p => (
          <div className="col-md-6 mb-3" key={p.id}>
            <div className="card h-100 border-success">
              <div className="card-body">
                <h5>{p.title}</h5>
                <p className="text-muted">🏢 {p.org}</p>
                <p>🔖 Type: <strong>{p.type}</strong></p>
                <p>🛠️ Skills: {p.skills}</p>
                <span className="badge bg-success">Returnship Friendly</span>
              </div>
              <div className="card-footer">
                <Link to="/register" className="btn btn-outline-success w-100">Apply Now</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}