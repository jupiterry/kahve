import React from 'react';
import { LucideIcon } from 'lucide-react';

interface InfoCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export default function InfoCard({ title, description, Icon }: InfoCardProps) {
  return (
    <div className="bg-neutral-900 p-6 rounded-lg border border-neutral-800 hover:border-red-500/50 transition-colors">
      <Icon className="w-12 h-12 text-red-500 mb-4" />
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-neutral-400">{description}</p>
    </div>
  );
}