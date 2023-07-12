
import { useEffect, useState } from "react"
import ItemList from "./itemList"
import "./itemList.css"
import { useParams } from "react-router-dom"


const ItemListContainer = () => {

    const { categoryName } = useParams()

    const [products, setProducts] = useState([])


    useEffect(() => {
        let productoFiltrado = products.filter((elemento) => elemento.category === categoryName)
        let data = fetch("http://localhost:5000/productos")
        data.then(res => res.json()).then(res => categoryName === undefined ? setProducts(res) : setProducts(productoFiltrado))
    }, [products, categoryName])

    return (
        <>
            <div className='containerProductos'>
                <ItemList products={products} />
            </div>


        </>

    )
}

export default ItemListContainer
