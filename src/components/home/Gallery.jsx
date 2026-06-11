import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const GALLERY = [
  {
    id: 1,
    src: '/gallery-1.jpg',
    alt: 'EnergyOganla on set — media appearance',
    caption: 'On set. In her element.',
  },
  {
    id: 2,
    src: '/gallery-2.jpg',
    alt: 'EnergyOganla with @juliusagbaje — The Artist',
    caption: '@juliusagbaje — The Artist.',
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="gallery" className="py-32 px-6 md:px-12 bg-[#1B2D1C] text-white">
      <div className="max-w-screen-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">GALLERY</h2>
          <p className="text-white/40 text-lg">In the room. Behind the mic. On the scene.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {GALLERY.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onClick={() => setSelected(item)}
              className="group cursor-pointer relative overflow-hidden rounded-2xl aspect-[3/4]"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B2D1C]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white font-semibold text-sm">{item.caption}</p>
              </div>
              {/* Yellow corner accent */}
              <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#F5C518] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-lg flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative max-w-lg w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-4 -right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-[#F5C518] text-[#1B2D1C] hover:bg-[#F9D857] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              <img
                src={selected.src}
                alt={selected.alt}
                className="w-full rounded-2xl object-cover"
              />
              <p className="text-center text-white/60 text-sm mt-4">{selected.caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
