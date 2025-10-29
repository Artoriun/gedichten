import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Navigation.css'

interface MenuItem {
  label: string
  href: string
}

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems: MenuItem[] = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Testimonial', href: '#testimonial' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' }
  ]

  const handleMenuItemClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const handleContactClick = () => {
    const contactElement = document.querySelector('#contact')
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="navigation">
      <div className="nav-container">
        {/* Combined Button Container with Separate Contact and Menu */}
        <div className="menu-container">
          <div className="combined-button-container">
            {/* Contact Icon Button */}
            <button 
              className="contact-icon-btn"
              onClick={handleContactClick}
            >
              <svg 
                className="contact-icon" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </button>
            
            {/* Menu Toggle Button */}
            <button 
              className="menu-toggle-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className={`menu-line ${isMenuOpen ? 'line1' : ''}`}></span>
              <span className={`menu-line ${isMenuOpen ? 'line2' : ''}`}></span>
              <span className={`menu-line ${isMenuOpen ? 'line3' : ''}`}></span>
            </button>
          </div>

          {/* Dropdown Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="dropdown-menu"
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.label}
                    className="menu-item"
                    onClick={() => handleMenuItemClick(item.href)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  )
}

export default Navigation