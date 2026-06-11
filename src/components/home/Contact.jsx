import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Instagram, Twitter, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 md:px-12 py-20 bg-[#FFFBEF] text-[#1B2D1C]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full text-center space-y-8 md:space-y-12"
      >
        <div className="space-y-4 md:space-y-6">
          <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }} className="inline-block">
            <Sparkles className="w-12 h-12 md:w-16 md:h-16 mx-auto text-[#F5C518]" />
          </motion.div>

          <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight leading-tight text-[#1B2D1C]">
            LET'S MAKE<br />SOMETHING GREAT
          </h2>
        </div>

        <p className="text-lg md:text-xl lg:text-2xl text-[#1B2D1C]/60 max-w-2xl mx-auto leading-relaxed px-4">
          Got content to create? A story to tell? A brand to build? Or just want to connect with someone who brings the energy?
        </p>

        <motion.a
          href="mailto:allisonfav24@gmail.com"
          whileHover={{ scale: 1.05 }}
          className="inline-block text-xl md:text-2xl lg:text-4xl font-bold text-[#1B2D1C] hover:text-[#3B6B3F] transition-colors duration-300 break-all px-4"
        >
          allisonfav24@gmail.com
        </motion.a>

        <div className="flex justify-center gap-6 pt-6 md:pt-8">
          {[
            { href: 'https://www.instagram.com/energyoganla', icon: Instagram },
            { href: 'https://x.com/energyoganla', icon: Twitter },
            { href: 'mailto:allisonfav24@gmail.com', icon: Mail },
          ].map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={index}
                whileHover={{ y: -4, scale: 1.1 }}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-[#1B2D1C] text-white hover:bg-[#F5C518] hover:text-[#1B2D1C] transition-all duration-300"
              >
                <Icon className="w-5 h-5 md:w-6 md:h-6" />
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
