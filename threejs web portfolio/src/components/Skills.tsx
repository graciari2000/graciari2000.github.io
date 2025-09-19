import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 95 },
        { name: "HTML/CSS", level: 90 },
        { name: "Three.js", level: 80 },
        { name: "Next.js", level: 85 },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "PostgreSQL", level: 70 },
        { name: "GraphQL", level: 75 },
        { name: "RESTful APIs", level: 90 },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Figma", level: 85 },
        { name: "CI/CD", level: 80 },
        { name: "Testing", level: 75 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-white dark:bg-dark-900">
      <div className="container-padding">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">Technical <span className="text-primary-600 dark:text-primary-400">Skills</span></h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Here are some of the technologies I work with on a daily basis. I'm always learning and expanding my skillset.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex}
              variants={itemVariants}
              className="card p-6"
            >
              <h3 className="text-xl font-bold mb-6 text-center text-primary-600 dark:text-primary-400">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 dark:bg-dark-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary-600 to-secondary-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Technologies Icons Grid */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-8">Technologies I Work With</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {[
              "React", "Three.js", "Node.js", "TypeScript", 
              "MongoDB", "Express", "GraphQL", "Next.js", 
              "TailwindCSS", "PostgreSQL", "Docker", "AWS",
              "Git", "Webpack", "Redux", "Jest"
            ].map((tech, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-50 dark:bg-dark-800 hover:shadow-md transition-all"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div className="w-12 h-12 mb-2 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary-600 dark:text-primary-400">
                    {tech.charAt(0)}
                  </span>
                </div>
                <span className="text-sm font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;