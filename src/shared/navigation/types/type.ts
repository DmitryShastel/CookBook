import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  SignUp: undefined;
  MainTabs: undefined;
  Profile: undefined;
  Settings: undefined;
};

export type HomeStackParamList = {
  RecipeList: { categoryTitle: string };
  Recipe: { recipeId: string };
};

export type RecipeListNavigationProp = NativeStackNavigationProp<
  HomeStackParamList,
  'RecipeList'
>;

export type RecipeListRouteProp = RouteProp<HomeStackParamList, 'RecipeList'>;

export type RecipeRouteProp = RouteProp<HomeStackParamList, 'Recipe'>;
