const getCardClasses = (cardId) => {
    if (!cardId) {
        return 'w-full h-full bg-white/5 border-2 border-dashed border-white/20 rounded-md block hover:bg-gradient-to-br from-blue-500/10 to-cyan-500/10 hover:border-blue-300 transition-all duration-300';
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
        <div onClick={onClick} className="w-18 h-28 lg:w-30 lg:h-40 flex justify-center items-center cursor-pointer hover:scale-[1.05] transition-all duration-300">
            <span className={`${getCardClasses(card)} text-gray-400 font-semibold`}></span>
        </div>
    )
}