
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
    if(!service.isAvailable) return;
    onAddToCart(service);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="animate-fadeIn max-w-4xl mx-auto">
      <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl mx-4 sm:mx-0">
        <img src={service.image} alt={service.name} className={`w-full aspect-[16/10] object-cover ${!service.isAvailable ? 'grayscale opacity-60' : ''}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
          <div className="text-white">
            <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-3 inline-block border border-white/30">
              {service.category}
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">{service.name}</h2>
            <p className="text-sm opacity-90 mt-2 font-medium">{service.location}, {service.cityId.charAt(0).toUpperCase() + service.cityId.slice(1)}</p>
          </div>
        </div>
        {!service.isAvailable && (
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <span className="bg-red-600 text-white px-8 py-4 rounded-2xl font-black text-xl uppercase tracking-widest shadow-2xl rotate-[-5deg] border-4 border-white">
              Currently Unavailable
            </span>
          </div>
        )}
      </div>

      <div className="p-8 bg-white rounded-[2.5rem] -mt-10 relative z-10 flex flex-col gap-8 mx-4 sm:mx-0 shadow-xl border border-gray-100">
        <div className="flex items-center justify-between bg-purple-50 p-6 rounded-[2rem] border border-purple-100">
          <div>
            <p className="text-[10px] text-purple-600 font-black uppercase tracking-widest mb-1">Base Price</p>
            <p className="text-3xl font-black phonepe-text">₹{service.price.toLocaleString()}</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-1">Verified Rating</p>
            <div className="flex items-center gap-1 justify-end">
              <p className="text-2xl font-black text-yellow-600">⭐ {service.rating}</p>
              <p className="text-[10px] text-gray-400 font-bold">({service.reviewsCount} reviews)</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-3">About the Provider</h3>
          <p className="text-sm text-gray-600 leading-relaxed font-medium">
            {service.description}
          </p>
        </div>

        <div>
          <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-4">Core Deliverables</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {service.features.map(f => (
              <div key={f} className="flex items-center gap-3 text-xs text-gray-700 bg-gray-50 p-4 rounded-2xl border border-gray-100 font-bold group hover:border-purple-200 transition-all">
                <div className="bg-green-100 text-green-600 p-1.5 rounded-lg group-hover:bg-green-500 group-hover:text-white transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                {f}
              </div>
            ))}
          </div>
        </div>

        <div className="pb-24">
          <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-6">User Experiences</h3>
          <div className="flex flex-col gap-4">
            {[
              { name: 'Rohan S.', time: '2 days ago', text: 'Excellent service and very professional team. Highly recommended!', initial: 'R' },
              { name: 'Ananya P.', time: '1 week ago', text: 'Loved the attention to detail. Made our event truly special.', initial: 'A' }
            ].map((rev, i) => (
              <div key={i} className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center text-xs font-black">{rev.initial}</div>
                    <span className="text-xs font-black text-gray-800">{rev.name}</span>
                  </div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase">{rev.time}</span>
                </div>
                <p className="text-xs text-gray-600 italic font-medium">"{rev.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Persistent CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-gray-100 p-4 z-50 flex justify-center">
        <div className="w-full max-w-4xl flex gap-4">
          <button className="flex-1 bg-gray-50 text-gray-800 py-4 rounded-2xl font-black text-xs uppercase tracking-widest active:scale-95 transition-all border border-gray-100">
            Enquire
          </button>
          <button 
            disabled={!service.isAvailable}
            onClick={handleAddToCart}
            className={`flex-[2] py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all active:scale-95 flex items-center justify-center gap-2 shadow-xl ${!service.isAvailable ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : (isAdded ? 'bg-green-500 text-white' : 'phonepe-bg text-white')}`}
          >
            {isAdded ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Added!
              </>
            ) : (service.isAvailable ? 'Book Instantly' : 'Not Serviceable')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
