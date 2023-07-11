import { ExternalLink } from 'lucide-react';

const projects = [
    {title: 'Opimage', description: 'High performance web images optimization library', url: 'opimage.io'},
    {title: 'Portfolio', description: 'Highest quality personal portfolio template', url: 'portfolio.io'},
    {title: 'FontTurbo', description: 'Modern way to manage fonts on website', url: 'font.turbo'},
    {title: 'ColorTurbo', description: 'Modern, fastest way to create color pallettes', url: 'color.turbo'},
]

export default function ProjectsList() {
  return (
    <div className="py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-4">
        {projects.map((project, index) => (
            <div 
                key={index}
                className="space-y-6 relative hover:cursor-pointer border-s-2 hover:bg-accent hover:border-violet-400 hover:text-violet-400 rounded-xl p-3">
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
