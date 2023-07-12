import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetail = ({ products }) => {
    const { id } = useParams();

    const [productoDetalles, setProductoDetalles] = useState({});

    useEffect(() => {
        const productoId = products.find((element) => element.id === parseInt(id));
        if (productoId) {
            setProductoDetalles(productoId);
        }
    }, [products, id]);

    return (
        <>
            <div>
                <img src={productoDetalles.img} alt="" />
                <h1>{productoDetalles.title}</h1>
                <span>{productoDetalles.price}</span>
                <span>{productoDetalles.category}</span>

            </div>
        </>
    );
};

export default ItemDetail;