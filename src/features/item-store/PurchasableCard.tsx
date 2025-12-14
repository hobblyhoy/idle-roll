import { formatMoney } from '../../utils/UtilFuncs';
import { IPlayingCard } from '../game/types';


const generateRandomCard = (): IPlayingCard => {
   return {
      id: Date.now(),
      baseModifier: 0,
      speedModifier: 0,
      multiplierModifier: 0,
      duration: 0,
      storeSource: 'free',
      title: '',
      imageType: 'growth',
      description: '',
   };
};

interface IProps {
   imageSrc: string;
   name: string;
   alt: string;
   price: number;
}

const PurchasableCard = ({ imageSrc, alt, name, price }: IProps) => {
   const onClick = () => {

   };

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

export default PurchasableCard;
