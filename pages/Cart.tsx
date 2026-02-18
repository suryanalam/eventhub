
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CartItem } from '../types';

interface CartProps {
  items: CartItem[];
  onRemove: (id: string) => void;
}

const Cart: React.FC<CartProps> = ({ items, onRemove }) => {
  const navigate = useNavigate();
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const tax = subtotal * 0.18;
  const total = subtotal + tax;

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] p-8 text-center animate-fadeIn">
        <div className="w-40 h-40 bg-gray-100 rounded-full flex items-center justify-center mb-6 text-6xl">
          🛒
        </div>
        <h2 className="text-xl font-bold text-gray-800 mb-2">Your cart is empty</h2>
        <p className="text-gray-500 text-sm mb-8">Start planning your dream event by adding some services.</p>
        <button 
          onClick={() => navigate('/listing')}
          className="phonepe-bg text-white px-8 py-3 rounded-2xl font-bold shadow-lg active:scale-95 transition-all"
        >
          Explore Services
        </button>
      </div>
    );
  }

  return (
    <div className="p-4 flex flex-col gap-6 animate-fadeIn">
      <h2 className="text-xl font-bold text-gray-800">Your Bookings ({items.length})</h2>
      
      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex gap-4">
            <img src={item.image} alt={item.name} className="w-20 h-20 rounded-xl object-cover" />
            <div className="flex-1 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-sm font-bold text-gray-800">{item.name}</h4>
                  <p className="text-[10px] text-gray-500">{item.category}</p>
                </div>
                <button onClick={() => onRemove(item.id)} className="text-gray-400 hover:text-red-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
              <p className="text-sm font-bold phonepe-text">₹{item.price.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mt-4">
        <h3 className="text-sm font-bold text-gray-800 mb-4">Payment Summary</h3>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Subtotal</span>
            <span>₹{subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Taxes (GST 18%)</span>
            <span>₹{tax.toLocaleString()}</span>
          </div>
          <div className="border-t border-gray-100 pt-3 flex justify-between font-bold text-gray-800">
            <span>Total Payable</span>
            <span className="text-lg phonepe-text">₹{total.toLocaleString()}</span>
          </div>
        </div>
      </div>

      <div className="pb-10">
        <button 
          onClick={() => navigate('/checkout')}
          className="w-full phonepe-bg text-white py-4 rounded-2xl font-bold shadow-lg active:scale-95 transition-all flex items-center justify-center gap-3"
        >
          Checkout
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Cart;
