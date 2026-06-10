import { Moon, Sun, Zap } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function ThemeToggle({ theme, setTheme }) {
  const cycleTheme = () => {
    if (theme === "light") setTheme("dark")
    else if (theme === "dark") setTheme("neon")
    else setTheme("light")
  }

  const getIcon = () => {
    switch (theme) {
      case "light":
        return <Sun className="h-5 w-5" />
      case "dark":
        return <Moon className="h-5 w-5" />
      case "neon":
        return <Zap className="h-5 w-5" />
      default:
        return <Sun className="h-5 w-5" />
    }
  }

  const getLabel = () => {
    switch (theme) {
      case "light":
        return "Light"
      case "dark":
        return "Dark"
      case "neon":
        return "Neon"
      default:
        return "Light"
    }
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={cycleTheme}
      className="relative overflow-hidden"
    >
      <motion.div
        key={theme}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        exit={{ scale: 0, rotate: 180 }}
        transition={{ duration: 0.3 }}
      >
        {getIcon()}
      </motion.div>
      <span className="sr-only">{getLabel()} theme</span>
    </Button>
  )
}
