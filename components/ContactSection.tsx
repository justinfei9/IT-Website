import React from 'react';

export const ContactSection: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto text-center px-4" id="contact">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-100">Ready to Upgrade?</h2>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Email Card */}
        <a 
          href="mailto:JustinFeinman89@gmail.com" 
          className="group p-8 rounded-2xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-900/50"
        >
          <div className="w-14 h-14 bg-slate-800/50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-900/30 group-hover:text-purple-400 text-slate-400 transition-colors border border-slate-700 group-hover:border-purple-500/30 backdrop-blur-sm">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          </div>
          <h3 className="text-xl font-semibold text-slate-200 mb-2">Email Me</h3>
          <p className="text-purple-400/80 font-medium">JustinFeinman89@gmail.com</p>
        </a>

        {/* LinkedIn Card */}
        <a 
          href="https://www.linkedin.com/in/justin-feinman-34609726a" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="group p-8 rounded-2xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-900/50"
        >
          <div className="w-14 h-14 bg-slate-800/50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-900/30 group-hover:text-purple-400 text-slate-400 transition-colors border border-slate-700 group-hover:border-purple-500/30 backdrop-blur-sm">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
          </div>
          <h3 className="text-xl font-semibold text-slate-200 mb-2">Connect on LinkedIn</h3>
          <p className="text-purple-400/80 font-medium">View Professional Profile</p>
        </a>
      </div>
    </div>
  );
};