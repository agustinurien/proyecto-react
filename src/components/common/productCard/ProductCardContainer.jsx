
import ProductCard from './ProductCard'

const ProductCardContainer = ({ elemento, idSeleccionado }) => {

    return (
        <>
            <ProductCard elemento={elemento} idSeleccionado={idSeleccionado} />
        </>
    )
}

export default ProductCardContainer;
