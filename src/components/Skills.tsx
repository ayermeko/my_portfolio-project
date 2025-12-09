const skillCategories = [
  {
    title: "Languages",
    skills: ["C", "C++", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Frameworks & Tools",
    skills: ["React", "NumPy", "Pandas", "Matplotlib", "Git", "Docker"],
  },
  {
    title: "QA & Testing",
    skills: ["Unit Testing", "Integration Testing", "Test Automation", "CI/CD", "Selenium", "PyTest"],
  },
  {
    title: "Data & AI",
    skills: ["Machine Learning", "Data Analysis", "Data Visualization", "Linear Regression", "Classification", "Neural Networks"],
  },
  {
    title: "Development",
    skills: ["Linux/Unix", "Shell Scripting", "REST APIs", "Agile/Scrum", "Code Review", "Documentation"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm mb-4 block">02. Skills</span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              My <span className="gradient-text">Tech Stack</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A diverse set of skills spanning systems programming, quality assurance, 
              data engineering, and AI development.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 card-shadow"
              >
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-mono bg-secondary text-secondary-foreground rounded-md border border-border hover:border-primary hover:text-primary transition-all duration-300 cursor-default"
                      style={{ animationDelay: `${(categoryIndex * 6 + skillIndex) * 0.05}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
