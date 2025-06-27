import React, { useContext } from "react";
import { Link } from "react-router";
import Container from "../components/shared/Container";
import Carousel from "../components/Carousel";
import { FaRegTrashAlt } from "react-icons/fa";
import { ProductContext } from "../context/ProductContext";

function Cart() {
  const {
    cartItems,
    removeCartItem,
    updateCartItem,
    calcSubtotal,
    calcVat,
    calcTotalAmount,
  } = useContext(ProductContext);
  return (
    <div>
      <Carousel
        className="lg:h-[20vh] mb-12 lg:text-[10px]"
        flex="hidden"
        new_style="w-full lg:w-[50%] lg:right-[10%]"
        banner={`Home/ Cart`}
        img="/img/c8.jpg"
      />
      <Container className={"mt-5 mb-12"}>
        <div className="overflow-auto lg:overflow-hidden">
          <table className="w-full capitalize text-left">
            <thead>
              <tr className="bg-gray-300">
                <th className="px-3 py-3">s/n</th>
                <th className="px-3 py-3">product Name</th>
                <th className="px-3 py-3">Product image</th>
                <th className="px-3 py-3">Price</th>
                <th className="px-3 py-3">Quantity</th>
                <th className="px-3 py-3">Update</th>
                <th className="px-3 py-3">Amount</th>
                <th className="px-3 py-3">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems?.products?.length === 0 ? (
                <>
                  <tr className="border-t hover:bg-gray-200">
                    <td className="px-3 py-2 text-left" colSpan={8}>
                      <h1 className="text-center">Cart is empty</h1>
                    </td>
                  </tr>
                </>
              ) : (
                <>
                  {cartItems.products.map((items, index) => (
                    <tr key={index} className="border-t hover:bg-gray-200">
                      <td className="px-3 py-2 text-left">{items.id}</td>
                      <td className="px-3 py-2 text-left">
                        {items?.product?.name}
                      </td>
                      <td className="px-12 py-2 text-left">
                        <img
                          src={items?.product?.img || "/img/w4.jpg"}
                          className="w-[30px]"
                          alt=""
                        />
                      </td>
                      <td className="px-3 py-2 text-left">
                        #{items?.product?.price?.toFixed(2)}
                      </td>
                      <td className="px-3 py-2 text-left">{items?.quantity}</td>
                      <td className="px-3 py-2 text-left">
                        <input
                          type="number"
                          value={items?.quantity}
                          min={"1"}
                          onChange={(e) =>
                            updateCartItem(items?.product?.id, parseInt(e.target.value))
                          }
                          className="w-14 border-gray-500 border rounded"
                        />
                      </td>
                      <td className="px-3 py-2 text-left">
                        #{items?.amount?.toFixed(2)}
                      </td>
                      <td className="px-3 py-2 text-left">
                        <button
                          onClick={() => removeCartItem(items?.product?.id)}
                          type="submit"
                          className="px-3 py-2 text-left text-red-400"
                        >
                          <FaRegTrashAlt size={20} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </>
              )}
            </tbody>

            <tbody>
              <tr className="border-t border-gray-300">
                <td
                  colSpan={"6"}
                  className="px-3 py-2 text-right font-semibold uppercase"
                >
                  Subtotal :{" "}
                </td>
                <td colSpan={"5"} className="px-3 py-2 text-left">
                  #{calcSubtotal().toFixed(2)}
                </td>
              </tr>
              <tr className="border-t border-gray-300">
                <td
                  colSpan={"6"}
                  className="px-3 py-2 text-right font-semibold uppercase"
                >
                  vat (0.075%) :{" "}
                </td>
                <td colSpan={"5"} className="px-3 py-2 text-left">
                  {" "}
                  #{calcVat().toFixed(2)}
                </td>
              </tr>
              <tr className="border-t border-gray-300">
                <td
                  colSpan={"6"}
                  className="px-3 py-2 text-right font-semibold uppercase"
                >
                  Total :{" "}
                </td>
                <td colSpan={"5"} className="px-3 py-2 text-left">
                  #{calcTotalAmount().toFixed(2)}
                </td>
              </tr>
              <tr className="border-t border-gray-300">
                <td
                  colSpan={"7"}
                  className="px-3 py-5 text-right font-semibold uppercase"
                >
                  <Link
                    to="/checkout"
                    className="bg-[#0B4F6C] capitalize font-semibold hover:bg-white duration-500 transition-all hover:text-[#0B4F6C] hover:border hover:border-[#0B4F6C] text-white p-3 w-full"
                  >
                    Proceed to Checkout
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
}

export default Cart;
