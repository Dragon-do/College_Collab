import { NavLink, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, User, FolderKanban, 
  Users, MessageSquare, LogOut 
} from 'lucide-react';

const Sidebar = () => {
  const navigate = useNavigate();
  const navItems = [
    { name: 'Dashboard', path: '/app/dashboard', icon: LayoutDashboard },
    { name: 'Profile', path: '/app/profile', icon: User },
    { name: 'Projects', path: '/app/projects', icon: FolderKanban },
    { name: 'Matching', path: '/app/matching', icon: Users },
    { name: 'Forum', path: '/app/forum', icon: MessageSquare },
  ];

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <aside className="w-64 h-screen bg-white border-r border-slate-200 fixed left-0 top-0 overflow-y-auto hidden md:block">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-blue-600">Hub Central</h1>
      </div>
      <nav className="mt-4 px-4 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => 
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-slate-600 hover:bg-slate-50'
              }`
            }
          >
            <item.icon size={20} />
            {item.name}
          </NavLink>
        ))}
        <button 
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
        >
          <LogOut size={20} />
          Logout
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;