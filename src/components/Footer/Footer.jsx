import { Link } from 'react-router-dom';
import { Activity, Mail, MapPin, Phone } from 'lucide-react';
import logo from '../../assets/logo/logo.jpeg';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img src={logo} alt="PhysioCare Logo" className="h-10 w-auto rounded-md shadow-sm" />
              <span className="font-bold text-2xl text-blue-700">Best Health Care Centre</span>
            </Link>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Best Health Care Center - Cuddalore's trusted Physiotherapy Clinic with 20+ Years of Excellence.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors shadow-sm">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" /></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors shadow-sm">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" /></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors shadow-sm">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85s.01-3.58.07-4.85c.15-3.23 1.66-4.77 4.92-4.92 1.27-.06 1.64-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07c-4.27.2-5.46 1.39-5.66 5.66C1.33 7.01 1.32 7.42 1.32 10.68s.01 3.67.07 4.95c.2 4.27 1.39 5.46 5.66 5.66 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c4.27-.2 5.46-1.39 5.66-5.66.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.27-1.39-5.46-5.66-5.66C15.67.01 15.26 0 12 0zm0 5.21c-3.19 0-5.79 2.59-5.79 5.79S8.81 16.79 12 16.79s5.79-2.59 5.79-5.79-2.59-5.79-5.79-5.79zm0 9.42c-2 0-3.63-1.63-3.63-3.63s1.63-3.63 3.63-3.63 3.63 1.63 3.63 3.63-1.63 3.63-3.63 3.63zm3.71-8.2a1.36 1.36 0 1 0 0-2.72 1.36 1.36 0 0 0 0 2.72z" /></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors shadow-sm">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-xl font-bold mb-6 text-gray-900">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-600 font-medium hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 font-medium hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-600 font-medium hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link to="/gallery" className="text-gray-600 font-medium hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-600 font-medium hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

        
          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-xl font-bold mb-6 text-gray-900">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-600 font-medium">
                <MapPin className="h-6 w-6 text-primary shrink-0" />
                <span className="leading-relaxed">47, Bashyam St, Manjakuppam,<br /> Near Udhaya Scans and Hema Medicals,<br />Cuddalore, Tamil Nadu 607001</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600 font-medium">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>+91 9360265020</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600 font-medium">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>besthealthcare25@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 font-medium text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Best Health Care Centre. All rights reserved.
          </p>
          <div className="flex space-x-6 text-gray-600 font-medium">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;