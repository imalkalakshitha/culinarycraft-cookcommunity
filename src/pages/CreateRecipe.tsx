
import Navbar from '@/components/Navbar';
import CreateRecipeForm from '@/components/CreateRecipeForm';

const CreateRecipe = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">Create Recipe</h1>
        <p className="text-muted-foreground mb-8">
          Share your culinary creation with the community
        </p>
        
        <CreateRecipeForm />
      </main>
    </div>
  );
};

export default CreateRecipe;
