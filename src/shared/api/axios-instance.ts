import axios from 'axios';

export const BaseUrl = 'www.themealdb.com/api/json/v1/1/';

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
  const { data } = await apiClient.get('/categories.php');
  return data.categories as Category[];
};
