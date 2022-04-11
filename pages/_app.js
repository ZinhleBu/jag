import { AnimatePresence} from 'framer-motion'
import { UserProvider } from '@auth0/nextjs-auth0';
import '../styles/globals.scss'
import '../styles/Home.scss'
import Layout from '../components/Layout';


function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <AnimatePresence exitBeforeEnter>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AnimatePresence>
    </UserProvider >
  )
}

export default MyApp
