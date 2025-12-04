import IRBox from '../../design-system/IRBox';
import { useBreakpoint } from '../viewport/useBreakpoint';

function PrimaryStats() {
   const { isMobile } = useBreakpoint();

   return (
      <IRBox>
         <div className="flex m-2 text-2xl text-center">
            <div className="flex-1 flex flex-col">
               <div>Speed</div>
               <div className="text-stone-800">1.123&times;</div>
            </div>
            <div className="flex-1 flex flex-col">
               <div>Base $</div>
               <div className="text-stone-800">$0.01</div>
            </div>
            <div className="flex-1">
               <div>{isMobile ? 'Multi' : 'Multiplier'} </div>
               <div className="text-stone-800">1.987&times;</div>
            </div>
         </div>
      </IRBox>
   );
}

export default PrimaryStats;
