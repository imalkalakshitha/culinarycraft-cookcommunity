
import { User, Recipe } from '@/types';

export const users: User[] = [
  {
    id: '1',
    name: 'John Doe',
    username: 'johndoe',
    email: 'john@example.com',
    bio: 'Passionate home cook exploring flavors from around the world',
    profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    createdAt: new Date('2023-01-15'),
  },
  {
    id: '2',
    name: 'Jane Smith',
    username: 'janesmith',
    email: 'jane@example.com',
    bio: 'Professional chef sharing restaurant-quality recipes for home cooks',
    profileImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    createdAt: new Date('2023-02-20'),
  },
  {
    id: '3',
    name: 'Alex Kim',
    username: 'alexkim',
    email: 'alex@example.com',
    bio: 'Food photographer and recipe developer based in Seoul',
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    createdAt: new Date('2023-03-10'),
  },
];

export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Classic Spaghetti Carbonara',
    description: 'A traditional Italian pasta dish from Rome made with eggs, cheese, pancetta, and black pepper.',
    ingredients: [
      '350g spaghetti',
      '150g pancetta or guanciale, diced',
      '4 large eggs',
      '50g Pecorino Romano cheese, grated',
      '50g Parmesan cheese, grated',
      'Freshly ground black pepper',
      'Salt to taste'
    ],
    instructions: [
      'Bring a large pot of salted water to boil and cook spaghetti according to package directions until al dente.',
      'While pasta cooks, heat a large skillet over medium heat and cook pancetta until crispy, about 5-7 minutes.',
      'In a bowl, whisk together eggs, both cheeses, and plenty of black pepper.',
      'Reserve 1 cup of pasta water, then drain pasta and immediately add to the skillet with pancetta.',
      'Remove from heat, and quickly pour in egg mixture, stirring constantly to coat pasta and create a creamy sauce.',
      'Add a splash of reserved pasta water if needed to thin the sauce.',
      'Serve immediately with extra grated cheese and black pepper on top.'
    ],
    cookingTime: 25,
    servings: 4,
    difficulty: 'Medium',
    images: ['https://images.unsplash.com/photo-1546549032-9571cd6b27df?ixlib=rb-4.0.3'],
    tags: ['Italian', 'Pasta', 'Dinner', 'Quick'],
    author: users[0],
    likes: 245,
    comments: [
      {
        id: '101',
        content: 'Made this last night and it was delicious! Simple ingredients but amazing flavor.',
        author: users[1],
        createdAt: new Date('2023-04-18'),
      },
      {
        id: '102',
        content: 'Perfect carbonara recipe! The key is really to work quickly when adding the eggs.',
        author: users[2],
        createdAt: new Date('2023-04-20'),
      },
    ],
    createdAt: new Date('2023-04-15'),
  },
  {
    id: '2',
    title: 'Thai Green Curry',
    description: 'A fragrant and spicy Thai curry with coconut milk, vegetables, and your choice of protein.',
    ingredients: [
      '3 tbsp green curry paste',
      '400ml coconut milk',
      '300g chicken breast, sliced (or tofu for vegetarian)',
      '1 red bell pepper, sliced',
      '100g green beans, trimmed',
      '1 aubergine, diced',
      '2 kaffir lime leaves',
      '1 tbsp fish sauce (or soy sauce for vegetarian)',
      '1 tbsp palm sugar',
      'Handful of Thai basil leaves',
      'Jasmine rice to serve'
    ],
    instructions: [
      'Heat a large pan or wok over medium heat. Add 2 tablespoons of coconut milk and the curry paste, stir until fragrant.',
      'Add the chicken and cook until no longer pink on the outside.',
      'Pour in the remaining coconut milk, bring to a simmer, then add vegetables, lime leaves, fish sauce, and palm sugar.',
      'Simmer for 10-15 minutes until the vegetables are tender and chicken is cooked through.',
      'Stir in Thai basil leaves just before serving.',
      'Serve hot with jasmine rice.'
    ],
    cookingTime: 35,
    servings: 4,
    difficulty: 'Medium',
    images: ['https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3'],
    tags: ['Thai', 'Curry', 'Spicy', 'Dinner'],
    author: users[1],
    likes: 189,
    comments: [
      {
        id: '201',
        content: 'Love this recipe! I added extra vegetables and it turned out fantastic.',
        author: users[0],
        createdAt: new Date('2023-05-10'),
      }
    ],
    createdAt: new Date('2023-05-05'),
  },
  {
    id: '3',
    title: 'Blueberry Pancakes',
    description: 'Light and fluffy pancakes studded with fresh blueberries, perfect for weekend breakfasts.',
    ingredients: [
      '200g all-purpose flour',
      '2 tbsp sugar',
      '1 tsp baking powder',
      '1/2 tsp baking soda',
      '1/4 tsp salt',
      '1 egg',
      '300ml buttermilk',
      '2 tbsp melted butter',
      '150g fresh blueberries',
      'Maple syrup and butter for serving'
    ],
    instructions: [
      'In a large bowl, whisk together the flour, sugar, baking powder, baking soda, and salt.',
      'In another bowl, beat the egg, then add buttermilk and melted butter.',
      'Pour the wet ingredients into the dry ingredients and stir until just combined (lumps are okay).',
      'Gently fold in the blueberries.',
      'Heat a non-stick pan or griddle over medium heat and lightly grease.',
      'Pour about 1/4 cup of batter for each pancake and cook until bubbles form on the surface.',
      'Flip and cook for 1-2 minutes more until golden brown.',
      'Serve with maple syrup and butter.'
    ],
    cookingTime: 20,
    servings: 4,
    difficulty: 'Easy',
    images: ['https://images.unsplash.com/photo-1528207776546-365bb710ee93?ixlib=rb-4.0.3'],
    tags: ['Breakfast', 'Sweet', 'Vegetarian', 'Fruit'],
    author: users[2],
    likes: 315,
    comments: [
      {
        id: '301',
        content: 'These are the fluffiest pancakes ever! My kids loved them.',
        author: users[0],
        createdAt: new Date('2023-06-12'),
      },
      {
        id: '302',
        content: 'I substituted with gluten-free flour and they still turned out amazing!',
        author: users[1],
        createdAt: new Date('2023-06-14'),
      }
    ],
    createdAt: new Date('2023-06-10'),
  },
];

export const currentUser = users[0];
