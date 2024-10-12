import axios from "axios";

// Base da URL: https://api.themoviedb.org/3/
// URL https://api.themoviedb.org/3/movie/now_playing?api_key=88b6db293bfea153a6257eddbeddd548&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;