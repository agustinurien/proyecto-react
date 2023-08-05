import { AddShoppingCartOutlined, ArrowDropDown, ArrowDropUp } from "@mui/icons-material"
import { useState } from "react"
import "./contador.css"

const Contador = ({ products, onAdd, cantidadProducto = 1 }) => {

    let [cantidad, setCantidad] = useState(cantidadProducto)

    const handleSumar = () => {

        setCantidad(cantidad + 1)
    }

    const handleRestar = () => {
        setCantidad(cantidad - 1)
    }


    return (
        <>
            <div className="botonesDetalles">
                <div>
                    {cantidad === products.stock && <p className="stock">*maximo de stock</p>}
                </div>
                <div className="sumar">
                    <p>{cantidad}</p>
                    <div>
                        <button onClick={(handleSumar)} disabled={cantidad === products.stock}> <ArrowDropUp /> </button>
                        <button onClick={(handleRestar)} disabled={cantidad === 1}><ArrowDropDown /></button>
                    </div>
                </div>
                <div>
                    <button className="botonAgregarCarrito" onClick={() => onAdd(cantidad)}>
                        <p>AGREGAR AL CARRITO</p>
                        <AddShoppingCartOutlined className="iconoCarrito" fontSize="large"></AddShoppingCartOutlined>
                    </button>
                </div>

            </div>
        </>

    )
}

export default Contador
