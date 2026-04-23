import { ArrowRight, Waves, Activity, HeartPulse, Dumbbell, Stethoscope, Brain, Cpu, Zap, Bone, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import img1 from '../../../assets/images/physio1.png';
import img2 from '../../../assets/images/physio2.png';
import img3 from '../../../assets/images/physio3.png';

const Services = () => {
  const servicesList = [
    {
      title: "Pain Management",
      desc: "Advanced techniques to identify and treat chronic pain, restoring your comfort and quality of life.",
      icon: <HeartPulse className="w-8 h-8" />,
      image: img1,
      color: "bg-blue-600 text-white"
    },
    {
      title: "Physiotherapy",
      desc: "Comprehensive rehabilitation focusing on movement, function, and strength recovery.",
      icon: <Activity className="w-8 h-8" />,
      image: img2,
      color: "bg-blue-600 text-white"
    },
    {
      title: "Manual Therapy",
      desc: "Hands-on joint and soft tissue mobilization to reduce stiffness and improve mobility.",
      icon: <Waves className="w-8 h-8" />,
      image: img3,
      color: "bg-blue-600 text-white"
    },
    {
      title: "Chiropractic",
      desc: "Specialized spinal adjustments to improve nervous system function and structural alignment.",
      icon: <Bone className="w-8 h-8" />,
      image: img1,
      color: "bg-blue-600 text-white"
    },
    {
      title: "Sports Rehabilitation",
      desc: "Targeted recovery programs for athletes to return to their sport stronger and safer.",
      icon: <Dumbbell className="w-8 h-8" />,
      image: img2,
      color: "bg-blue-600 text-white"
    },
    {
      title: "Robotic Spine Alignment",
      desc: "Precise, tech-driven spinal correction using state-of-the-art robotic assistance.",
      icon: <Cpu className="w-8 h-8" />,
      image: img3,
      color: "bg-blue-600 text-white"
    },
    {
      title: "Laser Treatment",
      desc: "Non-invasive laser therapy to accelerate tissue repair and reduce inflammation.",
      icon: <Zap className="w-8 h-8" />,
      image: img1,
      color: "bg-blue-600 text-white"
    },
    {
      title: "Post Surgery Care",
      desc: "Expert post-operative rehabilitation to ensure optimal healing and functional recovery.",
      icon: <Stethoscope className="w-8 h-8" />,
      image: img2,
      color: "bg-blue-600 text-white"
    },
    {
      title: "Neuro Rehabilitation",
      desc: "Specialized care for neurological conditions to regain independence and motor control.",
      icon: <Brain className="w-8 h-8" />,
      image: img3,
      color: "bg-blue-600 text-white"
    },
    {
      title: "Spine Management",
      desc: "Comprehensive approach to spinal health, addressing both acute and chronic conditions.",
      icon: <Activity className="w-8 h-8" />,
      image: img1,
      color: "bg-blue-600 text-white"
    }
  ];

  return (
    <div className="w-full bg-white">
      {/* Page Header */}
      <div className="relative py-16 md:py-20 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={img1} 
            alt="Header Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-800/85 backdrop-blur-[2px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-blue-200 font-bold uppercase tracking-[0.2em] text-[10px] mb-3 block"
          >
            Specialized Care
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight"
          >
            Our <span className="text-blue-400">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-blue-50/80 max-w-xl mx-auto text-base md:text-lg font-medium"
          >
            Transforming quality and advanced treatments center for your holistic recovery.
          </motion.p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {servicesList.map((service, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group relative bg-white rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 overflow-hidden flex flex-col h-full"
              >
                {/* Image Section */}
                <div className="h-64 overflow-hidden relative shrink-0">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>

                {/* Content Section */}
                <div className="p-10 pt-12 relative flex flex-col flex-grow">
                  <div className={`${service.color} w-20 h-20 rounded-3xl flex items-center justify-center shadow-xl absolute -top-10 left-10 group-hover:scale-110 transition-transform duration-500 ring-4 ring-white`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-500 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 font-medium leading-relaxed mb-8 flex-grow">
                    {service.desc}
                  </p>
                  
                  <div className="mt-auto">
                    <Link to="/contact" className="flex items-center justify-center gap-3 w-full bg-blue-600 text-white py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 hover:-translate-y-1 active:scale-95">
                      Book Session <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
