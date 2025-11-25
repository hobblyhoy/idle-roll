import type { JSX } from 'react';
import { useMemo, useState } from 'react';

const D6_SIDES = 6;
const HISTORY_LIMIT = 6;

const rollD6 = (): number => Math.floor(Math.random() * D6_SIDES) + 1;

export const DiceRoller = (): JSX.Element => {
   const [currentRoll, setCurrentRoll] = useState<number | null>(null);
   const [history, setHistory] = useState<number[]>([]);
   const [totalRolls, setTotalRolls] = useState(0);

   const statusText = useMemo(
      () =>
         currentRoll === null
            ? 'Ready to roll'
            : currentRoll === D6_SIDES
              ? 'Jackpot! Earned $0.01'
              : `Rolled a ${currentRoll}`,
      [currentRoll]
   );

   const handleRoll = (): void => {
      const next = rollD6();
      setCurrentRoll(next);
      setTotalRolls(prev => prev + 1);
      setHistory(prev => [next, ...prev].slice(0, HISTORY_LIMIT));
   };

   return (
      <section
         style={{ background: 'radial-gradient(circle at 15% 20%, #1f2937, #0b1220 55%)' }}
         className="max-w-4xl rounded-2xl border border-slate-800 p-6 text-slate-200 shadow-2xl sm:p-7"
         aria-label="Dice roller"
      >
         <header className="grid grid-cols-1 items-center gap-5 md:grid-cols-[150px,1fr]">
            <div
               style={{ background: 'linear-gradient(135deg, #0f172a, #111827)' }}
               className="flex h-[150px] w-[150px] flex-col items-center justify-center gap-2 rounded-2xl border border-slate-800 shadow-2xl justify-self-start md:justify-self-auto"
               aria-live="polite"
            >
               <span className="text-xs uppercase tracking-wide text-slate-400">
                  d6
               </span>
               <span
                  aria-label="Current D6 value"
                  className="text-6xl font-extrabold leading-none text-slate-50"
               >
                  {currentRoll ?? '?'}
               </span>
            </div>
            <div className="flex flex-col gap-1.5">
               <p className="m-0 text-xs uppercase tracking-wider text-blue-300">
                  Idle roll starter
               </p>
               <h2 className="m-0 text-3xl tracking-tight">Roll the free D6</h2>
               <p className="m-0 mb-1 text-slate-300">
                  Hit a 6 to earn $0.01 and build toward your first upgrade.
               </p>
               <div className="flex flex-wrap items-center gap-3">
                  <button
                     type="button"
                     className="cursor-pointer rounded-xl bg-gradient-to-r from-cyan-400 to-teal-500 px-4 py-3 font-bold text-slate-900 transition duration-150 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-teal-500/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 active:translate-y-0"
                     onClick={handleRoll}
                  >
                     Roll the D6
                  </button>
                  <p
                     aria-live="polite"
                     className="m-0 font-semibold text-slate-300"
                  >
                     {statusText}
                  </p>
               </div>
               <p
                  className="m-0 mt-1 text-sm text-slate-400"
                  aria-label="Rolls made"
               >
                  Rolls made: {totalRolls}
               </p>
            </div>
         </header>
      </section>
   );
};
