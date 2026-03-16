import axios from 'axios';
import {
  Category,
  MealSummary,
  RecipeResponse,
} from '@/features/recipeList/api/types/RecipeList';
import { QueryClient } from '@tanstack/react-query';

export const BaseUrl = 'https://www.themealdb.com/api/json/v1/1/';

export const queryClient = new QueryClient();

export const apiClient = axios.create({
  baseURL: BaseUrl,
  headers: { 'Content-Type': 'application/json' },
});

export const getCategories = async (): Promise<Category[]> => {
  try {
    const { data } = await apiClient.get('/categories.php');
    return data.categories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};

export const getCategoryByTitle = async (
  strCategory: string,
): Promise<MealSummary[]> => {
  try {
    const { data } = await apiClient.get('/filter.php', {
      params: { c: strCategory },
    });
    return data.meals || [];
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};

export const getRecipe = async (recipeId: string) => {
  try {
    const { data } = await apiClient.get<RecipeResponse>('/lookup.php', {
      params: { i: recipeId },
    });
    return data.meals?.[0] || null;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return null;
  }
};
