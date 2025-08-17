import {Link} from 'react-router-dom';

export default function Navbar(){
    return(
        <nav className='flex items-center justify-between p-4 bg-white shadow-md rounded-t-lg'>
            <div className='flex justify-between gap-5'>
                <Link to="/" className=' cursor-pointer p-4 hover:bg-gray-400 rounded-md shadow-md transition'>Home Page</Link>
                <Link to="/Simulation" className=' cursor-pointer p-4 hover:bg-gray-400 rounded-md shadow-md transition'>Simulation</Link>
                <Link to="/Credit" className=' cursor-pointer p-4 hover:bg-gray-400 rounded-md shadow-md transition'>Credit</Link>
            </div>
        </nav>
    )
}