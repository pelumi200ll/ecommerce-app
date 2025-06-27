import { createContext, useEffect, useState } from "react";
import { getProducts } from "../services/api/product";
import { getCart, createCart, updateCart, removeCart } from "../services/api/cart";
import { toast } from "react-toastify";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [cartCount, setCartCount] = useState(0)
  const featured = product.filter((items) => items.featured === true);
  const trending = product.filter((items) => items.trending === true);
  const [cartItems, setCartItems] = useState({ products: [] });
  const isAuthenticated = false;

  useEffect(() => {
    const count = cartItems?.products.reduce((acc, curr) => (
      acc + curr.quantity
    ), 0)

    setCartCount(count)
  }, [cartItems])

  useEffect(() => {
    fetchProduct();
    fetchCart();
  }, []);

  const fetchProduct = async () => {
    const data = await getProducts();
    if (data) {
      setProduct(data);
    }
  };

  const fetchCart = async () => {
    if (!isAuthenticated) {
      const storedCart = JSON.parse(localStorage.getItem("cartItems")) || {
        products: [],
      };
      setCartItems(storedCart);
    } else {
      const res = await getCart();
      const data = await res.json();
      if (res.ok) {
        setCartItems(data);
      }
    }
  };

  const addToCart = async (productId, quantity, product) => {
    if (!isAuthenticated) {
            const storedCart = JSON.parse(localStorage.getItem("cartItems")) || { products: [] };
            const existingProducts = storedCart.products.findIndex(
                item => item.product.id === productId
            );

            if (existingProducts !== -1) {
                storedCart.products[existingProducts].quantity += quantity;
                storedCart.products[existingProducts].amount = 
                    storedCart.products[existingProducts].product.price * 
                    storedCart.products[existingProducts].quantity;
            } else {
                storedCart.products.push({
                    product,
                    quantity,
                    amount: product.price * quantity
                });
            }

            localStorage.setItem("cartItems", JSON.stringify(storedCart));
            setCartItems(storedCart);
            toast.success("Cart Items added successfully");
        } else {
            const response = await createCart({ productId, quantity });
            const data = await response.json()
            if (response.ok) {
                await fetchCart();
                setCartItems(data)
                toast.success("Added to cart");
            } else {
                const errorData = await response.json();
                toast.error(errorData.message || "Unable to add to cart");
            }
        }
  };

  const updateCartItem = async (productId, quantity) => {
    if (!isAuthenticated) {
            const storedCart = JSON.parse(localStorage.getItem("cartItems")) || { products: [] };
            const existingProducts = storedCart.products.findIndex(
                item => item.product.id === productId
            );

            if (existingProducts !== -1) {
                storedCart.products[existingProducts].quantity = quantity;
                storedCart.products[existingProducts].amount = 
                    storedCart.products[existingProducts].product.price * quantity;
                
                localStorage.setItem("cartItems", JSON.stringify(storedCart));
                setCartItems(storedCart);
            }
        } else {
            const response = await updateCart({ productId, quantity });
            if (response.ok) {
                await fetchCart();
                toast.success("Cart items updated successfully");
            } else {
                const errorData = await response.json();
                toast.error(errorData.message || "Unable to update cart");
            }
        }
    }

  const removeCartItem = async (productId) => {
    if (window.confirm("Are you sure you want to delete this product from your cart?")) {
      if (!isAuthenticated) {
            const storedCart = JSON.parse(localStorage.getItem("cartItems")) || { products: [] };
            const updatedProducts = storedCart.products.filter(
                item => item.product.id !== productId
            );
            
            const updatedCart = { products: updatedProducts };
            localStorage.setItem("cartItems", JSON.stringify(updatedCart));
            setCartItems(updatedCart);
            toast.success(" Cart Item removed successfully");
        } else {
            const response = await removeCart({ productId });
            if (response.ok) {
                await fetchCart();
                toast.success(" Cart Item removed successfully");
            } else {
                const errorData = await response.json();
                toast.error(errorData.message || "Unable to remove item from cart");
            }
        }
    }
  }

  const calcSubtotal = () => {
    const total = cartItems.products.reduce((acc, curr) => ( acc + curr.amount), 0);
    return total;
  }

  const calcVat = (vat=0.075) => {
    const vatAmount = calcSubtotal() * vat;
    return vatAmount;
  }

  const calcTotalAmount = () => {
    const subtotal = calcSubtotal()
    const vat = calcVat()
    return subtotal + vat;
  }

  

  return (
    <ProductContext.Provider
      value={{
        product,
        featured,
        trending,
        cartItems,
        cartCount,
        addToCart,
        updateCart,
        removeCartItem,
        updateCartItem,
        calcSubtotal,
        calcVat,
        calcTotalAmount,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};