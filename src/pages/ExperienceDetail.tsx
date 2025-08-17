import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, MapPin, Award, Target, Users, Code } from "lucide-react";

const ExperienceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const experiences = {
    "oohr-innovations": {
      title: "Software Developer Intern - Full Stack & AI",
      company: "Oohr Innovations",
      location: "Remote",
      period: "Jun 2025 - Jul 2025",
      type: "Internship",
      description: "Worked as a Full Stack Developer and AI Intern, building web applications across the entire stack (front-end and back-end) and training machine learning models for suggestion system. As part of a collaborative team, I contributed to frontend development, backend architecture, AI model development, and knowledge base integration.",
      responsibilities: [
        "Developed full-stack web applications using modern technologies and frameworks",
        "Built responsive and intuitive frontend interfaces with focus on user experience",
        "Designed and implemented robust backend systems and APIs",
        "Trained and optimized machine learning models for intelligent suggestion systems",
        "Collaborated with team members on integrated knowledge base development",
        "Participated in code reviews and maintained high code quality standards",
        "Contributed to system architecture decisions and technical documentation"
      ],
      achievements: [
        "Successfully delivered multiple web applications from concept to deployment",
        "Implemented ML models that improved system suggestion accuracy",
        "Collaborated effectively in a multidisciplinary team environment",
        "Gained hands-on experience with full-stack development lifecycle",
        "Contributed to knowledge base integration enhancing system capabilities",
        "Earned two professional certificates recognizing technical contributions"
      ],
      technologies: [
        "Frontend Development", "Backend Development", "Full-Stack Development", 
        "Machine Learning", "AI/ML", "Web Development", "Database Integration",
        "API Development", "System Architecture", "Knowledge Base Systems"
      ],
      skills_developed: [
        "Advanced full-stack development capabilities",
        "Machine learning model training and optimization",
        "Cross-functional team collaboration",
        "System design and architecture planning",
        "Code quality and best practices implementation",
        "Technical problem-solving and debugging",
        "Agile development methodologies"
      ],
      certificates: {
        count: 2,
        description: "Received two certificates from Oohr Innovations recognizing technical contributions and successful completion of internship objectives.",
        images: [
          "/api/placeholder/600/400", // Placeholder for certificate images
          "/api/placeholder/600/400"
        ]
      },
      impact: "Contributed to the development of intelligent web applications that enhanced user experience through AI-powered suggestions, while gaining comprehensive experience across the full software development stack.",
      team_collaboration: [
        "Worked closely with frontend developers on user interface design and implementation",
        "Collaborated with backend engineers on API design and database architecture", 
        "Partnered with AI/ML specialists on model training and integration",
        "Participated in knowledge base development with content and technical teams",
        "Engaged in regular code reviews and technical discussions with team members"
      ]
    }
  };

  const experience = experiences[id as keyof typeof experiences];

  if (!experience) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Experience Not Found</h1>
          <Button onClick={() => navigate('/')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-6">
        {/* Navigation */}
        <div className="flex items-center gap-4 mb-8">
          <Button 
            variant="outline" 
            onClick={() => navigate('/')}
            className="glass hover:glow-subtle"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Portfolio
          </Button>
        </div>

        {/* Experience Header */}
        <div className="glass-card mb-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gradient mb-2">{experience.title}</h1>
              <h2 className="text-xl text-primary font-semibold mb-4">{experience.company}</h2>
              
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
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
              
              <p className="text-lg text-foreground/90 leading-relaxed">
                {experience.description}
              </p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center glow-primary mb-2">
                  <Award className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-sm font-medium">
                  {experience.certificates.count} Certificates
                </div>
                <div className="text-xs text-muted-foreground">
                  Professional Recognition
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Responsibilities */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gradient">
                <Target className="h-5 w-5" />
                Key Responsibilities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {experience.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-foreground/80">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gradient">
                <Award className="h-5 w-5" />
                Key Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {experience.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-success mt-1">✓</span>
                    <span className="text-foreground/80">{achievement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Technologies & Skills */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gradient">
                <Code className="h-5 w-5" />
                Technologies Used
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="tech-tag">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gradient">
                <Target className="h-5 w-5" />
                Skills Developed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {experience.skills_developed.map((skill, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">→</span>
                    <span className="text-foreground/80 text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Team Collaboration */}
        <Card className="glass-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gradient">
              <Users className="h-5 w-5" />
              Team Collaboration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {experience.team_collaboration.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-1">🤝</span>
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Certificates Section */}
        <Card className="glass-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gradient">
              <Award className="h-5 w-5" />
              Professional Certificates
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/90 mb-6 leading-relaxed">
              {experience.certificates.description}
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {experience.certificates.images.map((image, index) => (
                <div key={index} className="glass border-2 border-primary/20 rounded-lg p-4">
                  <div className="aspect-[4/3] bg-muted/20 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center">
                      <Award className="h-12 w-12 text-primary mx-auto mb-2" />
                      <div className="text-sm text-muted-foreground">
                        Certificate {index + 1}
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="font-medium text-primary">Professional Certificate</div>
                    <div className="text-sm text-muted-foreground">Oohr Innovations</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Impact */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-gradient">Professional Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/90 leading-relaxed">{experience.impact}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ExperienceDetail;