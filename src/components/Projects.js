import React from "react";

const projects = [
  {
    title: "Student Result Management System",
    description: "A platform to manage and publish students' results efficiently.",
    tech: ["React", "Node.js", "Express.js", "MySQL"],
    link: "https://github.com/adeolaquadri/student-result-management-system"
  },
  // {
  //   title: "Restaurant Booking System",
  //   description: "A full-featured app for customers to book tables at restaurants.",
  //   tech: ["EJS", "MySQL", "Node.js", "Express.js"],
  //   link: "https://github.com/adeolaquadri/restaurant-booking-system"
  // },
  {
    title: "Payslip Processing App",
    description: "Uploads PDFs/Excel and emails payslips to employees automatically.",
    tech: ["Node.js", "Express.js", "pdf-parse", "Resend"],
    link: "https://github.com/adeolaquadri/payslip-management-system"
  },
  {
   title: "Quiz App",
   description: "Quiz App is a full-stack web application that allows users to take quizzes, submit answers, and receive scores. It is built using the MERN stack.",
   tech: ["React", "Node.js", "MongoDB"],
   link: "https://github.com/adeolaquadri/Quiz-App"
 },
 {
   title: "Liyah's Beauty",
   description: "A portfolio website that showcases liyah's beauty specialization in beauty treatments like hair styling, manicure and pedicure.",
   tech: ["React", "Node.js"],
   link: "https://github.com/adeolaquadri/Hairbyliyah"
 }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-slate-100 py-20 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-indigo-600">Projects</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-md text-left">
            <h3 className="text-xl font-bold mb-2 text-violet-600">{project.title}</h3>
            <p className="mb-4 text-slate-700">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span key={tech} className="bg-indigo-100 text-indigo-800 px-2 py-1 text-sm rounded-full">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 font-semibold hover:underline"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
