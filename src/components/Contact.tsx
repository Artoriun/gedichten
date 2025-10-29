import { motion } from 'framer-motion'
import './Contact.css'

const Contact = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  }

  const socialLinks = [
    { name: 'Facebook', url: '#' },
    { name: 'Instagram', url: '#' },
    { name: 'Twitter', url: '#' }
  ]

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-content">
          <motion.h2 
            className="contact-title"
            initial="hidden"
            whileInView="visible"
            variants={fadeInVariants}
            viewport={{ once: true }}
          >
            Only your imagination limits you
          </motion.h2>
          
          <motion.div 
            className="contact-cta"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.6, delay: 0.2 }
              }
            }}
            viewport={{ once: true }}
          >
            <a href="mailto:kovacs@poetry.hu" className="contact-btn">
              Explore Collection
            </a>
          </motion.div>

          <motion.div 
            className="contact-info"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.6, delay: 0.4 }
              }
            }}
            viewport={{ once: true }}
          >
            <div className="artist-name">Kovács</div>
            <a href="mailto:kovacs@poetry.hu" className="email-link">
              kovacs@poetry.hu
            </a>
            
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.url} className="social-link">
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.footer 
            className="footer"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { duration: 0.6, delay: 0.6 }
              }
            }}
            viewport={{ once: true }}
          >
            <div className="copyright">© 2025 Hungarian Poetry Archive</div>
            <div className="template-credit">
              Digital preservation by <a href="#" className="credit-link">Literary Heritage Foundation</a>
            </div>
          </motion.footer>
        </div>

        <motion.div 
          className="contact-artwork"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { 
              opacity: 1, 
              scale: 1,
              transition: { duration: 0.8, delay: 0.3 }
            }
          }}
          viewport={{ once: true }}
        >
          <div className="artwork-grid">
            <img 
              src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=928&h=1280&fit=crop" 
              alt="Vintage Hungarian manuscript with handwritten poetry"
              className="main-artwork"
            />
            <img 
              src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=464&h=640&fit=crop" 
              alt="Autumn leaves with poetry book"
              className="side-artwork"
            />
            <img 
              src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=464&h=640&fit=crop" 
              alt="Open book of poems in natural setting"
              className="side-artwork"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact