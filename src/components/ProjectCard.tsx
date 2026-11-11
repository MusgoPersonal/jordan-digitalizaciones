"use client";

import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  services: string[];
  demo?: string;
  repo?: string;
  accent?: keyof typeof ACCENTS;
}

const ACCENTS = {
  emerald: 'from-emerald-500/40 via-emerald-800/15 to-lacquer-raised',
  teal: 'from-teal-500/40 via-teal-800/15 to-lacquer-raised',
  cyan: 'from-cyan-500/40 via-cyan-800/15 to-lacquer-raised',
  indigo: 'from-indigo-500/40 via-indigo-800/15 to-lacquer-raised',
  violet: 'from-violet-500/40 via-violet-800/15 to-lacquer-raised',
  amber: 'from-amber-500/40 via-amber-800/15 to-lacquer-raised',
  rose: 'from-rose-500/40 via-rose-800/15 to-lacquer-raised',
  slate: 'from-slate-500/40 via-slate-700/15 to-lacquer-raised',
};

function monogram(title: string): string {
  const words = title.replace(/[—–-]/g, ' ').split(/\s+/).filter(Boolean);
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  services,
  demo,
  repo,
  accent = 'emerald',
}) => {
  return (
    <div className="bg-lacquer-raised rounded-xl overflow-hidden border border-gold-hairline hover:border-kinpaku/40 transition-all duration-300 flex flex-col">
      <div className={`relative h-44 bg-gradient-to-br ${ACCENTS[accent]} overflow-hidden`}>
        <div className="absolute -right-6 -top-6 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -left-8 bottom-0 w-24 h-24 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-6xl font-extrabold text-white/90 tracking-tight select-none">
            {monogram(title)}
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-champagne mb-2">{title}</h3>
        <p className="text-text-muted text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {services.map((service, index) => (
            <span key={index} className="bg-kinpaku/10 text-kinpaku text-xs px-3 py-1 rounded-full font-medium">
              {service}
            </span>
          ))}
        </div>
        <div className="mt-auto flex flex-wrap items-center gap-4">
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-kinpaku hover:text-kinpaku-pale font-medium transition-colors">
              Ver demo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
            </a>
          )}
          {repo && (
            <a href={repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-verdigris hover:text-verdigris-pale font-medium transition-colors">
              Código
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
            </a>
          )}
          {!demo && !repo && (
            <a href="https://wa.me/56930973700" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-verdigris hover:text-verdigris-pale font-medium transition-colors">
              Consultar por WhatsApp
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
