import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
// import { DiceRoller } from './features/dice/DiceRollerOld';
import DiceRoller from './features/dice/DiceRoller';
import {
   processGameTick,
   selectCurrentMoney,
   selectTickInterval,
} from './features/game/gameSlice';
import ItemStore from './features/item-store/ItemStore';
import DiceRollerManager from './features/dice/DiceRollerManager';
import { formatMoney } from './utils/UtilFuncs';

export const App = () => {
   const dispatch = useAppDispatch();
   const currentMoney = useAppSelector(selectCurrentMoney);
   const tickInterval = useAppSelector(selectTickInterval);

   useEffect(() => {
      setInterval(() => {
         dispatch(processGameTick());
      }, tickInterval);
   }, []);

   return (
      <div
         className="min-h-screen text-gray-200"
         style={{
            background:
               'radial-gradient(circle at 10% 10%, #0b1220, #050915 40%), linear-gradient(180deg, #050915, #030711)',
         }}
      >
         <div className="mx-auto max-w-[1200px] px-6 pt-9 pb-16">
            <header className="flex flex-col gap-6">
               <div className="flex items-center gap-5">
                  <div>
                     <p className="m-0 text-[13px] uppercase tracking-[0.14em] text-blue-300">
                        Idle Roll
                     </p>
                     <h1>Roll, earn, upgrade.</h1>
                     <div className="text-xl font-semibold text-green-400 mb-4">
                        Money: ${formatMoney(currentMoney)}
                     </div>
                  </div>
               </div>
               <ItemStore />
               <DiceRollerManager />
            </header>
         </div>
      </div>
   );
};
