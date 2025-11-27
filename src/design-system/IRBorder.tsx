import React from 'react';

interface IProps {
   children: React.ReactNode;
}

function IRBorder({ children }: IProps) {
   return (
      <div className="border-4 border-slate-700 rounded-3xl p-2">{children}</div>
   );
}

export default IRBorder;
