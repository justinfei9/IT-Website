import React from 'react';

export const Hero: React.FC = () => {
return (
    <div className="text-center max-w-4xl mx-auto">
      <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-cyan-400 uppercase bg-cyan-900/20 rounded-full border border-cyan-800/50 backdrop-blur-sm">
        System Status: Online
      </div>
      
      <h1 className="text-5xl md:text-7xl font-bold mb-10 tracking-tight leading-tight">
        <span className="block text-slate-100">Empowering Creativity</span>
        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x py-1.5">
          Through Enterprise IT
        </span>
      </h1>
      
      <p className="text-lg md:text-xl text-slate-400 mb-16 max-w-2xl mx-auto leading-relaxed">
        IT Specialist optimizing <strong>macOS environments</strong> for a leading advertising firm (Anomaly), 
        backed by critical <strong>Infrastructure experience</strong> from a utility corporation (Central Hudson), 
        and foundation in <strong>client-first Help Desk support</strong> (SUNY New Paltz).
      </p>
      


      {/* Stat cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
        
        {/* Card 1: Mac  */}
        <div className="px-6 py-8 rounded-xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm text-center flex flex-col justify-center transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-900/50">
          <div className="text-3xl font-bold text-cyan-400 mb-3">Mac</div>
          <div className="text-sm text-slate-400 whitespace-nowrap">Jamf MDM & M-Series</div>
        </div>
        
        {/* Card 2: Windows  */}
        <div className="px-6 py-8 rounded-xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm text-center flex flex-col justify-center transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-900/50">
          <div className="text-3xl font-bold text-purple-400 mb-3">Windows</div>
          <div className="text-sm text-slate-400 whitespace-nowrap">Active Directory & Azure</div>
        </div>
        
        {/* Card 3: Linux */}
        <div className="px-6 py-8 rounded-xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm text-center flex flex-col justify-center transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-900/50">
          <div className="text-3xl font-bold text-blue-400 mb-3">Linux</div>
          <div className="text-sm text-slate-400 whitespace-nowrap">Servers & Scripting</div>
        </div> 
      </div>
    </div>
  );
};