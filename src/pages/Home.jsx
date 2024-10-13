import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-500 to-blue-600 text-white h-screen flex flex-col justify-center items-center">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Predict the Future of Stock Market
        </motion.h1>
        <motion.p
          className="text-xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Get accurate predictions and insights with our powerful tools.
        </motion.p>
        <motion.button
          className="bg-white text-green-600 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
         <Link to="/get-started" className="text-gray-800 hover:text-green-600 transition duration-300">Get Started</Link>
        </motion.button>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-100 text-gray-800">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold mb-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Features
          </motion.h2>
          <div className="flex flex-wrap justify-center">
            {featuresData.map((feature, index) => (
              <motion.div
                key={index}
                className="w-full md:w-1/3 p-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Data Section */}
      <section className="py-20 bg-white text-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Current Market Data</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Replace with real data */}
            {marketData.map((data, index) => (
              <div key={index} className="bg-gray-200 p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold">{data.title}</h4>
                <p className="text-2xl font-bold">{data.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-100 text-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
          <div className="flex flex-wrap justify-center">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="w-full md:w-1/3 p-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <p className="italic">"{testimonial.quote}"</p>
                  <p className="font-bold mt-4">{testimonial.author}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-green-500 text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Predicting?</h2>
        <p className="mb-8">Join us today and gain access to powerful prediction tools.</p>
        <button className="bg-white text-green-600 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
        <Link to={"/signup"}>Sign Up Now</Link>  
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>© 2024 Stock Market Predictor. All rights reserved.</p>
      </footer>
    </div>
  );
};

// Sample Data
const featuresData = [
  { title: 'Real-Time Analytics', description: 'Get real-time insights into stock market trends.' },
  { title: 'Predictive Modeling', description: 'Use advanced algorithms to forecast stock performance.' },
  { title: 'User-Friendly Interface', description: 'Navigate easily with our intuitive dashboard.' },
];

const marketData = [
  { title: 'S&P 500', value: '4,300.25' },
  { title: 'NASDAQ', value: '13,450.65' },
  { title: 'Dow Jones', value: '33,800.10' },
];

const testimonials = [
  { quote: 'This tool has changed the way I invest!', author: 'John Doe' },
  { quote: 'Incredible insights and accurate predictions.', author: 'Jane Smith' },
  { quote: 'I love the user-friendly interface and features.', author: 'Chris Johnson' },
];

export default Home;
