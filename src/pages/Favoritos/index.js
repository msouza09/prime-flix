import { useEffect, useState } from 'react';
import './favoritos.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function Favoritos() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const minhaLista = localStorage.getItem("@primeflix");
        setFilmes(JSON.parse(minhaLista) || []);
    }, []);

    function excluirFilme(id) {
        const filtroFilmes = filmes.filter((filme) => filme.id !== id);
        setFilmes(filtroFilmes);
        localStorage.setItem("@primeflix", JSON.stringify(filtroFilmes));
        toast.success("Filme removido com sucesso");
    }

    return (
        <div className="container meus-filmes">
            <h1>Meus Filmes</h1>

            {filmes.length === 0 && <span>Você não possui nenhum filme salvo.</span>}

            {filmes.length > 0 && (
                <table className="table">
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filmes.map((filme) => (
                            <tr key={filme.id}>
                                <td>{filme.title}</td>
                                <td>
                                    <Link to={`/filme/${filme.id}`} className='detalhes btn btn-info me-2'>Ver detalhes</Link>
                                    <button onClick={() => excluirFilme(filme.id)} className='btn btn-danger'>Excluir</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Favoritos;
