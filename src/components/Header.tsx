'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md"
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors">
          Dorothy
        </Link>
        <div className="space-x-6 text-lg">
          <Link href="#about" className="hover:text-cyan-400 transition-colors">About</Link>
          <Link href="#projects" className="hover:text-cyan-400 transition-colors">Projects</Link>
          <Link href="#contact" className="hover:text-cyan-400 transition-colors">Contact</Link>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;