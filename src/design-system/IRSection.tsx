import { ReactNode } from 'react';

interface IProps {
   label: string;
   children: ReactNode;
}

function IRSection({ label, children }: IProps) {
   return (
      <div className="">
         <div className="rounded-t-2xl border-t-4 border-x-4 border-b-4 bg-light-standout">
            <div className="text-center text-3xl p-2">{label}</div>
         </div>
         <div className="rounded-b-2xl border-b-4 border-x-4 bg-dark-bg">
            <div className="p-2">{children}</div>
         </div>
      </div>
   );
}

export default IRSection;
