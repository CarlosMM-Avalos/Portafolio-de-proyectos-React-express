function Skills() {
  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "MySQL",
    "Laravel",
    "Git"
  ];

  return (
    <section className="bg-gray-900 text-white py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-400">
        Habilidades
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-blue-500 px-4 py-2 rounded-full text-sm hover:bg-blue-600 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;