
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import { BookOpen, Clock, ChevronRight, Star, CheckCircle } from "lucide-react";

const Learning = () => {
  const [activeTab, setActiveTab] = useState("beginner");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-2">Learning Plans</h1>
        <p className="text-muted-foreground mb-6">
          Structured cooking courses to help you master new skills and techniques
        </p>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="beginner">Beginner</TabsTrigger>
            <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
          </TabsList>
          
          <TabsContent value="beginner" className="space-y-6">
            <LearningPlan
              title="Cooking Fundamentals"
              description="Master the basic techniques every home cook should know"
              duration="4 weeks"
              lessons={8}
              difficulty="Beginner"
              rating={4.9}
              completionRate={95}
              topics={["Knife skills", "Heat control", "Flavor building", "Basic sauces"]}
              featured={true}
            />
            
            <LearningPlan
              title="Breakfast Mastery"
              description="Start your day right with delicious breakfast recipes"
              duration="2 weeks"
              lessons={5}
              difficulty="Beginner"
              rating={4.7}
              completionRate={92}
              topics={["Egg techniques", "Quick breads", "Breakfast proteins", "Morning beverages"]}
            />
            
            <LearningPlan
              title="Simple Weeknight Dinners"
              description="Quick and satisfying meals for busy evenings"
              duration="3 weeks"
              lessons={6}
              difficulty="Beginner"
              rating={4.8}
              completionRate={89}
              topics={["One-pot meals", "30-minute recipes", "Meal prep", "Flavorful shortcuts"]}
            />
          </TabsContent>
          
          <TabsContent value="intermediate" className="space-y-6">
            <LearningPlan
              title="International Cuisine Basics"
              description="Explore signature dishes from around the world"
              duration="6 weeks"
              lessons={12}
              difficulty="Intermediate"
              rating={4.8}
              completionRate={87}
              topics={["Italian classics", "Asian essentials", "Mexican favorites", "Middle Eastern dishes"]}
              featured={true}
            />
            
            <LearningPlan
              title="Bread Baking"
              description="Learn to make delicious homemade breads from scratch"
              duration="4 weeks"
              lessons={8}
              difficulty="Intermediate"
              rating={4.9}
              completionRate={82}
              topics={["Yeasted breads", "Quick breads", "Sourdough basics", "Specialty loaves"]}
            />
            
            <LearningPlan
              title="Vegetarian Cooking"
              description="Create satisfying meat-free meals packed with flavor"
              duration="3 weeks"
              lessons={7}
              difficulty="Intermediate"
              rating={4.6}
              completionRate={90}
              topics={["Plant proteins", "Global vegetarian dishes", "Meat substitutes", "Seasonal cooking"]}
            />
          </TabsContent>
          
          <TabsContent value="advanced" className="space-y-6">
            <LearningPlan
              title="Pastry Techniques"
              description="Master the art of professional pastry making"
              duration="8 weeks"
              lessons={16}
              difficulty="Advanced"
              rating={4.9}
              completionRate={75}
              topics={["French pastries", "Laminated doughs", "Advanced cake decorating", "Showstopping desserts"]}
              featured={true}
            />
            
            <LearningPlan
              title="Molecular Gastronomy"
              description="Explore the science of modern cooking techniques"
              duration="6 weeks"
              lessons={12}
              difficulty="Advanced"
              rating={4.7}
              completionRate={68}
              topics={["Spherification", "Sous vide mastery", "Food foams", "Edible gels"]}
            />
            
            <LearningPlan
              title="Restaurant-Quality Plating"
              description="Present your dishes like a professional chef"
              duration="4 weeks"
              lessons={8}
              difficulty="Advanced"
              rating={4.8}
              completionRate={82}
              topics={["Color theory", "Sauce techniques", "Garnish mastery", "Composition principles"]}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

interface LearningPlanProps {
  title: string;
  description: string;
  duration: string;
  lessons: number;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  rating: number;
  completionRate: number;
  topics: string[];
  featured?: boolean;
}

const LearningPlan = ({ 
  title, 
  description, 
  duration,
  lessons,
  difficulty,
  rating,
  completionRate,
  topics,
  featured = false
}: LearningPlanProps) => {
  const difficultyColor = {
    "Beginner": "bg-green-100 text-green-800",
    "Intermediate": "bg-amber-100 text-amber-800", 
    "Advanced": "bg-red-100 text-red-800"
  }[difficulty];

  return (
    <Card className={`${featured ? 'border-culinary-500 shadow-md' : ''}`}>
      {featured && (
        <div className="bg-culinary-500 text-white text-xs font-semibold px-3 py-1 rounded-tl-md rounded-br-md absolute top-0 left-0">
          Featured
        </div>
      )}
      <CardHeader className={`${featured ? 'pt-9' : 'pt-6'}`}>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription className="mt-2">{description}</CardDescription>
          </div>
          <Badge className={difficultyColor}>{difficulty}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-4 mb-4">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{lessons} lessons</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 text-yellow-500" />
            <span className="text-sm">{rating} ({completionRate}% completion)</span>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2">You'll learn:</h4>
          <ul className="space-y-1">
            {topics.map((topic, index) => (
              <li key={index} className="flex items-center text-sm">
                <CheckCircle className="h-3.5 w-3.5 mr-2 text-culinary-500" />
                {topic}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          View Course <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Learning;
