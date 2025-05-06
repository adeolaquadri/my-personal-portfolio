import React, { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/mnnddrkb", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("SUCCESS");
      form.reset();
    } else {
      setStatus("ERROR");
    }
  };

  return (
    <section id="contact" className="bg-white py-20 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-600">Contact Me</h2>
      <p className="mb-8 text-slate-700 max-w-xl mx-auto">
        Got a question, feedback, or a project idea? Let's connect!
      </p>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-3 border border-slate-300 rounded-lg"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-3 border border-slate-300 rounded-lg"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          required
          className="w-full p-3 border border-slate-300 rounded-lg"
        ></textarea>
        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          Send Message
        </button>

        {status === "SUCCESS" && <p className="text-green-600 mt-2">Thanks! Your message has been sent.</p>}
        {status === "ERROR" && <p className="text-red-600 mt-2">Oops! Something went wrong.</p>}
      </form>
    </section>
  );
};

export default Contact;
