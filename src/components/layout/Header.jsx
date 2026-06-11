import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 mix-blend-difference">
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
          <motion.div whileHover={{ scale: 1.05 }} onClick={() => scrollTo('hero')} className="text-lg font-bold tracking-tight cursor-pointer text-white">
            AFI
          </motion.div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-12 h-12 flex flex-col items-center justify-center gap-1.5 group"
          >
            <motion.span animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 8 : 0 }} className="w-6 h-0.5 bg-white group-hover:w-8 transition-all" />
            <motion.span animate={{ opacity: isMenuOpen ? 0 : 1 }} className="w-6 h-0.5 bg-white group-hover:w-8 transition-all" />
            <motion.span animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -8 : 0 }} className="w-6 h-0.5 bg-white group-hover:w-8 transition-all" />
          </button>
        </div>
      </motion.nav>

      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -100, pointerEvents: isMenuOpen ? 'auto' : 'none' }}
        transition={{ duration: 0.4 }}
        className="fixed inset-0 z-40 bg-[#1B2D1C] flex items-center justify-center"
      >
        <div className="text-center space-y-8">
          {[
            { label: 'About', id: 'about' },
            { label: 'Work', id: 'work' },
            { label: 'Experience', id: 'resume' },
            { label: 'Contact', id: 'contact' },
          ].map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : 20 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => scrollTo(item.id)}
              className="block text-5xl md:text-7xl font-bold text-white hover:text-[#F5C518] transition-colors duration-300"
            >
              {item.label}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </>
  )
}
