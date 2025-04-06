
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import CommentSection from '@/components/CommentSection';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
  Heart,
  Clock,
  ChefHat,
  Users,
  Share2,
  Bookmark,
  Printer,
  ArrowLeft
} from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { recipes, currentUser } from '@/utils/mockData';
import { Comment } from '@/types';
import { toast } from 'sonner';

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipes.find(r => r.id === id);
  
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [comments, setComments] = useState<Comment[]>(recipe?.comments || []);
  
  if (!recipe) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Recipe Not Found</h1>
          <p className="text-muted-foreground mb-8">The recipe you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    );
  }
  
  const handleLike = () => {
    setLiked(!liked);
    toast.success(liked ? 'Removed from your likes' : 'Added to your likes');
  };
  
  const handleSave = () => {
    setSaved(!saved);
    toast.success(saved ? 'Removed from your bookmarks' : 'Saved to your bookmarks');
  };
  
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success('Link copied to clipboard');
  };
  
  const handlePrint = () => {
    window.print();
  };
  
  const handleAddComment = (content: string) => {
    const newComment: Comment = {
      id: `temp-${Date.now()}`,
      content,
      author: currentUser,
      createdAt: new Date(),
    };
    
    setComments([newComment, ...comments]);
    toast.success('Comment added');
  };

  return (
    <div className="min-h-screen bg-background print:bg-white">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6 print:hidden">
          <Button variant="ghost" asChild>
            <Link to="/" className="flex items-center">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to recipes
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{recipe.title}</h1>
              <p className="text-lg text-muted-foreground mb-6">{recipe.description}</p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{recipe.cookingTime} mins</span>
                </div>
                <div className="flex items-center">
                  <ChefHat className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{recipe.difficulty}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{recipe.servings} servings</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {recipe.tags.map((tag, index) => (
                  <Badge key={index} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <div className="aspect-video rounded-lg overflow-hidden mb-8">
                <img 
                  src={recipe.images[0]} 
                  alt={recipe.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex items-center justify-between print:hidden">
                <div className="flex items-center">
                  <Link to={`/profile/${recipe.author.id}`} className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src={recipe.author.profileImage} alt={recipe.author.name} />
                      <AvatarFallback>{recipe.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{recipe.author.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {formatDistanceToNow(recipe.createdAt, { addSuffix: true })}
                      </div>
                    </div>
                  </Link>
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    variant={liked ? "default" : "outline"} 
                    size="icon"
                    onClick={handleLike}
                  >
                    <Heart className={`h-4 w-4 ${liked ? "fill-current" : ""}`} />
                  </Button>
                  <Button 
                    variant={saved ? "default" : "outline"} 
                    size="icon"
                    onClick={handleSave}
                  >
                    <Bookmark className={`h-4 w-4 ${saved ? "fill-current" : ""}`} />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={handleShare}
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={handlePrint}
                  >
                    <Printer className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Ingredients</h2>
              <ul className="space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-baseline gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-culinary-500 mt-1"></span>
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Instructions</h2>
              <ol className="space-y-6">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="flex gap-4">
                    <div className="flex-shrink-0 bg-culinary-100 text-culinary-800 rounded-full h-8 w-8 flex items-center justify-center font-medium">
                      {index + 1}
                    </div>
                    <div>
                      <p>{instruction}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            
            <div className="print:hidden">
              <CommentSection 
                comments={comments} 
                onAddComment={handleAddComment} 
              />
            </div>
          </div>
          
          <div className="lg:col-span-1 print:hidden">
            <div className="sticky top-24 space-y-8">
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-lg font-medium mb-4">More from {recipe.author.name}</h3>
                <div className="space-y-4">
                  {recipes
                    .filter(r => r.author.id === recipe.author.id && r.id !== recipe.id)
                    .slice(0, 3)
                    .map((relatedRecipe) => (
                      <Link 
                        key={relatedRecipe.id} 
                        to={`/recipe/${relatedRecipe.id}`}
                        className="flex items-center gap-3 hover:bg-accent rounded-md p-2 transition-colors"
                      >
                        <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                          <img 
                            src={relatedRecipe.images[0]} 
                            alt={relatedRecipe.title}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium line-clamp-2">{relatedRecipe.title}</h4>
                          <div className="text-xs text-muted-foreground">
                            {relatedRecipe.cookingTime} mins • {relatedRecipe.difficulty}
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
              
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-lg font-medium mb-4">You might also like</h3>
                <div className="space-y-4">
                  {recipes
                    .filter(r => r.id !== recipe.id && r.author.id !== recipe.author.id)
                    .slice(0, 3)
                    .map((relatedRecipe) => (
                      <Link 
                        key={relatedRecipe.id} 
                        to={`/recipe/${relatedRecipe.id}`}
                        className="flex items-center gap-3 hover:bg-accent rounded-md p-2 transition-colors"
                      >
                        <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                          <img 
                            src={relatedRecipe.images[0]} 
                            alt={relatedRecipe.title}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium line-clamp-2">{relatedRecipe.title}</h4>
                          <div className="text-xs text-muted-foreground">
                            {relatedRecipe.cookingTime} mins • {relatedRecipe.difficulty}
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RecipeDetail;
