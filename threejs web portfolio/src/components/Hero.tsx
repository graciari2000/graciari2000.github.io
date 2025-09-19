import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import HeroCanvas from './three/HeroCanvas';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen pt-20">
      {/* Canvas Background */}
      <div className="absolute inset-0 -z-10">
        <Suspense fallback={<div className="w-full h-full bg-gradient-to-b from-primary-900 to-dark-900" />}>
          <HeroCanvas />
        </Suspense>
      </div>

      {/* Content */}
      <div className="container-padding h-[calc(100vh-5rem)] flex flex-col justify-center relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white"
          >
            <span className="text-sm font-medium">Full-Stack Web Developer</span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Creating digital experiences that <span className="text-primary-400">inspire</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            I'm Ariane AKAKPO, a passionate web developer specializing in creating immersive 3D experiences and modern web applications.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a
              href="#projects"
              className="btn btn-primary"
            >
              View My Work
            </a>
            <a
              href="/resume.pdf"
              className="btn btn-secondary text-white border-white/30 hover:bg-white/10"
            >
              <Download size={18} /> Download CV
            </a>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5
          }}
        >
          <div className="w-8 h-14 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white rounded-full animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;