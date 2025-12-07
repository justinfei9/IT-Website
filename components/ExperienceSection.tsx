import React from 'react';
import { EXPERIENCE_DATA } from '../constants';

const IconMac = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
);

const IconServer = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
);

const IconSupport = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
);

export const ExperienceSection: React.FC = () => {
  return (
    <div id="experience"> 
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100">Professional Journey</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full shadow-lg shadow-cyan-500/50"></div>
      </div>

      <div className="relative container mx-auto flex flex-col space-y-16">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-transparent via-slate-700 to-transparent -translate-x-1/2 md:translate-x-0"></div>

        {EXPERIENCE_DATA.map((exp, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div key={exp.id} className={`flex flex-col md:flex-row items-center group ${isLeft ? 'md:flex-row-reverse' : ''}`}>
              
              <div className="hidden md:block w-1/2"></div>

              {/* Icon Node */}
              <div className="absolute left-4 md:left-1/2 w-12 h-12 bg-slate-900 border-2 border-slate-600 rounded-full -translate-x-1/2 z-10 flex items-center justify-center text-slate-400 group-hover:border-cyan-500 group-hover:text-cyan-400 transition-colors duration-300 shadow-xl">
                {exp.icon === 'laptop' && <IconMac />}
                {exp.icon === 'server' && <IconServer />}
                {exp.icon === 'support' && <IconSupport />}
              </div>

              {/* Card Container */}
              <div className={`w-full md:w-5/12 pl-12 md:pl-0 text-left ${isLeft ? 'md:pr-8 md:ml-auto' : 'md:pl-8 md:mr-auto'}`}>
                
                {/* Card Content: Glow classes added here */}
                <div className="relative overflow-hidden bg-slate-900/40 border border-slate-700/50 p-6 rounded-2xl transition-all duration-300 hover:bg-slate-800/60 hover:border-cyan-500/50 backdrop-blur-md hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-900/50 group">
                  
                  {/* Header/Meta Info */}
                  <div className={`flex flex-col gap-1 mb-4 md:items-start`}>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-100 group-hover:text-cyan-50 transition-colors">{exp.role}</h3>
                    <div className="text-cyan-400 font-medium text-lg tracking-wide">{exp.company}</div>
                    <div className="text-slate-500 text-xs uppercase tracking-widest font-semibold bg-slate-800/50 px-2 py-1 rounded inline-block">{exp.period}</div>
                  </div>
                  
                  {/* Paragraph text */}
                  <p className="text-slate-400 mb-6 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                    {exp.description}
                  </p>
                  
                  {/* Tech stack tags */}
                  <div className={`flex flex-wrap gap-2 justify-start`}>
                    {exp.techStack.map(tech => (
                      <span key={tech} className="px-3 py-1 text-xs font-medium rounded-full bg-slate-800 text-slate-400 border border-slate-700 transition-all duration-300 group-hover:border-cyan-500/30 group-hover:bg-cyan-900/20 group-hover:text-cyan-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};