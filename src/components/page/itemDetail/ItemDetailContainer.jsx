import { useEffect, useState } from "react"
import ItemDetail from "./itemDetail"



const ItemDetailContainer = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {

        let data = fetch("http://localhost:5000/productos")
        data.then(res => res.json()).then(res => setProducts(res))
    }, [])
    return (
        <>
            <ItemDetail products={products} />
        </>
    )
}

export default ItemDetailContainer
