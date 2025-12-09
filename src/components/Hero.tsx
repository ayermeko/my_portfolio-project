import { Button } from "./ui/button";

const roles = [
  "Software QA Engineer",
  "C/C++ Developer", 
  "Python Developer",
  "Data & Analytics Engineer",
  "AI Developer",
];

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground font-medium">Open to opportunities</span>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Hi, I'm{" "}
            <span className="gradient-text">Alibi Yermekov</span>
          </h1>

          {/* Tagline */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Building robust software solutions with a passion for quality, 
            performance, and innovation.
          </p>

          {/* Roles */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            {roles.map((role, index) => (
              <span
                key={role}
                className="px-3 py-1.5 text-xs sm:text-sm font-mono bg-secondary text-secondary-foreground rounded-md border border-border hover:border-primary/50 transition-colors duration-300"
              >
                {role}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">
                View My Work
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">
                Get In Touch
              </a>
            </Button>
          </div>

        </div>

      </div>
    </section>
  );
};
