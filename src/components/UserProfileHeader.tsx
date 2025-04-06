
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Recipe } from '@/types';
import { currentUser } from '@/utils/mockData';
import { Edit, Settings } from "lucide-react";

interface UserProfileHeaderProps {
  user: User;
  recipes: Recipe[];
}

const UserProfileHeader = ({ user, recipes }: UserProfileHeaderProps) => {
  const isCurrentUser = user.id === currentUser.id;
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
        <Avatar className="h-24 w-24">
          <AvatarImage src={user.profileImage} alt={user.name} />
          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
        </Avatar>
        
        <div className="flex-1">
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p className="text-muted-foreground mb-2">@{user.username}</p>
          {user.bio && <p className="mb-4 max-w-2xl">{user.bio}</p>}
          
          <div className="flex flex-wrap gap-6 text-sm">
            <div>
              <span className="font-bold">{recipes.length}</span> recipes
            </div>
            <div>
              <span className="font-bold">124</span> followers
            </div>
            <div>
              <span className="font-bold">45</span> following
            </div>
          </div>
        </div>
        
        <div className="ml-auto">
          {isCurrentUser ? (
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
              <Button variant="outline" size="sm">
                <Edit className="mr-2 h-4 w-4" />
                Edit Profile
              </Button>
            </div>
          ) : (
            <Button>Follow</Button>
          )}
        </div>
      </div>
      
      <Tabs defaultValue="recipes" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="recipes">Recipes</TabsTrigger>
          <TabsTrigger value="saved">Saved</TabsTrigger>
          <TabsTrigger value="progress">Progress</TabsTrigger>
          <TabsTrigger value="plans">Plans</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default UserProfileHeader;
