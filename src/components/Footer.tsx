import { motion } from 'framer-motion'
import './Footer.css'

const Footer = () => {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3, delay: 0.1 }
    }
  }

  return (
    <motion.footer 
      className="footer"
      initial="hidden"
      whileInView="visible"
      variants={fadeInVariants}
      viewport={{ once: true }}
    >
      <div className="footer-container">
        <div className="copyright">© 2025 Kovács Poetry Collection • Magyar Költészeti Archívum</div>
        <div className="template-credit">
          Preserving the voices of <a href="#" className="credit-link">Hungarian Literary Heritage</a>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer