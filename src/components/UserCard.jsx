const UserCard = ({ user }) => (
  <div className="card p-5 flex items-center gap-4">
    <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
      {user.name[0]}
    </div>
    <div className="flex-grow">
      <h4 className="font-bold text-slate-800">{user.name}</h4>
      <p className="text-xs text-slate-500 mb-2">{user.experience} exp • {user.compatibility}% Match</p>
      <div className="flex flex-wrap gap-1">
        {user.skills.slice(0, 3).map(s => (
          <span key={s} className="text-[10px] border border-slate-200 px-1.5 py-0.5 rounded text-slate-600">{s}</span>
        ))}
      </div>
    </div>
    <button className="btn-primary py-1.5 px-3 text-sm">Connect</button>
  </div>
);

export default UserCard;