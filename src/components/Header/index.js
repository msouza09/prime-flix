import './header.css';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header>
            <Link className="logo" to="/">PrimeFlix</Link>
            <Link className="favoritos btn btn-primary" to="/favoritos">Meus filmes</Link>
        </header>
    )
}

export default Header;