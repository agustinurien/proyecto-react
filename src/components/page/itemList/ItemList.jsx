
import { Skeleton } from '@mui/material';
import ProductCardContainer from '../../common/productCard/ProductCardContainer';


const ItemList = ({ products }) => {
    let arr = [1, 2, 3, 4];

    return (
        <>
            {products.length > 0 ?
                products.map((elemento) => (
                    <div key={elemento.id}>
                        <div>
                            <ProductCardContainer elemento={elemento} />
                        </div>
                    </div>
                ))
                :
                arr.map((e) => (
                    <div key={e}>
                        <Skeleton animation="wave" variant="rectangular" width={400} height={320} />

                        <Skeleton variant="text" sx={{ fontSize: '0.5rem' }} />
                        <div className='contenedorSkeleton'>

                            <Skeleton animation="wave" height={50} width="55%" />
                            <Skeleton animation="wave" height={70} width="35%" />
                            <div className='botonesSkeleton'>
                                <Skeleton className="Skeleton" animation="wave" height={70} width="10%" />
                                <Skeleton className="moreSkeleton" animation="wave" height={40} width="18%" />
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    );
};

export default ItemList;
