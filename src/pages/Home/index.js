import { useEffect, useState } from 'react';
import api from '../../services/api';
import {Link } from 'react-router-dom'
import './home.css';

// URL: https://api.themoviedb.org/3/movie/now_playing?api_key=88b6db293bfea153a6257eddbeddd548&language=pt-BR

function Home(){
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(()=>{

    async function loadFilmes(){
      const response = await api.get("movie/now_playing", {
        params:{
         api_key: "28fc232cc001c31e8a031f419d0a14ca",
         language: "pt-BR",
         page: 1,
        }
      })

      //console.log(response.data.results.slice(0, 10));
      setFilmes(response.data.results.slice(0, 10))
      setLoading(false);
    }

    loadFilmes();

  }, [])

  if(loading) {
    return(
      <div className='loading'>
        <h2>Carregando filmes...</h2>
      </div>
    )
  }

  return (
    <div className='container'>
    <div className='row'>
      {filmes.map((filme) => (
        <div className='col-md-4 mb-4 ' key={filme.id}>
          <div className='card'>
            <article>
              <strong className='card-title text-center'>{filme.title}</strong>
              <img
                src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                alt={filme.title}
                className='card-img-top'
              />
              <Link to={`/filme/${filme.id}`} className='acess btn btn-primary'>
                Acessar
              </Link>
            </article>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Home;