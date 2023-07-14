import { ExternalLink } from 'lucide-react';
import { siteConfig } from '@/config/site';
import Link from 'next/link';

const colorVariant = siteConfig.accentColor.colorVariant;
const { accentTextClass, accentBorderClass } = siteConfig.accentColor.colorVariants[colorVariant];

const projects = siteConfig.projects;

export default function ProjectsList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-4">
        {projects.map((project, index) => (
            <div 
                key={index}
                className={`relative hover:cursor-pointer border-s-2 hover:bg-accent ${'hover:' + accentBorderClass} ${'hover:' + accentTextClass} rounded-xl p-3`}>
                {/* stretched link */}
                <Link
                    className="absolute inset-0"
                    href={'https://' + project.url}
                    target='_blank'
                    >
                </Link>
                <div className="space-y-6">
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
            </div>
        ))}
    </div>
  );
}
