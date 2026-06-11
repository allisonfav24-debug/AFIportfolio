import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../../components/ui/Card';
import { Instagram, ExternalLink } from 'lucide-react';

const FEATURED_WORK = [
  {
    id: 1,
    title: 'StreetChurch Content Programme',
    description: 'Planned and executed content calendars across social and community channels. Produced engaging copy and visuals that aligned with brand goals.',
    link: 'https://www.instagram.com/reel/DIREJVVsQdY/',
    type: 'instagram',
    tags: ['Content Strategy', 'Social Media', 'Copywriting'],
    category: 'Content & Strategy',
    color: 'from-[#F5C518] to-[#D4A017]',
  },
  {
    id: 2,
    title: 'Social Media Management — Capagem',
    description: 'End-to-end social media management for Capagem Cakes & More. Growing page visibility, driving traction, and crafting content that converted followers into customers.',
    link: 'https://www.instagram.com/capagem_cakesnmore/',
    type: 'instagram',
    tags: ['Social Media', 'Brand Growth', 'Content'],
    category: 'Social Media',
    color: 'from-[#3B6B3F] to-[#243B26]',
  },
  {
    id: 3,
    title: 'Interview Features — StreetChurch',
    description: 'Featured in on-camera interviews and media appearances representing the StreetChurch brand. Fast-paced storytelling, on-screen energy, and authentic engagement.',
    link: 'https://www.instagram.com/reel/DHtID8GtdNT/',
    type: 'instagram',
    tags: ['Media', 'On-Camera', 'Brand Rep'],
    category: 'Media & Interviews',
    color: 'from-[#8B4513] to-[#6B3410]',
  },
];

export default function Work() {
  return (
    <section id="work" className="py-32 px-4 sm:px-6 md:px-12 bg-[#1B2D1C] text-white">
      <div className="max-w-screen-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight mb-6">Show Workings!</h2>
          <p className="text-lg sm:text-xl md:text-2xl text-white/50 max-w-3xl mx-auto">
            Content. Media. Strategy. All of it, done with energy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {FEATURED_WORK.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <a href={project.link} target="_blank" rel="noreferrer" className="block h-full">
                <Card className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-[#F5C518]/40 transition-all duration-500 group cursor-pointer h-full overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-[#243B26] to-[#111E12] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                    <div className="absolute bottom-3 left-3 z-20">
                      <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${project.color} text-white`}>
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 z-20">
                      <Instagram className="w-5 h-5 text-[#F5C518]/70 group-hover:text-[#F5C518] transition-colors" />
                    </div>
                  </div>

                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-3 group-hover:text-[#F5C518] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-2 py-1 text-xs bg-[#F5C518]/10 text-[#F5C518] rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="pt-4 border-t border-white/10">
                      <span className="inline-flex items-center gap-2 text-white/60 group-hover:text-[#F5C518] text-sm transition-colors">
                        <ExternalLink className="w-4 h-4" />
                        View on Instagram
                      </span>
                    </div>
                  </div>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-white/40 text-base mb-6">Like what you see? Let's build something together.</p>
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-[#F5C518] text-[#1B2D1C] hover:bg-[#F9D857] transition-all duration-300 text-lg px-8 py-4 font-bold rounded-lg"
          >
            GET IN TOUCH
          </button>
        </motion.div>
      </div>
    </section>
  );
}
