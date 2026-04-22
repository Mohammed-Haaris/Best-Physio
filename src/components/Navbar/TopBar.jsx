import { Phone, Mail, MapPin } from 'lucide-react';

const TopBar = () => {
    return (
        <div className="bg-blue-700 text-white py-2.5 px-4 hidden md:block">
            <div className="max-w-7xl mx-auto flex justify-start items-center gap-8 text-sm font-medium tracking-wide">
                <div className="flex items-center gap-2 hover:text-gray-300 transition-colors cursor-pointer">
                    <Phone className="w-4 h-4" />
                    <span>+91 9566933355</span>
                </div>
                <div className="flex items-center gap-2 hover:text-gray-300 transition-colors cursor-pointer">
                    <Mail className="w-4 h-4" />
                    <span>contact@besthealthcare.com</span>
                </div>
                <div className="flex items-center gap-2 hover:text-gray-300 transition-colors cursor-pointer">
                    <MapPin className="w-4 h-4" />
                    <span>47, Bashyam St, Cuddalore</span>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
