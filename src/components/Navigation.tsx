import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: '/#home', label: 'Home' },
    { id: '/#gallery', label: 'Gallery' },
    { id: '/#founders', label: 'Founders' },
    { id: '/#process', label: 'How It Works' },
    { id: '/#pricing', label: 'Pricing' },
    { id: '/#contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#080605b3] backdrop-blur-[16px] border-b border-line transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        <a href="/#home" className="text-2xl font-serif tracking-wide text-text-main hover:text-gold transition-colors">
          INVITE BY DS
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-sm uppercase items-center">
          {navLinks.map((link) => (
            <a key={link.id} href={link.id} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} title="Toggle menu" className="text-muted hover:text-white transition-colors cursor-pointer">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 w-full bg-[#14100d] shadow-lg border-t border-line flex flex-col md:hidden overflow-hidden"
            >
              <div className="py-6 px-6 flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.id}
                    className="nav-link text-lg uppercase tracking-wider w-max"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
