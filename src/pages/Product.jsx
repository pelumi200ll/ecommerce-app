import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import Container from '../components/shared/Container';
import ProductItem from '../components/ProductItem';

function Product() {
    const { product } =useContext(ProductContext);
  return (
    <Container>
      
      <div className="grid grid-cols-2 md:grid-cols-3 justify-center items-center gap-1 md:gap-3">
        <h1>Products</h1>
        {!product || product.length < 1 ? (
            <h1 className='text-center'>No product yet</h1>
        ) : (
        <>
            {product.map((items) => (
            <ProductItem key={items.id} productitems={items}/>
            ))}
        </>
        )}
      </div>
    </Container>
  )
}

export default Product
