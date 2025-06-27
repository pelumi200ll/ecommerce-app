


import { useContext } from 'react';
import { Link } from 'react-router';
import { ProductContext } from '../context/ProductContext';

function ProductItem({ productItems }) {
  const { addToCart } = useContext(ProductContext);

  // console.log(productItems.id);
  const addToCartHandler = () => {
    addToCart(`productItems.id, 1, productItems`);
  };
  return (
    <div className='border rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col'>
      {/* Product Image */}
      <div className='relative pt-[100%] overflow-hidden'>
        <img 
          src={productItems.img || "/img/c8.jpg"} 
          className='absolute top-0 left-0 w-full h-full object-cover'
          alt={productItems.name || "Product image"} 
        />
      </div>
      
      {/* Product Info */}
      <div className='p-4 flex-grow flex flex-col'>
        <div className='mb-4'>
          <h5 className='font-semibold text-lg line-clamp-2'>{productItems.name}</h5>
          <h6 className='font-bold text-[#0B4F6C] text-xl mt-1'>${productItems.price?.toFixed(2)}</h6>
        </div>
        
        {/* Buttons */}
        <div className='mt-auto flex flex-col sm:flex-row gap-3'>
          <button 
            type='button'
            // onClick={() => addToCartHandler(productItems.id, 1, productItems)} 
            onClick={addToCartHandler}
            className='w-full sm:w-auto flex-grow py-2 px-4 capitalize bg-[#0B4F6C] text-white rounded hover:bg-[#0c5a7a] transition-colors'
          >
            Add to cart
          </button>
          <Link 
            to={`/details/${productItems.id}`} 
            className='w-full sm:w-auto flex-grow py-2 px-4 capitalize border border-[#0B4F6C] text-[#0B4F6C] rounded hover:bg-gray-100 text-center transition-colors'
          >
            View details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductItem;




















































// import React from 'react'
// import Container from './shared/Container'

// function ProductItem({ productitems }) {
//   return (
//     <div className='border shadow-xl h-[20rem]'>
//         <img src={ productitems.img ||"/img/w8.jpg"} className='w-full h-[10rem] object-cover' alt="" />
//         <div className='p-2'>
//             <h5>{productitems.name}</h5>
//             <h6>{productitems.price}</h6>
//             {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nostrum, magni magnam modi voluptatum in?</p> */}
//             <div className='flex text-center flex-wrap justify-around items-center gap-5'>
//                 <button type='button' className='w-[40%] p-2 capitalize bg-[#0B4F6C] text-white'>add to cart</button>
//                 <a href="" className='border border-[#0B4F6C] capitalize w-[40%] p-2'>view more</a>
//             </div>
//         </div>
//       </div>
//   )
// }

// export default ProductItem