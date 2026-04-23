import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import bgContact from '../../../assets/images/physio2.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const phoneNumber = "7904321745"; // Doctor's WhatsApp number
    const message = `*New Appointment Request*\n\n` +
                    `*Name:* ${formData.firstName} ${formData.lastName}\n` +
                    `*Email:* ${formData.email}\n` +
                    `*Service:* ${formData.service}\n` +
                    `*Preferred Date:* ${formData.date}\n` +
                    `*Preferred Time:* ${formData.time}\n` +
                    `*Message:* ${formData.message}`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Redirect to WhatsApp
    window.location.href = whatsappUrl;
  };

  const contactInfo = [
    {
      title: "Our Location",
      details: ["47, Bashyam St, near pillaiyar koil,", "North Venugopalapuram, Allpettai,", "Manjakuppam, Cuddalore,", "Tamil Nadu 607001"],
      icon: <MapPin className="w-6 h-6" />,
      color: "bg-blue-600 text-white"
    },
    {
      title: "Phone Number",
      details: ["+91 9566933355"],
      icon: <Phone className="w-6 h-6" />,
      color: "bg-blue-600 text-white"
    },
    {
      title: "Email Address",
      details: ["contact@besthealthcare.com", "support@besthealthcare.com"],
      icon: <Mail className="w-6 h-6" />,
      color: "bg-blue-600 text-white"
    },
    {
      title: "Working Hours",
      details: ["Mon - Fri: 8:00 AM - 8:00 PM", "Sat - Sun: 9:00 AM - 4:00 PM"],
      icon: <Clock className="w-6 h-6" />,
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
            src={bgContact} 
            alt="Contact Background" 
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
            Get In Touch
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight"
          >
            Contact <span className="text-blue-400">Us</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-blue-50/80 max-w-xl mx-auto text-base md:text-lg font-medium"
          >
            Looking to book an appointment or have questions? We're here to help!
          </motion.p>
        </div>
      </div>

      {/* Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-8 relative z-10 w-full overflow-hidden">
        <div className="p-3 md:p-5 bg-gradient-to-br from-blue-500 to-blue-700 rounded-[2.5rem] shadow-2xl shadow-blue-600/30">
          <div className="w-full h-80 md:h-[500px] rounded-[1.8rem] overflow-hidden bg-white translate-z-0">
            <iframe
              title="Clinic Location"
              src="https://www.google.com/maps?q=Best+care+physiotherapy+clinic+Dr.charles+Niranjan,+Cuddalore,+Tamil+Nadu+607001&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[0.2] contrast-125 hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* Contact Details */}
            <div className="lg:col-span-5">
              <div className="mb-12">
                <span className="text-blue-600 font-black uppercase tracking-widest text-sm mb-2 block">Contact Details</span>
                <h2 className="text-4xl font-black text-slate-900 tracking-tight">Visit Our <span className="text-blue-600">Clinic</span></h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                {contactInfo.map((info, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-5 p-6 rounded-3xl border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-600/5 transition-all group"
                  >
                    <div className={`${info.color} w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform`}>
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-slate-900 mb-2">{info.title}</h3>
                      <div className="space-y-1">
                        {info.details.map((line, i) => (
                          <p key={i} className="text-slate-500 font-medium text-sm leading-relaxed">{line}</p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-blue-600/10 border border-slate-100 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <MessageSquare className="w-32 h-32 text-blue-600" />
                </div>

                <h2 className="text-3xl font-black text-slate-900 mb-8 tracking-tight">Book An <span className="text-blue-600">Appointment</span></h2>
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">First Name</label>
                      <input 
                        type="text" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all font-semibold text-slate-700" 
                        placeholder="John" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Last Name</label>
                      <input 
                        type="text" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all font-semibold text-slate-700" 
                        placeholder="Doe" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all font-semibold text-slate-700" 
                      placeholder="john@example.com" 
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Service Needed</label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all font-semibold text-slate-700 appearance-none cursor-pointer"
                    >
                      <option value="">Select a service</option>
                      <option value="Manual Therapy">Manual Therapy</option>
                      <option value="Sports Rehabilitation">Sports Rehabilitation</option>
                      <option value="Post-Surgery Care">Post-Surgery Care</option>
                      <option value="Massage Therapy">Massage Therapy</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Preferred Date</label>
                      <input 
                        type="date" 
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all font-semibold text-slate-700" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Preferred Time</label>
                      <input 
                        type="time" 
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all font-semibold text-slate-700" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Your Message</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4" 
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all font-semibold text-slate-700 resize-none" 
                      placeholder="Tell us about your condition..."
                    ></textarea>
                  </div>

                  <button type="submit" className="group w-full bg-blue-600 text-white py-5 rounded-2xl hover:bg-blue-700 transition-all text-lg shadow-xl shadow-blue-600/20 flex items-center justify-center gap-3 active:scale-[0.98]">
                    Send Request 
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom Trust Section */}
      <div className="bg-slate-50 py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-12 opacity-50">
          <div className="flex items-center gap-2 font-bold text-slate-400"><CheckCircle2 className="w-5 h-5" /> Verified Medical Staff</div>
          <div className="flex items-center gap-2 font-bold text-slate-400"><CheckCircle2 className="w-5 h-5" /> Advanced Equipment</div>
          <div className="flex items-center gap-2 font-bold text-slate-400"><CheckCircle2 className="w-5 h-5" /> Trusted by 15k+ Patients</div>
        </div>
      </div>

    </div>
  );
};

export default Contact;

