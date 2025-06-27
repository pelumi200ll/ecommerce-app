
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useForm } from "react-hook-form"
import { createUser } from '../services/api/auth';
import { toast } from 'react-toastify';

function Register ()  {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate()
  const { register, handleSubmit, watch, reset, setValue, formState: { errors, isSubmitting} } = useForm();

  const onSubmit = async (data) => {
    const response = await createUser(data)
    console.log(response)
    if(response){
      toast.success(response?.message || "registeration successful")
      navigate("/login")
      reset();
    }else{
      toast.error(response?.message || "registeration Not successful")
      console.log(response.message)
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-3xl mt-5 mb-4 p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Create Account</h2>
        <p className="text-center text-gray-600">Get started with your free account</p>
        
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="register-phone" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              id="register-username"
              type="text"
              {...register("username", {
                  required: "userName Number is required",
                  minLength: {
                    value: 8
                  }
                })}
              
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Username"
            />
            {errors.username && (<p className='text-red-500 text-center'>{errors.username.message}</p>)}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-2"> 
            <div>
              <label htmlFor="register-first" className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                id="register-first"
                type="text"
                {...register("firstName", {
                  required: "First Name is required",
                  minLength: {
                    value: 8
                  }
                })}
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="John "
              />
              {errors.firstName && (<p className='text-red-500 text-center'>{errors.firstName.message}</p>)}
            </div>
            <div>
              <label htmlFor="register-second" className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                id="register-second"
                type="text"
                {...register("lastName", {
                  required: "FirstName is required",
                  minLength: {
                    value: 8
                  }
                })}
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder=" Doe"
              />
              {errors.lastName && (<p className='text-red-500 text-center'>{errors.lastName.message}</p>)}
            </div>
          <div>
            <label htmlFor="register-email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="register-email"
              type="email"
              {...register("email", {
                  required: "Email is required",
                  minLength: {
                    value: 8
                  }
                })}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="your@email.com"
            />
            {errors.email && (<p className='text-red-500 text-center'>{errors.email.message}</p>)}
          </div>
          <div>
            <label htmlFor="register-phone" className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              id="register-phone"
              type="text"
              {...register("phone", {
                  required: "Phone Number is required",
                  minLength: {
                    value: 8
                  }
                })}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="345678"
            />
            {errors.phone && (<p className='text-red-500 text-center'>{errors.phone.message}</p>)}
          </div>

          
          
            <div className="relative">
              <label htmlFor="register-password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                id="register-password"
                type={showPassword ? "text" : "password"}
                {...register("confirmPassword", {
                  required: "confirmPassword is required",
                  minLength: {
                    value: 8
                  }
                })}
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="••••••••"
              />

              <button
                type="button"
                className="absolute right-3 bottom-2 text-sm font-medium text-blue-600 hover:text-blue-800 focus:outline-none"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
              {errors.password && (<p className='text-red-500 text-center'>{errors.password.message}</p>)}
            
            <div className="relative">
              <label htmlFor="register-confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                id="register-confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8
                  }
                })}
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="••••••••"
              />
              <button
                type="button"
                className="absolute right-3 bottom-2 text-sm font-medium text-blue-600 hover:text-blue-800 focus:outline-none"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? 'Hide' : 'Show'}
              </button>
            </div>
              {errors.confirmPassword && (<p className='text-red-500 text-center'>{errors.confirmPassword.message}</p>)}
          </div>
      
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {isSubmitting ? "Creating account....." : "Create Account"}
          </button>
        </form>
        
        <div className="text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link
            to="/login"
            className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none"
          >
            Sign in here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;