export const rollDice = (sides: number) =>
   Math.floor(Math.random() * sides) + 1;

export const formatMoney = (amount: number) =>
   (amount / 100).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
   });
