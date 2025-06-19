// src/components/ui/tooltip.tsx
import React from 'react';

type TooltipProps = {
  text: string;
  children: React.ReactNode;
};

export default function Tooltip({ text, children }: TooltipProps) {
  return (
    <div className="relative group inline-block">
      {children}
      <span className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded py-1 px-2">
        {text}
      </span>
    </div>
  );
}
