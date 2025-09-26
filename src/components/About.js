import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-white py-20 px-6 text-center text-slate-800">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-600">About Me</h2>
      <p className="max-w-3xl mx-auto text-lg">
        I'm a Full-Stack Web Developer based in Ibadan, Nigeria, with 3+ years of experience building responsive web applications.
        I specialize in JavaScript, React, Node.js, Nest.js and databases like MongoDB, PostgresSQL and MySQL. 
        I love creating tools that solve real-world problems.
      </p>

      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-4 text-violet-600">Tech Stack</h3>
        <div className="flex flex-wrap justify-center gap-4 text-white">
          {[
            "HTML", "CSS", "JavaScript", "React", "Node.js",
             "Express.js", "MongoDB", "MySQL", "Git", "AWS",
             "Docker", "Nest.js", "TypeScript", "PostgreSQL",
              "Prisma", "Tailwind CSS", "Sequelize", "Supabase"
          ].map((tech) => (
            <span key={tech} className="bg-indigo-600 px-4 py-2 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
