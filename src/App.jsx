import { useTheme } from './hooks/useTheme'
import { ScrollProgress } from './components/animation/ScrollProgress'
import { CustomCursor } from './components/animation/CustomCursor'
import { AnimatedToggle } from './components/animation/AnimatedToggle'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { HeroSection } from './components/sections/HeroSection'
import { AboutSection } from './components/sections/AboutSection'
import { ProgramsSection } from './components/sections/ProgramsSection'
import { CampusSection } from './components/sections/CampusSection'
import { TestimonialsSection } from './components/sections/TestimonialsSection'
import { CTASection } from './components/sections/CTASection'

export default function App() {
  const { dark, toggleTheme } = useTheme()
  return <div className="app-shell"><ScrollProgress /><CustomCursor /><Navbar themeToggle={<AnimatedToggle dark={dark} onToggle={toggleTheme} />} /><main><HeroSection /><AboutSection /><ProgramsSection /><CampusSection /><TestimonialsSection /><CTASection /></main><Footer /></div>
}
