
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import RecipeCard from '@/components/RecipeCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { recipes } from '@/utils/mockData';
import { 
  BookOpen, 
  ChefHat, 
  Clock, 
  Coffee, 
  Search, 
  TrendingUp,
  Utensils, 
  X
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  
  const toggleFilter = (filter: string) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters(activeFilters.filter(f => f !== filter));
    } else {
      setActiveFilters([...activeFilters, filter]);
    }
  };
  
  const clearFilters = () => {
    setActiveFilters([]);
    setSearchTerm('');
  };
  
  const filteredRecipes = recipes.filter(recipe => {
    // Apply search term filter
    const matchesSearch = searchTerm === '' || 
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    // Apply category filters
    const matchesFilters = activeFilters.length === 0 || 
      activeFilters.some(filter => {
        if (filter === 'Quick') return recipe.cookingTime <= 30;
        if (filter === 'Vegetarian') return recipe.tags.includes('Vegetarian');
        return recipe.tags.includes(filter);
      });
    
    return matchesSearch && matchesFilters;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <section className="mb-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Discover Delicious Recipes</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Explore recipes shared by our community of passionate home cooks
            </p>
            
            <div className="flex gap-2 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  className="pl-10"
                  placeholder="Search recipes, ingredients, or tags..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button>Search</Button>
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center">
              {['Italian', 'Quick', 'Vegetarian', 'Breakfast', 'Dinner', 'Dessert'].map((filter) => (
                <Badge 
                  key={filter}
                  variant={activeFilters.includes(filter) ? "default" : "outline"} 
                  className="cursor-pointer"
                  onClick={() => toggleFilter(filter)}
                >
                  {filter}
                </Badge>
              ))}
              {(activeFilters.length > 0 || searchTerm) && (
                <Badge 
                  variant="outline" 
                  className="cursor-pointer border-dashed"
                  onClick={clearFilters}
                >
                  <X className="h-3 w-3 mr-1" /> Clear filters
                </Badge>
              )}
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <TrendingUp className="h-5 w-5 mr-2 text-culinary-500" />
            Trending Recipes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.slice(0, 3).map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <ChefHat className="h-5 w-5 mr-2 text-culinary-500" />
            Explore Categories
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Quick & Easy', icon: Clock, color: 'bg-amber-100' },
              { name: 'Breakfast', icon: Coffee, color: 'bg-blue-100' },
              { name: 'Main Dishes', icon: Utensils, color: 'bg-green-100' },
              { name: 'Desserts', icon: ChefHat, color: 'bg-purple-100' },
              { name: 'Vegetarian', icon: Utensils, color: 'bg-emerald-100' },
              { name: 'Cookbook', icon: BookOpen, color: 'bg-rose-100' },
            ].map((category, index) => (
              <div 
                key={index} 
                className={`${category.color} rounded-lg p-4 flex flex-col items-center justify-center text-center cursor-pointer hover:shadow-md transition-shadow`}
                onClick={() => toggleFilter(category.name.split(' ')[0])}
              >
                <category.icon className="h-8 w-8 mb-2" />
                <span className="font-medium">{category.name}</span>
              </div>
            ))}
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-6">All Recipes</h2>
          {filteredRecipes.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground mb-4">No recipes found</p>
              <Button onClick={clearFilters}>Clear filters</Button>
            </div>
          )}
        </section>
      </main>
      
      <footer className="bg-muted py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-2">CulinaryCraft</h2>
          <p className="text-muted-foreground mb-6">Your Ultimate Cooking Companion</p>
          <div className="flex justify-center gap-4 text-sm">
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Contact</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
          <p className="text-xs text-muted-foreground mt-8">
            © {new Date().getFullYear()} CulinaryCraft. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
