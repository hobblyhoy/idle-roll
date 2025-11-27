export interface IDice {
   id: number;
   history: number[];
   currentRoll: number;
   registeredAt: number;
   currentRunIndex: number;
   maxRunIndex: number;
   totalAutoRollCount: number;
   isWinState: boolean;
}
