import { CheckCircle, Users, Award, Clock, GraduationCap, Heart, Sparkles, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import doctorImg from '../../../assets/images/dr_charles.png';
import aboutMainImg from '../../../assets/images/physio3.png';

const About = () => {
  const stats = [
    { label: 'Happy Patients', value: '15k+', icon: <Users className="w-6 h-6" /> },
    { label: 'Years Experience', value: '20+', icon: <Clock className="w-6 h-6" /> },
    { label: 'Awards Won', value: '30+', icon: <Award className="w-6 h-6" /> },
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
      {/* Page Header */}
      <div className="relative py-16 md:py-20 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={aboutMainImg} 
            alt="About Background" 
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
            Our Story
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight"
          >
            About <span className="text-blue-400">Us</span>
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
              <div className="absolute -bottom-4 -right-4 bg-blue-700 text-white p-6 rounded-2xl shadow-xl z-20 hidden md:block mt-9">
                <p className="text-2xl font-black mb-0.5">Lion Dr I.P.Charles Niranjan PH.d Neurology</p>
                <p className="text-blue-100 font-bold uppercase tracking-widest text-[20px]">C.M.T, F.M.T, F.N.R, Consultant Clinician</p>
              </div>
            </motion.div>
              
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-blue-600 font-bold  uppercase tracking-widest text-xs mb-2 block">Meet Our Founder</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
               Dedicated to provide the highest standard of <span className='text-blue-600'>Pain Management</span> and <span className="text-blue-600">Physiotherapy</span>
              </h2>
              <p className="text-slate-600 mb-5 text-base leading-relaxed">
                With over 20+ years of clinical experience, <span className='text-blue-600 font-bold'>Dr. Charles Niranjan</span> has dedicated his career to helping patients overcome chronic pain and complex injuries. His approach combines traditional therapy with modern, evidence-based techniques.
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
    </div>
  );
};

export default About;
