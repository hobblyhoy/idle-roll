import { useAppSelector } from '../../app/hooks';
import IRBox from '../../design-system/IRBox';
import { formatMoney } from '../../utils/UtilFuncs';
import { selectCurrentMoney } from '../game/gameSlice';

function MoneyIndicator() {
   const currentMoney = useAppSelector(selectCurrentMoney);

   return (
      <IRBox>
         <div className="text-center text-3xl p-2">
            ${formatMoney(currentMoney)}
         </div>
      </IRBox>
   );
}

export default MoneyIndicator;
