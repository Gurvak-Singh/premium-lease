import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MetricCounterProps {
  icon: LucideIcon;
  value: string;
  label: string;
}

const MetricCounter: React.FC<MetricCounterProps> = ({ icon: Icon, value, label }) => {
  return (
    <div className="text-center p-6">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
        <Icon size={32} className="text-blue-800" />
      </div>
      <div className="text-3xl font-bold text-gray-900 mb-2">{value}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
};

export default MetricCounter;
