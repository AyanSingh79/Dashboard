import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Button } from './Button';
import { useTheme } from './ThemeProvider';

export default function Contact() {
  const { theme } = useTheme();

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${theme === 'neon' ? 'neon-glow' : ''}`}>
              Get in Touch
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Have a question or want to work together? We'd love to hear from you.
            </p>

            <div className="space-y-6">
              {[
                { icon: Mail, label: 'Email', value: 'hello@aesthetic.com' },
                { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
                { icon: MapPin, label: 'Location', value: 'San Francisco, CA' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    theme === 'neon' 
                      ? 'bg-primary/20 neon-box-glow' 
                      : 'bg-gradient-to-br from-purple-500 to-pink-500'
                  }`}>
                    <item.icon className={`w-6 h-6 ${theme === 'neon' ? 'text-primary' : 'text-white'}`} />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                    <div className="font-medium">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`p-8 rounded-xl ${
              theme === 'neon'
                ? 'neon-border-glow border border-primary/30 bg-card/50'
                : 'bg-card border border-border'
            }`}
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    className={`w-full px-4 py-3 rounded-lg bg-background border border-input focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
                      theme === 'neon' ? 'focus:neon-border-glow' : ''
                    }`}
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    className={`w-full px-4 py-3 rounded-lg bg-background border border-input focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
                      theme === 'neon' ? 'focus:neon-border-glow' : ''
                    }`}
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className={`w-full px-4 py-3 rounded-lg bg-background border border-input focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
                    theme === 'neon' ? 'focus:neon-border-glow' : ''
                  }`}
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  className={`w-full px-4 py-3 rounded-lg bg-background border border-input focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none ${
                    theme === 'neon' ? 'focus:neon-border-glow' : ''
                  }`}
                  placeholder="Your message..."
                />
              </div>

              <Button variant={theme === 'neon' ? 'neon' : 'default'} size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
