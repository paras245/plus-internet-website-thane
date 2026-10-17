import React, { useState, useEffect } from 'react';
import { X, MapPin } from 'lucide-react';
import { ProjectItem } from '../data/projects';
import { createWhatsAppUrl } from '../data/company';
import { WhatsAppIcon } from './WhatsAppIcon';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const [activeImage, setActiveImage] = useState<string>('');

  useEffect(() => {
    if (project) {
      setActiveImage(project.images[0]);
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'unset';
      };
    }
  }, [project, onClose]);

  if (!project) return null;

  const whatsappUrl = createWhatsAppUrl(
    `Hi Plus Internet, I saw your project '${project.title}' in ${project.locationArea}. I need a similar networking installation in Thane.`
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#140C1D]/60 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#E8E8EC] overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8E8EC] bg-[#F7F8FA]">
          <div className="flex items-center gap-2 text-xs text-[#737782]">
            <span>{project.category}</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#F52619]" />
              {project.locationArea}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#737782] hover:text-[#24252B] rounded-lg hover:bg-slate-200 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-4">
          <div className="aspect-16/9 rounded-xl overflow-hidden bg-[#F7F8FA] border border-[#E8E8EC]">
            <img
              src={activeImage}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          {project.images.length > 1 && (
            <div className="flex gap-2">
              {project.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(img)}
                  className={`w-16 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                    activeImage === img ? 'border-[#F52619]' : 'border-transparent opacity-60'
                  }`}
                >
                  <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          <div>
            <h3 className="text-xl font-bold text-[#24252B]">{project.title}</h3>
            <p className="mt-2 text-sm text-[#737782] leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="p-3 bg-[#F7F8FA] rounded-xl text-xs space-y-1 border border-[#E8E8EC]">
            <span className="text-[#737782] font-medium">Equipment Deployed:</span>
            <div className="font-semibold text-[#24252B]">{project.equipmentUsed}</div>
          </div>
        </div>

        <div className="p-5 border-t border-[#E8E8EC] bg-[#F7F8FA] flex justify-end">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold py-2.5 px-5 rounded-xl shadow-sm transition-all"
          >
            <WhatsAppIcon className="w-4 h-4 text-white" />
            <span>Enquire for Similar Setup in Thane</span>
          </a>
        </div>
      </div>
    </div>
  );
};
