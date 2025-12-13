export interface IPlayingCard extends IPlayingCardUi {
   id: number; // unique identifier
   baseModifier: number;
   speedModifier: number;
   multiplierModifier: number;
   duration: number; // Whole number milliseconds, 0 for permanent modifiers
   storeSource: 'free' | 'bronze' | 'silver' | 'gold';
}

export interface IPlayingCardUi {
   title: string;
   imageType: 'growth' | 'todo-more-options';
   description: string;
}
