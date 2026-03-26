import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    { title: "Skill-Based Matching", desc: "Our algorithm connects you with peers who complement your skill set." },
    { title: "Project Rooms", desc: "Dedicated spaces to organize tasks and communicate with your group." },
    { title: "Discussion Forum", desc: "Ask questions, share resources, and get help from the community." },
    { title: "Ratings & Feedback", desc: "Build your reputation as a reliable and skilled collaborator." }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <header className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 leading-tight">
          Find the Right Teammates. <br/><span className="text-blue-600">Build Better Projects.</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
          Connect with students based on skills, interests, and availability. The ultimate hub for academic collaboration.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/signup" className="btn-primary px-8 py-4 text-lg">Get Started</Link>
          <Link to="/login" className="btn-secondary px-8 py-4 text-lg">Login</Link>
        </div>
      </header>

      <section className="bg-slate-50 py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          {features.map(f => (
            <div key={f.title} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-xl mb-3">{f.title}</h3>
              <p className="text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 text-center px-4">
        <h2 className="text-3xl font-bold mb-12">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-center gap-12 items-center">
          <div className="max-w-xs">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">1</div>
            <h4 className="font-bold text-lg">Create profile</h4>
            <p className="text-slate-500">Add your skills, tools, and experience level.</p>
          </div>
          <div className="max-w-xs">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">2</div>
            <h4 className="font-bold text-lg">Get matched</h4>
            <p className="text-slate-500">Discover students and projects looking for you.</p>
          </div>
          <div className="max-w-xs">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">3</div>
            <h4 className="font-bold text-lg">Start collaborating</h4>
            <p className="text-slate-500">Build amazing things and grow your network.</p>
          </div>
        </div>
      </section>

      <footer className="border-t py-10 text-center text-slate-500 text-sm">
        &copy; 2026 Student Collaboration Hub. Built for creators.
      </footer>
    </div>
  );
};

export default Home;