import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: "whatsapp-spotify-bot",
      title: "WhatsApp–Spotify Music Automation Bot",
      description: "Automation system using n8n that integrates WhatsApp, GCP and Spotify. Automatically fetches and delivers songs through WhatsApp.",
      period: "Jun 2025 - Jul 2025",
      technologies: ["Python", "Flask", "GCP", "REST APIs", "Automation", "n8n"],
      metrics: "30-55 sec avg response time",
      github: "https://github.com/NotYC/n8n-whatsapp-music-bot",
      featured: true
    },
    {
      id: "credit-scoring-app", 
      title: "Automated Credit Scoring Web Application",
      description: "Full-stack MERN application with ML integration for real-time credit score predictions using Random Forest model.",
      period: "Jan 2025 - May 2025",
      technologies: ["React.js", "Node.js", "MongoDB", "Machine Learning", "Docker", "Jenkins"],
      metrics: "92%+ ML accuracy achieved",
      github: "https://github.com/NotYC/ML-integrated-CreditScoring",
      featured: true
    },
    {
      id: "multimodal-cancer-detection",
      title: "Multimodal Cancer Detection System",
      description: "R&D project for rural healthcare using hierarchical multimodal ensembling with CNN and NLP models.",
      period: "Jan 2025 - May 2025", 
      technologies: ["Machine Learning", "Computer Vision", "NLP", "Neural Networks", "Python"],
      metrics: "Lung-PET-CT-dx dataset",
      github: "#",
      featured: true
    },
    {
      id: "image-preprocessing-pca",
      title: "Image Preprocessing with PCA",
      description: "Dimensionality reduction using bicubic interpolation and PCA for efficient object recognition model training.",
      period: "Aug 2024 - Dec 2024",
      technologies: ["Python", "Computer Vision", "Machine Learning", "Data Analysis"],
      metrics: "2MB → 30KB compression",
      github: "https://github.com/NotYC/image-preprocessing-pca-bicubic-object-recognition",
      featured: false
    },
    {
      id: "photo-sorting-app",
      title: "ResNet-based Photo Sorting Web App",
      description: "Automated image classifier and repository manager using pre-trained ResNet model for photo organization.",
      period: "Aug 2024 - Dec 2024",
      technologies: ["JavaScript", "Python", "Machine Learning", "ResNet"],
      metrics: "Auto photo categorization",
      github: "https://github.com/Ugyenjigmerangdrel/automated-image-classifier-and-repository-manager",
      featured: false
    },
    {
      id: "java-swing-gui",
      title: "Java Swing GUI for Remote Car Control",
      description: "GUI application with Oracle Database integration for controlling remote-controlled cars.",
      period: "Aug 2023 - Dec 2023",
      technologies: ["Java", "Oracle Database", "Swing"],
      metrics: "Basic movement controls",
      github: "https://github.com/NotYC/jawa-gui-development", 
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center">Featured Projects</h2>
        
        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="interactive-card h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => navigate(`/project/${project.id}`)}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-lg line-clamp-2">{project.title}</CardTitle>
                  <div className="flex gap-2">
                    {project.github !== "#" && (
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 hover:glow-subtle"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.github, '_blank');
                        }}
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    )}
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8 hover:glow-subtle"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardDescription className="text-sm text-muted-foreground">
                  {project.period}
                </CardDescription>
              </CardHeader>
                
              <CardContent>
                <p className="text-sm mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs tech-tag">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="secondary" className="text-xs tech-tag">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
                
                <div className="text-xs text-primary font-medium">
                  📊 {project.metrics}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold text-gradient">Other Projects</h3>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="interactive-card h-full opacity-80 hover:opacity-100"
              style={{ animationDelay: `${(index + featuredProjects.length) * 0.1}s` }}
              onClick={() => navigate(`/project/${project.id}`)}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-base line-clamp-2">{project.title}</CardTitle>
                  <div className="flex gap-2">
                    {project.github !== "#" && (
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-7 w-7 hover:glow-subtle"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.github, '_blank');
                        }}
                      >
                        <Github className="h-3 w-3" />
                      </Button>
                    )}
                  </div>
                </div>
                <CardDescription className="text-xs text-muted-foreground">
                  {project.period}
                </CardDescription>
              </CardHeader>
                
              <CardContent>
                <p className="text-xs mb-3 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.slice(0, 2).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs tech-tag">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 2 && (
                    <Badge variant="secondary" className="text-xs tech-tag">
                      +{project.technologies.length - 2}
                    </Badge>
                  )}
                </div>
                
                <div className="text-xs text-primary/80 font-medium">
                  📊 {project.metrics}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
