import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '', email: '', password: '', skills: '', interests: '', availability: 'Full-time'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user_token', 'mock_jwt_token');
    localStorage.setItem('user_data', JSON.stringify(formData));
    navigate('/app/dashboard');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center py-12 px-4">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-2xl border border-slate-200">
        <h2 className="text-3xl font-bold mb-8">Join the Hub</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-2 md:col-span-1">
            <label className="block text-sm font-medium mb-1 text-slate-700">Full Name</label>
            <input className="input-field" required onChange={e => setFormData({...formData, name: e.target.value})}/>
          </div>
          <div className="col-span-2 md:col-span-1">
            <label className="block text-sm font-medium mb-1 text-slate-700">Email Address</label>
            <input type="email" className="input-field" required onChange={e => setFormData({...formData, email: e.target.value})}/>
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium mb-1 text-slate-700">Password</label>
            <input type="password" className="input-field" required onChange={e => setFormData({...formData, password: e.target.value})}/>
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium mb-1 text-slate-700">Skills (Comma separated)</label>
            <input placeholder="React, Python, UI Design" className="input-field" onChange={e => setFormData({...formData, skills: e.target.value})}/>
          </div>
          <div className="col-span-2 md:col-span-1">
            <label className="block text-sm font-medium mb-1 text-slate-700">Interests</label>
            <input className="input-field" onChange={e => setFormData({...formData, interests: e.target.value})}/>
          </div>
          <div className="col-span-2 md:col-span-1">
            <label className="block text-sm font-medium mb-1 text-slate-700">Availability</label>
            <select className="input-field" onChange={e => setFormData({...formData, availability: e.target.value})}>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Weekends</option>
            </select>
          </div>
          <button className="col-span-2 btn-primary py-4 mt-4">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;