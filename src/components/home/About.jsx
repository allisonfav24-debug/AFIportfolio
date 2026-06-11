import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/Button';

export default function About({ scrollToSection }) {
  return (
    <section id="about" className="min-h-screen flex items-center px-6 md:px-12 py-32 bg-[#FFFBEF] text-[#1B2D1C]">
      <div className="max-w-screen-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              I am EnergyOganla,
              <br />
              <span className="text-[#3B6B3F]">Here's a brief overview of who I am and the value I bring.</span>
            </h2>

            <div className="prose prose-lg max-w-none space-y-6 text-[#2C3E2E]">
              <p className="text-xl md:text-2xl leading-relaxed font-medium">
                Allison Favour Ifeoluwa — formally known as "EnergyOganla" — is a master of good humor, fast-paced storytelling, and crackling on-screen energy.
              </p>

              <p className="text-lg leading-relaxed">
                She has an uncanny ability to bring life into any form of art. She loves to converse, ask questions, and create unforgettable moments.
              </p>

              <p className="text-lg leading-relaxed">
                When she's not in front of the camera, she thrives on turning ambitious ideas into visible momentum. Whether it's crafting scroll-stopping content, building authentic community connections, or streamlining day-to-day operations — she helps brands expand their reach with strategy, creativity, and consistency.
              </p>

              <p className="text-lg leading-relaxed font-semibold text-[#1B2D1C]">
                She loves The Media. She loves Pop-culture. And she plans to reign here.
              </p>

              <p className="text-lg leading-relaxed italic text-[#3B6B3F]">
                Ask around — she knows her stuff.
              </p>
            </div>
          </div>

          <motion.div whileHover={{ scale: 1.02 }} className="inline-block">
            <Button
              onClick={() => scrollToSection('work')}
              size="lg"
              className="bg-[#1B2D1C] text-white hover:bg-[#243B26] transition-all duration-300 text-lg px-8 py-6 font-semibold"
            >
              SEE THE WORK
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
