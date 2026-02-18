
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Offers: React.FC = () => {
  const navigate = useNavigate();

  const mockOffers = [
    {
      id: 1,
      title: "Early Bird Wedding",
      desc: "Get 20% OFF on venues for bookings 6 months in advance.",
      code: "EARLY20",
      color: "bg-gradient-to-br from-pink-500 to-rose-600"
    },
    {
      id: 2,
      title: "First Booking Magic",
      desc: "Flat ₹5000 OFF on your first catering service.",
      code: "WELCOME5K",
      color: "bg-gradient-to-br from-purple-500 to-indigo-600"
    },
    {
      id: 3,
      title: "Student Birthday Bash",
      desc: "Flash your ID and get 15% OFF on Decor & DJ.",
      code: "GENZPARTY",
      color: "bg-gradient-to-br from-cyan-500 to-blue-600"
    }
  ];

  return (
    <div className="px-4 md:px-0 py-6 animate-fadeIn max-w-2xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <h2 className="text-3xl font-black text-gray-800 uppercase tracking-tighter">Exclusive Offers</h2>
        <span className="bg-red-100 text-red-600 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest border border-red-200">New</span>
      </div>

      <div className="flex flex-col gap-6">
        {mockOffers.map((offer) => (
          <div key={offer.id} className={`${offer.color} rounded-[2rem] p-6 text-white shadow-lg relative overflow-hidden group`}>
            <div className="relative z-10">
              <h3 className="text-xl font-black mb-1">{offer.title}</h3>
              <p className="text-sm opacity-90 mb-6 font-medium leading-tight max-w-[80%]">{offer.desc}</p>
              
              <div className="flex items-center gap-4">
                <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl px-4 py-2 font-mono text-lg font-bold">
                  {offer.code}
                </div>
                <button className="text-xs font-bold underline hover:opacity-80 transition-opacity">Copy Code</button>
              </div>
            </div>
            
            {/* Background elements */}
            <div className="absolute top-4 right-4 text-4xl opacity-20 group-hover:scale-125 transition-transform duration-500">🏷️</div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full group-hover:scale-110 transition-transform duration-1000" />
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="text-sm font-black text-gray-400 uppercase tracking-[0.2em] mb-4 text-center">Refer & Earn</h3>
        <div className="bg-white border-2 border-dashed border-purple-200 rounded-3xl p-8 text-center shadow-sm">
          <p className="text-lg font-black text-gray-800 mb-2">Invite your squad! 🫂</p>
          <p className="text-xs text-gray-500 font-medium mb-6">Earn ₹1000 credits for every friend who books their first event.</p>
          <button className="phonepe-bg text-white px-8 py-3 rounded-2xl font-bold shadow-md hover:shadow-lg active:scale-95 transition-all">
            Share Referral Link
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offers;
