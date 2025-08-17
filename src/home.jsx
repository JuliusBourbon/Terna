export default function Home(){
    return(
        <div className='container my-10 text-white'>
            <h1 className='text-4xl text-center font-bold'>Chinese Poker Sorter</h1>
            <div className="bg-green-700 flex flex-col m-5 rounded-md shadow-md">
                <p className="m-5 text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati hic earum aperiam? Eum quaerat nihil dicta doloremque ipsam, minima praesentium. Porro a soluta ab tenetur illo sunt adipisci hic laboriosam.</p>
            </div>
            
            <div className="bg-green-700 flex flex-col m-5 rounded-md shadow-md">
                <p className="m-5 text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati hic earum aperiam? Eum quaerat nihil dicta doloremque ipsam, minima praesentium. Porro a soluta ab tenetur illo sunt adipisci hic laboriosam.</p>
                <div className="flex justify-center">
                    <button className="m-5 p-3 bg-green-950 rounded-md hover:bg-green-900 transition cursor-pointer">Simulation</button>
                </div>
            </div>
        </div>
    )
}