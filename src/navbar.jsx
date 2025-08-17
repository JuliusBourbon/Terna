export default function Navbar(){
    return(
        <nav className='flex items-center justify-between p-4 bg-white shadow-md rounded-t-lg'>
            <div className='flex gap-5'>
                <h1 className=' cursor-pointer p-4 hover:bg-gray-400 rounded-md shadow-md'>Home Page</h1>
                <h1 className=' cursor-pointer p-4 hover:bg-gray-400 rounded-md shadow-md'>Simulation</h1>
                <h1 className=' cursor-pointer p-4 hover:bg-gray-400 rounded-md shadow-md'>Credit</h1>
            </div>
        </nav>
    )
}