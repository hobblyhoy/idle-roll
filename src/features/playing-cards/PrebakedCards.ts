import { IPlayingCard } from '../game/types';

export const PrebakeGrowth: IPlayingCard = {
   baseModifier: 1,
   speedModifier: 0,
   multiplierModifier: 0,
   duration: 0,
   title: 'Growth',
   imageType: 'growth',
   description: 'Draw $ + 0.01 Permanently',
};

export const PrebakeSpeed: IPlayingCard = {
   baseModifier: 0,
   speedModifier: 0.001,
   multiplierModifier: 0,
   duration: 0,
   title: 'Faster!',
   imageType: 'growth',
   description: 'Speed + 0.001 Permanently',
};

// title="Growth"
// imageType="growth"
// description="Base + 0.01 Permanently"
