import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer className={`py-12 border-t ${theme === 'neon' ? 'border-primary/30' : 'border-border'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <span className={`text-2xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent ${theme === 'neon' ? 'neon-glow' : ''}`}>
              Aesthetic
            </span>
            <p className="mt-4 text-muted-foreground max-w-md">
              Building beautiful, modern websites with cutting-edge technology and stunning design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Features', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {[Github, Twitter, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                    theme === 'neon'
                      ? 'bg-primary/20 hover:bg-primary/40 neon-border-glow'
                      : 'bg-secondary hover:bg-primary hover:text-primary-foreground'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className={`pt-8 border-t ${theme === 'neon' ? 'border-primary/30' : 'border-border'} text-center text-muted-foreground`}>
          <p>&copy; 2024 Aesthetic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
