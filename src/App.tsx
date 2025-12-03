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
import IRBox from './design-system/IRBox';
import PrimaryStats from './features/status-indicators/PrimaryStats';

export const App = () => {
   const dispatch = useAppDispatch();
   // const currentMoney = useAppSelector(selectCurrentMoney);
   const tickInterval = useAppSelector(selectTickInterval);

   useEffect(() => {
      setInterval(() => {
         dispatch(processGameTick());
      }, tickInterval);
   }, []);

   return (
      <div className="bg-light-bg h-screen w-screen">
         <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 sm:col-start-3 sm:col-span-8 md:col-start-4 md:col-span-6">
               <div className="m-3 sm:mx-0 sm:mb-0">
                  <PrimaryStats />
               </div>
            </div>
         </div>
      </div>
   );
};
