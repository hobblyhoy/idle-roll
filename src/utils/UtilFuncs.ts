import { IPlayingCard } from '../features/game/types';

export const formatMoney = (amount: number) =>
   (amount / 100).toLocaleString('en-US', {
      minimumFractionDigits: amount > 100000 ? 0 : 2,
      maximumFractionDigits: amount > 100000 ? 0 : 2,
   });

export const formatToNPlacesCurry = (places: number) => {
   return (amount: number) => {
      return amount.toLocaleString('en-US', {
         minimumFractionDigits: places,
         maximumFractionDigits: places,
      });
   };
};
export const formatTo4Places = formatToNPlacesCurry(4);
export const formatTo3Places = formatToNPlacesCurry(3);

export const randomFloat = (min: number, max: number) => {
   return Math.random() * (max - min) + min;
};

export const weightedRandom = (min: number, max: number) => {
   // A random number generator between min and max
   // The distribution of results is not even. It
   // biases towards the midway point between min/max.

   const ITERATIONs = 3;
   let runningTotal = 0;
   for (let i = 0; i < ITERATIONs; i++) {
      runningTotal += randomFloat(min, max);
   }
   return runningTotal / ITERATIONs;
};


