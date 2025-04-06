
export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  bio?: string;
  profileImage?: string;
  createdAt: Date;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  cookingTime: number;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  images: string[];
  tags: string[];
  author: User;
  likes: number;
  comments: Comment[];
  createdAt: Date;
}

export interface Comment {
  id: string;
  content: string;
  author: User;
  createdAt: Date;
}
