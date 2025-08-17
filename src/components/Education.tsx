import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science - AI/ML Specialization",
      institution: "NIIT University",
      location: "Neemrana, India",
      period: "2021 - 2025",
      grade: "CGPA: 8.84/10",
      skills: ["Artificial Intelligence", "Machine Learning", "Python", "Java", "JavaScript", "React.js"],
      status: "Current"
    },
    {
      degree: "Higher Secondary Education (12th)",
      institution: "Sainik School",
      period: "2019 - 2021",
      skills: ["Strategic Planning", "Leadership"],
      status: "Completed"
    },
    {
      degree: "Secondary Education (10th)",
      institution: "Sainik School", 
      period: "2017 - 2019",
      skills: ["Conflict Resolution", "Event Management", "Critical Thinking"],
      status: "Completed"
    }
  ];

  const achievements = [
    {
      title: "NCC 'A' Certificate",
      description: "National Cadet Corps certification demonstrating leadership and discipline",
      skills: ["Leadership", "Discipline", "Teamwork"]
    },
    {
      title: "NCC 'B' Certificate", 
      description: "Advanced National Cadet Corps certification with enhanced leadership responsibilities",
      skills: ["Advanced Leadership", "Strategic Planning", "Team Management"]
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center">Education & Achievements</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-gradient mb-6 flex items-center gap-2">
              <GraduationCap className="h-6 w-6" />
              Academic Background
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card 
                  key={index}
                  className="glass-card animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg mb-1">{edu.degree}</CardTitle>
                        {edu.field && (
                          <CardDescription className="text-primary font-medium mb-2">
                            {edu.field}
                          </CardDescription>
                        )}
                        <CardDescription className="text-foreground/80">
                          {edu.institution}, {edu.location || ""}
                        </CardDescription>
                      </div>
                      <Badge 
                        variant={edu.status === "Current" ? "default" : "secondary"}
                        className="tech-tag"
                      >
                        {edu.status}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {edu.period}
                      </div>
                      {edu.grade && (
                        <div className="text-primary font-medium">
                          {edu.grade}
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {edu.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="tech-tag text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-semibold text-gradient mb-6 flex items-center gap-2">
              <Award className="h-6 w-6" />
              Achievements & Certifications
            </h3>
            
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <Card 
                  key={index}
                  className="glass-card animate-slide-up"
                  style={{ animationDelay: `${(index + education.length) * 0.1}s` }}
                >
                  <CardHeader>
                    <CardTitle className="text-lg text-primary mb-2">
                      {achievement.title}
                    </CardTitle>
                    <CardDescription className="text-foreground/80">
                      {achievement.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {achievement.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="tech-tag text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Interests */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-gradient mb-4">Interests & Hobbies</h4>
              <Card className="glass-card">
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 gap-3">
                    <div className="flex items-center gap-2">
                      <span className="text-primary">🎮</span>
                      <span>Competitive Online Games</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary">📚</span>
                      <span>Reading Novels</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary">🏔️</span>
                      <span>Trekking & Adventure</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Languages */}
            <div className="mt-6">
              <h4 className="text-xl font-semibold text-gradient mb-4">Languages</h4>
              <Card className="glass-card">
                <CardContent className="pt-6">
                  <div className="flex flex-wrap gap-2">
                    {["English", "Hindi", "Punjabi"].map((language) => (
                      <Badge key={language} variant="secondary" className="tech-tag">
                        {language}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;