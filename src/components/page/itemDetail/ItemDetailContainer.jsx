import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { collection, doc, getDoc } from "firebase/firestore"
import { dataBase } from "../../../firebaseConfig"
import { useParams } from "react-router-dom"




const ItemDetailContainer = () => {
    const { id } = useParams();

    const [products, setProducts] = useState([])

    useEffect(() => {
        let productosFB = collection(dataBase, "productos")
        let productRef = doc(productosFB, id)
        getDoc(productRef).then((res) => {
            setProducts({ ...res.data(), id: res.id })
        })
    }, [id])

    return (
        <>
            <ItemDetail products={products} />
        </>
    )
}

export default ItemDetailContainer
