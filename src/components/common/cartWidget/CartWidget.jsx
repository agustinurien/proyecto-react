import { ShoppingCart } from '@mui/icons-material';
import { Badge } from '@mui/material';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';




const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)

    let total = totalQuantity()

    return (
        <>
            <Link to="/Cart">
                <Badge badgeContent={total} color="primary" showZero>
                    <ShoppingCart fontSize='large' />
                </Badge>
            </Link>
        </>
    )
}

export default CartWidget
