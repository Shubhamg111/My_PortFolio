import { NavLink, Link } from "react-router-dom"
import { useTheme } from "./ThemeProvider"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import logo from '../assets/logo.png'

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  // { to: "/work", label: "Work" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
]

export default function Navbar() {
  const { theme, toggle } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-[#0b111a]/70 border-b border-black/5 dark:border-white/10">
      <div className="container-max flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <img
            src={logo}
            alt="Best Python instructor and Django developer in Kathmandu"
            className="w-8 h-8 rounded"
          />
          <span>Subham Gupta</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `navlink ${isActive ? "navlink-active" : ""}`
              }
              end={n.to === "/"}
            >
              {n.label}
            </NavLink>
          ))}
          <button
            aria-label="Toggle dark mode"
            onClick={toggle}
            className="ml-2 px-3 py-2 rounded-lg border border-black/10 dark:border-white/10"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
        </nav>

        {/* Mobile Actions */}
        <div className="md:hidden flex items-center gap-2">
          {/* Theme toggle */}
          <button
            aria-label="Toggle theme"
            onClick={toggle}
            className="px-3 py-2 rounded-lg border border-black/10 dark:border-white/10"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>

          {/* Hamburger */}
          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="px-3 py-2 rounded-lg border border-black/10 dark:border-white/10"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-[#0b111a] border-t border-black/10 dark:border-white/10 shadow-lg"
          >
            <div className="flex flex-col p-4 space-y-3">
              {nav.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  className={({ isActive }) =>
                    `navlink block ${isActive ? "navlink-active" : ""}`
                  }
                  onClick={() => setMenuOpen(false)}
                  end={n.to === "/"}
                >
                  {n.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
