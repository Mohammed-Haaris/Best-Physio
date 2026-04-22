import { ArrowRight, Waves, Activity, Smile, Dumbbell, Stethoscope, BriefcaseMedical } from 'lucide-react';
import { Link } from 'react-router-dom';

import img1 from '../../../assets/images/physio1.png';
import img2 from '../../../assets/images/physio2.png';
import img3 from '../../../assets/images/physio3.png';

const Services = () => {
  const servicesList = [
    {
      title: "Manual Therapy",
      desc: "Hands-on techniques to mobilize joints and soft tissues, reducing pain and increasing range of motion.",
      icon: <Waves className="w-10 h-10 text-primary" />,
      image: img2
    },
    {
      title: "Sports Rehabilitation",
      desc: "Specialized care to help athletes recover from injuries and return to peak performance safely.",
      icon: <Activity className="w-10 h-10 text-primary" />,
      image: img1
    },
    {
      title: "Post-Surgery Care",
      desc: "Rehabilitation programs designed to restore strength and mobility after surgical procedures.",
      icon: <Stethoscope className="w-10 h-10 text-primary" />,
      image: img3
    },
    {
      title: "Massage Therapy",
      desc: "Therapeutic massage to relieve muscle tension, improve circulation, and promote relaxation.",
      icon: <Smile className="w-10 h-10 text-primary" />,
      image: img2
    },
    {
      title: "Exercise Therapy",
      desc: "Customized exercise and stretching routines to address specific physical weaknesses and imbalances.",
      icon: <Dumbbell className="w-10 h-10 text-primary" />,
      image: img1
    },
    {
      title: "Work Injury Rehab",
      desc: "Treatments focused on recovering from workplace injuries and preventing future occurrences.",
      icon: <BriefcaseMedical className="w-10 h-10 text-primary" />,
      image: img3
    }
  ];

  return (
    <div className="w-full">
      {/* Page Header */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Comprehensive therapeutic services designed to treat a wide range of conditions.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:-translate-y-2 transition duration-300 border border-gray-100">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition duration-300"></div>
                </div>
                <div className="p-8 relative">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg absolute -top-8 left-8">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.desc}</p>
                  <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary-dark transition">
                    Book Session <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;