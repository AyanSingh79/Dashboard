import { motion } from 'framer-motion';
import { Palette, Zap, Layers, Smartphone, Globe, Heart } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const features = [
  {
    icon: Palette,
    title: 'Beautiful Themes',
    description: 'Three stunning themes - Light, Dark, and Neon - each carefully crafted for the best visual experience.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Built with React and Vite for optimal performance and instant page loads.',
  },
  {
    icon: Layers,
    title: 'Modern Stack',
    description: 'Powered by Tailwind CSS, Framer Motion, and shadcn/ui components.',
  },
  {
    icon: Smartphone,
    title: 'Fully Responsive',
    description: 'Looks perfect on all devices, from mobile phones to large desktop screens.',
  },
  {
    icon: Globe,
    title: 'SEO Optimized',
    description: 'Built with best practices for search engine optimization.',
  },
  {
    icon: Heart,
    title: 'Made with Love',
    description: 'Every detail is thoughtfully designed to provide the best user experience.',
  },
];

export default function Features() {
  const { theme } = useTheme();

  return (
    <section id="features" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'neon' ? 'neon-glow' : ''}`}>
            Amazing Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build modern, beautiful websites
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`p-8 rounded-xl transition-all duration-300 ${
                theme === 'neon'
                  ? 'neon-border-glow border border-primary/30 bg-card/50'
                  : 'bg-card border border-border hover:shadow-lg'
              }`}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 ${
                  theme === 'neon'
                    ? 'bg-primary/20 neon-box-glow'
                    : 'bg-gradient-to-br from-purple-500 to-pink-500'
                }`}
              >
                <feature.icon className={`w-7 h-7 ${theme === 'neon' ? 'text-primary' : 'text-white'}`} />
              </motion.div>
              
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
