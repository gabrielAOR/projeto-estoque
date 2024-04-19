import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {


    return(
        <nav className='navBar'>
            <Link to="/Home">
                <p>Home</p>
            </Link>
            <Link to="/Users">
                <p>Dashboard</p>
            </Link>
        </nav>
    )
}

export default NavBar