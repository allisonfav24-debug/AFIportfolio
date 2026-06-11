import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    client: 'Capagem',
    handle: '@capagem_cakesnmore',
    role: 'Content Client',
    quote:
      'You were definitely dedicated to ensuring the page got views and traction. You were passionate and patient with me, helping me develop content that you put together perfectly. I was very satisfied and when I go back to fully focus on the business after I am done with school I will very much love to work with you.',
  },
  {
    id: 2,
    client: 'LightPen',
    handle: 'LightPen',
    role: 'Personal Assistant Client',
    quote:
      'Working with you was a pleasant experience — being able to keep up with my spontaneity and schedule was something I truly appreciated. You demonstrated professionalism, reliability, and a willingness to learn throughout our time working together. Communication was clear, and you attended to every detail in my work. I particularly appreciated your hyper and energetic attitude and still being able to follow instructions while maintaining a good standard of work. I would recommend you to anyone looking for a dedicated and dependable Personal Assistant.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 px-6 md:px-12 bg-[#FFFBEF] text-[#1B2D1C]">
      <div className="max-w-screen-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">WHAT THEY SAY</h2>
          <p className="text-lg text-[#1B2D1C]/50">Ask around — here's the proof.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              <div className="h-full bg-white rounded-2xl p-8 shadow-sm border border-[#1B2D1C]/8 flex flex-col gap-6 hover:shadow-md hover:border-[#F5C518]/40 transition-all duration-300">
                <Quote className="w-8 h-8 text-[#F5C518] flex-shrink-0" />

                <p className="text-[#1B2D1C]/80 text-base md:text-lg leading-relaxed flex-grow">
                  "{review.quote}"
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-[#1B2D1C]/10">
                  <div className="w-10 h-10 rounded-full bg-[#F5C518] flex items-center justify-center text-[#1B2D1C] font-bold text-sm flex-shrink-0">
                    {review.client.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-[#1B2D1C]">{review.client}</p>
                    <p className="text-sm text-[#1B2D1C]/50">{review.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
