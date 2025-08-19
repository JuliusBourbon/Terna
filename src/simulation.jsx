import {useState} from "react";
import CardSlot from "./CardSlot";
import CardPickerModal from "./CardPickerModal";
import { greedyCapsa } from "./utils/greedy";

export default function Simulation(){
    const [handInfo, setHandInfo] = useState({ top: null, middle: null, bottom: null });
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
            alert("Isi semua slot dulu sebelum sort!");
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

    return(
        <div className="bg-slate-900 py-10 sm:py-8 text-white">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center font-poppins">
                Poker Simulation
                </h1>

                {/* Grup 1: 3 Kartu */}
                <div className="mb-6">
                    <h2 className="text-lg font-semibold mb-3 text-center text-gray-400">Top Card</h2>
                    <div className="flex justify-center gap-2 sm:gap-10">
                        {cards.slice(0, 3).map((card, index) => (
                        <CardSlot key={index} card={card} onClick={() => handleSlotClick(index)} />
                        ))}
                    </div>
                    {handInfo.top && (
                        <p className="text-center mt-2 text-yellow-400 font-semibold">
                        {handInfo.top.name}
                        </p>
                    )}
                </div>

                {/* Grup 2: 5 Kartu */}
                <div className="mb-6">
                    <h2 className="text-lg font-semibold mb-3 text-center text-gray-400">Middle Card</h2>
                    <div className="flex justify-center gap-2 sm:gap-10">
                        {cards.slice(3, 8).map((card, index) => (
                        <CardSlot key={index + 3} card={card} onClick={() => handleSlotClick(index + 3)} />
                        ))}
                    </div>
                    {handInfo.middle && (
                        <p className="text-center mt-2 text-yellow-400 font-semibold">
                        {handInfo.middle.name}
                        </p>
                    )}
                </div>
                
                {/* Grup 3: 5 Kartu */}
                <div>
                    <h2 className="text-lg font-semibold mb-3 text-center text-gray-400">Bottom Card</h2>
                    <div className="flex justify-center gap-2 sm:gap-10">
                        {cards.slice(8, 13).map((card, index) => (
                        <CardSlot key={index + 8} card={card} onClick={() => handleSlotClick(index + 8)} />
                        ))}
                    </div>
                    {handInfo.bottom && (
                        <p className="text-center mt-2 text-yellow-400 font-semibold">
                        {handInfo.bottom.name}
                        </p>
                    )}
                </div>

                {isModalOpen && (
                    <CardPickerModal onCardSelect={handleCardSelect} onClose={handleCloseModal} selectedCards={cards}/>
                )}

                <div className="mt-20">
                    <button onClick={handleSort} className=" font-bold text-lg bg-blue-600 px-3 py-2 rounded-md hover:bg-blue-700 cursor-pointer">Sort Card</button>
                </div>
            </div>
        </div>
    )
}