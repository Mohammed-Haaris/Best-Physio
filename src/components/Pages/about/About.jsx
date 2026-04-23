import { useState, useEffect, useRef } from 'react';
import { CheckCircle, Users, Award, Clock, GraduationCap, Heart, Sparkles, Activity, Target, Leaf, Lightbulb, Star } from 'lucide-react';
import { motion, AnimatePresence, useInView, animate } from 'framer-motion';
import doctorImg from '../../../assets/images/dr_charles.png';
import aboutMainImg from '../../../assets/images/physio3.png';

const Counter = ({ target, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, target, {
        duration: 2,
        onUpdate: (value) => setCount(Math.floor(value)),
      });
      return () => controls.stop();
    }
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const About = () => {
  const stats = [
    { label: 'Happy Patients', value: 15, suffix: 'k+', icon: <Users className="w-6 h-6" /> },
    { label: 'Years Experience', value: 20, suffix: '+', icon: <Clock className="w-6 h-6" /> },
    { label: 'Awards Won', value: 30, suffix: '+', icon: <Award className="w-6 h-6" /> },
    { label: 'Specialized Methods', value: 40, suffix: '+', icon: <Activity className="w-6 h-6" /> },
  ];

  const values = [
    { title: "Patient First", desc: "We prioritize your comfort and recovery goals above all else.", icon: <Heart /> },
    { title: "Expert Care", desc: "Our team stays at the forefront of medical advancements.", icon: <GraduationCap /> },
    { title: "Modern Tech", desc: "Equipped with the latest rehabilitation technology.", icon: <Sparkles /> },
    { title: "Integrity", desc: "Honest, transparent, and evidence-based treatments.", icon: <CheckCircle /> }
  ];

  const reviews = [
    { name: "Johan Duo", title: "Professional Athlete", img: "11", content: "Best Care Physio has completely changed my recovery game. Their modern approach is exactly what I needed!" },
    { name: "Jane Smith", title: "Retired Teacher", img: "4", content: "The staff is so patient and professional. My back pain is gone after months of struggle." },
    { name: "Robert Lee", title: "Construction Worker", img: "8", content: "Fast and effective treatment. I was back at work much sooner than I expected." },
    { name: "Michael Chen", title: "Software Engineer", img: "7", content: "Ergonomics and posture correction here helped me with my repetitive strain injury." },
    { name: "Sarah Miller", title: "Yoga Instructor", img: "2", content: "Truly human-centric care. They understand the body like no one else." },
    { name: "David Wilson", title: "Student Athlete", img: "12", content: "Great atmosphere and highly skilled therapists. They really listen to your goals." },
    { name: "Emily Brown", title: "Office Manager", img: "6", content: "The chronic neck pain I had for years is finally manageable. Highly recommend!" },
    { name: "Thomas Taylor", title: "Taxi Driver", img: "3", content: "Easy to book and great results. Very professional clinic in Cuddalore." },
    { name: "Linda Anderson", title: "Grandmother", img: "5", content: "They treated me with such kindness. I can walk to the park with my grandkids again." },
    { name: "Kevin Garcia", title: "Fitness Enthusiast", img: "9", content: "The sports rehab here is top-notch. They have the latest equipment for recovery." },
    { name: "Maria White", title: "Dancer", img: "10", content: "Precision and care in every session. Recovery felt like progress every single day." },
    { name: "John Harris", title: "Businessman", img: "1", content: "Efficient, effective, and professional. The best physiotherapy experience I've had." }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 3 >= reviews.length ? 0 : prev + 3));
    }, 2000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const visibleReviews = reviews.slice(activeIndex, activeIndex + 3);

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
                <h3 className="text-3xl font-black text-slate-900 mb-1">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </h3>
                <p className="text-slate-500 font-bold text-xs uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Vision To Victory Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-blue-50 text-blue-700 font-bold px-6 py-2 rounded-full mb-6 text-sm">
            Vision To Victory
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-16 tracking-tight">
            We're a <span className="text-blue-600">Recognized</span> & Quality Leader
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="p-10 rounded-[2.5rem] bg-white text-slate-900 border border-slate-100 shadow-xl shadow-slate-200/50 text-left hover:-translate-y-2 hover:bg-blue-600 hover:text-white transition-all duration-300 group">
              <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-white/20 transition-colors">
                <Target className="w-8 h-8 text-blue-600 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-slate-500 font-medium leading-relaxed group-hover:text-blue-50">
                We understand that injuries and acute pain can happen unexpectedly. Our emergency physiotherapy services are designed to provide prompt and effective care to help you manage.
              </p>
            </div>

            {/* Vision */}
            <div className="p-10 rounded-[2.5rem] bg-white text-slate-900 border border-slate-100 shadow-xl shadow-slate-200/50 text-left hover:-translate-y-2 hover:bg-blue-600 hover:text-white transition-all duration-300 group">
              <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-white/20 transition-colors">
                <Leaf className="w-8 h-8 text-blue-600 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-slate-500 font-medium leading-relaxed group-hover:text-blue-50">
                We aim to be the global benchmark for patient-focused rehabilitation, continuously innovating our therapy approaches to ensure swift recovery and an active, pain-free life for all.
              </p>
            </div>

            {/* Approach */}
            <div className="p-10 rounded-[2.5rem] bg-white text-slate-900 border border-slate-100 shadow-xl shadow-slate-200/50 text-left hover:-translate-y-2 hover:bg-blue-600 hover:text-white transition-all duration-300 group">
              <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-white/20 transition-colors">
                <Lightbulb className="w-8 h-8 text-blue-600 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
              <p className="text-slate-500 font-medium leading-relaxed group-hover:text-blue-50">
                Combining evidence-based methodologies with individual comprehensive care plans. We don't just treat the symptoms, we analyze the root cause to provide sustainable healing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Review Section */}
      <section className="py-24 bg-blue-50/40 relative overflow-hidden">
        {/* Subtle Map/Pattern Background overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, blue 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block bg-white text-blue-700 font-bold px-8 py-2.5 rounded-full mb-6 text-sm shadow-sm ring-1 ring-slate-200/50">
            Review
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-16 tracking-tight">
            What <span className="text-black">Our Client Say</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 min-h-[400px]">
            <AnimatePresence mode="wait">
              {visibleReviews.map((review, idx) => (
                <motion.div
                  key={activeIndex + idx}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white p-10 rounded-[2.5rem] shadow-lg shadow-blue-200/40 text-left flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  <div className="flex gap-1.5 mb-6">
                    {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-5 h-5 fill-amber-400 text-amber-400" />)}
                  </div>
                  <p className="text-slate-500 leading-relaxed text-[15px] mb-10 font-medium flex-grow">
                    "{review.content}"
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <img src={`https://i.pravatar.cc/100?img=${review.img}`} alt={review.name} className="w-14 h-14 rounded-full object-cover border-2 border-slate-100" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">{review.name}</h4>
                      <p className="text-slate-500 text-sm font-medium">{review.title}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-3">
            {[0, 3, 6, 9].map((val) => (
              <div
                key={val}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all ${activeIndex === val ? 'bg-blue-800 scale-125' : 'bg-blue-200'}`}
                onClick={() => setActiveIndex(val)}
              ></div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
