import React from 'react';

interface CoffeeTypeCardProps {
  title: string;
  caffeine: string;
  safeAmount: string;
  imageUrl: string;
  risks: string[];
}

export default function CoffeeTypeCard({ title, caffeine, safeAmount, imageUrl, risks }: CoffeeTypeCardProps) {
  return (
    <div className="bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800 hover:border-red-500/50 transition-colors h-full">
      <div 
        className="h-48 sm:h-56 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
        <div className="space-y-4">
          <div className="space-y-2 text-neutral-400">
            <p>Kafein: {caffeine}</p>
            <p>Güvenli Miktar: {safeAmount}</p>
          </div>
          
          <div className="pt-4 border-t border-neutral-800">
            <h4 className="text-red-500 font-medium mb-2">Olası Riskler:</h4>
            <ul className="space-y-2 text-neutral-400">
              {risks.map((risk, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>{risk}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}