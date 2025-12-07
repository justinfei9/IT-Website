import React from 'react';
import { SKILLS_DATA } from '../constants';

export const SkillsSection: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100">Skills</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
    
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SKILLS_DATA.map((skillGroup) => (
          <div 
            key={skillGroup.category} 
          
            className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm hover:bg-slate-800/40 transition-all duration-300 hover:border-blue-500/50 group hover:shadow-xl hover:shadow-blue-900/50"
          >
            <h3 className="text-xl font-bold text-slate-200 mb-6 flex items-center">
             
              <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full mr-4"></span>
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skillGroup.items.map((item) => (
                <div 
                  key={item} 

                  className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-sm text-slate-300 shadow-sm group-hover:border-blue-500/50 group-hover:text-blue-100 transition-all backdrop-blur-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};