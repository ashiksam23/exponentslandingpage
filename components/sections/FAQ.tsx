import React, { useState } from 'react';
import { Section } from '../ui/Section';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Shield } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    question: "Is this just an Executive Assistant?",
    answer: "No. ExponentOS is a hybrid system combining AI processing with elite human verification. It handles complex workflows like content repurposing, financial operations, and strategic admin—not just calendar scheduling. Think of it as a Chief of Staff system, not a task-runner."
  },
  {
    question: "How fast is the onboarding?",
    answer: "Immediate. The system installs in 48 hours. We audit your current administrative debt and deploy the necessary modules (Inbox, Finance, Content) instantly. Most clients see ROI within the first week."
  },
  {
    question: "What if it doesn't work for my business?",
    answer: "We offer a 30-day money-back guarantee. If you don't see measurable time savings and operational improvements within the first month, we'll refund your investment in full. No questions asked."
  },
  {
    question: "How is this different from hiring a VA or COO?",
    answer: "A VA requires training, management, and scales linearly (1 hour input = 1 hour output). A full-time COO costs $200-400K/year. ExponentOS gives you exponential output (1 hour = 10 units) with zero management burden, at a fraction of the cost."
  },
  {
    question: "What tools and systems do you integrate with?",
    answer: "We integrate with your existing stack: Gmail/Outlook, Google Calendar, Slack, Notion, QuickBooks, Stripe, HubSpot, and 50+ other tools. If you use it, we can likely connect to it."
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes. Plans are month-to-month with no long-term contracts. You can upgrade instantly or downgrade at any billing cycle. We recommend starting with T1 (Operations) and scaling up as you see results."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" className="bg-white dark:bg-brand-black pt-20 pb-20 md:pt-32 md:pb-32 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black dark:text-white mb-4 uppercase tracking-tight transition-colors duration-300">
            Frequently Asked Questions
          </h2>
          <p className="text-brand-neutral-500 text-sm max-w-xl mx-auto">
            Everything you need to know before installing operational sovereignty.
          </p>
        </motion.div>

        <div className="space-y-4">
          {FAQ_DATA.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-brand-neutral-200 dark:border-brand-neutral-800 transition-colors duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-brand-neutral-50 dark:hover:bg-brand-neutral-900 transition-colors duration-300"
              >
                <span className="text-lg font-semibold text-brand-black dark:text-white pr-8">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-brand-neutral-500 transition-transform duration-300 shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-brand-neutral-600 dark:text-brand-neutral-400 leading-relaxed border-t border-brand-neutral-100 dark:border-brand-neutral-800 pt-4">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Money-Back Guarantee Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col items-center"
        >
          <div className="flex items-center gap-4 p-6 border-2 border-brand-red/20 bg-brand-red/5 dark:bg-brand-red/10">
            <Shield className="w-12 h-12 text-brand-red shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-brand-black dark:text-white mb-1">
                30-Day Money-Back Guarantee
              </h3>
              <p className="text-sm text-brand-neutral-600 dark:text-brand-neutral-400">
                If you don't see measurable results within 30 days, we'll refund 100% of your investment. Zero risk.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
