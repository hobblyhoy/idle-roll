import { useAppDispatch, useAppSelector } from '../../app/hooks';
import IRBorder from '../../design-system/IRBorder';
import IRButton from '../../design-system/IRButton';
import { formatMoney } from '../../utils/UtilFuncs';
import {
   registerDice,
   purchaseAutoClick,
   selectCurrentMoney,
   selectDiceArr,
   selectRollEveryMs,
} from '../game/gameSlice';

const diceCost = [
   { min: 0, max: 1, cost: 0 },
   { min: 1, max: 10, cost: 50 },
   { min: 10, max: 100, cost: 100 },
   { min: 100, max: 1000, cost: 1000 },
];

const autoClickRates = [
   { id: 0, cost: 0, rollEveryMs: 0 },
   { id: 1, cost: 1, rollEveryMs: 1000 },
   { id: 2, cost: 100, rollEveryMs: 900 },
   { id: 3, cost: 250, rollEveryMs: 800 },
   { id: 4, cost: 500, rollEveryMs: 700 },
   { id: 5, cost: 600, rollEveryMs: 600 },
   { id: 6, cost: 800, rollEveryMs: 500 },
   { id: 7, cost: 1000, rollEveryMs: 400 },
   { id: 8, cost: 1500, rollEveryMs: 300 },
   { id: 9, cost: 2000, rollEveryMs: 200 },
   { id: 10, cost: 4000, rollEveryMs: 100 },
   { id: 11, cost: 8000, rollEveryMs: 50 },
   { id: 12, cost: 16_000, rollEveryMs: 25 },
   { id: 13, cost: 16_000, rollEveryMs: 10 },
   { id: 14, cost: 16_000, rollEveryMs: 5 },
   { id: 15, cost: 16_000, rollEveryMs: 3 },
   { id: 16, cost: 16_000, rollEveryMs: 2 },
   { id: 17, cost: 16_000, rollEveryMs: 1 },
   { id: 18, cost: 0, rollEveryMs: 1 },
];

function ItemStore() {
   const dispatch = useAppDispatch();
   const diceArr = useAppSelector(selectDiceArr);
   const currentMoney = useAppSelector(selectCurrentMoney);
   const rollEveryMs = useAppSelector(selectRollEveryMs);

   // Dice
   const totalDice = diceArr.length;
   const nextDiceCost =
      diceCost.find(x => totalDice >= x.min && totalDice < x.max)?.cost || 0;

   const addDiceClick = () => {
      dispatch(registerDice(nextDiceCost));
   };

   // Auto Click
   const addAutoClick = () => {
      if (nextClickRate) {
         dispatch(
            purchaseAutoClick({
               cost: nextClickRate.cost,
               rollEveryMs: nextClickRate.rollEveryMs,
            })
         );
      }
   };
   const currentClickRate =
      autoClickRates.find(x => x.rollEveryMs == rollEveryMs) ||
      autoClickRates[0];
   const nextClickRate = autoClickRates.find(
      x => x.id === currentClickRate.id + 1
   );

   return (
      <IRBorder>
         <div>Item Store</div>
         <div>Current Dice Amount: {totalDice}</div>
         <div>Roll every (lower is better): {rollEveryMs}</div>
         <IRButton
            onClick={addDiceClick}
            disabled={nextDiceCost > currentMoney}
         >
            Add Dice (${formatMoney(nextDiceCost)})
         </IRButton>
         {totalDice > 0 && (
            <IRButton
               onClick={addAutoClick}
               disabled={nextClickRate!.cost > currentMoney}
            >
               Autoclick at rate: {nextClickRate?.rollEveryMs} ($
               {formatMoney(nextClickRate!.cost)})
            </IRButton>
         )}
      </IRBorder>
   );
}

export default ItemStore;
