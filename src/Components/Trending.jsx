import React, { useContext} from 'react'
import Container from "../components/shared/Container";
import ProductItem from './ProductItem';
import { ProductContext } from '../context/ProductContext';

function Trending() {
  const { trending } = useContext(ProductContext)
  // console.log(trending)
  return (
    <Container>
      <div className="grid grid-cols-2 md:grid-cols-3 justify-center items-center gap-1 md:gap-3">
        <h1>Trending Products</h1>
        {!trending || trending.length < 1 ?  (
            <>
              <h5 className='text-center'>No trending Products yet</h5>
            </>
        ) : (
        <>
            {trending.map((items) => (
              <ProductItem key={items.id} productitems={items}/>
            ))}
        </>
        )}
      </div>
    </Container>
  )
}

export default Trending;
