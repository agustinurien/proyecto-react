import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { AddShoppingCartOutlined } from "@mui/icons-material";
import "./productCard.css"
import { Link } from "react-router-dom";

const ProductCard = ({ elemento }) => {

    return (
        <>
            <Card className="cardContainer">
                <CardMedia
                    className="cImagen"
                    sx={{ height: 340 }}
                    image={elemento.img}
                    title={elemento.title}
                />
                <CardContent className="cCardContent">
                    <Typography className="tituloCard" gutterBottom variant="h5" component="div">
                        {elemento.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" fontSize={30} fontWeight="500">
                        ${elemento.price}
                    </Typography>
                </CardContent>
                <CardActions className="cBotones">
                    <AddShoppingCartOutlined className="boton" fontSize="large">Agregar al carrito</AddShoppingCartOutlined>
                    <Link to={`/Details/${elemento.id}`}>
                        <Button size="small">More</Button>
                    </Link>

                </CardActions>
            </Card>

        </ >
    )
}

export default ProductCard
