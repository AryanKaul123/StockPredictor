import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Animated Heading */}
      <motion.h1
        className="text-5xl font-bold text-green-600 mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Us
      </motion.h1>

      {/* Animated Description */}
      <motion.p
        className="text-lg text-gray-700 mb-12 text-center max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        We would love to hear from you! Please fill out the form below or reach out to us via email at
        <a href="mailto:kaularyan63@gmail.com" className="text-green-600 underline"> kaularyan63@gmail.com</a>.
      </motion.p>

      {/* Contact Form */}
      <form className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your Name"
            required
          />
        </motion.div>
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="you@example.com"
            required
          />
        </motion.div>
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            rows="4"
            placeholder="Your Message"
            required
          />
        </motion.div>
        <motion.button
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300"
          type="submit"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          Send Message
        </motion.button>
      </form>

      {/* Footer with Social Links */}
      <motion.footer
        className="mt-12 w-full max-w-5xl text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <h2 className="text-2xl font-bold text-green-600 mb-4">Connect with Us</h2>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-green-600 hover:text-green-800 transition duration-300">Facebook</a>
          <a href="#" className="text-green-600 hover:text-green-800 transition duration-300">Twitter</a>
          <a href="https://www.linkedin.com/in/aryan-kaul-661a94272/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 transition duration-300">LinkedIn</a>
        </div>
      </motion.footer>
    </div>
  );
};

export default Contact;
