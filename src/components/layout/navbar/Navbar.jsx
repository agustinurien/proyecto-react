import CartWidget from '../../common/cartWidget/CartWidget';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <section className='contenedorNav'>
                <div>
                    <Link to="/">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/2560px-PlayStation_logo.svg.png" alt="ps5" />
                    </Link>
                </div>

                <ul className='ahref'>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/"><li>All</li></Link>
                    <Link to="/Category/PS5"><li>PS5</li></Link>
                    <Link to="/Category/PS4"><li>PS4</li></Link>
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
