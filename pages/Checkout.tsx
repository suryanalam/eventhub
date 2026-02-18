
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const [paymentStep, setPaymentStep] = useState<'options' | 'processing' | 'success'>('options');

  const handlePay = () => {
    setPaymentStep('processing');
    setTimeout(() => {
      setPaymentStep('success');
    }, 2500);
  };

  if (paymentStep === 'success') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] p-8 text-center animate-scaleIn">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 text-4xl text-green-500">
          ✓
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Booking Confirmed!</h2>
        <p className="text-gray-500 text-sm mb-10">Your event services are secured. Expect a call from our planners shortly.</p>
        <button 
          onClick={() => navigate('/')}
          className="phonepe-bg text-white px-10 py-4 rounded-2xl font-bold shadow-lg active:scale-95 transition-all w-full"
        >
          Go to Dashboard
        </button>
      </div>
    );
  }

  if (paymentStep === 'processing') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] p-8 text-center">
        <div className="relative w-20 h-20 mb-8">
          <div className="absolute inset-0 border-4 border-purple-100 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-purple-600 rounded-full border-t-transparent animate-spin"></div>
        </div>
        <h2 className="text-xl font-bold text-gray-800 mb-2">Securely processing payment...</h2>
        <p className="text-gray-400 text-xs">Juspay Safe Integration</p>
      </div>
    );
  }

  return (
    <div className="p-4 flex flex-col gap-6 animate-fadeIn">
      <div className="bg-purple-50 p-4 rounded-2xl flex items-center justify-between border border-purple-100">
        <div>
          <p className="text-xs text-purple-600 font-bold uppercase">Amount to pay</p>
          <p className="text-2xl font-extrabold phonepe-text">₹73,450</p>
        </div>
        <div className="bg-white p-2 rounded-lg shadow-sm">
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg" className="h-4" alt="UPI" />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-bold text-gray-800 mb-4">Payment Methods</h3>
        <div className="flex flex-col gap-3">
          {/* Mocking Juspay Hyperscheckout UI */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border-2 border-purple-600 flex items-center gap-4 cursor-pointer">
            <div className="w-6 h-6 rounded-full border-4 border-purple-600 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-purple-600"></div>
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-gray-800">PhonePe / Google Pay</p>
              <p className="text-[10px] text-gray-500">Fastest UPI apps</p>
            </div>
            <div className="flex gap-1">
               <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg" className="h-3" alt="UPI" />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-4 opacity-70 cursor-not-allowed">
            <div className="w-6 h-6 rounded-full border border-gray-300"></div>
            <div className="flex-1">
              <p className="text-sm font-bold text-gray-800">Credit / Debit Card</p>
              <p className="text-[10px] text-gray-500">Save your cards for faster checkout</p>
            </div>
            <div className="flex gap-2">
              <span className="text-[10px] font-bold text-blue-600">VISA</span>
              <span className="text-[10px] font-bold text-red-600">MasterCard</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-4 opacity-70 cursor-not-allowed">
            <div className="w-6 h-6 rounded-full border border-gray-300"></div>
            <div className="flex-1">
              <p className="text-sm font-bold text-gray-800">Net Banking</p>
              <p className="text-[10px] text-gray-500">All major banks supported</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-[10px] text-gray-400 text-center px-8">
          By continuing, you agree to our Terms of Service. Your payment is secure with end-to-end encryption.
        </p>
      </div>

      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-100 p-4 z-50">
        <button 
          onClick={handlePay}
          className="w-full phonepe-bg text-white py-4 rounded-2xl font-bold shadow-lg active:scale-95 transition-all flex items-center justify-center gap-3"
        >
          Pay Securely
        </button>
      </div>
    </div>
  );
};

export default Checkout;
