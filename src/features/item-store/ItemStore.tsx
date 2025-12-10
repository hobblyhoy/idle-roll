import { useAppDispatch, useAppSelector } from '../../app/hooks';
import IRSection from '../../design-system/IRSection';
import { selectCurrentMoney } from '../game/gameSlice';

import cardBackStorePoop from '../../assets/card-back-store-poop.webp';
import cardBackStoreBronze from '../../assets/card-back-store-bronze.webp';
import cardBackStoreSilver from '../../assets/card-back-store-silver.webp';
import cardBackStoreGold from '../../assets/card-back-store-gold.webp';

function ItemStore() {
   const dispatch = useAppDispatch();
   const currentMoney = useAppSelector(selectCurrentMoney);

   return (
      <IRSection label="Store">
         <div className="flex justify-center px-1 py-3 gap-1 sm:gap-3">
            <div className="flex flex-col items-center">
               <img
                  src={cardBackStorePoop}
                  alt="Free card"
                  className="max-h-32"
               />
               <div>Free</div>
               <div>$0</div>
            </div>
            <div className="flex flex-col items-center">
               <img
                  src={cardBackStoreBronze}
                  alt="Bronze card"
                  className="max-h-32"
               />
               <div>Bronze</div>
               <div>$1</div>
            </div>
            <div className="flex flex-col items-center">
               <img
                  src={cardBackStoreSilver}
                  alt="Silver card"
                  className="max-h-32"
               />
               <div>Silver</div>
               <div>$200</div>
            </div>
            <div className="flex flex-col items-center">
               <img
                  src={cardBackStoreGold}
                  alt="Gold card"
                  className="max-h-32"
               />
               <div>Gold</div>
               <div>$3000</div>
            </div>
         </div>
      </IRSection>
   );
}

export default ItemStore;
