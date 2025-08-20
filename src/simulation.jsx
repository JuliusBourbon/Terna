import {useState} from "react";
import CardSlot from "./CardSlot";
import CardPickerModal from "./CardPickerModal";
import { greedyCapsa } from "./utils/greedy";
import { Deck } from "./utils/cards";
import toast, { Toaster } from 'react-hot-toast';

export default function Simulation(){
    const [handInfo, setHandInfo] = useState({ top: [0], middle: [0], bottom: [0], totalScore: [0] });
    const [cards, setCards] = useState(Array(13).fill(null));
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);

    const handleSlotClick = (index) => {
        setCurrentIndex(index);
        setIsModalOpen(true);  
    };

    const handleCardSelect = (selectedCard) => {
        // Buat salinan dari array state agar tidak mengubah state secara langsung.
        const newCards = [...cards];
        
        // Masukkan kartu yang dipilih ke dalam slot yang benar.
        newCards[currentIndex] = selectedCard;
        
        // Perbarui state utama dengan array kartu yang baru.
        setCards(newCards);
        setIsModalOpen(false);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSort = () => {
        if (cards.includes(null)) {
            toast.error("Fill all cards first!");
            return;
        }

        const sorted = greedyCapsa(cards);

        // Update urutan kartu
        const newCards = [
            ...sorted.top.cards,
            ...sorted.middle.cards,
            ...sorted.bottom.cards
        ];
        setCards(newCards);

        // Simpan info kombinasi
        setHandInfo(sorted);
    };

    function getRandomCards(n) {
        const shuffled = [...Deck].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, n);
    }

    const handleAutoFill = () => {
        const random13 = getRandomCards(13);
        setCards(random13);
        setHandInfo({ top: [0], middle: [0], bottom: [0], totalScore: [0] });
    };

    return(
        <div className="bg-gradient-to-b from-slate-900 to-slate-700/30 py-10 sm:py-8 flex justify-around text-white items-center">
            <Toaster position="top-center" reverseOrder={false} />
            <div className="flex flex-col items-center justify-start">
                <div className="border-2 border-gray-600 border-dashed p-5 rounded-md">
                    <h1 className="text-lg font-bold mb-2">Combination Point</h1>
                    <div className="text-white rounded-lg max-w-xs shadow-lg">
                        <p className="flex justify-between my-2">
                            <span>High Card:</span>
                            <span className="text-yellow-400 font-bold">1</span>
                        </p>
                        <p className="flex justify-between my-2">
                            <span>Pair:</span>
                            <span className="text-yellow-400 font-bold">2</span>
                        </p>
                        <p className="flex justify-between my-2">
                            <span>Two Pair:</span>
                            <span className="text-yellow-400 font-bold">3</span>
                        </p>
                        <p className="flex justify-between my-2">
                            <span>Three of a Kind:</span>
                            <span className="text-yellow-400 font-bold">4</span>
                        </p>
                        <p className="flex justify-between my-2">
                            <span>Straight:</span>
                            <span className="text-yellow-400 font-bold">5</span>
                        </p>
                        <p className="flex justify-between my-2">
                            <span>Flush:</span>
                            <span className="text-yellow-400 font-bold">6</span>
                        </p>
                        <p className="flex justify-between my-2">
                            <span>Full House:</span>
                            <span className="text-yellow-400 font-bold">7</span>
                        </p>
                        <p className="flex justify-between my-2">
                            <span>Four of a Kind:</span>
                            <span className="text-yellow-400 font-bold">8</span>
                        </p>
                        <p className="flex justify-between my-2">
                            <span>Straight Flush:</span>
                            <span className="text-yellow-400 font-bold">9</span>
                        </p>
                        <p className="flex justify-between my-2">
                            <span>Royal Flush:</span>
                            <span className="text-yellow-400 font-bold">10</span>
                        </p>
                    </div>
                </div>
                {handInfo.totalScore && (
                    <div className="mt-10 text-center">
                        <h3 className="text-3xl font-bold">
                        Total Point: <span className="text-green-400">{handInfo.totalScore}</span>
                        </h3>
                    </div>
                )}
            </div>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center font-poppins">
                    Simulation
                </h1>
                {/* Grup 1: 3 Kartu */}
                <div className="mb-6">
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-semibold mb-3 text-center text-gray-400">Top Card</h2>
                        {handInfo.top && (
                            <p className="text-center text-xl mb-3 text-yellow-400 font-bold">
                            {handInfo.top.name} {handInfo.top.score}
                            </p>
                        )}
                    </div>
                    <div className="flex justify-center gap-2 sm:gap-10">
                        {cards.slice(0, 3).map((card, index) => (
                            <CardSlot key={index} card={card} onClick={() => handleSlotClick(index)} />
                        ))}
                    </div>
                </div>

                {/* Grup 2: 5 Kartu */}
                <div className="mb-6">
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-semibold mb-3 text-center text-gray-400">Middle Card</h2>
                        {handInfo.middle && (
                            <p className="text-center text-xl mb-3 text-yellow-400 font-bold">
                                {handInfo.middle.name} {handInfo.middle.score}
                            </p>
                        )}
                    </div>
                    <div className="flex justify-center gap-2 sm:gap-10">
                        {cards.slice(3, 8).map((card, index) => (
                        <CardSlot key={index + 3} card={card} onClick={() => handleSlotClick(index + 3)} />
                        ))}
                    </div>
                </div>
                
                {/* Grup 3: 5 Kartu */}
                <div>
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-semibold mb-3 text-center text-gray-400">Bottom Card</h2>
                        {handInfo.bottom && (
                            <p className="text-center text-xl mb-3 text-yellow-400 font-bold">
                            {handInfo.bottom.name} {handInfo.bottom.score}
                            </p>
                        )}

                    </div>
                    <div className="flex justify-center gap-2 sm:gap-10">
                        {cards.slice(8, 13).map((card, index) => (
                        <CardSlot key={index + 8} card={card} onClick={() => handleSlotClick(index + 8)} />
                        ))}
                    </div>
                </div>

                {isModalOpen && (
                    <CardPickerModal onCardSelect={handleCardSelect} onClose={handleCloseModal} selectedCards={cards}/>
                )}

                <div className="mt-12 flex gap-4">
                    <button onClick={handleAutoFill} className=" font-bold text-lg bg-gradient-to-br from-[#ff2400]/80 to-pink-500/80 px-3 py-2 rounded-md hover:scale-[1.04] cursor-pointer">Shuffle Card</button>
                    <button onClick={handleSort} className=" font-bold text-lg bg-gradient-to-br to-[#2d3e83] from-[#2d3f9a] px-3 py-2 rounded-md hover:scale-[1.04] cursor-pointer">Sort Card</button>
                </div>
            </div>
            <div className="flex flex-col items-center justify-start">
                <div className="bg-gray-300/10 border-2 border-gray-600 border-dashed p-10 opacity-0">
                    <h1 className="text-">Other Combination</h1>
                </div>
            </div>
        </div>
    )
}