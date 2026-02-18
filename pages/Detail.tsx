
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MOCK_SERVICES } from '../constants';

interface DetailProps {
  onAddToCart: (service: any) => void;
}

const Detail: React.FC<DetailProps> = ({ onAddToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = MOCK_SERVICES.find(s => s.id === id);
  const [isAdded, setIsAdded] = useState(false);

  if (!service) return <div className="p-10 text-center">Service not found</div>;

  const handleAddToCart = () => {
    onAddToCart(service);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="animate-fadeIn">
      <div className="relative">
        <img src={service.image} alt={service.name} className="w-full aspect-video object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
          <div className="text-white">
            <h2 className="text-2xl font-bold">{service.name}</h2>
            <p className="text-sm opacity-90">{service.location}</p>
          </div>
        </div>
      </div>

      <div className="p-6 bg-white rounded-t-3xl -mt-6 relative z-10 flex flex-col gap-6">
        <div className="flex items-center justify-between bg-purple-50 p-4 rounded-2xl">
          <div>
            <p className="text-[10px] text-purple-600 font-bold uppercase tracking-widest">Base Price</p>
            <p className="text-xl font-bold phonepe-text">₹{service.price.toLocaleString()}</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Rating</p>
            <p className="text-xl font-bold text-yellow-600">⭐ {service.rating}</p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold text-gray-800 mb-2">Description</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            {service.description}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold text-gray-800 mb-3">Key Features</h3>
          <div className="grid grid-cols-2 gap-3">
            {service.features.map(f => (
              <div key={f} className="flex items-center gap-2 text-xs text-gray-600 bg-gray-50 p-2 rounded-lg border border-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {f}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 pb-20">
          <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 mb-6">
            <h4 className="text-sm font-bold text-gray-800 mb-2">Reviews ({service.reviewsCount})</h4>
            <div className="flex flex-col gap-3">
              <div className="border-b border-gray-200 pb-2">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-bold">Rohan S.</span>
                  <span className="text-[10px] text-gray-400">2 days ago</span>
                </div>
                <p className="text-xs text-gray-600">"Excellent service and very professional team. Highly recommended!"</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Persistent CTA */}
      <div className="fixed bottom-16 left-1/2 -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-100 p-4 flex gap-4 z-50">
        <button className="flex-1 bg-gray-100 text-gray-800 py-3 rounded-2xl font-bold text-sm active:scale-95 transition-all">
          Enquire Now
        </button>
        <button 
          onClick={handleAddToCart}
          className={`flex-1 py-3 rounded-2xl font-bold text-sm transition-all active:scale-95 flex items-center justify-center gap-2 ${isAdded ? 'bg-green-500 text-white' : 'phonepe-bg text-white shadow-lg'}`}
        >
          {isAdded ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Added to Cart
            </>
          ) : 'Book Now'}
        </button>
      </div>
    </div>
  );
};

export default Detail;
