import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { createWhatsAppUrl } from '../data/company';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const HOME_FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How quickly can a new fiber broadband line be installed in Thane?',
    answer: 'Standard installation typically takes 24 to 48 hours once residential society fiber duct feasibility is verified. Our local Thane technicians conduct the initial line check, run the optical fiber cable, configure your Wi-Fi credentials, and test symmetric upload/download speeds on-site before handover.'
  },
  {
    id: 'faq-2',
    question: 'Do I need to buy my own router, or does Plus Internet provide one?',
    answer: 'Both options are available. You can either use your existing compatible gigabit router or select from our verified inventory of dual-band Wi-Fi 6 routers and multi-node mesh systems. Our technicians configure and optimize whichever hardware you choose.'
  },
  {
    id: 'faq-3',
    question: 'How do you fix Wi-Fi dead zones in thick-walled Thane apartments?',
    answer: 'Thane apartments often have dense concrete walls that degrade 5GHz radio signals. We perform an on-site RF signal audit and install either a dual-band mesh system with Ethernet backhaul or strategic ceiling access points, ensuring uninterrupted coverage in every room and balcony.'
  },
  {
    id: 'faq-4',
    question: 'Can you assist with building society permissions and riser ducting?',
    answer: 'Yes. We are familiar with housing society regulations across Ghodbunder Road, Naupada, Majiwada, and Wagle Estate. We coordinate with society management committees to ensure neat, concealed optical fiber routing through common risers.'
  },
  {
    id: 'faq-5',
    question: 'What warranty is included with CCTV cameras and network switches?',
    answer: 'All networking equipment (routers, PoE switches, CCTV cameras, server racks) is supplied brand new with standard manufacturer warranties. We also offer local on-site installation warranties covering cabling termination and physical camera alignment.'
  },
  {
    id: 'faq-6',
    question: 'Why is there no contact form, and how do I get a custom quote?',
    answer: 'We prioritize fast, human customer service over slow web contact forms. Clicking any quote button on the site opens WhatsApp with your prefilled requirements, connecting you directly to our local Thane technical team for immediate answers.'
  }
];

export const HomeFAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleItem = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section className="py-20 bg-[#F7F8FA] border-t border-[#E8E8EC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F52619]">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#24252B] tracking-tight">
            Common Inquiries & Answers
          </h2>
          <p className="text-sm text-[#737782] max-w-xl mx-auto">
            Everything you need to know about broadband installation, router selection, and networking services across Thane.
          </p>
        </div>

        {/* Collapsible Accordion Container */}
        <div className="space-y-3">
          {HOME_FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-white border border-[#E8E8EC] overflow-hidden transition-all duration-200 shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left text-[#24252B] hover:text-[#F52619] transition-colors cursor-pointer select-none"
                  aria-expanded={isOpen}
                  aria-controls={`content-${faq.id}`}
                >
                  <span className="text-base font-bold pr-4">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#F7F8FA] flex items-center justify-center text-[#24252B] shrink-0">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-[#F52619]" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`content-${faq.id}`}
                    className="px-6 pb-6 pt-1 text-sm text-[#737782] leading-relaxed border-t border-[#E8E8EC]/60"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Support Callout */}
        <div className="p-6 rounded-2xl bg-white border border-[#E8E8EC] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-[#24252B]">Have a specific query not answered above?</h3>
            <p className="text-xs text-[#737782]">Ask our Thane support desk directly on WhatsApp.</p>
          </div>
          <a
            href={createWhatsAppUrl("Hi Plus Internet, I have a specific question about your broadband / networking services in Thane.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold py-2.5 px-4 rounded-xl shadow-xs transition-all whitespace-nowrap"
          >
            <WhatsAppIcon className="w-4 h-4 text-white" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
