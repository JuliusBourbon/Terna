import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className='bg-slate-900 text-white py-12 px-4'>
            <div className="container mx-auto">
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    
                    <div>
                        <h2 className="font-bold text-2xl mb-2">Chinese Poker Sorter</h2>
                        <p className="text-slate-400 text-sm">
                            Developed by JuliusBourbon.
                        </p>
                    </div>

                    <div>
                        <h3 className='font-semibold text-lg mb-4'>Quick Links</h3>
                        <div className="flex flex-col gap-2">
                            <Link to="/" className='text-slate-300 hover:text-white hover:underline transition-colors'>Home</Link>
                            <Link to="/simulation" className='text-slate-300 hover:text-white hover:underline transition-colors'>Simulation</Link>
                            <Link to="/credit" className='text-slate-300 hover:text-white hover:underline transition-colors'>Credit</Link>
                        </div>
                    </div>

                    <div>
                        <h3 className='font-semibold text-lg mb-4'>Get to know us</h3>
                        <div className='flex gap-4 justify-center md:justify-start'>
                            <a href="#" aria-label="Instagram">
                                <img src="/Instagram.png" className='w-10 h-10 transition-transform hover:scale-110' alt="Instagram" />
                            </a>
                            <a href="#" aria-label="Github">
                                <img src="/Github.svg" className='w-10 h-10 transition-transform hover:scale-110' alt="Github" />
                            </a>
                            <a href="#" aria-label="X (Twitter)">
                                <img src="/Xicon.png" className='w-10 h-10 transition-transform hover:scale-110' alt="X" />
                            </a>
                        </div>
                    </div>

                </div>

                <hr className="my-8 border-slate-700" />
                <p className="text-center text-slate-500 text-sm">
                    © {new Date().getFullYear()} JuliusBourbon. All Rights Reserved.
                </p>

            </div>
        </footer>
    );
}