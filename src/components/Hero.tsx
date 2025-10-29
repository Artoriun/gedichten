import { motion } from 'framer-motion'
import './Hero.css'

const Hero = () => {
  const artworks = [
    {
      title: "Őszi Álmok",
      category: "Autumn Dreams Collection",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=400&fit=crop"
    },
    {
      title: "Budapest Éjszaka",
      category: "Urban Verses", 
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop"
    },
    {
      title: "Szerelem Szavai",
      category: "Love Poetry Series",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=400&fit=crop"
    },
    {
      title: "Múlt Emlékei", 
      category: "Historical Reflections",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section className="hero">
      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="hero-title"
          variants={itemVariants}
        >
          Kovács
        </motion.h1>
        
        <motion.p 
          className="hero-subtitle"
          variants={itemVariants}
        >
          Timeless verses capturing the soul of early 20th century Hungary, where words dance between tradition and modernity.
        </motion.p>

        <motion.div 
          className="artworks-grid"
          variants={itemVariants}
        >
          {artworks.map((artwork) => (
            <motion.div
              key={artwork.title}
              className="artwork-card"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="artwork-image">
                <img src={artwork.image} alt={artwork.title} />
              </div>
              <div className="artwork-info">
                <span className="artwork-type">Published poem</span>
                <h3 className="artwork-title">{artwork.title}</h3>
                <p className="artwork-category">{artwork.category}</p>
                <button className="read-poem-btn">Read Poem</button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="view-all"
          variants={itemVariants}
        >
          <button className="view-all-btn">View All Poems</button>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero