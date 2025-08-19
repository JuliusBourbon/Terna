import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const linkClassName = ({ isActive }) =>
    `text-gray-500 transition duration-300 ease-in-out hover:text-gray-900 ${
      isActive ? 'font-semibold text-gray-900' : ''
    }`;

  return (
    <nav className='w-full bg-white border-b border-gray-200'>
      <div className='container mx-auto flex items-center justify-between p-4'>
        <div className='text-lg font-bold text-gray-800'>
          <NavLink to="/">Best Hand</NavLink>
        </div>

        <div className='flex items-center space-x-8'>
          <NavLink to="/" className={linkClassName}>Home</NavLink>
          <NavLink to="/simulation" className={linkClassName}>Simulation</NavLink>
          <NavLink to="/credit" className={linkClassName}>Credit</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;