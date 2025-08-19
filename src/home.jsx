import { Link } from 'react-router-dom';
export default function Home(){
    return(
        <div className="min-h-screen bg-slate-900 text-white">
            <section className="text-center py-20 px-4">
                <div className="container mx-auto">
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Chinese Poker Sorter
                    </h1>
                    
                    <p className="max-w-2xl mx-auto text-lg text-slate-300 mb-8">
                        Ucapkan selamat tinggal pada penyortiran kartu manual. Aplikasi kami akan secara otomatis menyusun 13 kartu Anda menjadi barisan depan, tengah, dan belakang yang optimal dalam sekejap.
                    </p>
                    
                    <Link to="/simulation" 
                    className="inline-block bg-blue-600 text-white font-bold text-lg px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300 ease-in-out">
                        Mulai Simulasi
                    </Link>
                </div>
            </section>

            <section className="py-20 bg-slate-800/50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">Bagaimana Cara Kerjanya?</h2>
                        <p className="text-slate-400 mt-2">Hanya dalam tiga langkah mudah.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        
                        <div className="bg-slate-800 p-8 rounded-xl shadow-md">
                            <h3 className="text-xl font-semibold mb-2">Input Kartu Anda</h3>
                            <p className="text-slate-400">
                                Masukkan 13 kartu yang Anda dapatkan. Sistem kami dapat mengenali berbagai format input.
                            </p>
                        </div>

                        <div className="bg-slate-800 p-8 rounded-xl shadow-md">
                            <h3 className="text-xl font-semibold mb-2">Proses Sorting Cerdas</h3>
                            <p className="text-slate-400">
                                Algoritma kami menganalisis jutaan kemungkinan kombinasi untuk menemukan susunan terbaik.
                            </p>
                        </div>

                        <div className="bg-slate-800 p-8 rounded-xl shadow-md">
                            <h3 className="text-xl font-semibold mb-2">Lihat Hasil Optimal</h3>
                            <p className="text-slate-400">
                                Dapatkan susunan kartu depan, tengah, dan belakang yang sudah dioptimalkan dan siap digunakan.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}