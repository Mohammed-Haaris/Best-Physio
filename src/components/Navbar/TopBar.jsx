import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const TopBar = () => {
    return (
        <div className="bg-secondary text-white/90 py-2 px-4 hidden md:block border-b border-white/5">
            <div className="max-w-7xl mx-auto flex justify-between items-center text-[13px] font-medium tracking-wide">
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group">
                        <Phone className="w-3.5 h-3.5 text-primary" />
                        <span>+91 9566933355</span>
                    </div>
                    <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group">
                        <Mail className="w-3.5 h-3.5 text-primary" />
                        <span>contact@besthealthcare.com</span>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-white/70">
                        <Clock className="w-3.5 h-3.5 text-primary" />
                        <span>Mon - Sat: 9:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group">
                        <MapPin className="w-3.5 h-3.5 text-primary" />
                        <span>47, Bashyam St, Cuddalore</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
