import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaUsers, FaRocket } from 'react-icons/fa';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Animated Heading */}
      <motion.h1
        className="text-5xl font-bold text-green-600 mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Us
      </motion.h1>

      {/* Animated Description */}
      <motion.p
        className="text-lg text-gray-700 mb-12 text-center max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Welcome to the Stock Market Predictor, where we harness the power of advanced analytics and machine learning to provide you with accurate stock market predictions. Our mission is to empower investors with the insights they need to make informed decisions and achieve their financial goals.
      </motion.p>

      {/* Animated Features Section */}
      <motion.h2
        className="text-3xl font-bold text-green-600 mb-6 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Our Features
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {[
          { title: "Real-Time Data", icon: <FaChartLine size={40} />, description: "Get live stock prices and market data for timely decisions." },
          { title: "Expert Analysis", icon: <FaUsers size={40} />, description: "Leverage insights from our financial experts for better strategies." },
          { title: "User-Friendly Interface", icon: <FaRocket size={40} />, description: "Navigate our platform effortlessly with intuitive design." },
        ].map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <div className="flex items-center mb-4">
              {feature.icon}
              <h2 className="text-xl font-semibold text-gray-800 ml-2">{feature.title}</h2>
            </div>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Animated Testimonials Section */}
      <motion.h2
        className="text-3xl font-bold text-green-600 mb-6 mt-12 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        What Our Users Say
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {[
          { quote: "This tool has changed my investment strategy!", author: "John D." },
          { quote: "I love the user-friendly interface and accurate predictions.", author: "Sarah K." },
          { quote: "A must-have for serious investors!", author: "Michael B." },
        ].map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 + 2 }}
          >
            <p className="text-gray-600 italic">"{testimonial.quote}"</p>
            <p className="text-gray-800 font-semibold mt-2">- {testimonial.author}</p>
          </motion.div>
        ))}
      </div>

      {/* Footer with Social Links */}
      <motion.footer
        className="mt-12 w-full max-w-5xl text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <h2 className="text-2xl font-bold text-green-600 mb-4">Connect with Us</h2>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-green-600 hover:text-green-800 transition duration-300">Facebook</a>
          <a href="#" className="text-green-600 hover:text-green-800 transition duration-300">Twitter</a>
          <a href="#" className="text-green-600 hover:text-green-800 transition duration-300">LinkedIn</a>
        </div>
      </motion.footer>
    </div>
  );
};

export default About;
