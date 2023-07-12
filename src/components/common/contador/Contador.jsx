import { useState } from "react"


const Contador = () => {

    const [contador, setContador] = useState(0)

    const sumar = () => {
        setContador(contador + 1)
    }


    return (
        <>
            <h1>{contador}</h1>
            <button onClick={() => sumar()}>sumar</button>
        </>

    )
}

export default Contador
