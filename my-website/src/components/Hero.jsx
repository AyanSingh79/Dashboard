import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './Button';
import { useTheme } from './ThemeProvider';

export default function Hero() {
  const { theme } = useTheme();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className={`absolute -top-1/2 -right-1/4 w-full h-full rounded-full blur-3xl opacity-20 ${theme === 'neon' ? 'bg-purple-500' : 'bg-gradient-to-r from-purple-300 to-pink-300'}`}
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className={`absolute -bottom-1/2 -left-1/4 w-full h-full rounded-full blur-3xl opacity-20 ${theme === 'neon' ? 'bg-cyan-500' : 'bg-gradient-to-r from-cyan-300 to-blue-300'}`}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 ${theme === 'neon' ? 'bg-primary/20 border border-primary neon-border-glow' : 'bg-primary/10'}`}>
              <Sparkles className="w-4 h-4" />
              Welcome to the Future
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
              Build Beautiful
            </span>
            <br />
            <span className={theme === 'neon' ? 'neon-glow' : ''}>
              Websites
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10"
          >
            Create stunning, responsive websites with modern design principles.
            Toggle between Light, Dark, and Neon themes effortlessly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="gradient" size="lg" className="group">
              Get Started
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '10K+', label: 'Users' },
            { number: '99%', label: 'Satisfaction' },
            { number: '24/7', label: 'Support' },
            { number: '3', label: 'Themes' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className={`text-center p-6 rounded-lg ${theme === 'neon' ? 'neon-border-glow border border-primary/30' : 'bg-card border border-border'}`}
            >
              <div className={`text-3xl md:text-4xl font-bold mb-2 ${theme === 'neon' ? 'neon-glow' : 'text-primary'}`}>
                {stat.number}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
