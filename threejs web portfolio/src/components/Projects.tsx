import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import ProjectModal from './ProjectModal';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  liveDemo?: string;
  details: {
    overview: string;
    features: string[];
    technologies: string[];
    challenges: string;
    solutions: string;
    images: string[];
  };
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const projects: Project[] = [
    {
      id: "project1",
      title: "3D Product Configurator",
      description: "Interactive 3D product visualization tool that allows customers to customize and view products in real-time.",
      image: "https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["three.js", "react", "e-commerce"],
      github: "https://github.com",
      liveDemo: "https://example.com",
      details: {
        overview: "A fully interactive 3D product configurator that allows users to customize products in real-time with different colors, materials, and features. Built with Three.js and React.",
        features: [
          "Real-time 3D product visualization",
          "Interactive color and material selection",
          "Product component customization",
          "High-quality rendering with realistic lighting",
          "Mobile-responsive design",
          "Shareable product configurations"
        ],
        technologies: [
          "React", "Three.js", "React Three Fiber", "GLSL Shaders", "TailwindCSS", "Framer Motion"
        ],
        challenges: "Creating realistic material representations and optimizing performance for mobile devices were the main challenges. The application needed to maintain smooth interactions while rendering complex 3D models.",
        solutions: "Implemented level-of-detail switching, texture compression, and deferred loading strategies. Used custom GLSL shaders for realistic materials while maintaining performance.",
        images: [
          "https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        ]
      }
    },
    {
      id: "project2",
      title: "Interactive Data Visualization",
      description: "Dashboard with dynamic 3D data visualizations for financial and business analytics.",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["data-viz", "three.js", "dashboard"],
      github: "https://github.com",
      liveDemo: "https://example.com",
      details: {
        overview: "A comprehensive dashboard featuring interactive 3D data visualizations that transform complex financial and business data into intuitive visual representations.",
        features: [
          "3D bar and scatter plots",
          "Interactive time series visualization",
          "Real-time data updates",
          "Customizable views and filters",
          "Data export and sharing capabilities",
          "Responsive design for all device sizes"
        ],
        technologies: [
          "Three.js", "D3.js", "React", "TypeScript", "WebGL", "Redux"
        ],
        challenges: "Handling large datasets while maintaining smooth interactions was challenging. Additionally, creating intuitive navigation for exploring 3D data visualizations presented unique UX challenges.",
        solutions: "Implemented data streaming and progressive loading techniques. Created custom camera controls and navigation aids specifically designed for exploring 3D data spaces.",
        images: [
          "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        ]
      }
    },
    {
      id: "project3",
      title: "Virtual Art Gallery",
      description: "Immersive virtual gallery allowing artists to showcase their work in 3D spaces.",
      image: "https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["three.js", "webgl", "art"],
      github: "https://github.com",
      liveDemo: "https://example.com",
      details: {
        overview: "An immersive virtual gallery platform that enables artists to showcase their work in customizable 3D spaces. Visitors can explore exhibitions as if they were in a physical gallery.",
        features: [
          "Customizable 3D gallery spaces",
          "High-quality artwork rendering",
          "Virtual guided tours",
          "Interactive artist information",
          "Social sharing capabilities",
          "VR compatibility"
        ],
        technologies: [
          "Three.js", "React", "WebGL", "GLSL", "WebVR API", "Node.js"
        ],
        challenges: "Creating an intuitive navigation system for 3D spaces and optimizing the loading and rendering of high-resolution artwork while maintaining performance.",
        solutions: "Developed a custom navigation system with intuitive controls and visual cues. Implemented progressive loading of artwork with different resolution versions based on viewing distance and device capabilities.",
        images: [
          "https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/7147272/pexels-photo-7147272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        ]
      }
    },
    {
      id: "project4",
      title: "E-Commerce Platform",
      description: "Full-featured e-commerce platform with 3D product previews and AR try-on functionality.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["e-commerce", "react", "node.js"],
      github: "https://github.com",
      liveDemo: "https://example.com",
      details: {
        overview: "A complete e-commerce solution featuring 3D product previews and AR try-on capabilities, enhancing the online shopping experience with immersive product visualization.",
        features: [
          "3D product previews",
          "AR try-on functionality",
          "Secure payment processing",
          "Inventory management",
          "User accounts and order history",
          "Admin dashboard with analytics"
        ],
        technologies: [
          "React", "Node.js", "MongoDB", "Express", "Three.js", "WebXR API", "Stripe API"
        ],
        challenges: "Integrating 3D and AR capabilities while maintaining fast page loads and ensuring compatibility across devices was challenging. Optimizing the user journey to incorporate these new visualization features without complicating the purchase flow.",
        solutions: "Implemented lazy loading and progressive enhancement techniques so basic functionality works everywhere while enhanced features load when supported. Created intuitive UI patterns for 3D/AR interactions based on extensive user testing.",
        images: [
          "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        ]
      }
    }
  ];

  const filters = ["all", "three.js", "react", "e-commerce", "data-viz", "webgl", "art", "node.js", "dashboard"];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-dark-800">
      <div className="container-padding">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">My <span className="text-primary-600 dark:text-primary-400">Projects</span></h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Here are some of my recent projects. Each one demonstrates my skills and approach to solving real-world problems.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {filters.map((filter, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                ${activeFilter === filter 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-gray-200 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-dark-600'
                }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="card overflow-hidden shadow-lg"
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 flex items-end p-4">
                  <div className="w-full">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="text-primary-600 dark:text-primary-400 font-medium hover:underline"
                  >
                    View Details
                  </button>
                  
                  <div className="flex gap-3">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        aria-label="View source code on GitHub"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    
                    {project.liveDemo && (
                      <a 
                        href={project.liveDemo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        aria-label="View live demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* More Projects Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <a 
            href="https://github.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary inline-flex items-center gap-2"
          >
            <Github size={18} /> View More on GitHub
          </a>
        </motion.div>
      </div>
      
      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default Projects;