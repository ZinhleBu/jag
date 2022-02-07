import Image from 'next/image'
import banner from '../public/banner.webp'
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";
const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

export default function Banner() {


    return (
        <InView threshold={.5}>
            {({ ref, inView }) => (
                <div className="bannerContainer">
                    <div className="bannerInner">

                        <motion.div
                            ref={ref}
                            initial={{ width: "100%" }}
                            animate={inView ? { width: "0%", transition: { delay: .2, duration: .4, ...transition } } : { width: "100%", transition: { delay: .2, duration: .4, ...transition } }}
                            exit={{
                                width: "100%",
                                transition: { delay: .2, duration: .4, ...transition }
                            }}
                            className="bannerAfter"></motion.div>
                        <Image
                            src={banner}
                            alt=""
                            height={1000}
                            width={1900}
                            position="fixed"
                            objectFit="cover"
                        />

                    </div>

                </div>
            )}</InView >
    )
}
