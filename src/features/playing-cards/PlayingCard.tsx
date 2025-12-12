import IRSection from '../../design-system/IRSection';

export interface IPlayingCard {
   title: string;
   type: string; // TO DO lock this down
   description: string;
}

function PlayingCard({ title, type, description }: IPlayingCard) {
   return <div>{title}</div>;
}

export default PlayingCard;
