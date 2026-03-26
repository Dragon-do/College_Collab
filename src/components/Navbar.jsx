import { Link } from 'react-router-dom';

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem('user_data'));

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-xl font-bold text-blue-600">StudentHub</Link>
          <div className="flex gap-4">
            {!user ? (
              <>
                <Link to="/login" className="btn-secondary">Login</Link>
                <Link to="/signup" className="btn-primary">Get Started</Link>
              </>
            ) : (
              <Link to="/app/dashboard" className="btn-primary">Dashboard</Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;