
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChefHat } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <ChefHat className="h-24 w-24 mx-auto text-culinary-500" />
        <h1 className="text-5xl font-bold">404</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Oops! This page isn't on our menu.
        </p>
        <p className="text-muted-foreground mb-8">
          The page you're looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </p>
        <Button asChild size="lg">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
