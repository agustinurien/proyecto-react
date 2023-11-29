import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./cart.css"
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Delete, ProductionQuantityLimits } from "@mui/icons-material";
const Cart = () => {
    const { cart, clearCart, removeFromCart, totalPrice } = useContext(CartContext);

    let total = totalPrice()

    const vaciar = () => {
        Swal.fire({
            title: 'Deseas vaciar el carrito?',

            showCancelButton: true,
            confirmButtonText: 'Si',

        }).then((result) => {

            if (result.isConfirmed) {
                Swal.fire('El carrito se vacio exitosamente', '', 'success')
                clearCart()
            }
        })

    }

    return (
        <div className="contenedorCarrito">
            {cart.map((element) => {
                return (
                    <div key={element.id}>

                        <div className="contenedorProductos">

                            <div >
                                <img className="imagenCarrito" src={element.img} alt="" />
                            </div>
                            <div className="title-price">
                                <h3>{element.title}</h3>
                                <h3>${element.price}</h3>
                            </div>
                            <p>{element.quantity}</p>
                            <button className="botonEliminar" onClick={() => removeFromCart(element.id)}><Delete /></button>

                        </div>

                    </div>
                )
            })
            }

            <div className={cart.length === 0 ? "" : "contenedorBotones"}>
                {
                    cart.length > 0 && <button className="clear" onClick={vaciar}>CLEAR</button>
                }
                {
                    cart.length > 0 && <div>
                        <p>${total}</p>
                        <div className="buy">
                            <Link className="buyLink" to="/CheckoutContainer">BUY</Link>
                        </div>
                    </div>
                }
            </div>
            <div className={cart.length === 0 ? "containerNH" : ""}>
                {
                    cart.length === 0 &&
                    <>
                        <h1 className="noHayNada">No tienes nada en el Carrito :(</h1>
                        <h2><ProductionQuantityLimits fontSize="inherit" /></h2>
                    </>
                }
            </div>
        </div>
    );
};

export default Cart;
