import { Code2, Database, TestTube, Brain } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Systems Programming",
    description: "Strong foundation in C/C++ with experience in low-level systems development and performance optimization.",
  },
  {
    icon: TestTube,
    title: "Quality Assurance",
    description: "Dedicated to building reliable software through comprehensive testing strategies and automation.",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Expertise in data pipelines, analytics, and transforming raw data into actionable insights.",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Passionate about developing intelligent solutions and implementing ML algorithms from scratch.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm mb-4 block">01. About Me</span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Passionate About <span className="gradient-text">Technology</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm a versatile developer with a strong foundation in software engineering, 
              quality assurance, and data-driven development. I love diving deep into 
              complex problems and creating elegant solutions.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 card-shadow hover:card-shadow-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { value: "3+", label: "Years Coding" },
              { value: "10+", label: "Projects Built" },
              { value: "5+", label: "Technologies" },
              { value: "∞", label: "Coffee Consumed" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-6 rounded-xl bg-secondary/50">
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
