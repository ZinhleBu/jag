import { AnimatePresence, motion } from 'framer-motion'
import '../styles/globals.css'
import '../styles/Home.scss'


function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter>
       <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1}
        }
        exit={{ opacity: 0 }}
       
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  )
}

export default MyApp
