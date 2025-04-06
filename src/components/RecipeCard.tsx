
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Clock } from "lucide-react";
import { Recipe } from '@/types';

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <Link to={`/recipe/${recipe.id}`}>
      <Card className="overflow-hidden recipe-card">
        <div className="aspect-video relative overflow-hidden bg-muted">
          <img
            src={recipe.images[0]}
            alt={recipe.title}
            className="h-full w-full object-cover transition-all hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-4">
            <div className="flex justify-between">
              <Badge variant="secondary" className="bg-white/90 text-black">
                {recipe.difficulty}
              </Badge>
              <div className="flex items-center space-x-1 text-white">
                <Clock className="h-3 w-3" />
                <span className="text-xs">{recipe.cookingTime} min</span>
              </div>
            </div>
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold mb-1 line-clamp-1">{recipe.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{recipe.description}</p>
          <div className="flex flex-wrap gap-1 mt-2">
            {recipe.tags.slice(0, 3).map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="border-t p-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={recipe.author.profileImage} alt={recipe.author.name} />
              <AvatarFallback>{recipe.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="text-sm">{recipe.author.name}</span>
          </div>
          <div className="flex items-center space-x-3 text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Heart className="h-4 w-4" />
              <span className="text-xs">{recipe.likes}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MessageCircle className="h-4 w-4" />
              <span className="text-xs">{recipe.comments.length}</span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default RecipeCard;
