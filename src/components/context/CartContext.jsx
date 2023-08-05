import { createContext, useState } from "react"
import Swal from "sweetalert2";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([])


    const totalPrice = () => {
        const total = cart.reduce((acc, element) => {
            return acc + element.quantity * element.price
        }, 0)
        return total

    }


    const totalQuantity = () => {
        const total = cart.reduce((acc, element) => {
            return acc + element.quantity
        }, 0)
        return total
    }

    const getQuantityId = (id) => {
        const producto = cart.find((elemento) => elemento.id === id)
        return producto?.quantity
    }

    const addToCart = (item) => {
        const existe = itExist(item.id)

        if (existe) {
            let nuevoArray = cart.map((elemento) => {
                if (elemento.id === item.id) {
                    return { ...elemento, quantity: item.quantity }
                } else {
                    return elemento
                }
            })
            setCart(nuevoArray)

        } else {
            setCart([...cart, item])
        }
    }

    const removeFromCart = (id) => {

        Swal.fire({
            title: 'Deseas eliminar este producto del carrito?',

            showCancelButton: true,
            confirmButtonText: 'Si',

        }).then((result) => {

            if (result.isConfirmed) {
                Swal.fire('Se removio el producto del carrito', '', 'success')
                const carritoFiltrado = cart.filter((productos) => productos.id !== id)
                setCart(carritoFiltrado)
            }
        })

    }

    const clearCart = () => {
        setCart([])
    }

    const itExist = (id) => {
        const exist = cart.some((producto) => producto.id === id)
        return exist
    }

    let data = { cart, addToCart, removeFromCart, clearCart, totalQuantity, getQuantityId, totalPrice };

    return <CartContext.Provider value={data}> {children} </CartContext.Provider>
}

export default CartContextProvider
