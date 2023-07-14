import { ExternalLink } from 'lucide-react';
import { siteConfig } from '@/config/site';

const colorVariant = siteConfig.accentColor.colorVariant;
const { accentTextClass, accentBorderClass } = siteConfig.accentColor.colorVariants[colorVariant];

const projects = siteConfig.projects;

export default function ProjectsList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-4">
        {projects.map((project, index) => (
            <div 
                key={index}
                className={`space-y-6 relative hover:cursor-pointer border-s-2 hover:bg-accent ${'hover:' + accentBorderClass} ${'hover:' + accentTextClass} rounded-xl p-3`}>
                <div className="font-semibold text-lg text-foreground"> 
                    {project.title}
                </div>
                <p className="text-muted-foreground text-sm">
                    {project.description}
                </p>
                <div className="">
                    <span className="flex gap-3">
                        <ExternalLink/>
                        {project.url}
                    </span>
                </div>
            </div>
        ))}
    </div>
  );
}
