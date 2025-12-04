import React from 'react';

interface IProps {
   children: React.ReactNode;
   onClick?: () => void;
   disabled?: boolean;
}

function IRButton({ children, onClick, disabled = false }: IProps) {
   const baseClasses =
      'px-6 py-3 rounded-2xl tracking-wide transition-all duration-200 border-4';
   const disabledClasses =
      'opacity-40 cursor-default';
   const enabledClasses =
      'cursor-pointer active:scale-98 hover:bg-light-standout hover:shadow-xl';
   const colorClasses =
      'bg-dark-standout border-dark-standout';

   return (
      <button
         className={`${baseClasses} ${colorClasses} ${disabled ? disabledClasses : enabledClasses}`}
         onClick={onClick}
         disabled={disabled}
      >
         {children}
      </button>
   );
}

export default IRButton;
