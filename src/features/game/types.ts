export interface IPlayingCard extends IPlayingCardUi {
   baseModifier: number;
   speedModifier: number;
   multiplierModifier: number;
   duration: number; // Whole number milliseconds, 0 for permanent modifiers
}

export interface IPlayingCardUi {
   title: string;
   imageType: 'growth' | 'todo-more-options';
   description: string;
}
