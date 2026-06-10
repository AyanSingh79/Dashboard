import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ThemeToggle } from "@/components/ThemeToggle"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Zap, Palette } from "lucide-react"

function App() {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "dark", "neon")
    root.classList.add(theme)
  }, [theme])

  return (
    <div className="min-h-screen bg-background transition-colors duration-500">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <Sparkles className={`h-6 w-6 ${theme === "neon" ? "text-neon-blue animate-pulse" : "text-primary"}`} />
            <span className="font-bold text-xl">AestheticUI</span>
          </motion.div>
          
          <div className="flex items-center gap-4">
            <ThemeToggle theme={theme} setTheme={setTheme} />
            <Button variant={theme === "neon" ? "neon" : "default"}>
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
              <Zap className="h-4 w-4" />
              <span className="text-sm font-medium">Three Beautiful Themes</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Build Stunning Websites
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A modern, aesthetic website template with light, dark, and neon themes. 
              Built with React, Tailwind CSS, Framer Motion, and shadcn/ui components.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant={theme === "neon" ? "neon" : "default"}
                className="group"
              >
                Start Building
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                View Components
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Palette,
                title: "Three Themes",
                description: "Seamlessly switch between light, dark, and vibrant neon themes with a single click."
              },
              {
                icon: Sparkles,
                title: "Modern Design",
                description: "Beautiful, aesthetic UI components built with the latest design trends in mind."
              },
              {
                icon: Zap,
                title: "Smooth Animations",
                description: "Powered by Framer Motion for buttery smooth transitions and interactions."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-all duration-300 ${
                  theme === "neon" ? "hover:shadow-[0_0_30px_rgba(0,243,255,0.3)]" : ""
                }`}
              >
                <feature.icon className={`h-12 w-12 mb-4 ${
                  theme === "neon" ? "text-neon-blue" : "text-primary"
                }`} />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`text-center p-12 rounded-2xl border border-border bg-card ${
              theme === "neon" ? "shadow-[0_0_50px_rgba(189,0,255,0.2)]" : ""
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Start building your next project with this beautiful, theme-switchable template.
            </p>
            <Button 
              size="lg" 
              variant={theme === "neon" ? "neon" : "default"}
              className="animate-pulse"
            >
              Get Started Now
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>Built with React, Tailwind CSS, Framer Motion & shadcn/ui</p>
        </div>
      </footer>
    </div>
  )
}

export default App
