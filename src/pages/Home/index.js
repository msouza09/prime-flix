import { useEffect, useState } from 'react';
import api from '../../services/api';
// URL: https://api.themoviedb.org/3/movie/now_playing?api_key=88b6db293bfea153a6257eddbeddd548&language=pt-BR

function Home(){
  const [filmes, setFilmes] = useState([]);

  useEffect(()=> {
    async function loadFilmes(){
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "88b6db293bfea153a6257eddbeddd548",
          language: "pt-BR",
          page: 1,
        }
      })

      console.log(response);
    }

      loadFilmes();
  }, [])

  return(
    <div>
      <h1>BEM VINDO A HOME</h1>
    </div>
  )
}

export default Home;