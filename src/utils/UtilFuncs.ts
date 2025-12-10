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
