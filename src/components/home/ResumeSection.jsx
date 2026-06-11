import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Briefcase, Mic2, PenTool, Sparkles, Coffee, FileText, Download } from 'lucide-react';

export default function ResumeSection() {
  const [isHovering, setIsHovering] = useState(false);

  const stats = [
    { icon: Briefcase, number: '2+', label: 'Years Experience' },
    { icon: Mic2, number: '10+', label: 'Media Appearances' },
    { icon: PenTool, number: '50+', label: 'Content Pieces' },
    { icon: Coffee, number: '∞', label: 'Ideas Per Day' },
  ];

  const skills = [
    { name: 'Content Strategy', level: 92 },
    { name: 'Interviewing & Media', level: 90 },
    { name: 'Copywriting & Storytelling', level: 95 },
    { name: 'Social Media Management', level: 88 },
    { name: 'Brand Representation', level: 85 },
    { name: 'Virtual Assistance', level: 82 },
  ];

  const experience = [
    {
      role: 'Assistant Content-Lead',
      org: 'StreetChurch',
      location: 'Lagos, Nigeria',
      points: [
        'Planned and executed content calendars across social and community channels.',
        'Produced engaging copy and visuals aligned with brand goals.',
        'Featured in interviews and attended media junkets for brand representation.',
      ],
    },
  ];

  return (
    <section id="resume" className="py-32 px-6 md:px-12 bg-[#111E12] text-white">
      <div className="max-w-screen-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">THE RECEIPTS</h2>
          <p className="text-xl text-white/40">AKA: experience, skills, and proof of work</p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-white/5 border-none p-8 text-center hover:bg-[#F5C518]/10 transition-all duration-300">
                  <motion.div whileHover={{ scale: 1.1, rotate: 360 }} transition={{ duration: 0.5 }}>
                    <Icon className="w-12 h-12 mx-auto mb-4 text-[#F5C518]" />
                  </motion.div>
                  <h3 className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</h3>
                  <p className="text-white/40 text-sm">{stat.label}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-4xl font-bold mb-10 text-center">What I'm Really Good At</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="text-base md:text-lg font-medium">{skill.name}</span>
                  <span className="text-sm text-[#F5C518]">{skill.level}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-[#F5C518] to-[#D4A017] rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center">Experience</h3>
          <div className="max-w-3xl mx-auto space-y-6">
            {experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="p-6 md:p-8 bg-white/5 hover:bg-white/10 border-[#F5C518]/20 hover:border-[#F5C518]/40 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <Briefcase className="w-8 h-8 text-[#F5C518]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                      <p className="text-[#F5C518] font-semibold mb-1">{exp.org}</p>
                      <p className="text-white/40 text-sm mb-4">{exp.location}</p>
                      <ul className="space-y-2">
                        {exp.points.map((point, i) => (
                          <li key={i} className="text-white/70 text-sm leading-relaxed flex gap-2">
                            <span className="text-[#F5C518] mt-1 flex-shrink-0">→</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Resume CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <Card
            className="bg-gradient-to-br from-[#F5C518]/15 to-[#F5C518]/5 border-[#F5C518]/30 p-12 text-center relative overflow-hidden"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <motion.div
              animate={{ scale: isHovering ? 1.5 : 1, rotate: isHovering ? 180 : 0, opacity: isHovering ? 0.1 : 0.05 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <FileText className="w-64 h-64 text-[#F5C518]" />
            </motion.div>

            <div className="relative z-10">
              <motion.div animate={{ y: isHovering ? -10 : 0 }} transition={{ duration: 0.3 }}>
                <FileText className="w-20 h-20 mx-auto mb-6 text-[#F5C518]" />
              </motion.div>

              <h3 className="text-4xl md:text-5xl font-bold mb-4">Want the Full Story?</h3>
              <p className="text-xl text-white/40 mb-8 max-w-xl mx-auto">
                Download the resume for all the official details — the full picture of what I bring to the table.
              </p>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-[#F5C518] text-[#1B2D1C] hover:bg-[#F9D857] transition-all duration-300 text-xl px-10 py-7 font-bold group"
                >
                  <Download className="mr-3 w-6 h-6 group-hover:animate-bounce" />
                  <a href="https://energyoganla-professional-cv.tiiny.site/" target="_blank" rel="noreferrer">Download Resume</a>
                  <motion.span animate={{ x: isHovering ? 5 : 0 }} transition={{ duration: 0.3 }} className="ml-3">→</motion.span>
                </Button>
              </motion.div>

              <p className="text-sm text-white/30 mt-6">PDF — Updated 2026</p>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-white/30 italic">If you've made it this far — we should talk.</p>
        </motion.div>
      </div>
    </section>
  );
}
