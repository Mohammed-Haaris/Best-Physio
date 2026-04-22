import { motion } from 'framer-motion';
import img1 from '../../../assets/images/physio1.png';
import img2 from '../../../assets/images/physio2.png';
import img3 from '../../../assets/images/physio3.png';

const Gallery = () => {
  // Collection of high-quality physiotherapy-related placeholder images
  // We reuse the 3 generated assets for the grid.
  const images = [
    img1,
    img2,
    img3,
    img2,
    img3,
    img1,
    img3,
    img1,
    img2
  ];

  return (
    <div className="w-full">
      {/* Page Header */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Gallery</h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Take a look inside our modern clinic and see our expert therapists in action.
            </p>
          </motion.div>
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
