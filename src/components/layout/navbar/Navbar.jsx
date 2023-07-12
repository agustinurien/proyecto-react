import CartWidget from '../../common/cartWidget/CartWidget';
import './navbar.css';
import logo from '../../../assets/img/ps5logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <section className='contenedorNav'>
                <div>
                    <Link to="">
                        <img src={logo} alt="ps5" />
                    </Link>
                </div>

                <ul className='ahref'>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/"><li>Todos</li></Link>
                    <Link to="/category/PS5"><li>ps5</li></Link>
                    <Link to="/category/PS4"><li>ps4</li></Link>
                </ul>
                <div>
                    <div className='carrito'>
                        <CartWidget />
                    </div>
                </div>


            </section>

        </div>

    )
}

export default Navbar
