import React from 'react';
import { Section } from '../ui/Section';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  metric: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "I went from 60-hour weeks drowning in admin to focusing purely on strategy and deals. ExponentOS didn't just save time—it changed how I run my company.",
    name: "Sarah Chen",
    title: "Founder & CEO",
    company: "Velocity Ventures",
    metric: "25 hrs/week saved"
  },
  {
    quote: "The content engine alone is worth 10x the investment. One podcast episode now becomes a month of LinkedIn content, blog posts, and newsletters—automatically.",
    name: "Marcus Williams",
    title: "Managing Partner",
    company: "Apex Capital",
    metric: "42 content pieces/mo"
  },
  {
    quote: "I was skeptical about another 'AI tool' but this is different. The human verification layer means I trust what goes out. My inbox hit zero for the first time in years.",
    name: "Jennifer Park",
    title: "CEO",
    company: "ScaleUp Tech",
    metric: "Inbox Zero daily"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <Section id="testimonials" className="bg-white dark:bg-brand-black pt-20 pb-20 md:pt-32 md:pb-32 transition-colors duration-300 border-b border-brand-neutral-200 dark:border-brand-neutral-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black dark:text-white mb-4 uppercase tracking-tight transition-colors duration-300">
            Trusted By Elite Founders
          </h2>
          <p className="text-brand-neutral-500 text-sm max-w-xl mx-auto">
            Join 100+ founders who've installed operational sovereignty.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative p-8 border border-brand-neutral-200 dark:border-brand-neutral-800 bg-brand-neutral-50 dark:bg-brand-neutral-950 group hover:border-brand-red/50 transition-colors duration-300"
            >
              {/* Metric Badge */}
              <div className="absolute -top-3 right-6 px-3 py-1 bg-brand-red text-white text-xs font-bold uppercase tracking-wider">
                {testimonial.metric}
              </div>

              <Quote className="w-8 h-8 text-brand-red/20 mb-4" />

              <p className="text-brand-neutral-700 dark:text-brand-neutral-300 leading-relaxed mb-6 text-sm">
                "{testimonial.quote}"
              </p>

              <div className="border-t border-brand-neutral-200 dark:border-brand-neutral-800 pt-4">
                <div className="flex items-center gap-4">
                  {/* Avatar Placeholder */}
                  <div className="w-12 h-12 bg-brand-neutral-200 dark:bg-brand-neutral-800 flex items-center justify-center text-brand-neutral-500 font-bold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold text-brand-black dark:text-white text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-brand-neutral-500">
                      {testimonial.title}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Logos Placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-brand-neutral-200 dark:border-brand-neutral-800"
        >
          <p className="text-center text-xs text-brand-neutral-400 uppercase tracking-widest mb-8">
            Founders from companies backed by
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40">
            {['Y Combinator', 'a16z', 'Sequoia', 'Founders Fund', 'Accel'].map((name, i) => (
              <span key={i} className="text-lg font-bold text-brand-neutral-500 dark:text-brand-neutral-600">
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
