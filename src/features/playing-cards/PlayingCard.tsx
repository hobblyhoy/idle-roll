import CardIconGrowth from '../../assets/card-icon-growth.webp';
import { IPlayingCardUi } from '../game/types';

function PlayingCard({ title, imageType, description }: IPlayingCardUi) {
   const imageSrc = CardIconGrowth; // future site of switcher by icon

   return (
      <div className="w-40 cursor-default">
         <div className="rounded-2xl border-4 bg-card-outer-bg border-card-outer-border p-1.5">
            <div className="rounded-xl border-4 border-card-inner-border">
               <div className="rounded-t-xl border-b-4 border-card-inner-border bg-card-bookends-bg">
                  <div className="h-8 flex justify-center items-center">
                     {title}
                  </div>
               </div>
               <div className="bg-card-image-bg flex justify-center">
                  <img src={imageSrc} className="h-24 m-3" />
               </div>
               <div className="rounded-b-xl border-t-4 border-card-inner-border bg-card-bookends-bg">
                  <div className="h-12 flex justify-center items-center text-center text-sm">
                     {description}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default PlayingCard;
