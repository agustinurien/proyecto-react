
import { addDoc, collection } from "firebase/firestore"
import { dataBase } from "../../../firebaseConfig"
import { useEffect, useState } from "react"

const DashBoard = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        let data = fetch("http://localhost:5000/productos")
        data.then(res => res.json()).then(res => setProducts(res))
    }, [])

    const rellenar = () => {

        products.forEach((product) => {
            let refCollection = collection(dataBase, "productos")
            addDoc(refCollection, product)
        })
    }

    return (
        <div>
            <button onClick={rellenar}>rellenar Base de Datos</button>
        </div>
    )
}

export default DashBoard
