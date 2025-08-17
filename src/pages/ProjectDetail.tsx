import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Github, ExternalLink, Calendar, Target, TrendingUp } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const projects = {
    "whatsapp-spotify-bot": {
      title: "WhatsApp–Spotify Music Automation Bot with n8n",
      period: "Jun 2025 - Jul 2025",
      description: "Developed an automation system using n8n that integrates WhatsApp, Google Cloud Platform and Spotify. When a user sends a message on WhatsApp, the workflow fetches the requested song from Spotify, downloads it, and delivers it back through WhatsApp automatically.",
      technologies: ["Google Cloud Platform (GCP)", "REST APIs", "Web Services API", "Automation", "Flask", "Python (Programming Language)", "Problem Solving", "Logic Design", "Critical Thinking"],
      github: "https://github.com/NotYC/n8n-whatsapp-music-bot",
      metrics: {
        "Average Response Time": "30-55 seconds",
        "Integration Points": "3 (WhatsApp, Spotify, GCP)",
        "Automation Success Rate": "High"
      },
      challenges: [
        "Integrating multiple APIs (WhatsApp, Spotify, GCP) seamlessly",
        "Handling different file formats and audio processing",
        "Managing API rate limits and response timeouts",
        "Ensuring reliable message delivery across platforms"
      ],
      solutions: [
        "Implemented robust error handling and retry mechanisms",
        "Used n8n workflows for visual automation design",
        "Optimized API calls to reduce response time to 30-55 seconds",
        "Built scalable architecture on Google Cloud Platform"
      ],
      impact: "Automated music delivery system that eliminates manual song sharing, providing instant access to requested music through familiar WhatsApp interface."
    },
    "credit-scoring-app": {
      title: "Automated Credit Scoring Web Application (MERN + Machine Learning + DevOps)",
      period: "Jan 2025 - May 2025", 
      description: "Built a full-stack web application for automated credit scoring, integrating machine learning with the MERN stack. The system collects and stores user financial and personal data in MongoDB, processes it with a Random Forest model, and delivers real-time credit score predictions. Implemented DevOps practices with Docker and Jenkins for CI/CD.",
      technologies: ["Full-Stack Development", "MongoDB", "Machine Learning", "Front-End Development", "React.js", "Node.js", "Back-End Web Development", "Express.js", "Python (Programming Language)", "JavaScript", "Tailwind CSS", "Logic Design", "DevOps"],
      github: "https://github.com/NotYC/ML-integrated-CreditScoring",
      metrics: {
        "ML Model Accuracy": "92%+",
        "Tech Stack": "MERN + ML",
        "Deployment": "Docker + Jenkins CI/CD"
      },
      features: [
        "User account creation with multiple bank account linking",
        "Demo bank account for anonymous credit score testing",
        "Historical score tracking and analysis for different accounts",
        "Real-time credit score predictions using Random Forest model",
        "Secure data storage and user authentication",
        "Responsive web interface with modern UI/UX"
      ],
      challenges: [
        "Integrating machine learning models with web application",
        "Handling sensitive financial data securely",
        "Real-time prediction processing",
        "Implementing comprehensive DevOps pipeline"
      ],
      solutions: [
        "Used Random Forest algorithm for high accuracy (92%+)",
        "Implemented secure authentication and data encryption",
        "Built efficient data processing pipeline",
        "Automated deployment with Docker and Jenkins CI/CD"
      ],
      impact: "Provides users with instant, accurate credit scoring capability while maintaining data privacy and security standards."
    },
    "multimodal-cancer-detection": {
      title: "Multimodal with Hierarchical Ensembling for Early Cancer Detection | AI for Rural Healthcare",
      period: "Jan 2025 - May 2025",
      description: "Conducted an R&D project focused on improving rural healthcare through AI-based early cancer detection. Designed and evaluated a hierarchical multimodal ensembling model with hybrid fusion techniques combining image analysis, lab reports, and clinical prescriptions.",
      technologies: ["Machine Learning", "Artificial Intelligence (AI)", "Neural Networks", "Computer Vision", "Natural Language Processing (NLP)", "Python (Programming Language)", "Research and Development (R&D)"],
      github: "#",
      metrics: {
        "Dataset": "Lung-PET-CT-dx (Cancer Imaging Archive)",
        "Model Type": "Hierarchical Multimodal Ensembling",
        "Application": "Rural Healthcare AI"
      },
      architecture: [
        "Image Stream: Ensemble of CNN-based classifiers for medical imaging analysis",
        "Lab Reports: NLP-driven data extraction and interpretation from medical documents", 
        "Clinical Prescriptions: NLP models for semantic understanding of treatment history",
        "Final Hierarchical Ensembling: Robust multimodal prediction combining all streams"
      ],
      challenges: [
        "Processing diverse medical data types (images, text, reports)",
        "Handling limited rural healthcare data availability",
        "Ensuring model reliability for critical medical decisions",
        "Balancing accuracy with computational efficiency for rural deployment"
      ],
      solutions: [
        "Developed hierarchical ensembling approach for improved accuracy",
        "Used hybrid fusion techniques to combine multiple data modalities",
        "Implemented specialized NLP models for medical text processing",
        "Optimized CNN architectures for medical image analysis"
      ],
      impact: "Demonstrated potential to aid rural healthcare systems where medical expertise is limited, providing early cancer detection capabilities through AI."
    },
    "image-preprocessing-pca": {
      title: "Image Preprocessing with PCA for Dimensionality Reduction",
      period: "Aug 2024 - Dec 2024",
      description: "Reduced image spatial dimensions using bicubic interpolation, followed by Principal Component Analysis (PCA) for feature reduction. The approach retained broader image features while discarding fine details, ensuring efficient training for object recognition models.",
      technologies: ["Python (Programming Language)", "Data Analysis", "Computer Vision", "Machine Learning"],
      github: "https://github.com/NotYC/image-preprocessing-pca-bicubic-object-recognition",
      metrics: {
        "Original Size": "2MB sample images",
        "After Bicubic": "300KB (85% reduction)",
        "After PCA": "30-19KB (98.5% reduction)",
        "Feature Retention": "Optimal for object recognition"
      },
      process: [
        "Input Processing: Handle high-resolution images efficiently",
        "Bicubic Interpolation: Reduce spatial dimensions while preserving quality", 
        "PCA Application: Extract principal components for feature reduction",
        "Quality Assessment: Verify retained features sufficient for recognition tasks"
      ],
      challenges: [
        "Balancing compression ratio with feature retention",
        "Maintaining object recognition accuracy with reduced data",
        "Optimizing processing pipeline for efficiency",
        "Selecting optimal PCA components"
      ],
      solutions: [
        "Implemented bicubic interpolation for smooth dimension reduction",
        "Applied PCA to retain most significant image features",
        "Achieved 98.5% size reduction while preserving recognition capability",
        "Created efficient pipeline for batch processing"
      ],
      impact: "Enables efficient training of object recognition models by dramatically reducing data size while maintaining essential visual features."
    },
    "photo-sorting-app": {
      title: "ResNet-based Photo Sorting Web App | Automated Image Classifier & Repository Manager",
      period: "Aug 2024 - Dec 2024",
      description: "Developed a web app that lets users upload photos and automatically sorts them into folders using a pre-trained ResNet model for image classification. Built with JavaScript backend, TypeScript frontend and database integration to streamline photo management for photographers.",
      technologies: ["Machine Learning", "JavaScript", "Python (Programming Language)", "TypeScript", "ResNet", "Database Integration"],
      github: "https://github.com/Ugyenjigmerangdrel/automated-image-classifier-and-repository-manager",
      metrics: {
        "Classification Model": "Pre-trained ResNet",
        "Frontend": "TypeScript",
        "Backend": "JavaScript/Python",
        "Target Users": "Photographers & Content Creators"
      },
      features: [
        "Drag-and-drop photo upload interface",
        "Automatic image classification using ResNet model",
        "Intelligent folder organization based on image content",
        "Batch processing capabilities for multiple images",
        "Database storage for classification metadata",
        "User-friendly repository management interface"
      ],
      challenges: [
        "Integrating pre-trained ResNet model with web application",
        "Handling large image uploads efficiently",
        "Creating intuitive user interface for photo management",
        "Ensuring accurate classification across diverse image types"
      ],
      solutions: [
        "Leveraged pre-trained ResNet for reliable image classification",
        "Built responsive TypeScript frontend for optimal user experience",
        "Implemented efficient backend processing with JavaScript/Python",
        "Created automated folder organization system"
      ],
      impact: "Streamlines photo management workflow for photographers by automating the tedious process of manual photo categorization."
    },
    "java-swing-gui": {
      title: "Java Swing GUI for Remote-Controlled Car | Oracle Database Integration",
      period: "Aug 2023 - Dec 2023",
      description: "Developed a Java Swing GUI using .form drag-and-drop interface builder to control a remote-controlled car. Integrated with Oracle Database to log and manage control data including movement commands and operational metrics.",
      technologies: ["Java", "Oracle Database", "Swing", "GUI Development"],
      github: "https://github.com/NotYC/jawa-gui-development",
      metrics: {
        "Interface": "Java Swing GUI",
        "Database": "Oracle Database",
        "Controls": "6 basic movement controls",
        "Development Tool": ".form drag-and-drop builder"
      },
      features: [
        "Intuitive GUI with drag-and-drop designed interface",
        "Basic movement controls: Forward, Backward, Left, Right",
        "Start and Stop functionality for car operations",
        "Real-time control command logging to Oracle Database",
        "Operational data tracking and storage",
        "User-friendly control panel design"
      ],
      challenges: [
        "Creating responsive GUI for real-time car control",
        "Integrating database logging with control operations",
        "Ensuring reliable communication with remote car",
        "Designing intuitive control interface"
      ],
      solutions: [
        "Used Java Swing with .form builder for rapid GUI development",
        "Implemented Oracle Database integration for data persistence",
        "Created efficient control command processing system",
        "Designed clear, user-friendly control interface"
      ],
      impact: "Provided hands-on experience with GUI development and database integration while creating a practical remote control system."
    }
  };

  const project = projects[id as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
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
          
          {project.github !== "#" && (
            <Button 
              variant="outline" 
              className="glass hover:glow-subtle"
              asChild
            >
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                View Code
              </a>
            </Button>
          )}
        </div>

        {/* Project Header */}
        <div className="glass-card mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gradient mb-2">{project.title}</h1>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                {project.period}
              </div>
            </div>
          </div>
          
          <p className="text-lg text-foreground/90 leading-relaxed mb-6">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="tech-tag">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Project Details Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Metrics */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gradient">
                <TrendingUp className="h-5 w-5" />
                Key Metrics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.entries(project.metrics).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center">
                    <span className="font-medium">{key}:</span>
                    <span className="text-primary">{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Features/Architecture */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gradient">
                <Target className="h-5 w-5" />
                {(project as any).features ? 'Key Features' : (project as any).architecture ? 'Architecture' : (project as any).process ? 'Process' : 'Details'}
              </CardTitle> 
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {((project as any).features || (project as any).architecture || (project as any).process || []).map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Challenges & Solutions */}
        {(project as any).challenges && (project as any).solutions && (
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-gradient">Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {(project as any).challenges.map((challenge: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-destructive mt-1">⚠</span>
                      <span className="text-foreground/80">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-gradient">Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {(project as any).solutions.map((solution: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-success mt-1">✓</span>
                      <span className="text-foreground/80">{solution}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Impact */}
        {(project as any).impact && (
          <Card className="glass-card mt-8">
            <CardHeader>
              <CardTitle className="text-gradient">Project Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/90 leading-relaxed">{(project as any).impact}</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;