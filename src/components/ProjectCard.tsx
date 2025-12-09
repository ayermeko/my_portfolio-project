import { Github, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  imageUrl?: string;
}

export const ProjectCard = ({ title, description, tags, githubUrl, imageUrl }: ProjectCardProps) => {
  return (
    <div className="group relative rounded-xl bg-card border border-border overflow-hidden transition-all duration-500 hover:border-primary/50 card-shadow hover:card-shadow-hover hover:-translate-y-2">
      {/* Project Image/Gradient Header */}
      <div className="h-40 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent_70%)]" />
        <div className="absolute top-4 left-4 font-mono text-xs text-primary/70">&lt;project&gt;</div>
        <div className="absolute bottom-4 right-4 font-mono text-xs text-primary/70">&lt;/project&gt;</div>
        
        {/* Decorative Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-primary/30 rounded-lg rotate-45 group-hover:rotate-[135deg] transition-transform duration-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border border-primary/20 rounded-lg rotate-12 group-hover:rotate-[102deg] transition-transform duration-700" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-semibold text-xl mb-3 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-mono bg-secondary text-secondary-foreground rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button variant="default" size="sm" asChild className="flex-1">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              View Code
            </a>
          </Button>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      </div>
    </div>
  );
};
