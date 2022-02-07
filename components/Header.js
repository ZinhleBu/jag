import { motion } from "framer-motion";
import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/jag.png'

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };



export default function Header() {

    return (

        <div className="header">
            <motion.div
                initial={{ top: -100 }}
                animate={{
                    top: 0,
                    transition: { delay: 1, duration: .4, ...transition }
                }}
                exit={{
                    top: -100,
                    transition: { delay: .4, duration: .4, ...transition }
                }}
                className="logo">
                <Image
                    src={logo}
                    alt="logo"
                    width={80}
                    height={40}
                />
            </motion.div>
            <div className="navbar">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 1, duration: .4, ...transition }
                    }}
                    exit={{
                        opacity: 0,
                        transition: { delay: 1, duration: .4, ...transition }
                    }}
                    className="ul">
                    <li className="li">
                        <Link href="/" title="">

                            <motion.a 
                            href="/"
                            whileHover={{
                                color:"red"
                                
                            }}
                            className="a">Home</motion.a>

                        </Link>
                    </li>
                    <li className="li">
                        <Link href='/about'>

                            <a className="a">About</a>

                        </Link>
                    </li>
                    <li className="li">
                        <Link href="/">

                            <a className="a">Gallery</a>
                        </Link>
                    </li>
                    <li className="li">

                        <Link href="/">
                            <a className="a">News</a>
                        </Link>
                    </li>
                    <li className="li">

                        <Link href="/">
                            <a className="a">Contact</a>
                        </Link>
                    </li>

                </motion.div>


            </div>
            <Link
            
            href="/">
            <motion.a
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
                href="/"
                className="signupButton">

                <motion.div
                    initial={{
                        x: "-110%",
                        skew:"0deg",
                        transition: { delay: .2, duration: .4, ...transition }
                    }}
                    animate={{
                        x: "0%",
                        skew:"0deg",

                        transition: {
                            delay: .2, duration: 1,
                             ...transition
                        }
                    }} exit={{
                        x: "-110%",
                        skew:"10deg",

                        transition: { delay: .2, duration: .4, ...transition }
                    }}
                    whileHover={{
                        x: "-110%",
                        skew:"10deg",
                        transition: { delay: .2, duration: .4, ...transition }
                    }}
                    className="btnAfter">
                    <motion.span >S</motion.span>
                    <motion.span >i</motion.span>
                    <motion.span >g</motion.span>
                    <motion.span >n</motion.span>
                    <motion.span >u</motion.span>
                    <motion.span >p</motion.span>

                </motion.div>
                Sign Up</motion.a>
                </Link>
        </div>
    )
}
