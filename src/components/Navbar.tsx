
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Search, PlusCircle, User, LogOut } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { currentUser } from "@/utils/mockData";

const Navbar = () => {
  const isLoggedIn = true; // This would be controlled by your auth state

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <Link to="/" className="flex items-center gap-2 mr-6">
          <div className="text-culinary-500 font-bold text-2xl">
            CulinaryCraft
          </div>
        </Link>
        
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Discover</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid grid-cols-2 gap-3 p-4 w-[400px]">
                  <NavigationMenuLink asChild>
                    <Link to="/?category=trending" className="block select-none space-y-1 rounded-md p-3 no-underline outline-none focus:bg-accent focus:text-accent-foreground hover:bg-accent hover:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">Trending</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        See what's hot in the culinary world right now
                      </p>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/?category=new" className="block select-none space-y-1 rounded-md p-3 no-underline outline-none focus:bg-accent focus:text-accent-foreground hover:bg-accent hover:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">New Recipes</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Fresh recipes from our community
                      </p>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/?category=quick" className="block select-none space-y-1 rounded-md p-3 no-underline outline-none focus:bg-accent focus:text-accent-foreground hover:bg-accent hover:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">Quick & Easy</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Delicious meals ready in 30 minutes or less
                      </p>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/?category=vegetarian" className="block select-none space-y-1 rounded-md p-3 no-underline outline-none focus:bg-accent focus:text-accent-foreground hover:bg-accent hover:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">Vegetarian</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Plant-based recipes full of flavor
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/challenges" className="px-4 py-2 text-sm font-medium">
                Challenges
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/learning" className="px-4 py-2 text-sm font-medium">
                Learning Plans
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <div className="ml-auto flex items-center gap-4">
          <form className="hidden md:flex relative w-full max-w-sm items-center">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search recipes..."
              className="pl-8 w-full max-w-sm"
            />
          </form>
          
          {isLoggedIn ? (
            <>
              <Button asChild variant="ghost" size="icon" className="relative">
                <Link to="/create">
                  <PlusCircle className="h-5 w-5" />
                  <span className="sr-only">New Recipe</span>
                </Link>
              </Button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={currentUser.profileImage} alt={currentUser.name} />
                      <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{currentUser.name}</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        @{currentUser.username}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="cursor-pointer flex w-full items-center">
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <div className="flex gap-2">
              <Button variant="outline" asChild>
                <Link to="/login">Log in</Link>
              </Button>
              <Button asChild>
                <Link to="/signup">Sign up</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
