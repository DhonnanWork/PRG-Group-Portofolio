import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="py-12 bg-black/20 mt-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="hover:text-cyan-400 transition-colors"><Github size={32} /></a>
          <a href="#" className="hover:text-cyan-400 transition-colors"><Linkedin size={32} /></a>
          <a href="#" className="hover:text-cyan-400 transition-colors"><Twitter size={32} /></a>
        </div>
        <p>&copy; {new Date().getFullYear()} Dorothy. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;