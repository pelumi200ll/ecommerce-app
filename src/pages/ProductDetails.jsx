import React, { useContext } from "react";
import Container from "../components/shared/Container";
import Carousel from "../components/Carousel";
import { useParams } from "react-router";
import { ProductContext } from "../context/ProductContext";

function ProductDetails() {
  const { product, addToCart } = useContext(ProductContext);
  const showItem = useParams();
  // console.log(showItem)

  const productItem = product.find(
    (items) => parseInt(items.id) === parseInt(showItem.id)
  );
  // console.log(productItem);

  return (
    <div>
      <Carousel
        className="lg:h-[20vh] mb-12 lg:text-[10px]"
        flex="hidden"
        new_style="w-full lg:w-[50%] lg:right-[10%]"
        banner={`Home/ ${productItem?.name}`}
        img="/img/w8.jpg"
      />
      <Container className={"mt-5 mb-5"}>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-5">
          <div>
            <img
              src={productItem?.img || "/img/w4.jpg"}
              className="w-full h-[400px] object-cover"
              alt=""
            />
          </div>
          <div>
            <div className="text-start space-y-3">
              <h1>Name: {productItem?.name}</h1>
              <h4>Description: </h4>
              <p>{productItem?.description}</p>
              <h5>#{productItem?.price}</h5>
              <div className="mb-3">
                <button
                onClick={() => addToCart(productItem?.id, 1, productItem)}
                  type="button"
                  className="bg-[#0B4F6C] capitalize font-semibold hover:bg-white duration-500 transition-all hover:text-[#0B4F6C] hover:border hover:border-[#0B4F6C] text-white p-3 w-full md:w-[30%]"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ProductDetails;
