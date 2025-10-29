import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  }

  return (
    <section className="about" id="about">
      <div className="about-container">
        <motion.h2 
          className="section-title"
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariants}
          viewport={{ once: true }}
        >
          About
        </motion.h2>
        
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial="hidden"
            whileInView="visible"
            variants={fadeInVariants}
            viewport={{ once: true }}
          >
            <p>
              Born in Budapest in the early 1900s, this Hungarian poet emerged during a transformative 
              period in literature. Their work reflects the cultural renaissance of the Austro-Hungarian 
              Empire's final decades, blending traditional Magyar folk themes with modernist sensibilities.
            </p>
            <p>
              Writing primarily in Hungarian with occasional German influences, their poetry captures 
              the melancholy beauty of a changing world. Published works include intimate love sonnets, 
              patriotic verses celebrating Hungarian heritage, and philosophical meditations on time and memory.
            </p>
          </motion.div>

          <div className="about-images">
            <motion.div 
              className="image-group-1"
              initial="hidden"
              whileInView="visible"
              variants={fadeInVariants}
              viewport={{ once: true }}
            >
              <div className="portrait-image">
                <img 
                  src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=468&h=470&fit=crop" 
                  alt="Vintage typewriter and manuscripts"
                />
              </div>
              
              <div className="signature-image">
                <img 
                  src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=100&fit=crop" 
                  alt="Poet's manuscript signature"
                />
              </div>
            </motion.div>

            <motion.div 
              className="painting-image"
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { 
                  opacity: 1, 
                  x: 0,
                  transition: { duration: 0.8, delay: 0.2 }
                }
              }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=616&h=384&fit=crop" 
                alt="Open book of poetry in nature"
              />
            </motion.div>
          </div>
        </div>

        <div className="about-gallery">
          <motion.div 
            className="gallery-image large"
            initial="hidden"
            whileInView="visible"
            variants={fadeInVariants}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1104&h=600&fit=crop" 
              alt="Vintage typewriter and manuscripts on wooden table"
            />
          </motion.div>

          <motion.div 
            className="gallery-image small"
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
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=616&h=900&fit=crop" 
              alt="Stack of vintage poetry books with quill pen"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About