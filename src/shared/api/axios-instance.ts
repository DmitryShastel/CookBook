import axios from 'axios';

export const BaseUrl = 'https://www.themealdb.com/api/json/v1/1/';

export interface Category {
  strCategoryDescription: string;
  strCategoryThumb: string;
  strCategory: string;
  idCategory: string;
}

export const apiClient = axios.create({
  baseURL: BaseUrl,
  headers: { 'Content-Type': 'application/json' },
});

export const getCategories = async () => {
  try {
    const { data } = await apiClient.get('/categories.php');
    return data.categories as Category[];
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};
