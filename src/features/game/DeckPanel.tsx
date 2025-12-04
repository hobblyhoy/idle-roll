import cardBack0 from '../../assets/card-back-0.webp';
import cardGrowth from '../../assets/card-growth.webp';
import IRButton from '../../design-system/IRButton';
import { useBreakpoint } from '../viewport/useBreakpoint';

function DeckPanel() {
   const { isMobile } = useBreakpoint();

   return (
      <div>
         <div className="flex justify-evenly items-center">
            <div className="relative cursor-pointer">
               <img src={cardBack0} alt="Empty deck" className="max-h-40 " />
               {isMobile && (
                  <div className="absolute inset-0 flex items-center justify-center">
                     Draw
                  </div>
               )}
            </div>
            <img src={cardGrowth} alt="Played card" className="max-h-52" />
            {!isMobile && <IRButton>Draw</IRButton>}
         </div>
      </div>
   );
}

export default DeckPanel;
