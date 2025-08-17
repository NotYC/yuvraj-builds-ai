import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center glass-card max-w-md mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-gradient">404</h1>
        <p className="text-xl text-muted-foreground mb-4">Oops! Page not found</p>
        <p className="text-foreground/80 mb-6">The page you're looking for doesn't exist or has been moved.</p>
        <Button 
          asChild
          className="gradient-primary text-primary-foreground glow-primary"
        >
          <a href="/">Return to Portfolio</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
