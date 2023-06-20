import CartWidget from '../../common/cartWidget/CartWidget';
import './navbar.css';

const Navbar = () => {
    return (
        <section className='contenedorNav'>
            <a href=""><h1>logo</h1></a>

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
