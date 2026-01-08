import axios from 'axios'

export const baseAxios = axios.create({
  baseURL: 'https://fakestoreapi.com/products',
  timeout: 1000,
})
