const getCardClasses = (cardId) => {
    if (!cardId) return 'placeholder';

    const rankMap = {'A': 'a', 'K': 'k', 'Q': 'q', 'J': 'j', 'T': '10', '2': '2', '3': '3', '4': '4', '5': '5', '6': '6', '7': '7', '8': '8', '9': '9'};
    const suitMap = { 'H': 'hearts', 'D': 'diams', 'C': 'clubs', 'S': 'spades' };

    const rank = rankMap[cardId[0]];
    const suit = suitMap[cardId[1]];

    return `card-${rank} ${suit}`;
};

export default function CardSLot({card, onClick}){
    const cardClasses = getCardClasses(card);

    return(
        <div onClick={onClick} className="card-slot-container">
            <span className={`card ${cardClasses}`}></span>
        </div>
    )
}