import {
  getCategories,
  getCategoryByTitle,
  getRecipe,
} from '@/shared/api/axios-instance';
import { useQuery } from '@tanstack/react-query';

export function useCategoryQuery() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });
}

export function useCategoryMealsQuery(categoryTitle: string) {
  return useQuery({
    queryKey: ['category', categoryTitle, 'meals'],
    queryFn: () => getCategoryByTitle(categoryTitle),
  });
}

export function useRecipeQuery(recipeId: string) {
  return useQuery({
    queryKey: ['recipe', recipeId],
    queryFn: () => getRecipe(recipeId),
  });
}
