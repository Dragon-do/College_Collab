import Sidebar from '../components/Sidebar';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    { title: 'Eco-Tracker', description: 'Mobile app to track carbon footprint.', teamSize: 4, skills: ['Swift', 'Firebase'], deadline: 'June 10' },
    { title: 'Study Buddy Bot', description: 'Discord bot for peer teaching.', teamSize: 2, skills: ['Python', 'Discord.js'], deadline: 'May 20' },
  ];

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-grow md:ml-64 p-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Explore Projects</h2>
          <button className="btn-primary">+ Create Project</button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(p => <ProjectCard key={p.title} project={p} />)}
        </div>
      </main>
    </div>
  );
};

export default Projects;