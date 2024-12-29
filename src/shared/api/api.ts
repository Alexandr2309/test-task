import axios from "axios";

export const api = axios.create({
  baseURL: 'http://localhost:3000',
})

export const geoApi = axios.create({
  baseURL: 'https://api.geoapify.com/v1/geocode/search?apiKey=bcf3e1bcbbaa45a59e1718e08cbf874a',
})