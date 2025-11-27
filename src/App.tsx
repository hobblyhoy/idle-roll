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
                        Money: $
                        {(currentMoney / 100).toLocaleString('en-US', {
                           minimumFractionDigits: 2,
                           maximumFractionDigits: 2,
                        })}
                     </div>
                     <div className="text-slate-300 mt-1 mb-0">
                        <p>
                           You get a payout ONLY when you hit a certain number
                           of rolls in a roll. You have to pay to increase when
                           this payout happens. It's basically a bunch of coins
                           flipping and dice rolling. Each time they roll it
                           does a little animation.
                        </p>{' '}
                        <p>
                           The game ends as soon as you get
                           1,2,3,4,5,6,5,4,3,2,1 1 is $0.01 2 is $0.10 3 is
                           $1.00 4 is $10 5 is $100 6 is $1,000 5 is $10,000 4
                           is $100,000 3 is $1,000,000 2 is $10,000,000 1 is
                           Game win.
                        </p>{' '}
                        <p>
                           The closer you get, the more money you earn. To
                           prevent crowding the interface we only show the wins
                           from the current highest level - 2 You'll actually
                           set the dice down somewhere in the "play" area. Maybe
                           like a green felt all craps style. You click it to
                           make it start a little roll animation
                        </p>
                     </div>
                  </div>
               </div>
               <DiceRollerManager />
               <ItemStore />
            </header>
         </div>
      </div>
   );
};
