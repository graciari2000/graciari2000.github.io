import React from 'react';
import { motion } from 'framer-motion';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-white dark:bg-dark-800 flex items-center justify-center z-50">
      <div className="text-center">
        <motion.div
          className="inline-block relative w-24 h-24"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="w-8 h-8 rounded-full bg-primary-500 absolute top-0 left-0 animate-pulse" />
          </div>
          <div className="absolute top-0 left-0 w-full h-full rotate-90">
            <div className="w-6 h-6 rounded-full bg-primary-600 absolute top-0 left-0 animate-pulse" 
                 style={{ animationDelay: "0.3s" }} />
          </div>
          <div className="absolute top-0 left-0 w-full h-full rotate-180">
            <div className="w-4 h-4 rounded-full bg-primary-700 absolute top-0 left-0 animate-pulse"
                 style={{ animationDelay: "0.6s" }} />
          </div>
        </motion.div>
        <motion.p 
          className="mt-4 text-xl text-primary-600 dark:text-primary-400 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Loading...
        </motion.p>
      </div>
    </div>
  );
};

export default Loader;