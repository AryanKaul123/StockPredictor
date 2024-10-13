import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Animated Heading */}
      <motion.h1
        className="text-5xl font-bold text-green-600 mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Sign Up
      </motion.h1>

      {/* Animated Description */}
      <motion.p
        className="text-lg text-gray-700 mb-12 text-center max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Create an account to access our stock market prediction features.
      </motion.p>

      {/* Sign Up Form */}
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
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="********"
            required
          />
        </motion.div>
        <motion.button
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300 w-full"
          type="submit"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          Sign Up
        </motion.button>
      </form>

      {/* Login Link */}
      <motion.p
        className="mt-4 text-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.8 }}
      >
        Already have an account?{' '}
        <Link to="/login" className="text-green-600 hover:text-green-800 transition duration-300">
          Login
        </Link>
      </motion.p>
    </div>
  );
};

export default Signup;
