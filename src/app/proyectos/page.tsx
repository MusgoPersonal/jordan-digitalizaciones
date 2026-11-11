"use client";
import ProjectCard from '@/components/ProjectCard';
import { PROJECTS } from '@/data/projects';

export default function Proyectos() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-lacquer text-champagne">
      <h1 className="text-3xl md:text-4xl font-extrabold text-champagne mb-4 text-center font-display">Mis Proyectos</h1>
      <p className="text-center text-text-muted max-w-2xl mx-auto mb-10">
        Proyectos reales de desarrollo web, plataformas, automatización e IA. Cada uno con su demo en vivo cuando está disponible públicamente.
      </p>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
