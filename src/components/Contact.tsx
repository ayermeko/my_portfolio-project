import { Mail, Github, Linkedin, MapPin } from "lucide-react";
import { Button } from "./ui/button";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <span className="font-mono text-primary text-sm mb-4 block">04. Contact</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
            I'm currently open to new opportunities. Whether you have a question, 
            a project idea, or just want to say hi, I'd love to hear from you!
          </p>

          {/* CTA Button */}
          <Button variant="hero" size="lg" asChild className="mb-12">
            <a href="mailto:yermekovalibii@gmail.com">
              <Mail className="w-5 h-5 mr-2" />
              Say Hello
            </a>
          </Button>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/ayermeko"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/alibi-yermekov/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a
              href="mailto:yermekovalibii@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Mail className="w-5 h-5" />
              <span className="text-sm">Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
