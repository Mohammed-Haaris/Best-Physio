import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const TopBar = () => {
    return (
        <div className="bg-[#0f172a] text-white py-2.5 px-4 hidden md:block">
            <div className="max-w-7xl mx-auto flex justify-between items-center text-[13px] font-medium tracking-wide">
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group">
                        <Phone className="w-4 h-4 text-blue-500" />
                        <span>+91 9566933355</span>
                    </div>
                    <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group">
                        <Mail className="w-4 h-4 text-blue-500" />
                        <span>contact@besthealthcare.com</span>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-white">
                        <Clock className="w-4 h-4 text-blue-500" />
                        <span>Mon - Sat: 9:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group">
                        <MapPin className="w-4 h-4 text-blue-500" />
                        <span>47, Bashyam St, Cuddalore</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
