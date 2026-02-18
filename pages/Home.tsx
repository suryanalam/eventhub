
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES, MOCK_SERVICES } from '../constants';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-8 animate-fadeIn px-4 md:px-0">
      {/* Search Section - Enhanced UI */}
      <div className="mt-2 md:hidden">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-1.5 flex items-center ring-4 ring-purple-50">
          <div className="flex-1 flex items-center px-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              placeholder="Venues, Decor, Photography..." 
              className="w-full ml-3 outline-none text-sm text-gray-700 bg-transparent py-2" 
            />
          </div>
          <button className="phonepe-bg text-white px-5 py-2 rounded-xl text-sm font-bold shadow-md active:scale-95 transition-all">
            Find
          </button>
        </div>
      </div>

      {/* Hero Banner for Desktop */}
      <div className="hidden md:block relative h-64 rounded-3xl overflow-hidden phonepe-gradient shadow-xl">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 h-full flex flex-col justify-center px-12 text-white">
          <h2 className="text-4xl font-black mb-2 uppercase tracking-tighter">Plan Like a Pro</h2>
          <p className="text-lg opacity-90 max-w-lg font-medium leading-tight mb-6">The ultimate event services marketplace for the next generation of planners.</p>
          <div className="flex gap-4">
            <button onClick={() => navigate('/listing')} className="bg-white text-purple-700 px-8 py-3 rounded-2xl font-bold shadow-lg hover:bg-gray-50 transition-colors">Start Exploring</button>
            <button className="bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-3 rounded-2xl font-bold hover:bg-white/30 transition-colors">View Deals</button>
          </div>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/3 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      </div>

      {/* Categories Grid - Responsive */}
      <div>
        <h2 className="text-base md:text-xl font-black text-gray-800 mb-5 flex items-center justify-between">
          <span>Explore Categories</span>
          <span className="text-xs phonepe-text font-bold cursor-pointer hover:underline">View All Categories</span>
        </h2>
        <div className="grid grid-cols-4 md:grid-cols-6 gap-4 md:gap-8">
          {CATEGORIES.map((cat) => (
            <div 
              key={cat.id} 
              onClick={() => navigate(`/listing?category=${cat.id}`)}
              className="flex flex-col items-center gap-3 cursor-pointer group"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-3xl flex items-center justify-center text-3xl group-hover:scale-105 group-active:scale-95 transition-all shadow-sm border border-gray-100 group-hover:border-purple-200 group-hover:shadow-md">
                {cat.icon}
              </div>
              <span className="text-[10px] md:text-sm font-bold text-gray-600 text-center uppercase tracking-tighter group-hover:text-purple-700">{cat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Static "How it Works" Section (Replaced AI Planner) */}
      <div className="md:max-w-4xl">
        <div className="bg-white border border-gray-100 rounded-[2.5rem] p-6 md:p-10 shadow-xl relative overflow-hidden group">
          <div className="relative z-10">
            <h3 className="text-xl md:text-3xl font-black uppercase tracking-tight text-gray-800 mb-6">Simple 3-Step Planning</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 phonepe-bg text-white rounded-full flex items-center justify-center font-black">1</div>
                <h4 className="font-bold text-gray-800">Discover</h4>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">Browse thousands of top-rated venues, decorators, and caterers in your city.</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 phonepe-bg text-white rounded-full flex items-center justify-center font-black">2</div>
                <h4 className="font-bold text-gray-800">Customize</h4>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">Select packages that fit your guest list and budget perfectly.</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 phonepe-bg text-white rounded-full flex items-center justify-center font-black">3</div>
                <h4 className="font-bold text-gray-800">Book</h4>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">Secure your date with verified vendors through our safe payment gateway.</p>
              </div>
            </div>
            <button 
              onClick={() => navigate('/listing')}
              className="mt-8 phonepe-bg text-white px-8 py-3.5 rounded-2xl text-sm font-black shadow-lg hover:shadow-xl active:scale-95 transition-all"
            >
              BROWSE ALL SERVICES
            </button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-50 opacity-50 rounded-full -translate-y-20 translate-x-20 group-hover:scale-110 transition-transform duration-1000" />
        </div>
      </div>

      {/* Featured Services - Responsive Grid */}
      <div className="pb-10">
        <h2 className="text-base md:text-xl font-black text-gray-800 mb-6 flex items-center justify-between">
          <span>Trending Providers</span>
          <button onClick={() => navigate('/listing')} className="text-xs phonepe-text font-bold uppercase tracking-widest">See More</button>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_SERVICES.slice(0, 6).map((service) => (
            <div 
              key={service.id} 
              onClick={() => navigate(`/detail/${service.id}`)}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all cursor-pointer group flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={service.image} alt={service.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-[10px] font-black text-purple-700 shadow-sm uppercase">
                  {service.category}
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-base font-black text-gray-800 line-clamp-1">{service.name}</h4>
                    <div className="flex items-center gap-1 text-xs font-bold text-yellow-600 bg-yellow-50 px-2 py-0.5 rounded-lg">
                      ⭐ {service.rating}
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 font-medium">{service.location}</p>
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-50">
                  <span className="text-lg font-black phonepe-text">₹{service.price.toLocaleString()} <span className="text-[10px] text-gray-400 font-bold">BASE</span></span>
                  <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-xl text-xs font-bold group-hover:bg-purple-600 group-hover:text-white transition-colors">Book</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
