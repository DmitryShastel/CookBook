import { Recipe } from '@/features/recipeList/model/types/RecipeList';

export const MOCK_RECIPES: Recipe[] = [
  {
    id: '1',
    userName: 'Chef Maria',
    userAvatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    recipeImage:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
    description:
      'Chorizo & mozzarella gnocchi bake • Super delicious and easy to make!',
    likesCount: 124,
    isLiked: false,
  },
  {
    id: '2',
    userName: 'John Kitchen',
    userAvatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    recipeImage:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1001483_11-2e53fa3.jpg',
    description:
      'Classic beef burger with caramelized onions • Perfect for weekend BBQ',
    likesCount: 89,
    isLiked: true,
  },
  {
    id: '3',
    userName: 'Anna Cooks',
    userAvatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    recipeImage:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/teriyaki-chicken-c79b27a.jpg',
    description: 'Teriyaki chicken with sesame seeds • Better than takeout!',
    likesCount: 256,
    isLiked: false,
  },
  {
    id: '4',
    userName: 'Mike Recipes',
    userAvatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    recipeImage:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/vegan-lasagna-6f8949c.jpg',
    description: 'Vegan lasagna with cashew cheese • Comfort food for everyone',
    likesCount: 67,
    isLiked: false,
  },
  {
    id: '5',
    userName: 'Sofia Kitchen',
    userAvatar: 'https://randomuser.me/api/portraits/women/90.jpg',
    recipeImage:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/pancakes-3ee416e.jpg',
    description:
      'Fluffy American pancakes with maple syrup • Weekend breakfast special',
    likesCount: 312,
    isLiked: true,
  },
  {
    id: '6',
    userName: 'Tom Foodie',
    userAvatar: 'https://randomuser.me/api/portraits/men/52.jpg',
    recipeImage:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/salmon-en-croute-fcbe0c1.jpg',
    description: 'Salmon en croute with spinach • Elegant dinner party dish',
    likesCount: 178,
    isLiked: false,
  },
];
