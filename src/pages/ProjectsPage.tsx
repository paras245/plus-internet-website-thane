import React, { useState } from 'react';
import { SAMPLE_PROJECTS, ProjectItem } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectDetailModal } from '../components/ProjectDetailModal';
import { Info } from 'lucide-react';
import { createWhatsAppUrl } from '../data/company';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { useSEO } from '../hooks/useSEO';

export const ProjectsPage: React.FC = () => {
  useSEO({
    title: "Completed Installations & Networking Portfolio in Thane",
    description: "Browse completed home Wi-Fi setups, office structured cabling, server rack installations, and CCTV surveillance projects in Thane.",
    keywords: "networking projects Thane, Wi-Fi installations Thane, CCTV setup portfolio, office LAN setup Thane"
  });

  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const customQuoteWhatsApp = createWhatsAppUrl(
    "Hi Plus Internet, I would like to request an installation estimate for my property in Thane."
  );

  return (
    <div className="w-full bg-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F52619]">
            Installation Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#24252B] tracking-tight">
            Work Samples & Completed Setups
          </h1>
          <p className="text-base text-[#737782] leading-relaxed">
            Examine representative installation layouts across residential flats, corporate offices, and retail premises in Thane. Click any installation showcase to inspect hardware details and high-resolution setup photos.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SAMPLE_PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>

        {/* Disclaimer on sample content */}
        <div className="p-6 rounded-2xl bg-[#F7F8FA] border border-[#E8E8EC] flex items-start gap-3 text-xs text-[#737782]">
          <Info className="w-4 h-4 text-[#F52619] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold text-[#24252B]">Portfolio Labeling Disclosure:</span>
            <p className="leading-relaxed">
              The case studies displayed above feature representative sample technical architectures and generalized Thane localities to preserve client privacy. Specific client names, ratings, and unverified testimonials have been omitted intentionally.
            </p>
          </div>
        </div>

        {/* CTA Strip */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#F7F8FA] border border-[#E8E8EC] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-[#24252B]">
              Planning a similar installation in Thane?
            </h2>
            <p className="text-xs sm:text-sm text-[#737782] max-w-xl">
              Get an on-site survey and tailored quotation for Wi-Fi optimization, structured cabling, or CCTV setup.
            </p>
          </div>

          <a
            href={customQuoteWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs py-3.5 px-6 rounded-xl shadow-sm transition-all whitespace-nowrap shrink-0"
          >
            <WhatsAppIcon className="w-4 h-4 text-white" />
            <span>Request Installation Quote</span>
          </a>
        </div>

      </div>

      {/* Gallery Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};
