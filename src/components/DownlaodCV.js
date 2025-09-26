import React from 'react'

const DownloadCV = () => {
   return (
     <section className="py-16 bg-slate-100 text-center">
       <h2 className="text-2xl font-bold text-slate-800">Want to know more?</h2>
       <p className="text-slate-600 mt-2">Grab a copy of my resume below.</p>
       <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">
  <a
    href="/Adeola_Quadri_Developer_2025.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
  >
    👁️ View CV
  </a>
  <a
    href="/Adeola_Quadri_Web_Developer_Resume2025.pdf"
    download
    className="bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-900 transition"
  >
    ⬇️ Download CV
  </a>
</div>

     </section>
   );
 };
 
 export default DownloadCV;
 