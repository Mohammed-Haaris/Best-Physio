import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Activity, UserPlus, HeartPulse, Stethoscope } from 'lucide-react';
import { motion } from 'framer-motion';
import { GiShoulderArmor, GiKneeCap, GiArm, GiBiceps, GiHand, GiFootprint, GiLeg, GiSpineArrow, GiPelvisBone } from "react-icons/gi";

import heroImg from '../../../assets/images/home_image.jpeg';
import aboutImg from '../../../assets/images/physio3.png';
import glassBg from '../../../assets/images/glass_bg.png';

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-2/3 bg-primary/5 rounded-bl-[100px] -z-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-blue-100/20 rounded-tr-[100px] -z-10 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >

              <h1 className="text-5xl md:text-6xl lg:text-1xl text-blue-600 font-bold leading-[0.95] mb-6 tracking-tighter">
                RECOVER <br /> <span className="text-primary">FASTER</span> <br /> LIVE BETTER
              </h1>
              <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-xl leading-relaxed font-medium">
                Ensuring the better quality pain management and advanced physiotherapy involves expertise assessment and diagnosis providing best treatment using modern medical technology, innovating new research  methods which  brings maximum recovery to the patients with acute and chronic ortho ,neuro,musculo-skeletal and sports injury problems  with in short period of time with  affordable cost.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <Link to="/contact" className="group bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-blue-600/20 hover:-translate-y-1">
                  Book Appointment <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/services" className="bg-white text-secondary border border-slate-200 px-10 py-5 rounded-2xl font-bold hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center shadow-sm">
                  Our Services
                </Link>
              </div>

              <div className="mt-12 flex items-center gap-6 border-t border-slate-100 pt-8">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden shadow-sm">
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Patient" />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-4 border-white bg-primary text-white flex items-center justify-center text-xs font-bold shadow-sm">
                    5k+
                  </div>
                </div>
                <div>
                  <p className="text-sm font-bold text-secondary">Trusted by 5,000+ Patients</p>
                  <p className="text-xs text-slate-400 font-medium">Across Tamil Nadu & beyond</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white ring-1 ring-slate-100">
                <img
                  src={heroImg}
                  alt="Physiotherapy Treatment"
                  className="w-full object-cover h-[400px] md:h-[600px] hover:scale-105 transition-transform duration-1000"
                />
              </div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-2xl flex items-center gap-5 z-20 border border-slate-50 hidden md:flex"
              >
                <div className="bg-primary/10 p-4 rounded-2xl">
                  <Activity className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <h4 className="font-black text-secondary text-2xl">20+ Years</h4>
                  <p className="text-slate-500 font-bold text-sm uppercase tracking-widest">Experience</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-20 -right-8 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl flex flex-col items-center gap-2 z-20 border border-white/50 hidden lg:flex"
              >
                <div className="flex text-accent">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[10px] font-black text-secondary uppercase tracking-tighter">Top Rated Clinic</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: UserPlus, title: "Expert Therapists", desc: "Our team of certified professionals is dedicated to your health." },
              { icon: HeartPulse, title: "Personalized Care", desc: "Treatment plans tailored specifically to your unique needs and goals." },
              { icon: Stethoscope, title: "Modern Facilities", desc: "Equipped with state-of-the-art technology for advanced treatment." }
            ].map((feature, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                key={idx}
                className="group bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:shadow-blue-600/20 hover:bg-blue-600 transition-all duration-500 border border-slate-100 hover:border-blue-600 hover:-translate-y-2"
              >
                <div className="bg-blue-50 w-20 h-20 rounded-3xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-white/20 group-hover:scale-110 transition-all duration-500">
                  <feature.icon className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-white transition-colors duration-500">{feature.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed group-hover:text-blue-50 transition-colors duration-500">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Need Attention Section */}
      <section
        className="py-28 relative bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${glassBg})` }}
      >
        <div className="absolute inset-0 bg-blue-50/70 backdrop-blur-sm z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Where Do You Need Attention?
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto font-medium">
              We understand that injuries and acute pain can happen unexpectedly. Our emergency physiotherapy services are designed to provide prompt and effective care to help you manage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-2">
            {[
              { name: "Neck Pain", icon: <GiSpineArrow /> },
              { name: "Shoulder Pain", icon: <GiShoulderArmor /> },
              { name: "Hip Pain", icon: <GiPelvisBone /> },
              { name: "Knee Pain", icon: <GiKneeCap /> },
              { name: "Elbow Pain", icon: <GiArm /> },
              { name: "Tricep Pain", icon: <GiBiceps /> },
              { name: "Hand Pain", icon: <GiHand /> },
              { name: "Foot Pain", icon: <GiFootprint /> },
              { name: "Ankle Pain", icon: <GiLeg /> }
            ].map((pain, idx) => (
              <div key={idx} className="flex items-center gap-5 py-6 border-b border-blue-900/10 group cursor-pointer hover:border-blue-600 transition-colors">
                <div className="w-12 h-12 flex items-center justify-center text-blue-600 bg-white rounded-2xl shadow-sm group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all text-3xl">
                  {pain.icon}
                </div>
                <span className="text-slate-800 font-bold text-xl group-hover:text-blue-700 transition-colors">{pain.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img src={aboutImg} alt="Clinic" className="rounded-3xl shadow-xl w-full h-[350px] md:h-[600px] object-cover" />
              <div className="absolute top-1/2 -right-4 md:-right-10 transform -translate-y-1/2 bg-white p-6 md:p-8 rounded-2xl shadow-2xl hidden sm:block border-l-4 border-primary">
                <p className="text-4xl font-bold text-primary mb-2">99%</p>
                <p className="text-gray-600 font-medium">Satisfied Patients<br />Worldwide</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                We Are Dedicated To Your Health And Recovery in <span className='text-blue-600'>pain management</span>
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                <span className="text-primary font-bold">Best Health Care Clinic</span> is a leading rehabilitation clinic offering comprehensive therapeutic services. Our evidence-based approach ensures that you receive the most effective treatments available today.
              </p>
              <ul className="space-y-4 mb-8">
                {['Specialized Therapy Methods', 'Modern Techniques & Tech', 'Certified Expert Team', 'Affordable Health Packages'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="text-primary w-6 h-6 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about" className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-600/20">
                Read More About Us <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home