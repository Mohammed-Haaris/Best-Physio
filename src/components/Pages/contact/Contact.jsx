import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="w-full">
      {/* Page Header */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We are here to answer any questions you may have about our services.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Our Location</h3>
                    <p className="text-gray-600 leading-relaxed">47, Bashyam St, near pillaiyar koil,<br />North Venugopalapuram, Allpettai,<br />Manjakuppam, Cuddalore,<br />Tamil Nadu 607001</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Phone Number</h3>
                    <p className="text-gray-600">+91 9566933355</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Email Address</h3>
                    <p className="text-gray-600">contact@physiocare.com<br />support@physiocare.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center shrink-0">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Working Hours</h3>
                    <p className="text-gray-600">Mon - Fri: 8:00 AM - 8:00 PM<br />Sat - Sun: 9:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Book an Appointment</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition" placeholder="john@example.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Needed</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white">
                    <option value="">Select a service</option>
                    <option value="manual">Manual Therapy</option>
                    <option value="sports">Sports Rehabilitation</option>
                    <option value="surgery">Post-Surgery Care</option>
                    <option value="massage">Massage Therapy</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition" placeholder="Tell us about your condition..."></textarea>
                </div>

                <button type="submit" className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-primary-dark transition text-lg">
                  Send Request
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;