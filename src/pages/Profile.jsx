import Sidebar from '../components/Sidebar';

const Profile = () => {
  const user = {
    name: 'Alex Johnson',
    skills: ['React', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    tools: ['VS Code', 'Git', 'Figma', 'Docker'],
    experience: '2 years of project work',
    availability: 'Available (10 hrs/week)',
    rating: 4.9
  };

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-grow md:ml-64 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="card p-8 flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-4xl font-bold">
              AJ
            </div>
            <div className="flex-grow text-center md:text-left">
              <h2 className="text-3xl font-bold">{user.name}</h2>
              <p className="text-blue-600 font-semibold mb-2">{user.availability}</p>
              <div className="flex justify-center md:justify-start items-center gap-2">
                <span className="text-yellow-500 text-lg">★</span>
                <span className="font-bold">{user.rating}</span>
                <span className="text-slate-400">(24 Reviews)</span>
              </div>
            </div>
            <button className="btn-secondary">Edit Profile</button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-6">
              <h3 className="font-bold text-lg mb-4">Skills & Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {user.skills.map(s => <span key={s} className="bg-slate-100 px-3 py-1 rounded-full text-sm">{s}</span>)}
              </div>
            </div>
            <div className="card p-6">
              <h3 className="font-bold text-lg mb-4">Tools Used</h3>
              <div className="flex flex-wrap gap-2">
                {user.tools.map(t => <span key={t} className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">{t}</span>)}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;