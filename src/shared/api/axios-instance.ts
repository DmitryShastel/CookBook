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
