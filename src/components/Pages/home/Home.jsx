import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Activity, UserPlus, HeartPulse, Stethoscope } from 'lucide-react';
import { motion } from 'framer-motion';

import heroImg from '../../../assets/images/physio1.png';
import aboutImg from '../../../assets/images/physio3.png';

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gray-50 pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-4 uppercase tracking-tight">
                GET BACK TO <br className="hidden sm:block" /> <span className="text-primary">YOUR LIFE!</span>
              </h1>
              <p className="text-base md:text-xl text-gray-500 mb-8 max-w-lg  tracking-wider font-medium leading-relaxed">
                The Mobilty with in shot period of time and more over providing world class treatment with affordable cost of <span className="text-primary">best service in Best Health Care Clinic.</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary-dark transition flex items-center justify-center gap-2 shadow-lg shadow-primary/30">
                  Book Appointment <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/services" className="bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-full font-bold hover:bg-primary hover:text-white transition flex items-center justify-center">
                  Our Services
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src={heroImg}
                alt="Physiotherapy Treatment"
                className="rounded-[2rem] shadow-2xl w-full object-cover h-[300px] md:h-[500px]"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 hidden md:flex">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Activity className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-xl">15+ Years</h4>
                  <p className="text-gray-500">Of Experience</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <UserPlus className="w-10 h-10 text-primary" />, title: "Expert Therapists", desc: "Our team of certified professionals is dedicated to your health." },
              { icon: <HeartPulse className="w-10 h-10 text-primary" />, title: "Personalized Care", desc: "Treatment plans tailored specifically to your unique needs and goals." },
              { icon: <Stethoscope className="w-10 h-10 text-primary" />, title: "Modern Facilities", desc: "Equipped with state-of-the-art technology for advanced treatment." }
            ].map((feature, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                key={idx}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition duration-300 border border-gray-100"
              >
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
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
              <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">About Us</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                We Are Dedicated To Your Health And Recovery
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
              <Link to="/about" className="inline-flex items-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-600 transition">
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