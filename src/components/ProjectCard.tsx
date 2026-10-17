import React from 'react';
import { MapPin, Eye } from 'lucide-react';
import { ProjectItem } from '../data/projects';

interface ProjectCardProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <div 
      onClick={() => onSelect(project)}
      className="bg-white rounded-2xl border border-[#E8E8EC] overflow-hidden hover:border-[#F52619]/40 hover:shadow-lg transition-all duration-300 cursor-pointer group flex flex-col justify-between"
    >
      <div>
        <div className="relative aspect-16/9 bg-[#F7F8FA] overflow-hidden">
          <img
            src={project.images[0]}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-[11px] font-semibold text-[#24252B] border border-[#E8E8EC]">
            {project.category}
          </div>
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 rounded-lg text-xs font-semibold text-[#24252B] shadow-md">
              <Eye className="w-3.5 h-3.5 text-[#F52619]" />
              <span>View Gallery</span>
            </span>
          </div>
        </div>

        <div className="p-5 space-y-2">
          <div className="flex items-center gap-1 text-xs text-[#737782]">
            <MapPin className="w-3.5 h-3.5 text-[#F52619]" />
            <span>{project.locationArea}</span>
          </div>
          <h3 className="text-base font-bold text-[#24252B] group-hover:text-[#F52619] transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-[#737782] line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>

      <div className="p-5 pt-0">
        <div className="text-[11px] text-[#737782] font-mono border-t border-[#E8E8EC] pt-3 truncate">
          <span className="font-semibold text-[#24252B]">Gear:</span> {project.equipmentUsed}
        </div>
      </div>
    </div>
  );
};
