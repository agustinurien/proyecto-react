import CartWidget from '../../common/cartWidget/CartWidget';
import './navbar.css';
import logo from '../../../assets/img/ps5logo.png';
const Navbar = () => {
    return (
        <section className='contenedorNav'>
            <a href="">
                <img src={logo} alt="ps5" />
            </a>

            <ul className='ahref'>
                <a href=""><li>Team</li></a>
                <a href=""><li>Contacto</li></a>
                <a href=""><li>Categorias</li></a>
                <div className='carrito'>
                    <CartWidget />
                </div>

            </ul>

        </section>
    )
}

export default Navbar
