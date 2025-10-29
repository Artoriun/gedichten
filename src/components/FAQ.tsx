import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './FAQ.css'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Are these poems available for translation or adaptation?",
      answer: "Many works are in the public domain, allowing for translations and adaptations. For more recent publications or specific usage rights, please contact our literary estate representatives for permissions and licensing information."
    },
    {
      question: "How are the books shipped and how long does delivery take?",
      answer: "All poetry collections are carefully packaged to preserve their condition during shipping. Domestic orders typically take 5-7 business days, while international shipping takes 10-14 business days depending on location."
    },
    {
      question: "Are the books available in English translation?",
      answer: "Select works have been translated into English, German, and French. Original Hungarian editions are also available. We're continuously working on expanding our translation offerings."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for books in original condition. Limited edition or rare collections may have different terms, which are clearly stated at the time of purchase."
    },
    {
      question: "How should I care for these vintage poetry collections?",
      answer: "Store books in cool, dry conditions away from direct sunlight. Handle with clean hands, avoid folding pages, and use proper bookmarks. For rare editions, consider archival storage materials."
    }
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section className="faq" id="faq">
      <div className="faq-container">
        <motion.h2 
          className="section-title"
          initial="hidden"
          whileInView="visible"
          variants={itemVariants}
          viewport={{ once: true }}
        >
          Not sure about something?
        </motion.h2>
        
        <div className="faq-content">
          <motion.div 
            className="faq-list"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="faq-item"
                variants={itemVariants}
              >
                <button
                  className={`faq-question ${openIndex === index ? 'active' : ''}`}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  {faq.question}
                  <span className="faq-icon">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="faq-answer-content">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="faq-stats"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: { duration: 0.8, delay: 0.2 }
              }
            }}
            viewport={{ once: true }}
          >
            <div className="stat-number">200+</div>
            <div className="stat-label">Poems preserved</div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FAQ