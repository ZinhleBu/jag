import { motion } from "framer-motion";
import { useUser } from '@auth0/nextjs-auth0';

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

export default function PageTitle() {
  const { user, isLoading } = useUser();

  return (

    <motion.div

      className="pageTitleContainer" >
      <motion.div

        className="pageTitleInner" >

        <motion.h1
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: 1, y: 10,
            transition: { delay: .2, duration: 1, ...transition }
          }}
          exit={{
            opacity: 0, y: 10,
            transition: { delay: .2, duration: 1, ...transition }
          }}
        >JOHANNESBURG</motion.h1>
        <motion.span
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: 1, y: 10,
            transition: { delay: .4, duration: 1, ...transition }
          }}
          exit={{
            opacity: 0, y: 10,
            transition: { delay: .4, duration: 1, ...transition }
          }}
        >ART</motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: 1, y: 10,
            transition: { delay: .6, duration: 1, ...transition }
          }}
          exit={{
            opacity: 0, y: 10,
            transition: { delay: .6, duration: 1, ...transition }
          }}
        >
          GALLERY</motion.h1>
      </motion.div>
      {!isLoading && !user && (
      <motion.p
        initial={{ opacity: 0, y: 0 }}
        animate={{
          opacity: 1, y: 10,
          transition: { delay: .8, duration: .5, ...transition }
        }}
        exit={{
          opacity: 0, y: 10,
          transition: { delay: .8, duration: .5, ...transition }
        }}
      >Showcasing the best in Johannesburg art, culture and music
      </motion.p>
      )}
       {user && (
         <motion.p
         initial={{ opacity: 0, y: 0 }}
         animate={{
           opacity: 1, y: 10,
           transition: { delay: .8, duration: .5, ...transition }
         }}
         exit={{
           opacity: 0, y: 10,
           transition: { delay: .8, duration: .5, ...transition }
         }}
       >Welcom to the Johannesburg art Gallery site <span>{user.name}</span>
       </motion.p>
       )}
    </motion.div>
  )
}

