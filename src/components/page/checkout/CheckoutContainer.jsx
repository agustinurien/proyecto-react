import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { dataBase } from "../../../firebaseConfig";
import { addDoc, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore";

import "./checkout.css"
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";

const CheckoutContainer = () => {

    const { cart, totalPrice, clearCart } = useContext(CartContext)

    let total = totalPrice()

    const [orderCodigo, setOrderCodigo] = useState("")

    const [data, setData] = useState({
        nombre: "",
        apellido: "",
        email: "",
        pais: "",
        telefono: ""
    });

    if (orderCodigo) {
        clearCart()
    }

    const handleSubmit = (evento) => {
        evento.preventDefault();
        let order = {
            buyer: data,
            productosComprados: cart,
            total,
            date: serverTimestamp(),
            Codigo: orderCodigo
        }

        const orderCollection = collection(dataBase, "orders")
        addDoc(orderCollection, order).then(res => setOrderCodigo(res.id))

        cart.forEach((producto) => {
            updateDoc(doc(dataBase, "productos", producto.id), { stock: producto.stock - producto.quantity })
        })

    };

    const handleChange = (evento) => {
        setData({ ...data, [evento.target.name]: evento.target.value });
    };


    return (
        <>
            {
                orderCodigo ? (
                    <div className="contenedorFinalizada">
                        <h1 className="tituloGracias">GRACIAS POR SU COMPRA</h1>
                        <h2 className="icono-check">
                            <CheckCircle fontSize="inherit" />
                        </h2>
                        <div className="contenedorCodigo">
                            <h3>Su producto estara en camino pronto!</h3>
                            <p> Este es su codigo de compra: <strong>{orderCodigo}</strong></p>
                            <Link to="/" className="textoBoton">HOME</Link>
                        </div>

                    </div>
                ) : (
                    <>
                        <div className="contenedor">
                            <div className="contenedorComponente">

                                <div className="contenedorImg">
                                    <img src="" alt="" />
                                </div>

                                <div className="contenedorForm">

                                    <div className="title">
                                        <h1>CHECKOUT</h1>
                                    </div>

                                    <form onSubmit={handleSubmit} >
                                        <div className="nombreApellido">
                                            <input
                                                type="text"
                                                placeholder="Nombre"
                                                name="nombre"
                                                onChange={handleChange}
                                            />
                                            <input
                                                type="text"
                                                placeholder="Apellido"
                                                name="apellido"
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <input type="text" name="email" id="" placeholder="Email" onChange={handleChange} />
                                        <input type="text" name="pais" placeholder="Country" onChange={handleChange} />
                                        <input type="number" name="telefono" placeholder="Telefono" onChange={handleChange} />

                                        <button type="submit" >FINALIZAR</button>
                                    </form>

                                </div>
                            </div>

                        </div>
                    </>
                )
            }


        </>
    );
};

export default CheckoutContainer;