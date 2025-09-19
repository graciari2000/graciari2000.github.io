import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Palette, Monitor } from 'lucide-react';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const services = [
    {
      icon: <Code2 size={24} />,
      title: 'Frontend Development',
      description: 'Creating responsive and interactive user interfaces with modern frameworks like React, Vue, and Angular.'
    },
    {
      icon: <Server size={24} />,
      title: 'Backend Development',
      description: 'Building robust server-side applications and APIs using Node.js, Express, and database technologies.'
    },
    {
      icon: <Palette size={24} />,
      title: 'UI/UX Design',
      description: 'Designing intuitive and engaging user experiences with a focus on usability and aesthetics.'
    },
    {
      icon: <Monitor size={24} />,
      title: '3D Web Development',
      description: 'Implementing immersive 3D experiences on the web using Three.js and WebGL technologies.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-dark-800">
      <div className="container-padding">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">About <span className="text-primary-600 dark:text-primary-400">Me</span></h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            I'm a passionate web developer with 2+ years of experience crafting digital experiences that combine beautiful design with cutting-edge technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-tr from-primary-700 to-secondary-400 rounded-xl overflow-hidden shadow-xl">
                <img
                  src="../../me.jpeg"
                  alt="Ariane AKAKPO"
                  className="w-full h-full object-cover mix-blend-overlay opacity-90"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white dark:bg-dark-700 rounded-xl shadow-lg flex items-center justify-center">
                <span className="text-6xl font-bold text-primary-600 dark:text-primary-400">2+</span>
                <span className="text-sm absolute bottom-4">years exp.</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold">
              Crafting Digital Experiences with Code & Creativity
            </h3>

            <p className="text-gray-600 dark:text-gray-300">
              Hello! I'm Ariane, a web developer. I specialize in building exceptional digital experiences that live at the intersection of code and design.
            </p>

            <p className="text-gray-600 dark:text-gray-300">
              With a background in both frontend and backend development, I enjoy creating applications that are not only functional but also beautiful and intuitive to use. I'm particularly passionate about interactive 3D experiences on the web.
            </p>

            <p className="text-gray-600 dark:text-gray-300">
              When I'm not coding, you'll find me writing, reading fiction, experimenting new cooking recipes and playing video games.
            </p>

            <div className="pt-4">
              <a href="#contact" className="btn btn-primary">
                Get In Touch
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card card-hover p-6"
            >
              <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;