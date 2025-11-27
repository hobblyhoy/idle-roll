import { useState } from 'react';
import IRButton from '../../design-system/IRButton';
import _ from 'lodash';
import DiceRoller from './DiceRoller';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { registerDice, selectDiceArr } from '../game/gameSlice';

function DiceRollerManager() {
   const dispatch = useAppDispatch();
   const diceArr = useAppSelector(selectDiceArr);
   //const [dice, setDice] = useState<number[]>([]);

   const click = () => {
      //const largestDie = _.maxBy(dice) || 0;
      //setDice(x => [...x, largestDie + 1]);
      dispatch(registerDice());
   };

   return (
      <div>
         <IRButton onClick={click}>Add Dice</IRButton>
         <div>
            {_.orderBy(diceArr, x => x.maxRunIndex * -1).map(x => (
               <DiceRoller {...x} />
            ))}
         </div>
      </div>
   );
}

export default DiceRollerManager;
