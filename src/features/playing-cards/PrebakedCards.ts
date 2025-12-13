import { IPlayingCard } from '../game/types';

export const PrebakeGrowth: IPlayingCard = {
   id: 1,
   baseModifier: 1,
   speedModifier: 0,
   multiplierModifier: 0,
   duration: 0,
   title: 'Growth',
   imageType: 'growth',
   description: 'Draw $ + 0.01 Permanently',
   storeSource: 'free',
};

export const PrebakeSpeed: IPlayingCard = {
   id: 2,
   baseModifier: 0,
   speedModifier: 0.001,
   multiplierModifier: 0,
   duration: 0,
   title: 'Faster!',
   imageType: 'growth',
   description: 'Speed + 0.001 Permanently',
   storeSource: 'free',
};

export const PrebakeMultiply: IPlayingCard = {
   id: 3,
   baseModifier: 0,
   speedModifier: 0,
   multiplierModifier: 0.1,
   duration: 0,
   title: 'Multiply!',
   imageType: 'growth',
   description: 'Multi + 0.1 Permanently',
   storeSource: 'free',
};
