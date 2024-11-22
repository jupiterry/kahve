import React from 'react';
import { Coffee, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-neutral-900/90 backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Coffee className="w-8 h-8 text-red-500" />
            <span className="text-xl font-bold text-white">Kahve Bilinci</span>
          </div>
          
          <nav className="hidden md:flex space-x-8 text-white">
            <a href="#types" className="hover:text-red-500 transition-colors">Kahve Türleri</a>
            <a href="#risks" className="hover:text-red-500 transition-colors">Sağlık Riskleri</a>
            <a href="#addiction" className="hover:text-red-500 transition-colors">Bağımlılık</a>
            <a href="#benefits" className="hover:text-red-500 transition-colors">Faydalar</a>
            <a href="#recovery" className="hover:text-red-500 transition-colors">İyileşme</a>
          </nav>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col space-y-4 text-white">
            <a href="#types" className="hover:text-red-500 transition-colors">Kahve Türleri</a>
            <a href="#risks" className="hover:text-red-500 transition-colors">Sağlık Riskleri</a>
            <a href="#addiction" className="hover:text-red-500 transition-colors">Bağımlılık</a>
            <a href="#benefits" className="hover:text-red-500 transition-colors">Faydalar</a>
            <a href="#recovery" className="hover:text-red-500 transition-colors">İyileşme</a>
          </nav>
        )}
      </div>
    </header>
  );
}