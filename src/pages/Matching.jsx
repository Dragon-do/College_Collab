import Sidebar from '../components/Sidebar';
import UserCard from '../components/UserCard';

const Matching = () => {
  const users = [
    { name: 'Chloe Kim', skills: ['UI/UX', 'Research'], experience: 'Junior', compatibility: 98 },
    { name: 'Marcus Bell', skills: ['Backend', 'Go'], experience: 'Senior', compatibility: 92 },
    { name: 'Priya Das', skills: ['ML', 'Data Science'], experience: 'Intermediate', compatibility: 85 },
  ];

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-grow md:ml-64 p-8">
        <h2 className="text-3xl font-bold mb-4">Teammate Matching</h2>
        <p className="text-slate-500 mb-8">We found {users.length} students who match your profile interests.</p>
        <div className="grid md:grid-cols-2 gap-6">
          {users.map(u => <UserCard key={u.name} user={u} />)}
        </div>
      </main>
    </div>
  );
};

export default Matching;