
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import UserProfileHeader from '@/components/UserProfileHeader';
import RecipeCard from '@/components/RecipeCard';
import { TabsContent } from '@/components/ui/tabs';
import { ChefHat } from 'lucide-react';
import { users, recipes } from '@/utils/mockData';

const Profile = () => {
  const { userId } = useParams();
  const user = userId 
    ? users.find(u => u.id === userId) 
    : users[0]; // Default to first user if no ID provided
  
  const userRecipes = recipes.filter(recipe => recipe.author.id === user?.id);
  
  if (!user) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">User Not Found</h1>
          <p className="text-muted-foreground">The user you're looking for doesn't exist or has been removed.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <UserProfileHeader user={user} recipes={userRecipes} />
        
        <div className="mt-6">
          <TabsContent value="recipes" className="space-y-6">
            {userRecipes.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {userRecipes.map((recipe) => (
                  <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 border border-dashed rounded-lg">
                <ChefHat className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-medium mb-2">No recipes yet</h3>
                <p className="text-muted-foreground">
                  {user.id === users[0].id 
                    ? "You haven't shared any recipes yet. Create your first one!" 
                    : `${user.name} hasn't shared any recipes yet.`}
                </p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="saved">
            <div className="text-center py-16 border border-dashed rounded-lg">
              <Bookmark className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-xl font-medium mb-2">No saved recipes</h3>
              <p className="text-muted-foreground">
                {user.id === users[0].id 
                  ? "You haven't saved any recipes yet." 
                  : `${user.name} has no public saved recipes.`}
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="progress">
            <div className="text-center py-16 border border-dashed rounded-lg">
              <LineChart className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-xl font-medium mb-2">No progress updates</h3>
              <p className="text-muted-foreground">
                {user.id === users[0].id 
                  ? "You haven't shared any cooking progress yet." 
                  : `${user.name} hasn't shared any cooking progress yet.`}
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="plans">
            <div className="text-center py-16 border border-dashed rounded-lg">
              <CalendarDays className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-xl font-medium mb-2">No cooking plans</h3>
              <p className="text-muted-foreground">
                {user.id === users[0].id 
                  ? "You haven't created any cooking plans yet." 
                  : `${user.name} hasn't shared any cooking plans yet.`}
              </p>
            </div>
          </TabsContent>
        </div>
      </main>
    </div>
  );
};

// Import these components for the tab content
import { Bookmark, LineChart, CalendarDays } from 'lucide-react';

export default Profile;
