import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail, Twitter, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "yuvrajchawla.work@gmail.com",
      href: "mailto:yuvrajchawla.work@gmail.com",
      primary: true
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/ycnomore",
      href: "https://www.linkedin.com/in/ycnomore/",
      primary: true
    },
    {
      icon: Github,
      label: "GitHub", 
      value: "github.com/NotYC",
      href: "https://github.com/NotYC",
      primary: false
    },
    {
      icon: Twitter,
      label: "Twitter/X",
      value: "@ycnomore",
      href: "https://x.com/ycnomore",
      primary: false
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center">Get In Touch</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
              I'm always interested in new opportunities, collaborations, and exciting projects. 
              Whether you want to discuss a potential role, partnership, or just say hello, I'd love to hear from you!
            </p>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>NIIT University, Neemrana, India</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <Card 
                  key={method.label}
                  className={`interactive-card ${method.primary ? 'ring-2 ring-primary/20 glow-subtle' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <div className={`p-2 rounded-lg ${method.primary ? 'bg-primary/20 text-primary' : 'bg-secondary/20 text-secondary'}`}>
                        <IconComponent className="h-5 w-5" />
                      </div>
                      {method.label}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80 mb-4">{method.value}</p>
                    <Button 
                      variant={method.primary ? "default" : "outline"}
                      className={method.primary ? "gradient-primary glow-primary" : "glass hover:glow-subtle"}
                      asChild
                    >
                      <a href={method.href} target="_blank" rel="noopener noreferrer">
                        Connect
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Quick Contact CTA */}
          <div className="text-center">
            <Card className="glass-card inline-block">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-gradient mb-4">
                  Ready to collaborate?
                </h3>
                <p className="text-foreground/80 mb-6">
                  Let's build something amazing together. Drop me a message and let's discuss your next project!
                </p>
                <div className="flex gap-4 justify-center">
                  <Button 
                    className="gradient-primary text-primary-foreground font-semibold glow-primary"
                    asChild
                  >
                    <a href="mailto:yuvrajchawla.work@gmail.com">
                      <Mail className="h-4 w-4 mr-2" />
                      Send Email
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="glass hover:glow-subtle"
                    asChild
                  >
                    <a href="https://www.linkedin.com/in/ycnomore/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;