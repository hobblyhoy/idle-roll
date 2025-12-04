import { useAppDispatch, useAppSelector } from '../../app/hooks';
import IRSection from '../../design-system/IRSection';
import { selectCurrentMoney } from '../game/gameSlice';

import cardBackStorePoop from '../../assets/card-back-store-poop.webp';

function ItemStore() {
   const dispatch = useAppDispatch();
   const currentMoney = useAppSelector(selectCurrentMoney);

   // BIG TODO!
   // Something is borked with this in mobile sizes
   // It's pushing the screen out wide for some reason

   return (
      <IRSection label="Store">
         <div className="grid grid-cols-2 sm:flex gap-2 sm:justify-evenly">
            <img src={cardBackStorePoop} alt="Free card" className="max-h-32" />
            <img src={cardBackStorePoop} alt="Free card" className="max-h-32" />
            <img src={cardBackStorePoop} alt="Free card" className="max-h-32" />
            <img src={cardBackStorePoop} alt="Free card" className="max-h-32" />
         </div>
      </IRSection>
   );
}

export default ItemStore;
