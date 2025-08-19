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

    return(
        <div onClick={onClick} className="w-30 h-40 flex justify-center items-center cursor-pointer hover:scale-[1.05]">
            <span className={`${getCardClasses(card)} text-gray-400 font-semibold`}></span>
        </div>
    )
}