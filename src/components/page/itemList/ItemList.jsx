import ProductCardContainer from "../../common/productCard/ProductCardContainer"

const ItemList = ({ products }) => {

    return (
        products.map((elemento) => {
            return (
                <div key={elemento.id}>
                    <div>
                        <ProductCardContainer elemento={elemento} />
                    </div>
                </div>
            )
        })

    )
}

export default ItemList
