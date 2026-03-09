import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  SignUp: undefined;
  MainTabs: undefined;
  Profile: undefined;
  Settings: undefined;
};

export type HomeStackParamList = {
  RecipeList: undefined;
  Recipe: { recipeId: string };
};

export type RecipeListNavigationProp = NativeStackNavigationProp<
  HomeStackParamList,
  'RecipeList'
>;
