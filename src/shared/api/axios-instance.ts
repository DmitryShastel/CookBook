import axios from 'axios';

export const BaseUrl = 'www.themealdb.com/api/json/v1/1/';

export const apiClient = axios.create({
  baseURL: BaseUrl,
  headers: { 'Content-Type': 'application/json' },
});
