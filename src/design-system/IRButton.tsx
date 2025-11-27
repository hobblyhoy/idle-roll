import React from 'react';

interface IProps {
   children: React.ReactNode;
   variant?: 'primary' | 'secondary';
   onClick?: () => void;
   disabled?: boolean;
}

function IRButton({ children, variant = 'primary', onClick, disabled = false }: IProps) {
   const baseClasses = "px-6 py-3 rounded-2xl font-semibold text-sm uppercase tracking-wide transition-all duration-200 cursor-pointer border-2 active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100";
   
   const variantClasses = {
      primary: "bg-gradient-to-br from-blue-700 to-blue-800 hover:from-blue-500 hover:to-blue-600 text-white border-blue-500 shadow-lg shadow-blue-600/20 hover:shadow-blue-500/25",
      secondary: "bg-gradient-to-br from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-gray-100 border-slate-600 shadow-lg shadow-slate-600/15 hover:shadow-slate-500/20"
   };

   return (
      <button 
         className={`${baseClasses} ${variantClasses[variant]}`}
         onClick={onClick}
         disabled={disabled}
      >
         {children}
      </button>
   );
}

export default IRButton;
