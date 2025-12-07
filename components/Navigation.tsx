import React, { useState } from 'react';

interface NavigationProps {
  activeSection: string;
  // We now accept a direct click handler instead of a state setter
  onNavClick: (id: string) => void;
}

// Color mapping for dynamic Nav styling
const SECTION_COLORS: { [key: string]: { text: string, gradientFrom: string } } = {
  // Cyan for Home/Experience
  hero: { text: 'text-cyan-400', gradientFrom: 'from-cyan-400' },
  experience: { text: 'text-cyan-400', gradientFrom: 'from-cyan-400' },
  // Deep Blue for Skills (matches Linux card)
  skills: { text: 'text-blue-400', gradientFrom: 'from-blue-400' }, 
  // Purple for Contact (matches Windows card)
  contact: { text: 'text-purple-400', gradientFrom: 'from-purple-400' },
};

export const Navigation: React.FC<NavigationProps> = ({ activeSection, onNavClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleItemClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onNavClick(id);
  };

  // Helper to get current active color styles
  const getActiveColor = () => {
    return SECTION_COLORS[activeSection] || SECTION_COLORS.hero;
  };

  const { gradientFrom: activeGradient } = getActiveColor();

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-slate-800/50 bg-slate-900/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo - Dynamic Gradient */}
        <div 
          className={`text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${activeGradient} to-blue-500 cursor-pointer`} 
          onClick={() => handleItemClick('hero')}
        >
          Justin <span className="text-slate-100">Feinman</span>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => {
            // Get the specific color for this item if it were active
            const itemColorClass = SECTION_COLORS[item.id]?.text || SECTION_COLORS.hero.text;

            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`text-sm font-medium transition-colors duration-300 ${
                  activeSection === item.id 
                    ? itemColorClass 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-slate-300 hover:text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 absolute w-full left-0 top-16 px-6 py-4 flex flex-col space-y-4 shadow-2xl">
           {navItems.map((item) => {
             const itemColorClass = SECTION_COLORS[item.id]?.text || SECTION_COLORS.hero.text;

             return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`text-left text-sm font-medium py-2 ${
                  activeSection === item.id 
                    ? itemColorClass 
                    : 'text-slate-400'
                }`}
              >
                {item.label}
              </button>
            );
           })}
        </div>
      )}
    </nav>
  );
};