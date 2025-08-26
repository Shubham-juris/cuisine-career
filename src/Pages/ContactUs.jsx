import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import lodge from '../assets/Boutique Lodge Presentation.jpg';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane, FaUser, FaComment, FaMountain, FaTree, FaUtensils } from "react-icons/fa";

const ContactUs = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const background = "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80";

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header with Rockies theme */}
      <section
        className="relative h-[100vh] bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl text-center px-6">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-snug">
            WELCOME TO WORK IN THE CUISINE CAREER <br />
            JOIN OUR TEAM
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200">
            Discover fulfilling opportunities in Canada's most beautiful mountain locations.
          </p>
          <button 
            onClick={() => navigate('/jobs')}
            className="mt-6 px-6 py-3 bg-gray-700 text-white font-semibold text-lg rounded shadow-lg hover:bg-gray-800 transition"
          >
            EXPLORE CAREERS
          </button>
        </div>
      </section>
           
      {/* Contact Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
            <p className="text-gray-600 mb-8">
              Reach out to us for information about employment opportunities at our properties throughout the Canadian Rockies.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-gray-100 p-3 rounded-full mr-4">
                  <FaMapMarkerAlt className="text-gray-700 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Main Office</h3>
                  <p className="text-gray-600">Calgary Indian vegetarian Restaurent, 1935 32 AVE NE #107 , Calgary, AB T2E 3RI</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gray-100 p-3 rounded-full mr-4">
                  <FaPhone className="text-gray-700 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">+1 (604) 985-7474</p>
                  <p className="text-gray-600">+1 (888) 813-8401 (Toll-free)</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gray-100 p-3 rounded-full mr-4">
                  <FaEnvelope className="text-gray-700 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">cuisineCareers@fusion-foodies.com</p>
                  <p className="text-gray-600">careers@capilanogroup.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gray-100 p-3 rounded-full mr-4">
                  <FaClock className="text-gray-700 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Office Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="mt-10 bg-gray-100 p-6 rounded-lg border-l-4 border-gray-600">
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                <FaUtensils className="mr-2 text-gray-600" />
                For Job Inquiries
              </h3>
              <p className="text-gray-600">
                Interested in joining our team? Send your resume to careers@capilanogroup.com or apply directly through our careers portal.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Your Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaUser className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaEnvelope className="text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                    placeholder="What is this regarding?"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Your Message
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <FaComment className="text-gray-400" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                      placeholder="Type your message here..."
                      required
                    ></textarea>
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="bg-[#8d877b] hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-lg transition duration-300 flex items-center"
                >
                  Send Message
                  <FaPaperPlane className="ml-2" />
                </button>
              </form>
            </div>

            {/* Properties Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Properties</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <FaMountain className="mr-2 text-gray-600" />
                    Moraine Lake Lodge
                  </h3>
                  <p className="text-gray-600 mb-4">Located in the heart of Banff National Park</p>
                  <div className="h-40 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                    <img src={lodge} alt="Moraine Lake Lodge" className="h-full w-full object-center rounded-lg object-cover" />
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <FaTree className="mr-2 text-gray-600" />
                    Cathedral Mountain Lodge
                  </h3>
                  <p className="text-gray-600 mb-4">Luxury lodging in Yoho National Park</p>
                  <div className="h-40 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500">Forest View</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">How do I apply for a job at your properties?</h3>
              <p className="text-gray-600">
                You can apply directly through our careers portal on the website or send your resume to careers@capilanogroup.com. Make sure to specify which position and location you're interested in.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">What's the best way to make reservation inquiries?</h3>
              <p className="text-gray-600">
                For reservation inquiries, please contact the specific property directly or use the booking system on our website. For group bookings, email groups@capilanogroup.com.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">Do you offer seasonal employment?</h3>
              <p className="text-gray-600">
                Yes, we offer seasonal positions at our Rocky Mountain properties. These typically run from May to October. Applications open each January.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">How can I get information about venue rentals?</h3>
              <p className="text-gray-600">
                For event and venue rental information, please contact our events team at events@capilanogroup.com or call our main office during business hours.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Job Alert Section */}
      <div className="bg-gray-100 py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Interested in Joining Our Team?</h2>
          <p className="text-gray-700 text-xl mb-8">
            We're always looking for passionate individuals to join us in providing exceptional hospitality experiences in Canada's most beautiful locations.
          </p>
          <button 
            onClick={() => navigate('/jobs')}
            className="bg-[#8d877b] text-white font-semibold text-lg py-3 px-8 rounded-lg hover:bg-gray-800 transition duration-300"
          >
            View Current Openings
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;