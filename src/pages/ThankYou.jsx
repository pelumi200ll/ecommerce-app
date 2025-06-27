import React, { useContext, useEffect, useState} from 'react';
import { Link, useSearchParams } from 'react-router';
import { ProductContext } from '../context/ProductContext';

function ThankYou() {
  const [isLoading, setisLoading] = useState(true);
  const {createOrder , order} = useContext(ProductContext);
  console.log(order)
  const [searchParams] = useSearchParams()
  const orderId = searchParams.get("tx_ref");
  const transaction_id = searchParams.get("transaction_id");

  useEffect(() => {
    if(orderId && transaction_id){
      createOrder({ transaction_id, orderId}).finally(() => setisLoading(false))
    }
  }, [])
   if (isLoading) {
        return (
            <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-sm border border-gray-200 font-mono text-center">
                <h1 className="text-2xl font-bold text-gray-800">Loading your order...</h1>
                <p className="text-gray-600">Please wait while we process your information</p>
            </div>
        );
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-sm border border-gray-200 font-mono">
            <div className="text-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Thank You!</h1>
                <p className="text-gray-600">Your order has been received</p>
            </div>
            
            <div className="border-b border-gray-200 pb-4 mb-4">
                <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Full Name</span>
                    <span className="font-medium">{order?.full_name}</span>
                </div>
                <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Email</span>
                    <span className="font-medium">{order?.email}</span>
                </div>
                <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Order #</span>
                    <span className="font-medium">{order?.reference_id}</span>
                </div>
                <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Date</span>
                    <span>{new Date(order?.date_created).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-600">Payment Method</span>
                    <span>Credit Card</span>
                </div>
            </div>
            
            <div className="mb-6">
                <h2 className="font-bold mb-3">Order Summary</h2>
                <div className="border-b border-gray-200 pb-3 mb-3">
                  {order?.orderItems?.map((items) => {
                        <div key={items.id} className="flex justify-between mb-1">
                            <span> {items?.product?.name}</span>
                            <span>#{items?.amount?.toFixed(2)}</span>
                        </div>
                  })}
                </div>
                <div className="flex justify-between font-bold">
                    <span>TOTAL</span>
                    <span>₦{order?.amount?.toFixed(2)}</span>
                </div>
            </div>
            
            <div className="text-center text-sm text-gray-500 mt-6">
                <p>We've sent a confirmation to your email</p>
                <p className="mt-2">Questions? <a href="#" className="text-blue-600">Contact us</a></p>
            </div>
            <Link to="/products">
                <button className="w-full mt-6 bg-[#0c5a7a] text-white py-2 rounded hover:bg-[#0c5a77] transition">
                    Continue Shopping
                </button>
            </Link>
        </div>
    );
}

export default ThankYou
