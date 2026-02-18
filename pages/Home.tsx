
import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES, MOCK_SERVICES } from '../constants';

interface HomeProps {
  currentCityId: string | null;
}

const Home: React.FC<HomeProps> = ({ currentCityId }) => {
  const navigate = useNavigate();

  const cityServices = useMemo(() => {
    return MOCK_SERVICES.filter(s => s.cityId === currentCityId);
  }, [currentCityId]);

  return (
    <div className="flex flex-col gap-8 animate-fadeIn px-4 md:px-0">
      {/* Search Section Mobile */}
      <div className="mt-2 md:hidden">
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            const q = (e.target as any).search.value;
            if(q) navigate(`/listing?search=${q}`);
          }}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-1.5 flex items-center ring-4 ring-purple-50"
        >
          <div className="flex-1 flex items-center px-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              name="search"
              type="text" 
              placeholder="Venues, Decor, Photography..." 
              className="w-full ml-3 outline-none text-sm text-gray-700 bg-transparent py-2" 
            />
          </div>
          <button type="submit" className="phonepe-bg text-white px-5 py-2 rounded-xl text-sm font-bold shadow-md active:scale-95 transition-all">
            Find
          </button>
        </form>
      </div>

      {/* Enhanced Hero Banner */}
      <div className="relative h-72 md:h-96 rounded-[2.5rem] overflow-hidden phonepe-gradient shadow-2xl group">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] animate-pulse"></div>
        
        {/* Floating Icons Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-10 left-[10%] text-6xl opacity-20 animate-float" style={{ animationDelay: '0s' }}>🎈</div>
          <div className="absolute top-20 right-[15%] text-5xl opacity-20 animate-float" style={{ animationDelay: '2s' }}>🎊</div>
          <div className="absolute bottom-10 left-[20%] text-7xl opacity-20 animate-float" style={{ animationDelay: '1s' }}>🥂</div>
          <div className="absolute top-1/2 right-[5%] text-4xl opacity-20 animate-float" style={{ animationDelay: '3s' }}>💍</div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/60 to-transparent"></div>
        
        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-20 text-white">
          <span className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] w-fit mb-4 border border-white/30">
            India's #1 Event App
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter leading-none max-w-2xl">
            Design Your <span className="text-purple-300">Dream</span> Moment
          </h2>
          <p className="text-sm md:text-xl opacity-90 max-w-md font-medium leading-relaxed mb-8">
            Access elite venues, star-grade catering, and award-winning decorators in a single click.
          </p>
          <div className="flex gap-4">
            <button onClick={() => navigate('/listing')} className="bg-white text-purple-700 px-8 py-4 rounded-[1.5rem] font-black text-sm shadow-xl hover:shadow-white/20 active:scale-95 transition-all">START EXPLORING</button>
            <button className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-[1.5rem] font-black text-sm hover:bg-white/20 transition-all hidden sm:block">VIEW OFFERS</button>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div>
        <h2 className="text-base md:text-xl font-black text-gray-800 mb-6 flex items-center justify-between">
          <span>Explore Categories</span>
          <span className="text-[10px] phonepe-text font-black uppercase tracking-widest cursor-pointer hover:underline" onClick={() => navigate('/listing')}>View All</span>
        </h2>
        <div className="grid grid-cols-4 md:grid-cols-6 gap-4 md:gap-8">
          {CATEGORIES.map((cat) => (
            <div 
              key={cat.id} 
              onClick={() => navigate(`/listing?category=${cat.id}`)}
              className="flex flex-col items-center gap-3 cursor-pointer group"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-[2rem] flex items-center justify-center text-3xl group-hover:scale-105 group-active:scale-95 transition-all shadow-sm border border-gray-100 group-hover:border-purple-200 group-hover:shadow-md">
                {cat.icon}
              </div>
              <span className="text-[10px] md:text-xs font-black text-gray-600 text-center uppercase tracking-tighter">{cat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Services */}
      <div className="pb-10">
        <h2 className="text-base md:text-xl font-black text-gray-800 mb-6 flex items-center justify-between">
          <span>Trending in {currentCityId ? currentCityId.charAt(0).toUpperCase() + currentCityId.slice(1) : 'Your City'}</span>
          <button onClick={() => navigate('/listing')} className="text-[10px] phonepe-text font-black uppercase tracking-widest">See More</button>
        </h2>
        
        {cityServices.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cityServices.slice(0, 6).map((service) => (
              <div 
                key={service.id} 
                onClick={() => navigate(`/detail/${service.id}`)}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl transition-all cursor-pointer group flex flex-col relative"
              >
                {!service.isAvailable && (
                  <div className="absolute top-4 right-4 z-20 bg-red-500 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                    Out of Stock
                  </div>
                )}
                <div className="relative h-56 overflow-hidden">
                  <img src={service.image} alt={service.name} className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ${!service.isAvailable ? 'grayscale opacity-50' : ''}`} />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-xl text-[10px] font-black text-purple-700 shadow-sm uppercase tracking-wider">
                    {service.category}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-black text-gray-800 line-clamp-1 group-hover:phonepe-text transition-colors">{service.name}</h4>
                      <div className="flex items-center gap-1 text-xs font-bold text-yellow-600 bg-yellow-50 px-2 py-0.5 rounded-lg">
                        ⭐ {service.rating}
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 font-bold">{service.location}</p>
                  </div>
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-50">
                    <span className="text-xl font-black phonepe-text">₹{service.price.toLocaleString()}</span>
                    <button className={`px-6 py-2.5 rounded-2xl text-xs font-black transition-all ${service.isAvailable ? 'phonepe-bg text-white shadow-md active:scale-95' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}>
                      {service.isAvailable ? 'BOOK' : 'SOLD OUT'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-[2.5rem] p-12 text-center border-2 border-dashed border-gray-100">
             <div className="text-4xl mb-4 animate-float">🚧</div>
             <p className="text-gray-800 font-black uppercase tracking-tight">Expanding Soon!</p>
             <p className="text-xs text-gray-500 font-medium mt-1">We don't have vendors in this city yet, but stay tuned.</p>
             <button onClick={() => navigate('/listing')} className="mt-6 text-xs font-black phonepe-text border-b-2 border-purple-200 uppercase tracking-widest">Browse all cities</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
