const ProjectCard = ({ project }) => (
  <div className="card p-6 flex flex-col h-full">
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-lg font-bold text-slate-800">{project.title}</h3>
      <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
        {project.teamSize} slots
      </span>
    </div>
    <p className="text-slate-600 text-sm mb-4 flex-grow">{project.description}</p>
    <div className="flex flex-wrap gap-2 mb-6">
      {project.skills.map(skill => (
        <span key={skill} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
          {skill}
        </span>
      ))}
    </div>
    <div className="flex items-center justify-between mt-auto">
      <span className="text-xs text-slate-400 italic">Deadline: {project.deadline}</span>
      <button className="text-blue-600 font-semibold text-sm hover:underline">Join Project</button>
    </div>
  </div>
);

export default ProjectCard;