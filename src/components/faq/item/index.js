import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Fade from "react-reveal/fade"

const Item = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Fade bottom duration={1000} delay={600} distance="30px">
      <motion.li layout onClick={toggleOpen}>
        <motion.h2 layout>{question}</motion.h2>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {answer}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.li>
    </Fade>
  )
}

export default Item
