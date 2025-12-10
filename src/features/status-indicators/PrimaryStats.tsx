import { useAppSelector } from '../../app/hooks';
import IRBox from '../../design-system/IRBox';
import { formatMoney, formatTo3Places } from '../../utils/UtilFuncs';
import {
   selectCurrentBase,
   selectCurrentMultiplier,
   selectCurrentSpeed,
} from '../game/gameSlice';
import { useBreakpoint } from '../viewport/useBreakpoint';

function PrimaryStats() {
   const { isMobile } = useBreakpoint();
   const baseMoney = useAppSelector(selectCurrentBase);
   const speed = useAppSelector(selectCurrentSpeed);
   const multi = useAppSelector(selectCurrentMultiplier);

   return (
      <IRBox>
         <div className="flex m-2 text-2xl text-center">
            <div className="flex-1 flex flex-col">
               <div>Speed</div>
               <div className="text-stone-800">
                  {formatTo3Places(speed)}&times;
               </div>
            </div>
            <div className="flex-1 flex flex-col">
               <div>Draw $</div>
               <div className="text-stone-800">${formatMoney(baseMoney)}</div>
            </div>
            <div className="flex-1">
               <div>{isMobile ? 'Multi' : 'Multiplier'} </div>
               <div className="text-stone-800">
                  {formatTo3Places(multi)}&times;
               </div>
            </div>
         </div>
      </IRBox>
   );
}

export default PrimaryStats;
