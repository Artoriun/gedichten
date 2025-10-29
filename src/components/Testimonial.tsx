import { motion } from 'framer-motion'
import './Testimonial.css'

const Testimonial = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  }

  return (
    <section className="testimonial" id="testimonial">
      <div className="testimonial-container">
        <div className="testimonial-content">
          <motion.blockquote 
            className="testimonial-quote"
            initial="hidden"
            whileInView="visible"
            variants={fadeInVariants}
            viewport={{ once: true }}
          >
            "These timeless Hungarian verses bring a profound sense of heritage and beauty to our home library, inspiring contemplation every day."
          </motion.blockquote>
          
          <motion.div 
            className="testimonial-author"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: { duration: 0.8, delay: 0.2 }
              }
            }}
            viewport={{ once: true }}
          >
            <div className="author-avatar">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face" 
                alt="Reader avatar"
              />
            </div>
            <div className="author-name">Anna Kovács</div>
          </motion.div>
        </div>

        <motion.div 
          className="testimonial-image"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { 
              opacity: 1, 
              scale: 1,
              transition: { duration: 0.8, delay: 0.3 }
            }
          }}
          viewport={{ once: true }}
        >
          <img 
            src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1456&h=816&fit=crop" 
            alt="Cozy library with vintage poetry books on wooden shelf"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonial