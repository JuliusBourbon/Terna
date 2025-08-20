import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const linkClassName = ({ isActive }) =>
    `transition duration-300 ease-in-out hover:text-cyan-300 ${
      isActive ? 'font-semibold text-cyan-300' : ''
    }`;

  return (
    <nav className='w-full bg-gradient-to-b to-slate-900 from-cyan-800/30 backdrop-blur-xl'>
      <div className='container mx-auto flex items-center justify-between p-4 '>
        <div className='text-6xl font-bold bg-gradient-to-r from-blue-500 to-cyan-300 bg-clip-text text-transparent'> 
          <NavLink to="/">♣</NavLink>
        </div>

        <div className='flex items-center space-x-8 text-white text-lg'>
          <NavLink to="/" className={linkClassName}>Home</NavLink>
          <NavLink to="/simulation" className={linkClassName}>Start Sorting</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;