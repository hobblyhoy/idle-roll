import { useAppDispatch, useAppSelector } from './app/hooks';
import { selectTickInterval } from './features/game/gameSlice';
import PrimaryStats from './features/status-indicators/PrimaryStats';
import DeckPanel from './features/playing-cards/DeckPanel';
import MoneyIndicator from './features/status-indicators/MoneyIndicator';
import AutoDraw from './features/status-indicators/AutoDraw';
import ItemStore from './features/item-store/ItemStore';

export const App = () => {
   const dispatch = useAppDispatch();
   const tickInterval = useAppSelector(selectTickInterval);

   // useEffect(() => {
   //    setInterval(() => {
   //       dispatch(processGameTick());
   //    }, tickInterval);
   // }, []);

   return (
      <div className="min-h-screen bg-light-bg">
         <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 sm:col-start-3 sm:col-span-8 lg:col-start-4 lg:col-span-6">
               <div className="m-3 sm:mx-0 gap-3">
                  <div className="flex flex-col gap-3">
                     <PrimaryStats />
                     {/* <Buffs /> */}
                     <MoneyIndicator />
                     <DeckPanel />
                     {/* Note autodraw will actually be hidden until onlocked */}
                     <AutoDraw />
                     <ItemStore />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
