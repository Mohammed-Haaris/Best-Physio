import { CheckCircle, Users, Award, Clock, GraduationCap, Heart, Sparkles, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import doctorImg from '../../../assets/images/dr_charles.png';
import aboutMainImg from '../../../assets/images/physio3.png';

const About = () => {
  const stats = [
    { label: 'Happy Patients', value: '15k+', icon: <Users className="w-6 h-6" /> },
    { label: 'Years Experience', value: '15+', icon: <Clock className="w-6 h-6" /> },
    { label: 'Awards Won', value: '25+', icon: <Award className="w-6 h-6" /> },
    { label: 'Specialized Methods', value: '40+', icon: <Activity className="w-6 h-6" /> },
  ];

  const values = [
    { title: "Patient First", desc: "We prioritize your comfort and recovery goals above all else.", icon: <Heart /> },
    { title: "Expert Care", desc: "Our team stays at the forefront of medical advancements.", icon: <GraduationCap /> },
    { title: "Modern Tech", desc: "Equipped with the latest rehabilitation technology.", icon: <Sparkles /> },
    { title: "Integrity", desc: "Honest, transparent, and evidence-based treatments.", icon: <CheckCircle /> }
  ];

  return (
    <div className="w-full bg-white">
       <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Comprehensive therapeutic services designed to treat a wide range of conditions.
          </p>
        </div>
      </div>
     

      {/* Doctor Profile Section */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-100 max-w-md mx-auto lg:mx-0">
                <img src={doctorImg} alt="Lead Physiotherapist" className="w-full h-[400px] md:h-[550px] object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-blue-700 text-white p-6 rounded-2xl shadow-xl z-20 hidden md:block">
                <p className="text-2xl font-black mb-0.5">Dr. Charles Niranjan</p>
                <p className="text-blue-100 font-bold uppercase tracking-widest text-[10px]">Chief Physiotherapist - BPT, MPT</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-blue-600 font-black uppercase tracking-widest text-xs mb-2 block">Meet Our Founder</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">
                Dedicated To Restoring Your <span className="text-blue-600">Mobility</span>
              </h2>
              <p className="text-slate-600 mb-5 text-base leading-relaxed">
                With over 15 years of clinical experience, <span className='text-blue-600 font-bold'>Dr. Charles Niranjan</span> has dedicated his career to helping patients overcome chronic pain and complex injuries. His approach combines traditional therapy with modern, evidence-based techniques.
              </p>
              <p className="text-slate-600 mb-8 text-base leading-relaxed">
                Under his leadership, Best Health Care Centre has grown from a small clinic to a premier rehabilitation center, known for its personalized care and high success rates in treating neurological and orthopedic conditions.
              </p>
              
              <div className="space-y-4 mb-10">
                {['Gold Medalist in Neuro-Physiotherapy', 'Certified Advanced Dry Needling Specialist', 'Expert in Sports Injury Management'].map((skill, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="bg-blue-100 p-1 rounded-full">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-slate-700 font-bold">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center hover:bg-white hover:shadow-xl transition-all group"
              >
                <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-110 transition-transform text-blue-600">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-1">{stat.value}</h3>
                <p className="text-slate-500 font-bold text-xs uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20 bg-slate-900 text-white rounded-[3rem] mx-4 md:mx-8 mb-16 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter">OUR CORE <span className="text-blue-500 italic">VALUES</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base font-medium">The principles that guide our practice and ensure your successful recovery.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mb-4 shadow-lg shadow-blue-600/30">
                  <div className="scale-90">{value.icon}</div>
                </div>
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-slate-400 text-sm font-medium leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
