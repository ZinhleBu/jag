import PageTitle from './PageTitle'
import { motion } from "framer-motion";


const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const Hero = () => {


    return (

        <div className="heroContainer Container"
        >
            <div className="heroInner">
                <PageTitle />
                <div className="heroImg">
                    <motion.div 
                    initial={{ width: "100%" }}
                    animate={{ width: "0%",
                    transition: { delay: 0, duration: .4, ...transition }
                   }}
                    exit={{width: "100%",
                    transition: { delay: 0, duration: .4, ...transition }
                   }}
                    className="imgAfter"></motion.div>
                    <motion.img 
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1,
                      transition: { delay: .4, duration: .5, ...transition }
                     }}
                      exit={{scale: 1.2,
                      transition: { delay: .4, duration: .5, ...transition }
                     }}
                     whileHover={{ scale: 1.2,
                        transition: { delay: .4, duration: .5, ...transition }

                    }}
                     
                    src="../hero-img.webp"
                        alt=""
                         />
                </div>
            </div>

        </div>
    )
}
export default Hero