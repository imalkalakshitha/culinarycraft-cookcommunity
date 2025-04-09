
import { useState } from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import { Clock, Trophy, Users } from "lucide-react";

const Challenges = () => {
  const [activeTab, setActiveTab] = useState("ongoing");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-2">Cooking Challenges</h1>
        <p className="text-muted-foreground mb-6">
          Test your cooking skills with time-limited challenges and win recognition from the community
        </p>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex border-b mb-6">
            <Button 
              variant={activeTab === "ongoing" ? "default" : "ghost"} 
              onClick={() => setActiveTab("ongoing")}
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-culinary-500 px-4"
            >
              Ongoing Challenges
            </Button>
            <Button 
              variant={activeTab === "upcoming" ? "default" : "ghost"} 
              onClick={() => setActiveTab("upcoming")}
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-culinary-500 px-4"
            >
              Upcoming Challenges
            </Button>
            <Button 
              variant={activeTab === "past" ? "default" : "ghost"} 
              onClick={() => setActiveTab("past")}
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-culinary-500 px-4"
            >
              Past Challenges
            </Button>
          </div>
          
          <TabsContent value="ongoing" className="space-y-6">
            <ChallengeCard 
              title="5-Ingredient Wonder" 
              description="Create a delicious dish using only 5 ingredients in 30 minutes"
              timeRemaining="2 days 5 hours"
              participants={248}
              difficulty="Medium"
            />
            <ChallengeCard 
              title="Plant-Based Power" 
              description="Craft a nutritious, flavorful vegan main course that will impress even meat-lovers"
              timeRemaining="5 days 12 hours"
              participants={173}
              difficulty="Hard"
            />
          </TabsContent>
          
          <TabsContent value="upcoming" className="space-y-6">
            <ChallengeCard 
              title="One-Pot Wonder" 
              description="Create an entire meal using just one pot or pan"
              timeRemaining="Starts in 3 days"
              participants={0}
              difficulty="Easy"
              upcoming={true}
            />
            <ChallengeCard 
              title="Global Breakfast" 
              description="Cook a traditional breakfast dish from another culture"
              timeRemaining="Starts in 1 week"
              participants={0}
              difficulty="Medium"
              upcoming={true}
            />
          </TabsContent>
          
          <TabsContent value="past" className="space-y-6">
            <ChallengeCard 
              title="Dessert Reimagined" 
              description="Take a classic dessert and give it an unexpected twist"
              timeRemaining="Ended 2 days ago"
              participants={315}
              difficulty="Hard"
              past={true}
              winner="@chefmaria"
            />
            <ChallengeCard 
              title="Breakfast for Dinner" 
              description="Create an evening meal using traditional breakfast ingredients"
              timeRemaining="Ended 1 week ago"
              participants={287}
              difficulty="Medium"
              past={true}
              winner="@cookingjoe"
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

interface ChallengeCardProps {
  title: string;
  description: string;
  timeRemaining: string;
  participants: number;
  difficulty: "Easy" | "Medium" | "Hard";
  upcoming?: boolean;
  past?: boolean;
  winner?: string;
}

const ChallengeCard = ({ 
  title, 
  description, 
  timeRemaining, 
  participants, 
  difficulty,
  upcoming = false,
  past = false,
  winner
}: ChallengeCardProps) => {
  const difficultyColor = {
    "Easy": "bg-green-100 text-green-800",
    "Medium": "bg-amber-100 text-amber-800", 
    "Hard": "bg-red-100 text-red-800"
  }[difficulty];

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription className="mt-2">{description}</CardDescription>
          </div>
          <Badge className={difficultyColor}>{difficulty}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{timeRemaining}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{participants} participants</span>
          </div>
          {past && winner && (
            <div className="flex items-center gap-2">
              <Trophy className="h-4 w-4 text-yellow-500" />
              <span className="text-sm">Winner: {winner}</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        {!past && (
          <Button className="w-full" disabled={upcoming}>
            {upcoming ? "Coming Soon" : "Join Challenge"}
          </Button>
        )}
        {past && (
          <Button variant="outline" className="w-full">
            View Submissions
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default Challenges;
