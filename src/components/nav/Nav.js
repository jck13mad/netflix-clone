import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className="nav false">
            <Link to="/"><img 
                    className="nav__logo"
                    src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
                    alt=""
                />
            </Link>
            <Link className="login" to="/login">Login</Link>
            <img 
                className="nav__avatar"
                src="http://pngimg.com/uploads/netflix/netflix_PNG8.png"
                alt=""
            />
        </div>
    )
}

export default Nav;