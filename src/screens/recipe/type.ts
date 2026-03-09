import { RouteProp } from '@react-navigation/native';

export type RecipeDetailsRouteProp = RouteProp<
  { params: { recipeId: string } },
  'params'
>;
