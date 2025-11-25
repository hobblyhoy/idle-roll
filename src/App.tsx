import { DiceRoller } from './features/dice/DiceRoller';

export const App = () => (
   <div
      className="min-h-screen text-gray-200"
      style={{
         background:
            'radial-gradient(circle at 10% 10%, #0b1220, #050915 40%), linear-gradient(180deg, #050915, #030711)',
      }}
   >
      <div className="mx-auto max-w-[1200px] px-6 pt-9 pb-16">
         <header className="flex flex-col gap-6">
            <div className="flex items-center gap-5">
               <div>
                  <p className="m-0 text-[13px] uppercase tracking-[0.14em] text-blue-300">
                     Idle Roll
                  </p>
                  <h1>Roll, earn, upgrade.</h1>
                  <p className="text-slate-300 mt-1 mb-0">
                     Your first tool is a D6. When you hit a 6 you earn $0.01
                     toward better gear. The whole goal is to hit 20 straight
                     hits of the same number in a row. So you end up with this
                     inverse relationship where the better die make you more
                     money but make that less likely to happen.
                  </p>
               </div>
            </div>
            <DiceRoller />
         </header>
      </div>
   </div>
);
