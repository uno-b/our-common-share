import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const Item = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
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
  )
}

export default Item
