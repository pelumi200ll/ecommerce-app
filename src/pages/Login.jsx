import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { loginUser } from '../services/api/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../context/AuthContext';
import { createCart } from '../services/api/cart';
import { ProductContext } from '../context/ProductContext';

function Login () {
  const [showPassword, setShowPassword] = useState(false);
  const { register, reset, handleSubmit, formState: {errors, isSubmitting} } = useForm()
  const [state, dispatch]= useContext(AuthContext);
  const navigate  = useNavigate()
  const { fetchCart, setCartItems } = useContext(ProductContext);

  const onSubmit = async (data) => {
    try {
      const response = await loginUser(data);
      
      if(response) {
        localStorage.setItem("auth-token", response.token);
        dispatch({ type: "setToken", payload: response.token });
        
        // Check for local cart items
        const localCart = JSON.parse(localStorage.getItem("cartItems")) || { products: [] };
        
        if(localCart.products.length > 0) {
          // Transfer local cart items to server
          await Promise.all(
            localCart.products.map(async (item) => {
              const cartResponse = await createCart({
                productId: item.product.id,
                quantity: item.quantity
              });
              
              if(cartResponse) {
                setCartItems(cartResponse.data);
                fetchCart();
              }
            })
          );
          
          // Clear local cart after successful transfer
          localStorage.removeItem("cartItems");
          
          toast.info("Your cart items have been transferred", {
            position: "top-center",
            autoClose: 2000
          });
        }
        
        toast.success(response?.message || "Login Successful!..", {
          position: "top-center",
          autoClose: 2000
        });
        setTimeout(() => navigate("/"), 2000);
      } else {
        toast.error(response?.message || "Login not Successful!..", {
          position: "top-center",
          autoClose: 2000
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("An unexpected error occurred", {
        position: "top-center",
        autoClose: 2000
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Welcome Back</h2>
        <p className="text-center text-gray-600">Please enter your credentials</p>
        
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="login-email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="login-email"
              type="email"
              {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              placeholder="your@email.com"
            />
            {errors.email && (<p className='text-red-500 text-center'>{errors.email.message}</p>)}
          </div>
          
          <div className="relative">
            <label htmlFor="login-password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="login-password"
              type={showPassword ? "text" : "password"}
              {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters"
                  }
                })}
                placeholder='*******************'
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
            />
            <button
              type="button"
              className="absolute right-3 bottom-2 text-sm font-medium text-gray-600 hover:text-gray-800 focus:outline-none"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
            {errors.password && (<p className='text-red-500 text-center'>{errors.password.message}</p>)}
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Logging in...
              </span>
            ) : "Log in"}
          </button>
        </form>
        
        <div className="text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/register" className="font-medium text-blue-600 hover:text-blue-500">
            Register here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;



// import { useContext, useState } from 'react';
// import { Link, useNavigate } from 'react-router';
// import { useForm } from "react-hook-form"
// import { loginUser } from '../services/api/auth';
// import { toast } from 'react-toastify';
// import { AuthContext } from '../context/AuthContext';
// import { createCart } from '../services/api/cart';

// function Login () {
//   const [showPassword, setShowPassword] = useState(false);
//   const { register, reset, handleSubmit, formState: {errors, isSubmitting} } = useForm()
//   const [state, dispatch]= useContext(AuthContext);
//   const navigate  = useNavigate()
//   const { fetchCart, setCartItems } = useContext(ProductContext);

//   const onSubmit = async (data) => {
//     // Handle login logic here
//     const response = await loginUser(data)
//     console.log(response.token);
//     if(response){
//       localStorage.setItem("auth-token", response.token);
//       dispatch({ type: "setToken", payload: response.token})
//       toast.success(response?.message || "Login Successful!..");
//       setTimeout(() => navigate("/"), 2000)
//     }else{
//       toast.error(response?.message || "Login not Successful!..");
//       console.log(response.message)
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold text-center text-gray-800">Welcome Back</h2>
//         <p className="text-center text-gray-600">Please enter your credentials</p>
        
//         <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
//           <div>
//             <label htmlFor="login-email" className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               id="login-email"
//               type="email"
//               {...register("email", {
//                   required: "Email is required",
//                   minLength: {
//                     value: 8
//                   }
//                 })}
//               className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
//               placeholder="your@email.com"
//             />
//             {errors.email && (<p className='text-red-500 text-center'>{errors.email.message}</p>)}
//           </div>
          
//           <div className="relative">
//             <label htmlFor="login-password" className="block text-sm font-medium text-gray-700">Password</label>
//             <input
//               id="login-password"
//               type={showPassword ? "text" : "password"}
//               {...register("password", {
//                   required: "Password is required",
//                   minLength: {
//                     value: 8
//                   }
//                 })}
//                 placeholder='*******************'
//               className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              
//             />
//             <button
//               type="button"
//               className="absolute right-3 bottom-2 text-sm font-medium text-gray-600 hover:text-gray-800 focus:outline-none"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? 'Hide' : 'Show'}
//             </button>
//                 {errors.password && (<p className='text-red-500 text-center'>{errors.password.message}</p>)}
//           </div>
          
          
//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//           >
//             {isSubmitting ? "Logging in........." : "Log in"}
//           </button>
//         </form>
        
//         <div className="text-center text-sm text-gray-600">
//           Don't have an account?{' '}
//           <Link to="/register"
            
//           >
//             Register here
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
