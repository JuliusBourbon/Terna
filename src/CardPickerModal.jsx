import React from 'react';
import { Deck } from './utils/cards';

const getCardClasses = (cardId) => {
    const rankMap = { 'A': 'a', 'K': 'k', 'Q': 'q', 'J': 'j', 'T': '10', '9':'9', '8':'8', '7':'7', '6':'6', '5':'5', '4':'4', '3':'3', '2':'2' };
    const suitMap = { 'H': 'hearts', 'D': 'diams', 'C': 'clubs', 'S': 'spades' };

    const rank = rankMap[cardId[0]];
    const suit = suitMap[cardId[1]];

    return `rank-${rank} ${suit}`;
};

export default function CardPickerModel({onCardSelect, onClose}){
    return (
        <div className='fixed inset-0 flex justify-center items-center z-50'>
            <div className='bg-gray-300 p-6 rounded-md shadow-xl max-w-2xl w-full'>
                <h2 className='text-xl font-bold text-white'>Choose Card</h2>
                <button onClick={onCLose} className='text-white text-2xl'>&times;</button>
            </div>

            <div className='grid grid-cols-13 gap-1'>
                {Deck.map((cardId) => (
                    <div key={cardId} onClick={() => onCardSelect(cardId)}>
                        <span className={`card ${getCardClasses(cardId)} cursor-pointer`}></span>
                    </div>
                ))}
            </div>
        </div>
    );
}