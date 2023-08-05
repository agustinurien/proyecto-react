
import { useEffect, useState } from "react";
import ItemList from "./itemList";
import "./itemList.css";
import { useParams } from "react-router-dom";
import { dataBase } from "../../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";

const ItemListContainer = () => {
    const { categoryName } = useParams();

    const [products, setProducts] = useState([]);

    useEffect(() => {

        let productosFB = collection(dataBase, "productos")

        let consulta;
        if (categoryName) {
            consulta = query(productosFB, where("category", "==", categoryName))
        } else {
            consulta = productosFB
        }

        getDocs(consulta).then((res) => {
            let productos = res.docs.map(doc => {
                return { ...doc.data(), id: doc.id }
            })
            setProducts(productos)
        })



    }, [categoryName]);


    return (
        <>
            <div className="contenedorTotal">
                {!categoryName && <div className="contenedorImagenPrincipal">

                    <h1 className="descubri">Descubri que hay de nuevo!</h1>
                    <h2>Todos los productos nuevos en esta tienda!</h2>
                    <div className="redes">
                        <div><Instagram /></div>
                        <div><Twitter /></div>
                        <div><Facebook /></div>
                        <div><YouTube /></div>
                    </div>
                </div>
                }
            </div>
            <div className="containerProductos">
                <ItemList products={products} />
            </div>
        </>
    );
};

export default ItemListContainer;
