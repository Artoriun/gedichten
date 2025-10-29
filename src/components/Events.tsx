import { motion } from 'framer-motion'
import './Events.css'

const Events = () => {
  const events = [
    {
      dates: "10/23/25 - 11/13/25",
      title: "Voices of Budapest",
      description: "A literary evening featuring readings of rediscovered Hungarian poems from the early 1900s. The event includes traditional Hungarian refreshments and live folk music performances.",
      link: "#"
    },
    {
      dates: "1/29/26 - 3/10/26", 
      title: "Heritage & Verse",
      description: "An exhibition of original manuscripts and published works exploring Magyar cultural identity through poetry. Features interactive displays and guided tours with literary historians.",
      link: "#"
    },
    {
      dates: "3/19/26 - 5/21/26",
      title: "Timeless Words", 
      description: "A spring symposium celebrating Hungarian literary tradition with poetry workshops, academic discussions, and dramatic readings. Limited edition reprints of rare collections available.",
      link: "#"
    }
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  }

  return (
    <section className="events" id="events">
      <div className="events-container">
        <motion.h2 
          className="section-title"
          initial="hidden"
          whileInView="visible"
          variants={itemVariants}
          viewport={{ once: true }}
        >
          Upcoming Events
        </motion.h2>
        
        <motion.div 
          className="events-grid"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="event-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="event-dates">{event.dates}</div>
              <h3 className="event-title">{event.title}</h3>
              <p className="event-description">{event.description}</p>
              <a href={event.link} className="event-link">See details</a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Events