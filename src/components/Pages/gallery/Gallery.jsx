import { motion } from 'framer-motion';
import img1 from '../../../assets/images/chiropractic.jpeg';
import img2 from '../../../assets/images/gallery_1.jpeg';
import img3 from '../../../assets/images/laser_treatment.jpeg';
import img4 from '../../../assets/images/manual_therapy.jpeg';
import img5 from '../../../assets/images/neuro_rab.jpeg';
import img6 from '../../../assets/images/pain_management.jpeg';
import img7 from '../../../assets/images/physiotherapy.jpeg';
import img8 from '../../../assets/images/post_operative.jpeg';
import img9 from '../../../assets/images/robotic_spine.jpeg';
import img10 from '../../../assets/images/spine_rehab.png';
import img11 from '../../../assets/images/sport_rehab.jpeg';
import img12 from '../../../assets/images/doctor_2.jpeg';
import img13 from '../../../assets/images/doctor_3.jpeg';
import img14 from '../../../assets/images/doctor_4.jpeg';
import img15 from '../../../assets/images/best_post.jpeg';
import img16 from '../../../assets/images/banner3.jpeg';

const Gallery = () => {
  // Collection of high-quality physiotherapy-related placeholder images
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16
  ];

  return (
    <div className="w-full">
      {/* Page Header */}
      <div className="relative py-16 md:py-20 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={img7} 
            alt="Gallery Background" 
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
            Inside Our Clinic
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight"
          >
            Our <span className="text-blue-400">Gallery</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-blue-50/80 max-w-xl mx-auto text-base md:text-lg font-medium"
          >
            Take a look inside our modern clinic and see our expert therapists in action.
          </motion.p>
        </div>
      </div>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="overflow-hidden rounded-2xl shadow-md cursor-pointer group"
              >
                <img
                  src={src}
                  alt={`Clinic Gallery ${index + 1}`}
                  className="w-full h-72 object-cover transform transition duration-500 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
