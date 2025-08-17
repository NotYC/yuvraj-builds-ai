import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import avatar from "@/assets/avatar.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="glass-card max-w-4xl mx-auto text-center animate-slide-up">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Avatar */}
            <div className="relative">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/30 glow-primary">
                <img 
                  src={avatar} 
                  alt="Yuvraj Chawla"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-2 rounded-full border border-primary/20 animate-glow" />
            </div>

            {/* Hero Content */}
            <div className="flex-1 text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="text-gradient">Yuvraj Chawla</span>
              </h1>
              
              <div className="text-xl md:text-2xl text-primary/90 mb-2 font-medium">
                Full-Stack Developer & AI/ML Specialist
              </div>
              
              <div className="text-muted-foreground mb-6 leading-relaxed">
                Computer Science Student at NIIT University | Aspiring Software Engineer
              </div>

              <p className="text-foreground/80 mb-8 leading-relaxed max-w-2xl">
                Product-minded Software Engineer specializing in AI/ML and Full-Stack development. 
                I enjoy building software that solves real-world problems, from preprocessing complex 
                datasets with techniques like PCA to developing responsive web applications.
              </p>

              {/* Social Links */}
              <div className="flex gap-4 mb-8">
                <Button variant="outline" size="icon" className="glass hover:glow-primary" asChild>
                  <a href="https://github.com/NotYC" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                
                <Button variant="outline" size="icon" className="glass hover:glow-primary" asChild>
                  <a href="https://www.linkedin.com/in/ycnomore/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                
                <Button variant="outline" size="icon" className="glass hover:glow-primary" asChild>
                  <a href="https://x.com/ycnomore" target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-5 w-5" />
                  </a>
                </Button>
                
                <Button variant="outline" size="icon" className="glass hover:glow-primary" asChild>
                  <a href="mailto:yuvrajchawla.work@gmail.com">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4">
                <Button className="gradient-primary text-primary-foreground font-semibold px-8 py-3 glow-primary">
                  View My Work
                </Button>
                <Button variant="outline" className="glass hover:glow-subtle">
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;