import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import logo from '../../assets/logo/logo.jpeg';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
            <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
                <div className={`transition-all duration-500 rounded-2xl shadow-lg ${
                    scrolled 
                    ? 'bg-blue-600 shadow-blue-600/20 py-1' 
                    : 'glass-effect shadow-black/5'
                }`}>
                    <div className="flex justify-between items-center h-16 md:h-20 px-4 md:px-8">
                        <div className="flex-shrink-0 flex items-center">
                            <Link to="/" className="flex items-center gap-3 group">
                                <div className={`p-1 rounded-lg shadow-sm border transition-all duration-300 ${
                                    scrolled ? 'bg-white border-transparent' : 'bg-white border-slate-100'
                                } group-hover:scale-105`}>
                                    <img src={logo} alt="Best Health Care Logo" className="h-10 md:h-12 w-auto rounded-md" />
                                </div>
                                <div className="flex flex-col">
                                    <span className={`font-extrabold text-lg md:text-2xl tracking-tighter transition-colors duration-300 ${
                                        scrolled ? 'text-white' : 'text-secondary'
                                    } leading-none`}>BEST HEALTH</span>
                                    <span className={`text-[9px] md:text-[12px] font-bold tracking-[0.2em] uppercase leading-none mt-1 transition-colors duration-300 ${
                                        scrolled ? 'text-blue-100' : 'text-blue-600'
                                    }`}>Care Centre</span>
                                </div>
                            </Link>
                        </div>

                        {/* Desktop Menu - Centered */}
                        <div className="hidden lg:flex flex-1 justify-center items-center space-x-10">
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`relative py-2 text-[15px] font-semibold transition-all duration-300 ${
                                        scrolled 
                                        ? `hover:text-blue-100 ${location.pathname === link.path ? 'text-white' : 'text-blue-50/80'}`
                                        : `hover:text-blue-600 ${location.pathname === link.path ? 'text-blue-600' : 'text-slate-600'}`
                                    } ${location.pathname === link.path 
                                        ? `after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full ${scrolled ? 'after:bg-white' : 'after:bg-blue-600'}` 
                                        : `after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 ${scrolled ? 'after:bg-white' : 'after:bg-blue-600'} after:transition-all hover:after:w-full`
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
                                className={`group relative overflow-hidden px-7 py-3 rounded-xl font-bold text-sm transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2 ${
                                    scrolled ? 'bg-white text-blue-600 hover:bg-blue-50' : 'bg-blue-600 text-white hover:bg-blue-700'
                                }`}
                            >
                                <span className="relative z-10">Book Appointment</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden flex items-center">
                            <button
                                onClick={() => setIsOpen(true)}
                                className={`p-2 rounded-lg transition-all focus:outline-none ${
                                    scrolled ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-slate-50 text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                                }`}
                            >
                                <Menu className="h-6 w-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Backdrop */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60] lg:hidden transition-opacity" 
                    onClick={() => setIsOpen(false)}
                ></div>
            )}

            {/* Mobile Menu Drawer */}
            <div className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-[70] transform transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden shadow-2xl flex flex-col`}>
                <div className="flex items-center justify-between p-6 border-b border-slate-50">
                    <div className="flex items-center gap-3">
                        <img src={logo} alt="Best Health Care Logo" className="h-10 w-auto rounded-md shadow-sm" />
                        <span className="font-bold text-lg text-secondary">Best Health Care</span>
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="bg-slate-50 p-2 rounded-lg text-slate-500 hover:text-red-500 hover:bg-red-50"
                    >
                        <X className="h-6 w-6" />
                    </button>
                </div>
                <div className="p-6 space-y-2 overflow-y-auto flex-grow">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={`flex items-center justify-between px-4 py-4 rounded-xl font-bold transition-all ${location.pathname === link.path
                                ? 'text-blue-600 bg-blue-50'
                                : 'text-slate-600 hover:bg-slate-50'
                                }`}
                        >
                            <span>{link.name}</span>
                            <ArrowRight className={`w-4 h-4 transition-transform ${location.pathname === link.path ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`} />
                        </Link>
                    ))}
                </div>
                <div className="p-6 bg-slate-50 border-t border-slate-100">
                    <Link
                        to="/contact"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white px-6 py-4 rounded-xl font-bold shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all"
                    >
                        Book Appointment <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
