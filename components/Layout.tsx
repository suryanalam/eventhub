
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === '/';
  const currentPath = location.pathname;

  const navItems = [
    { path: '/', label: 'Home', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )},
    { path: '/listing', label: 'Explore', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
      </svg>
    )},
    { path: '/offers', label: 'Offers', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
      </svg>
    )},
    { path: '/account', label: 'Account', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )},
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
      {/* Top Header - Responsive Width */}
      <header className="phonepe-gradient text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {!isHome && (
              <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/10 rounded-full transition-colors lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </button>
            )}
            <div className="cursor-pointer" onClick={() => navigate('/')}>
              <h1 className="text-xl md:text-2xl font-black tracking-tight uppercase">EventHub</h1>
              <p className="text-[10px] md:text-xs opacity-80 flex items-center gap-1 font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Bangalore, India
              </p>
            </div>
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="w-full relative">
              <input 
                type="text" 
                placeholder="Search for Venues, Decor, Photography..." 
                className="w-full bg-white/10 border border-white/20 rounded-xl py-2 px-10 text-sm focus:bg-white focus:text-gray-800 focus:outline-none transition-all placeholder:text-white/60 focus:placeholder:text-gray-400"
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-2.5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-6">
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors hidden sm:block">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <button onClick={() => navigate('/cart')} className="p-2 hover:bg-white/10 rounded-full transition-colors relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="absolute top-1 right-1 bg-red-500 text-white text-[8px] font-bold px-1 rounded-full border border-white">2</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-7xl mx-auto md:px-4 pb-24 md:pb-12 pt-4">
        {children}
      </main>

      {/* Responsive Navigation */}
      {/* Mobile/Tablet Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-2 z-50 md:hidden shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
        {navItems.map((item) => (
          <button 
            key={item.path}
            onClick={() => navigate(item.path)} 
            className={`flex flex-col items-center gap-0.5 px-4 py-1 rounded-xl transition-all ${currentPath === item.path ? 'phonepe-text' : 'text-gray-400'}`}
          >
            <div className={`${currentPath === item.path ? 'scale-110' : ''} transition-transform`}>
              {item.icon}
            </div>
            <span className="text-[10px] font-bold uppercase tracking-tighter">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Desktop side-nav could be added here, but for now we keep it clean with top-header and standard page links */}
    </div>
  );
};

export default Layout;
