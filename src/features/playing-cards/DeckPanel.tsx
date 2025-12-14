import { useAppDispatch, useAppSelector } from '../../app/hooks';
import cardBack0 from '../../assets/card-back-0.webp';
import cardBack1 from '../../assets/card-back-1.webp';
import cardBack1Draw from '../../assets/card-back-1-draw.webp';
import IRButton from '../../design-system/IRButton';
import { drawCard, selectCurrentCard, selectHasCards } from '../game/gameSlice';
import { useBreakpoint } from '../viewport/useBreakpoint';
import PlayingCard from './PlayingCard';
import PlayingCardPlaceholder from './PlayingCardPlaceholder';

function DeckPanel() {
   const { isMobile } = useBreakpoint();
   const dispatch = useAppDispatch();
   const currentCard = useAppSelector(selectCurrentCard);
   const hasCards = useAppSelector(selectHasCards);

   let cardToDisplay = cardBack0;
   if (hasCards && isMobile) {
      cardToDisplay = cardBack1Draw;
   } else if (hasCards && !isMobile) {
      cardToDisplay = cardBack1;
   }

   const cardAnimationClass =
      'transition-transform duration-300 ease-out hover:translate-x-2 hover:rotate-3';

   const drawOnClick = () => {
      dispatch(drawCard());
   };

   return (
      <div>
         <div className="flex justify-evenly items-center">
            <div className="relative cursor-pointer" onClick={drawOnClick}>
               <img src={cardToDisplay} alt="" className="max-h-40 " />
               {hasCards && (
                  <img
                     src={cardToDisplay}
                     alt="Draw card"
                     className={`max-h-40 absolute inset-0 ${cardAnimationClass}`}
                  />
               )}
            </div>
            {currentCard ? (
               <PlayingCard {...currentCard} />
            ) : (
               <PlayingCardPlaceholder />
            )}

            {!isMobile && <IRButton onClick={drawOnClick}>Draw</IRButton>}
         </div>
      </div>
   );
}

export default DeckPanel;
