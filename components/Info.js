import Image from 'next/image'
import mike from '../public/mike.jpg'
import omar from '../public/omar.jpg'
import Link from 'next/link'
import { motion } from "framer-motion";


const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

export default function Info() {


    return (

        <div className="infoContainer">
            <div className="infoInner">
                <section className="infoSec1">
                    <h1>BECOME  A  <span>FRIEND</span>  OF  JAG </h1>
                    <p>
                        Getting to know some of the young
                        and upcoming artists in the city
                        of Johannesburg
                        <br></br>
                        Join us in this exploration and witness
                        Some of the best works of art by some
                        of the leading artists in the country
                    </p>

                    <Link
                        className="infoButton"
                        href="/api/auth/login"
                        passHref>
                        <motion.a
                            key={5}

                            initial={{
                                color: "red", top: -100,
                                transition: { delay: 1.2, duration: 1, ...transition }
                            }}
                            animate={{
                                color: "black", top: -0,
                                transition: { delay: 1.2, duration: 1, ...transition }
                            }}
                            exit={{
                                color: "red", opacity: 0, top: -100,
                                transition: { delay: .2, duration: .4, ...transition }
                            }}
                            whileHover={{
                                color: "black",
                                transition: { delay: .1, duration: .2, ...transition }
                            }}
                            href="/api/auth/login"
                            className="signupButton">

                            <motion.div
                                key={6}

                                initial={{
                                    x: "-110%",
                                    skew: "0deg",
                                    transition: { delay: .2, duration: .4, ...transition }
                                }}
                                animate={{
                                    x: "0%",
                                    skew: "0deg",

                                    transition: {
                                        delay: .2, duration: 1,
                                        ...transition
                                    }
                                }} exit={{
                                    x: "-110%",
                                    skew: "10deg",

                                    transition: { delay: .2, duration: .4, ...transition }
                                }}
                                whileHover={{
                                    x: "-110%",
                                    skew: "10deg",
                                    transition: { delay: .2, duration: .4, ...transition }
                                }}
                                className="btnAfter">
                                <motion.span key={7}
                                >J</motion.span>
                                <motion.span key={8}
                                >o</motion.span>
                                <motion.span key={9}
                                >i</motion.span>
                                <motion.span key={10}
                                >n</motion.span>

                            </motion.div>
                            Join</motion.a>
                    </Link>

                </section>
                <section className="infoSec2">
                    <div className="imgContainer">
                        <Image
                            src={omar}
                            alt=""
                        />
                    </div>
                    <div className="imgContainer">
                        <Image
                            src={mike}
                            alt=""
                        />
                    </div>
                </section>
            </div>
        </div>
    )
}
