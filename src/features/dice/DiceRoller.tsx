import IRBorder from '../../design-system/IRBorder';
import _ from 'lodash';
import IRButton from '../../design-system/IRButton';
import { useAppDispatch } from '../../app/hooks';
import { pushToManualClicks } from '../game/gameSlice';
import { IDice } from '../game/types';

function DiceRoller({
   id,
   currentRoll,
   history,
   maxRunIndex,
   isWinState,
}: IDice) {
   const dispatch = useAppDispatch();

   const click = () => {
      dispatch(pushToManualClicks(id));
   };

   return (
      <IRBorder>
         <div className={isWinState ? 'opacity-50' : ''}>
            <div>Current: {currentRoll}</div>
            <div>History: {history.join(' ')}</div>
            <div>Highest run length: {maxRunIndex + 1} / 6</div>
            <IRButton onClick={click}>Roll</IRButton>
         </div>
      </IRBorder>
   );
}

export default DiceRoller;
