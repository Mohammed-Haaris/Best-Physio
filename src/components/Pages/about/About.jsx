import { CheckCircle, Users, Award, Clock } from 'lucide-react';
import aboutMainImg from '../../../assets/images/physio3.png';

const About = () => {
  return (
    <div className="w-full">
      {/* Page Header */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Dedicated to providing the highest standard of physiotherapy care since 2010.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Your Health Is Our Top Priority
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                At PhysioCare, our mission is to empower individuals to live pain-free and active lives. We believe in taking a comprehensive approach to healing, addressing not just the symptoms, but the root cause of your discomfort.
              </p>
              <p className="text-gray-600 mb-8 text-lg">
                Our team of highly trained professionals works closely with every patient to develop customized treatment plans. We combine advanced techniques with compassionate care to ensure the best possible outcomes.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                  <p className="text-4xl font-bold text-primary mb-2">15k+</p>
                  <p className="text-gray-700 font-medium">Happy Patients</p>
                </div>
                <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                  <p className="text-4xl font-bold text-primary mb-2">25+</p>
                  <p className="text-gray-700 font-medium">Expert Therapists</p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={aboutMainImg} 
                alt="Therapy session" 
                className="rounded-3xl shadow-xl w-full h-[350px] md:h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">What drives us everyday to provide the best care.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Users />, title: "Compassion" },
              { icon: <Award />, title: "Excellence" },
              { icon: <CheckCircle />, title: "Integrity" },
              { icon: <Clock />, title: "Dedication" }
            ].map((value, idx) => (
              <div key={idx} className="text-center p-8 border border-gray-800 rounded-2xl bg-gray-800/50">
                <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;