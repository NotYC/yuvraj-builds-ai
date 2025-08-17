import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Experience = () => {
  const navigate = useNavigate();

  const experience = {
    id: "oohr-innovations",
    title: "Software Developer Intern - Full Stack & AI",
    company: "Oohr Innovations",
    location: "Remote",
    period: "Jun 2025 - Jul 2025",
    type: "Internship",
    description: "Worked as a Full Stack Developer and AI Intern, building web applications across the entire stack (front-end and back-end) and training machine learning models for suggestion system.",
    achievements: [
      "Built complete web applications using modern full-stack technologies",
      "Developed and trained ML models for intelligent suggestion systems",
      "Collaborated with team on frontend, backend, and AI model development",
      "Implemented knowledge base integration for enhanced system capabilities"
    ],
    technologies: ["Full-Stack Development", "Machine Learning", "AI/ML", "Web Development"],
    certificates: 2
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center">Professional Experience</h2>
        
        <div className="max-w-4xl mx-auto">
          <Card 
            className="interactive-card cursor-pointer"
            onClick={() => navigate(`/experience/${experience.id}`)}
          >
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle className="text-xl text-gradient mb-2">
                    {experience.title}
                  </CardTitle>
                  <CardDescription className="text-lg font-medium text-primary">
                    {experience.company}
                  </CardDescription>
                  
                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {experience.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {experience.location}
                    </div>
                    <Badge variant="outline" className="tech-tag">
                      {experience.type}
                    </Badge>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="tech-tag">
                    🏆 {experience.certificates} Certificates
                  </Badge>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="hover:glow-subtle"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <p className="text-foreground/90 mb-6 leading-relaxed">
                {experience.description}
              </p>
              
              <div className="space-y-3 mb-6">
                <h4 className="font-semibold text-primary">Key Achievements:</h4>
                <ul className="space-y-2">
                  {experience.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-2 text-foreground/80">
                      <span className="text-primary mt-1">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="tech-tag">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Call to action */}
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Want to learn more about my professional experience?
            </p>
            <Button 
              variant="outline" 
              className="glass hover:glow-subtle"
              onClick={() => navigate(`/experience/${experience.id}`)}
            >
              View Detailed Experience & Certificates
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;