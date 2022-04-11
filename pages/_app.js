import { AnimatePresence, motion } from 'framer-motion'
import { UserProvider } from '@auth0/nextjs-auth0';
import '../styles/globals.css'
import '../styles/Home.scss'
import Layout from '../components/Layout';


function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }
          }
          exit={{ opacity: 0 }}
        >
            <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </UserProvider >
  )
}

export default MyApp
