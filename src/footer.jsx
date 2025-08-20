import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className='bg-gradient-to-t from-cyan-800/30 to-slate-800/30 backdrop-blur-3xl text-white py-12 px-4 shadow-cyan'>
            <div className="container mx-auto">
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    
                    <div>
                        <h2 className="font-bold text-2xl mb-2">Terna</h2>
                        <p className="text-slate-400 text-sm">
                            Developed by JuliusBourbon.
                        </p>
                    </div>

                    <div>
                        <h3 className='font-semibold text-2xl mb-4'>Quick Links</h3>
                        <div className="flex flex-col gap-2">
                            <Link to="/" className='text-slate-300 hover:text-white hover:underline transition-colors'>Home</Link>
                            <Link to="/simulation" className='text-slate-300 hover:text-white hover:underline transition-colors'>Start Sorting</Link>
                        </div>
                    </div>

                    <div>
                        <h3 className='font-semibold text-2xl mb-4'>Get to know me</h3>
                        <div className='flex gap-4 justify-center md:justify-start'>
                            <a href="https://www.instagram.com/bourbonpath" target='_blank' aria-label="Instagram">
                                <img src="/Instagram.png" className='w-10 h-10 transition-transform hover:scale-110' alt="Instagram" />
                            </a>
                            <a href="https://github.com/JuliusBourbon" target='_blank' aria-label="Github">
                                <img src="/Github.svg" className='w-10 h-10 transition-transform hover:scale-110' alt="Github" />
                            </a>
                            <a href="https://x.com/juliusbourbonn" target='_blank' aria-label="X (Twitter)">
                                <img src="/Xicon.png" className='w-10 h-10 transition-transform hover:scale-110 rounded-full' alt="X" />
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