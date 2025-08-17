import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "Java", "TypeScript"],
      color: "bg-primary/10 text-primary border-primary/20"
    },
    {
      title: "AI/ML & Data Science", 
      skills: ["Machine Learning", "Artificial Intelligence", "Neural Networks", "Computer Vision", "Natural Language Processing", "Data Analysis", "Data Structures"],
      color: "bg-secondary/10 text-secondary border-secondary/20"
    },
    {
      title: "Web Development",
      skills: ["React.js", "Node.js", "Express.js", "Flask", "Full-Stack Development", "Front-End Development", "Back-End Development", "REST APIs", "Web Services API"],
      color: "bg-accent/10 text-accent border-accent/20"
    },
    {
      title: "Databases & Cloud",
      skills: ["MongoDB", "Oracle Database", "Google Cloud Platform"],
      color: "bg-primary/10 text-primary border-primary/20"
    },
    {
      title: "Tools &amp; Technologies",
      skills: ["DevOps", "Automation", "Tailwind CSS", "Docker", "Git"],
      color: "bg-secondary/10 text-secondary border-secondary/20"
    },
    {
      title: "Soft Skills",
      skills: ["Problem Solving", "Logic Design", "Strategic Planning", "Event Management", "Conflict Resolution", "Critical Thinking", "Research and Development"],
      color: "bg-accent/10 text-accent border-accent/20"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center">Skills &amp; Expertise</h2>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="glass-card animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gradient">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="skill-trapezium relative bg-gradient-to-r from-primary/20 to-secondary/20 text-foreground text-sm font-medium px-4 py-2 hover:from-primary/30 hover:to-secondary/30 transition-all duration-300 hover:scale-105 hover:glow-subtle"
                    style={{
                      clipPath: 'polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)',
                      minWidth: 'fit-content'
                    }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;