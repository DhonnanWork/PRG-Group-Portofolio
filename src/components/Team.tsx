'use client';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

const teamMembers = [
  { name: 'Dorothy', role: 'Team Lead & Backend Developer', bio: 'Architecting the core logic and ensuring everything runs smoothly server-side.' },
  { name: 'Alex', role: 'Frontend & UI Specialist', bio: 'Crafting beautiful, responsive user interfaces and bringing the design to life.' },
  { name: 'Ben', role: 'DevOps & Database Manager', bio: 'Managing the deployment pipeline and ensuring data integrity and performance.' },
  { name: 'Carla', role: 'QA & UX Researcher', bio: 'Focused on user experience, testing, and ensuring a bug-free, intuitive application.' },
];

const Team = () => {
  return (
    <section id="about" className="py-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center mb-12">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800/40 p-6 rounded-lg text-center flex flex-col items-center"
            >
              <h3 className="text-2xl font-bold text-cyan-400">{member.name}</h3>
              <p className="font-semibold text-gray-300 mb-3">{member.role}</p>
              <p className="text-gray-400 mb-4 flex-grow">{member.bio}</p>
              <div className="flex space-x-4 mt-auto">
                <a href="#" className="hover:text-cyan-400 transition-colors"><Github /></a>
                <a href="#" className="hover:text-cyan-400 transition-colors"><Linkedin /></a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Team;