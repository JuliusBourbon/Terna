import { Link } from 'react-router-dom';
export default function Home(){
    return(
        <div className="bg-gradient-to-b from-slate-900 to-slate-700/30 text-white">
            <section className="text-center py-20 px-4">
                <div className="container mx-auto">
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-blue-500 to-cyan-300 bg-clip-text text-transparent">
                        Chinese Poker Sorter
                    </h1>
                    
                    <p className="max-w-2xl mx-auto text-xl text-slate-200 font-extrabold">
                        Say goodbye to manual card sorting!
                    </p>
                    <p className='max-w-2xl mx-auto text-lg text-slate-300 mb-8'>
                        Our app instantly arranges your 13 cards into the front, middle, and back rows in the most optimal way.
                    </p>
                    
                    <Link to="/simulation" 
                    className="inline-block bg-gradient-to-br from-blue-400 to-cyan-500 text-white font-bold text-lg px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300 ease-in-out">
                        Start Simulation
                    </Link>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-br from-slate-400/30 to-blue-500/10 mb-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">What is Chinese Poker?</h2>
                        <p className="text-slate-400 text-lg mt-2">
                            Chinese Poker (Capsa Susun) is a card game where each player gets 13 cards and arranges them into three hands: front (3 cards), middle (5 cards), and back (5 cards). The back hand must be the strongest, followed by the middle, then the front. Players compare hands and earn points — it’s all about smart strategy and a bit of luck!
                        </p>
                    </div>
                </div>
            </section>
            
            <section className="py-20 bg-gradient-to-br from-blue-500/10 to-slate-400/20 mb-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">How is this Sorting Works?</h2>
                        <p className="text-slate-400 text-lg mt-2">In just <span className='font-bold text-blue-200'>3</span> easy steps</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        
                        <div className="bg-gradient-to-r from-[#0A0A0A]/10 to-[#708090]/10 p-8 rounded-xl shadow-2xl">
                            <h3 className="text-xl font-semibold mb-2">Pick your card</h3>
                            <p className="text-white">
                                Enter the 13 cards you want, our system can recognize multiple input formats. Or, if you prefer, just shuffle the cards randomly.
                            </p>    
                        </div>

                        <div className="bg-gradient-to-r to-[#282828]/10 from-[#D3D3D3]/10 p-8 rounded-xl shadow-2xl">
                            <h3 className="text-xl font-semibold mb-2">Sorting Card</h3>
                            <p className="text-white">
                                Using <span className='text-white font-bold'>Greedy Algorithm</span> , the system picks the best combo in no time!
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-[#282828]/10 to-[#D3D3D3]/10 p-8 rounded-xl shadow-2xl">
                            <h3 className="text-xl font-semibold mb-2">Optimal Results</h3>
                            <p className="text-white">
                                Get your front, middle, and back cards setup optimized and <span className='text-white font-bold'>Ready to Play!</span>
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}