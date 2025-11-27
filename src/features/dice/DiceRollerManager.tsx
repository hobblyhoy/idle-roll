import _ from 'lodash';
import DiceRoller from './DiceRoller';
import { useAppSelector } from '../../app/hooks';
import { selectDiceArr } from '../game/gameSlice';

function DiceRollerManager() {
   const diceArr = useAppSelector(selectDiceArr);

   return (
      <div>
         {_.orderBy(diceArr, x => x.maxRunIndex).map(x => (
            <DiceRoller {...x} key={x.id}/>
         ))}
      </div>
   );
}

export default DiceRollerManager;
