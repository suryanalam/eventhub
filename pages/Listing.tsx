
import React, { useState, useMemo, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MOCK_SERVICES, CATEGORIES } from '../constants';

interface ListingProps {
  currentCityId: string | null;
}

const Listing: React.FC<ListingProps> = ({ currentCityId }) => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const initialCategory = query.get('category');
  const searchQuery = query.get('search');

  const [selectedCategory, setSelectedCategory] = useState<string | null>(initialCategory);
  const [sortBy, setSortBy] = useState<'rating' | 'price' | 'none'>('none');

  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  const filteredServices = useMemo(() => {
    let list = [...MOCK_SERVICES];
    
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      list = list.filter(s => 
        s.name.toLowerCase().includes(q) || 
        s.category.toLowerCase().includes(q) ||
        s.location.toLowerCase().includes(q) ||
        s.cityId.toLowerCase().includes(q)
      );
    }
    
    if (currentCityId) {
      list = list.filter(s => s.cityId === currentCityId);
    }
    
    if (selectedCategory) {
      list = list.filter(s => s.category === selectedCategory);
    }

    if (sortBy === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'price') {
      list.sort((a, b) => a.price - b.price);
    }
    return list;
  }, [selectedCategory, sortBy, currentCityId, searchQuery]);

  return (
    <div className="flex flex-col min-h-screen animate-fadeIn pb-20">
      <div className="sticky top-16 bg-gray-50/80 backdrop-blur-md z-40 py-4 px-4 md:px-0 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
            <button 
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-2.5 rounded-2xl text-xs font-black uppercase tracking-widest whitespace-nowrap transition-all shadow-sm ${!selectedCategory ? 'phonepe-bg text-white' : 'bg-white text-gray-600 border border-gray-100'}`}
            >
              All Services
            </button>
            {CATEGORIES.map(cat => (
              <button 
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-2.5 rounded-2xl text-xs font-black uppercase tracking-widest whitespace-nowrap transition-all shadow-sm ${selectedCategory === cat.id ? 'phonepe-bg text-white' : 'bg-white text-gray-600 border border-gray-100'}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-3 bg-white p-1 rounded-2xl border border-gray-100 shadow-sm">
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-3 hidden sm:block">Sort By</label>
            <select 
              className="text-xs font-black text-gray-700 bg-transparent border-none rounded-xl px-4 py-2 outline-none cursor-pointer appearance-none pr-8 relative bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M7%2010L12%2015L17%2010%22%20stroke%3D%22%234B5563%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22/%3E%3C/svg%3E')] bg-[length:16px_16px] bg-[right_8px_center] bg-no-repeat"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
            >
              <option value="none">Recommended</option>
              <option value="rating">Top Rated</option>
              <option value="price">Budget Friendly</option>
            </select>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-0 mt-8 mb-6">
        <h2 className="text-2xl font-black text-gray-800 uppercase tracking-tighter">
          {searchQuery ? `Results for "${searchQuery}"` : (selectedCategory ? `${selectedCategory}s` : 'All Services')}
          <span className="ml-3 text-xs font-bold text-gray-400 normal-case bg-gray-100 px-3 py-1 rounded-full">
            {filteredServices.length} found {currentCityId && `in ${currentCityId.charAt(0).toUpperCase() + currentCityId.slice(1)}`}
          </span>
        </h2>
      </div>

      <div className="px-4 md:px-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredServices.length > 0 ? (
          filteredServices.map((service) => (
            <div 
              key={service.id} 
              onClick={() => navigate(`/detail/${service.id}`)}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl border border-gray-100 group cursor-pointer transition-all duration-500 flex flex-col relative"
            >
              {!service.isAvailable && (
                <div className="absolute top-4 right-4 z-20 bg-gray-800/80 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                  Sold Out
                </div>
              )}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={service.image} alt={service.name} className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ${!service.isAvailable ? 'grayscale opacity-60' : ''}`} />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-xl text-[10px] font-black phonepe-text shadow-md uppercase tracking-wider z-10">
                  {service.category}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-black text-gray-800 leading-tight group-hover:phonepe-text transition-colors line-clamp-1">{service.name}</h3>
                    <div className="flex items-center gap-1 text-[10px] font-black text-yellow-600 bg-yellow-50 px-2 py-0.5 rounded-lg border border-yellow-100">
                      ⭐ {service.rating}
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 font-bold flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {service.location}, {service.cityId.charAt(0).toUpperCase() + service.cityId.slice(1)}
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-gray-50 mt-6 pt-5">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-0.5">Starting</span>
                    <span className="text-xl font-black phonepe-text">₹{service.price.toLocaleString()}</span>
                  </div>
                  <div className={`p-3 rounded-2xl transition-all shadow-sm ${service.isAvailable ? 'bg-purple-50 text-purple-700 group-hover:bg-purple-600 group-hover:text-white' : 'bg-gray-50 text-gray-300'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-32 flex flex-col items-center justify-center text-gray-400">
            <div className="text-8xl mb-6 opacity-30 animate-float">🏜️</div>
            <p className="font-black text-2xl text-gray-800 uppercase tracking-tighter">Deserted Results</p>
            <p className="text-xs font-medium text-gray-500 mt-2 max-w-xs text-center">We couldn't find matches for your search. Try broadening your keywords or changing categories.</p>
            <button 
              onClick={() => {
                setSelectedCategory(null);
                navigate('/listing');
              }} 
              className="mt-8 px-10 py-4 phonepe-bg text-white rounded-[1.5rem] font-black text-xs uppercase tracking-widest shadow-xl active:scale-95 transition-all"
            >
              Show All Services
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Listing;
