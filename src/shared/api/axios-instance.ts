import axios from 'axios';

export const BaseUrl = 'https://www.themealdb.com/api/json/v1/1/';

export interface Category {
  strCategoryDescription: string;
  strCategoryThumb: string;
  strCategory: string;
  idCategory: string;
}

export interface MealSummary {
  idMeal: string;
  strMealThumb: string;
  strMeal: string;
}

export interface IngredientItem {
  ingredient: string;
  measure: string;
}
export interface Recipe {
  idMeal: string;
  strMeal: string;
  strMealAlternate: string | null;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string | null;
  strYoutube: string;
  strSource: string;
  strImageSource: string | null;
  strCreativeCommonsConfirmed: string | null;
  dateModified: string | null;
  ingredients: IngredientItem[];
}

export const apiClient = axios.create({
  baseURL: BaseUrl,
  headers: { 'Content-Type': 'application/json' },
});

export const getCategories = async (): Promise<Category[]> => {
  try {
    const { data } = await apiClient.get('/categories.php');
    return data.categories as Category[];
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

export const getRecipe = async (recipeId: string): Promise<Recipe[]> => {
  try {
    const { data } = await apiClient.get('/lookup.php', {
      params: { i: recipeId },
    });
    return data.meals || [];
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};
