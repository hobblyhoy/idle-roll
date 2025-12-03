import { ReactNode } from 'react';

interface IProps {
   children: ReactNode;
}

function IRBox({ children }: IProps) {
   return (
      <div className="bg-light-standout rounded-2xl border-4">{children}</div>
   );
}

export default IRBox;
