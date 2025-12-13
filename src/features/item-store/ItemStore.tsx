import { useAppDispatch, useAppSelector } from '../../app/hooks';
import IRSection from '../../design-system/IRSection';
import { selectCurrentMoney } from '../game/gameSlice';

import cardBackStorePoop from '../../assets/card-back-store-poop.webp';
import cardBackStoreBronze from '../../assets/card-back-store-bronze.webp';
import cardBackStoreSilver from '../../assets/card-back-store-silver.webp';
import cardBackStoreGold from '../../assets/card-back-store-gold.webp';
import { formatMoney } from '../../utils/UtilFuncs';

interface ItemProps {
   imageSrc: string;
   name: string;
   alt: string;
   price: number;
   onClick: () => void;
}
const PurchasableCard = ({
   imageSrc,
   alt,
   name,
   price,
   onClick,
}: ItemProps) => {
   const cardAnimationClass =
      'transition-transform duration-300 ease-out hover:scale-105';

   return (
      <div className="flex flex-col items-center">
         <img
            src={imageSrc}
            alt={alt}
            className={`max-h-32 cursor-pointer ${cardAnimationClass}`}
            onClick={onClick}
         />
         <div>{name}</div>
         <div>${formatMoney(price)}</div>
      </div>
   );
};

function ItemStore() {
   const dispatch = useAppDispatch();
   const currentMoney = useAppSelector(selectCurrentMoney);

   return (
      <IRSection label="Store">
         <div className="flex justify-center px-1 py-3 gap-1 sm:gap-3">
            <PurchasableCard
               imageSrc={cardBackStorePoop}
               name="Free"
               alt="Purchase Free Card"
               price={0}
               onClick={() => {}}
            />
            <PurchasableCard
               imageSrc={cardBackStoreBronze}
               name="Bronze"
               alt="Purchase Bronze Card"
               price={1}
               onClick={() => {}}
            />
            <PurchasableCard
               imageSrc={cardBackStoreSilver}
               name="Silver"
               alt="Purchase Silver Card"
               price={200}
               onClick={() => {}}
            />
            <PurchasableCard
               imageSrc={cardBackStoreGold}
               name="Gold"
               alt="Purchase Gold Card"
               price={3000}
               onClick={() => {}}
            />
         </div>
      </IRSection>
   );
}

export default ItemStore;
