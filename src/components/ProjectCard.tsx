"use client";

import React from 'react';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  services: string[];
  imageUrl?: string;
  projectLink?: string;
}

const GradientPlaceholder: React.FC<{ label: string }> = ({ label }) => (
  <div className="w-full h-48 bg-gradient-to-br from-kinpaku/20 via-verdigris/10 to-lacquer-raised flex items-center justify-center">
    <div className="w-16 h-16 rounded-full bg-kinpaku/20 border border-kinpaku/40 flex items-center justify-center text-2xl font-bold text-kinpaku">
      {label.charAt(0)}
    </div>
  </div>
);

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  services,
  imageUrl,
  projectLink,
}) => {
  return (
    <div className="bg-lacquer-raised rounded-lg overflow-hidden border border-gold-hairline hover:border-kinpaku/40 transition-all duration-300">
      {imageUrl ? (
        <Image src={imageUrl} alt={title} width={800} height={480} className="w-full h-48 object-cover" />
      ) : (
        <GradientPlaceholder label={title} />
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-champagne mb-2">{title}</h3>
        <p className="text-text-muted text-sm mb-4 line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {services.map((service, index) => (
            <span key={index} className="bg-kinpaku/10 text-kinpaku text-xs px-3 py-1 rounded-full font-medium">
              {service}
            </span>
          ))}
        </div>
        {projectLink && projectLink !== "#" && (
          <a href={projectLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-kinpaku hover:text-kinpaku-pale font-medium transition-colors">
            Ver Proyecto
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
          </a>
        )}
        {(!projectLink || projectLink === "#") && (
          <a href="https://wa.me/56930973700" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-verdigris hover:text-verdigris-pale font-medium transition-colors">
            Consultar por WhatsApp
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;