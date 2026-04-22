import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo/logo.jpeg';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const links = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="sticky top-0 w-full bg-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="flex items-center gap-2">
                            <img src={logo} alt="Best Health Care Logo" className="h-10 w-auto rounded-md" />
                            <span className="font-bold text-lg lg:text-2xl text-blue-700">Best <span className='text-red-500'>Health</span> <span className='text-green-600'>Care</span> <span className='text-blue-700'>Centre </span></span>
                        </Link>
                    </div>

                    {/* Desktop Menu - Centered */}
                    <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`font-medium transition-colors hover:text-primary ${location.pathname === link.path ? 'text-primary' : 'text-gray-600'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Action Button */}
                    <div className="hidden md:flex flex-shrink-0 items-center">
                        <Link
                            to="/contact"
                            className="bg-primary text-white px-6 py-2.5 rounded-full font-medium hover:bg-primary-dark transition-colors shadow-md hover:shadow-lg"
                        >
                            Book Appointment
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(true)}
                            className="text-gray-600 hover:text-primary focus:outline-none"
                        >
                            <Menu className="h-7 w-7" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Backdrop */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black/40 z-40 md:hidden" 
                    onClick={() => setIsOpen(false)}
                ></div>
            )}

            {/* Mobile Menu Drawer */}
            <div className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden shadow-2xl flex flex-col`}>
                <div className="flex items-center justify-between p-4 border-b">
                    <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                        <img src={logo} alt="Best Health Care Logo" className="h-8 w-auto rounded-md" />
                        <span className="font-bold text-base text-blue-700">Best <span className='text-red-500'>Health</span> <span className='text-green-600'>Care</span></span>
                    </Link>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-gray-600 hover:text-red-500 focus:outline-none p-1"
                    >
                        <X className="h-6 w-6" />
                    </button>
                </div>
                <div className="px-4 py-6 space-y-2 overflow-y-auto">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={`block px-3 py-3 rounded-md font-medium text-lg ${location.pathname === link.path
                                ? 'text-blue-600 bg-gray-50'
                                : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="pt-4">
                        <Link
                            to="/contact"
                            onClick={() => setIsOpen(false)}
                            className="block w-full text-center bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors shadow-md"
                        >
                            Book Appointment
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;