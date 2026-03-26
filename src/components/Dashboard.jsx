import Sidebar from '../components/Sidebar';
import UserCard from '../components/UserCard';
import ProjectCard from '../components/ProjectCard';

const Dashboard = () => {
  const teammates = [
    { name: 'Sarah Wu', skills: ['Figma', 'React'], experience: 'Intermediate', compatibility: 95 },
    { name: 'Leo Chen', skills: ['Python', 'SQL'], experience: 'Expert', compatibility: 88 },
  ];

  const projects = [
    { title: 'AI Study Planner', description: 'Building a tool that generates personalized schedules.', teamSize: 3, skills: ['Node.js', 'GPT-4'], deadline: 'May 1' },
    { title: 'Campus Marketplace', description: 'A local peer-to-peer selling platform.', teamSize: 2, skills: ['React Native'], deadline: 'Apr 15' },
  ];

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-grow md:ml-64 p-8 bg-slate-50">
        <header className="mb-10">
          <h2 className="text-3xl font-bold text-slate-800">Welcome Back!</h2>
          <p className="text-slate-500">Here's what's happening in your network today.</p>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h3 className="text-xl font-bold mb-4">Active Projects</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {projects.map(p => <ProjectCard key={p.title} project={p} />)}
              </div>
            </section>
            <section>
              <h3 className="text-xl font-bold mb-4">Recent Discussions</h3>
              <div className="card p-4 space-y-4">
                <p className="text-sm text-slate-600">No recent messages.</p>
              </div>
            </section>
          </div>

          <aside>
            <h3 className="text-xl font-bold mb-4">Recommended Teammates</h3>
            <div className="space-y-4">
              {teammates.map(t => <UserCard key={t.name} user={t} />)}
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;