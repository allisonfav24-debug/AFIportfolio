import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/Button';
import { ArrowDown } from 'lucide-react';

const TAGLINE_ITEMS = ['CREATIVE', 'INTERVIEWER', 'Content-Strategist', 'Virtual Assistant'];

export default function Hero({ scrollToSection }) {
  return (
    <motion.section id="hero" className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 relative overflow-hidden bg-[#1B2D1C]">
      {/* Subtle texture overlay */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.06, scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1920&h=1080&fit=crop')",
          filter: 'grayscale(100%) blur(3px)'
        }}
      />

      {/* Yellow glow accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F5C518]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 py-24 max-w-5xl w-full text-center">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[#F5C518] text-sm md:text-base font-semibold tracking-[0.3em] uppercase mb-4"
          >
            formerly known as EnergyOganla
          </motion.p>
          <motion.h1 className="text-6xl md:text-9xl font-bold tracking-tight mb-8 leading-none text-white">
            Allison Favour<br />
            <span className="text-[#F5C518]">Ifeoluwa</span>
          </motion.h1>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }} className="space-y-6">
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4">
            {TAGLINE_ITEMS.map((item, i) => (
              <React.Fragment key={item}>
                <span className="text-lg md:text-2xl font-light text-white tracking-wide">{item}</span>
                {i < TAGLINE_ITEMS.length - 1 && (
                  <span className="text-[#F5C518] text-xl md:text-3xl font-thin select-none">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
          <p className="text-base md:text-lg text-white/50 max-w-xl mx-auto">
            On-screen energy. Off-screen strategy.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.2 }} className="mt-16">
          <Button
            onClick={() => scrollToSection('about')}
            size="lg"
            className="bg-[#F5C518] text-[#1B2D1C] hover:bg-[#F9D857] transition-all duration-300 text-lg px-8 py-6 font-bold"
          >
            DISCOVER MORE
          </Button>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        onClick={() => scrollToSection('about')}
        className="absolute bottom-12 text-white/40 hover:text-[#F5C518] transition-colors duration-300 flex flex-col items-center gap-2"
      >
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </motion.button>
    </motion.section>
  );
}
