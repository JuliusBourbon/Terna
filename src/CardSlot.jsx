const getCardClasses = (cardId) => {
    if (!cardId) {
        return 'placeholder';
    }

    let rank, suit;

    if (cardId.length === 3) {
        rank = '10';
        suit = cardId[2];
    } else {
        rank = cardId[0];
        suit = cardId[1];
    }

    return `pcard-${rank.toLowerCase()}${suit.toLowerCase()}`;
};

export default function CardSLot({card, onClick}){
    const cardClasses = getCardClasses(card);

    return(
        <div onClick={onClick} className="w-20 h-30 flex justify-center items-center cursor-pointer">
            <span className={`${getCardClasses(card)}`}></span>
        </div>
    )
}