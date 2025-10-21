'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

// --- UPDATED MOCK DATA ---
const myProjects: Project[] = [
  {
    title: "Project Alpha",
    description: "Our flagship application, solving a major problem in the industry with a focus on performance.",
    // This URL gets a random 600x400 grayscale image. The "seed" makes it the same image every time for this project.
    image: "https://picsum.photos/seed/alpha/600/400?grayscale", 
    link: "#",
  },
  {
    title: "Project Beta",
    description: "A data-intensive dashboard for real-time analytics, built with a modern, responsive interface.",
    image: "https://picsum.photos/seed/beta/600/400?grayscale", 
    link: "#",
  },
  {
    title: "Project Gamma",
    description: "A community-focused platform designed for seamless user interaction and content sharing.",
    image: "https://picsum.photos/seed/gamma/600/400?grayscale", 
    link: "#",
  },
];
// --- ---

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <h2 className="text-4xl font-bold text-center mb-12">Our Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {myProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gray-800/50 rounded-lg overflow-hidden shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20 transition-shadow"
          >
            <Image src={project.image} alt={project.title} width={500} height={300} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                View Project &rarr;
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;