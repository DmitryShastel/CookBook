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
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBCQtioqZytbeIZ0wn2aXf4xEYsYc26C-Odg&s',
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
      'https://www.eatingwell.com/thmb/Kx41aHMgb9iAY41IM5eSrQi-3O8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chickpea-curry-chhole-1x1-41ea4d53c7df4fddabd83caa5b57718e.jpg',
    description: 'Teriyaki chicken with sesame seeds • Better than takeout!',
    likesCount: 256,
    isLiked: false,
  },
  {
    id: '4',
    userName: 'Mike Recipes',
    userAvatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    recipeImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReYJasi1V24CPah3hMR9m2XehljsU8k0N5oA&s',
    description: 'Vegan lasagna with cashew cheese • Comfort food for everyone',
    likesCount: 67,
    isLiked: false,
  },
  {
    id: '5',
    userName: 'Sofia Kitchen',
    userAvatar: 'https://randomuser.me/api/portraits/women/90.jpg',
    recipeImage:
      'https://www.tasteofhome.com/wp-content/uploads/2025/07/Best-Lasagna_EXPS_ATBBZ25_36333_DR_07_01_2b.jpg',
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
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0L5pax5-5Jolvwwv5l9nSJVeIw3_-1FNpiQ&s',
    description: 'Salmon en croute with spinach • Elegant dinner party dish',
    likesCount: 178,
    isLiked: false,
  },
];
