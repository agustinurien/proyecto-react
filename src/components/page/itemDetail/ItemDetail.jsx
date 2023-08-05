import { useContext } from "react";
import { useParams } from "react-router-dom";
import "./itemDetail.css"
import { CartContext } from "../../context/CartContext";
import Contador from "../../common/contador/Contador";
import Swal from "sweetalert2";

const ItemDetail = ({ products }) => {

    const { addToCart, getQuantityId } = useContext(CartContext);

    const { id } = useParams();

    let cantidadProducto = getQuantityId(id)


    const onAdd = (cantidad) => {
        let productCart = { ...products, quantity: cantidad }

        addToCart(productCart)
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Producto agregado al carrito',
            showConfirmButton: true,
            timer: 1500
        })
    }


    return (
        <>
            <div className="contenedorProducto">
                <div className="contenedorImagen">
                    <img className="imagen" src={products.img} alt="" />
                </div>

                <div className="contenedorDetalles">
                    <div className="detalles">
                        <div>
                            <h1 className="tituloProducto">{products.title}</h1>
                            <span className="category">Categoria: {products.category}</span>
                        </div>

                        <span className="precioP">${products.price}</span>
                        <p>{products.descripcion}
                            <br />
                        </p>
                    </div>

                    <Contador products={products} onAdd={onAdd} cantidadProducto={cantidadProducto} />

                </div>
            </div>
        </>
    );
};

export default ItemDetail;