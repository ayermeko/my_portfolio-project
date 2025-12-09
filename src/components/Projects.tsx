import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "Linear Regression From Scratch",
    description: "A pure Python implementation of linear regression algorithm, demonstrating fundamental machine learning concepts without using external ML libraries.",
    tags: ["Python", "Machine Learning", "Mathematics", "Data Science"],
    githubUrl: "https://github.com/ayermeko/linear_regression",
  },
  {
    title: "DSLR – Machine Learning Project",
    description: "A comprehensive machine learning project implementing data analysis, visualization, and classification algorithms for data science exploration.",
    tags: ["Python", "ML", "Data Analysis", "Classification"],
    githubUrl: "https://github.com/ayermeko/dslr-v0.2",
  },
  {
    title: "Minishell",
    description: "A custom Unix shell implementation in C, handling command parsing, process management, pipes, redirections, and built-in commands.",
    tags: ["C", "Unix", "Systems Programming", "Shell"],
    githubUrl: "https://github.com/ayermeko/minishell.git",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm mb-4 block">03. Projects</span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Featured <span className="gradient-text">Work</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of projects showcasing my expertise in machine learning, 
              systems programming, and software development.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>

          {/* View More */}
          <div className="text-center mt-12">
            <a
              href="https://github.com/ayermeko"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors duration-300"
            >
              View more on GitHub
              <span className="text-lg">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
