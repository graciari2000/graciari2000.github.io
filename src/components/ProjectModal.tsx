import React from 'react';
import { motion } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';

interface ProjectDetails {
  overview: string;
  features: string[];
  technologies: string[];
  challenges: string;
  solutions: string;
  images: string[];
}

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  liveDemo?: string;
  details: ProjectDetails;
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Prevent scrolling when modal is open
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white dark:bg-dark-800 rounded-xl shadow-2xl overflow-hidden w-full max-w-4xl max-h-[90vh] flex flex-col"
        onClick={handleContentClick}
      >
        <div className="p-6 border-b border-gray-200 dark:border-dark-700 flex justify-between items-center">
          <h3 className="text-2xl font-bold">{project.title}</h3>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-dark-700 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        <div className="overflow-y-auto p-6 flex-grow scroll-hide">
          {/* Image Carousel */}
          <div className="mb-8">
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
              <img 
                src={project.details.images[0]} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-bold mb-2 text-primary-600 dark:text-primary-400">Overview</h4>
              <p className="text-gray-600 dark:text-gray-300">{project.details.overview}</p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-2 text-primary-600 dark:text-primary-400">Features</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300">
                {project.details.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-2 text-primary-600 dark:text-primary-400">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.details.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-2 text-primary-600 dark:text-primary-400">Challenges</h4>
              <p className="text-gray-600 dark:text-gray-300">{project.details.challenges}</p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-2 text-primary-600 dark:text-primary-400">Solutions</h4>
              <p className="text-gray-600 dark:text-gray-300">{project.details.solutions}</p>
            </div>

            {/* Additional Images */}
            {project.details.images.length > 1 && (
              <div>
                <h4 className="text-lg font-bold mb-2 text-primary-600 dark:text-primary-400">Additional Screenshots</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.details.images.slice(1).map((image, index) => (
                    <div key={index} className="rounded-lg overflow-hidden h-40">
                      <img 
                        src={image} 
                        alt={`${project.title} screenshot ${index + 2}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="p-6 border-t border-gray-200 dark:border-dark-700 flex justify-between items-center">
          <div className="flex gap-4">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <Github size={18} /> View Source
              </a>
            )}
            
            {project.liveDemo && (
              <a 
                href={project.liveDemo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <ExternalLink size={18} /> Live Demo
              </a>
            )}
          </div>
          
          <button 
            onClick={onClose}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;