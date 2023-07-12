import { ShoppingCart } from '@mui/icons-material';
import { Badge } from '@mui/material';
import { Link } from 'react-router-dom';




const CartWidget = () => {
    return (
        <>
            <Link to="/Cart">
                <Badge badgeContent={0} color="primary" showZero>
                    <ShoppingCart fontSize='large' />
                </Badge>
            </Link>
        </>
    )
}

export default CartWidget
