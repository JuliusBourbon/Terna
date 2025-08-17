import {useState} from "react";
import CardSlot from "./CardSlot";
import CardPickerModal from "./CardPickerModal";
export default function Simulation(){
    const [cards, setCards] = useState(Array(13).fill(null));
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);

    const handleSlotClick = (index) => {
        setCurrentIndex(index); // Catat index slot yang diklik.
        setIsModalOpen(true);   // Buka modal.
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

    return(
        <div className="bg-gray-900 min-h-screen p-4 sm:p-8 text-white">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center font-poppins">
                Poker Simulation
                </h1>

                {/* Grup 1: 3 Kartu */}
                <div className="mb-6">
                <h2 className="text-lg font-semibold mb-3 text-center text-gray-400">Community Cards</h2>
                <div className="flex justify-center gap-2 sm:gap-4">
                    {cards.slice(0, 3).map((card, index) => (
                    <CardSlot key={index} card={card} onClick={() => handleSlotClick(index)} />
                    ))}
                </div>
                </div>

                {/* Grup 2: 5 Kartu */}
                <div className="mb-6">
                <h2 className="text-lg font-semibold mb-3 text-center text-gray-400">Player 1 Hand</h2>
                <div className="flex justify-center gap-2 sm:gap-4">
                    {cards.slice(3, 8).map((card, index) => (
                    // Penting: index di sini adalah 0-4, jadi kita tambahkan 3 untuk dapat index asli 3-7
                    <CardSlot key={index + 3} card={card} onClick={() => handleSlotClick(index + 3)} />
                    ))}
                </div>
                </div>
                
                {/* Grup 3: 5 Kartu */}
                <div>
                <h2 className="text-lg font-semibold mb-3 text-center text-gray-400">Player 2 Hand</h2>
                <div className="flex justify-center gap-2 sm:gap-4">
                    {cards.slice(8, 13).map((card, index) => (
                    // Penting: index di sini adalah 0-4, jadi kita tambahkan 8 untuk dapat index asli 8-12
                    <CardSlot key={index + 8} card={card} onClick={() => handleSlotClick(index + 8)} />
                    ))}
                </div>
                </div>

                {/* Tampilkan Modal hanya jika isModalOpen bernilai true */}
                {isModalOpen && (
                <CardPickerModal 
                    onCardSelect={handleCardSelect} 
                    onClose={handleCloseModal} 
                />
                )}
            </div>
        </div>
    )
}