import React from 'react';
import { Deck } from './utils/cards';

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

export default function CardPickerModel({onCardSelect, onClose}){
    console.log(Deck);
    return (
        <div className='fixed inset-0 flex justify-center items-center z-50'>
            <div className='bg-gray-950/80 backdrop-blur-xs px-10 pt-10 pb-20 rounded-md shadow-xl h-full w-full'>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-white font-poppins">Choose Card</h2>
                    <button onClick={onClose} className="text-white text-3xl leading-none hover:text-gray-300">&times;</button>
                </div>

                <div className='grid grid-cols-7 lg:grid-cols-13'>
                    {Deck.map((cardId) => (
                        <div key={cardId} className="relative w-14 h-20 my-3 lg:my-15" onClick={() => onCardSelect(cardId)}>
                            <span className={`${getCardClasses(cardId)} cursor-pointer absolute scale-[0.27] md:scale-[0.3] lg:scale-[0.5] origin-top-left hover:opacity-70 transition-transform duration-150`}></span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}