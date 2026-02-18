
import React from 'react';

const Account: React.FC = () => {
  const menuItems = [
    { label: 'Booking History', icon: '📅', desc: 'Track your upcoming events' },
    { label: 'Saved Providers', icon: '💖', desc: 'Your favorite venues & vendors' },
    { label: 'Wallet & Credits', icon: '💰', desc: '₹2,500 available' },
    { label: 'Support & Help', icon: '💬', desc: 'Chat with our event concierges' },
    { label: 'Settings', icon: '⚙️', desc: 'Privacy, notifications & more' },
  ];

  return (
    <div className="px-4 md:px-0 py-6 animate-fadeIn max-w-2xl mx-auto">
      {/* Profile Header */}
      <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100 flex flex-col items-center mb-8">
        <div className="relative mb-4">
          <div className="w-24 h-24 rounded-full phonepe-gradient flex items-center justify-center text-4xl text-white font-black border-4 border-white shadow-xl">
            A
          </div>
          <button className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md border border-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>
        <h2 className="text-xl font-black text-gray-800">Aryan Sharma</h2>
        <p className="text-xs text-gray-500 font-bold mb-6">aryansharma.design@gmail.com</p>
        
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="bg-purple-50 p-4 rounded-3xl text-center border border-purple-100">
            <p className="text-[10px] font-black text-purple-400 uppercase tracking-widest">Bookings</p>
            <p className="text-lg font-black text-purple-700">12</p>
          </div>
          <div className="bg-green-50 p-4 rounded-3xl text-center border border-green-100">
            <p className="text-[10px] font-black text-green-400 uppercase tracking-widest">Credits</p>
            <p className="text-lg font-black text-green-700">₹2.5K</p>
          </div>
        </div>
      </div>

      {/* Menu List */}
      <div className="flex flex-col gap-3">
        {menuItems.map((item, idx) => (
          <button key={idx} className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 flex items-center gap-5 hover:bg-gray-50 transition-all group">
            <div className="text-2xl bg-gray-50 p-3 rounded-2xl group-hover:scale-110 transition-transform">{item.icon}</div>
            <div className="flex-1 text-left">
              <p className="text-sm font-black text-gray-800">{item.label}</p>
              <p className="text-[10px] text-gray-400 font-medium">{item.desc}</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300 group-hover:text-purple-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        ))}
      </div>

      <button className="mt-8 w-full bg-red-50 text-red-600 font-black py-4 rounded-3xl border border-red-100 hover:bg-red-100 transition-all flex items-center justify-center gap-2 mb-12">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
        Log Out
      </button>
    </div>
  );
};

export default Account;
