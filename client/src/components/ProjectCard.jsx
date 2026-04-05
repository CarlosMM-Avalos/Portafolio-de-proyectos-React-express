function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
      <h2 className="text-xl font-bold mb-2 text-gray-800">
        {project.title}
      </h2>

      <p className="text-gray-600 mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((t, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;