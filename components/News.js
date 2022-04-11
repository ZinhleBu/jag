import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Link from 'next/link'
const transition = { duration: .6, ease: [0.6, 0.01, -0.05, 0.9] };

export default function News() {

    return (
        <div className="newsContainer Container">

            <div className="newsInner">
                <InView threshold={.4}>
                    {({ ref, inView }) => (
                        <div className="newsTitleSec">
                            <motion.h2
                                ref={ref}
                                initial={{ opacity: 0, y: 10 }}
                                animate={inView ? { opacity: 1, y: 0, transition: { delay: 1, ...transition } } : { opacity: 0, y: 10 }}
                                exit={{
                                    opacity: 0,
                                    y: 10,
                                    transition: { delay: .2, duration: .4, ...transition }
                                }}
                                className="newsTitle">News and Events</motion.h2>
                            <motion.p
                                ref={ref}
                                initial={{ opacity: 0, y: 10 }}
                                animate={inView ? { opacity: 1, y: 0, transition: { delay: 1, ...transition } } : { opacity: 0, y: 10 }}
                                exit={{
                                    opacity: 0,
                                    y: 10,
                                    transition: { delay: .4, duration: .4, ...transition }
                                }}
                                className="newsDescription">Latest news on recent exhibitions and articles</motion.p>
                            <motion.button
                                ref={ref}
                                initial={{ opacity: 0, y: 10 }}
                                animate={inView ? { opacity: 1, y: 0, transition: { delay: 1, ...transition } } : { opacity: 0, y: 10 }}
                                exit={{
                                    opacity: 0,
                                    y: 10,
                                    transition: { delay: .6, duration: .4, ...transition }
                                }}
                                className="seeMoreButton">
                                <Link href="/">SEE MORE</Link>
                            </motion.button>
                           
                        </div>
                    )}</InView >

                <div className="cards">
                    <InView threshold={.5}>
                        {({ ref, inView }) => (
                            <div className="card">
                                <div className="cardImg">

                                    <motion.div
                                        ref={ref}
                                        initial={{ width: "100%" }}
                                        animate={inView ? { width: "0%", transition: { delay: .2, duration: .4, ...transition } } : { width: "100%", transition: { delay: .2, duration: .4, ...transition } }}
                                        exit={{
                                            width: "100%",
                                            transition: { delay: .2, duration: .4, ...transition }
                                        }}
                                        className="imgAfter"></motion.div>
                                    <motion.img
                                        initial={{ scale: 1.2 }}
                                        animate={{
                                            scale: 1,
                                            transition: { delay: .2, duration: .5, ...transition }
                                        }}
                                        exit={{
                                            scale: 1.2,
                                            transition: { delay: .2, duration: .5, ...transition }
                                        }}
                                        whileHover={{
                                            scale: 1.2,
                                            transition: { delay: .2, duration: .5, ...transition }
                                        }}
                                        src="../card1.webp"
                                        alt=""
                                    />
                                </div>
                                <hr
                                ></hr>
                                <motion.h2
                                    ref={ref}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={inView ? { opacity: 1, y: 0, transition: { delay: 1, ...transition } } : { opacity: 0, y: 10 }}
                                    exit={{
                                        opacity: 0,
                                        y: 10,
                                        transition: { delay: .8, duration: .4, ...transition }
                                    }}
                                    className="cardTitle">The Masai</motion.h2>
                                <motion.div
                                    ref={ref}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={inView ? { opacity: 1, y: 0, transition: { delay: 1, ...transition } } : { opacity: 0, y: 10 }}
                                    exit={{
                                        opacity: 0,
                                        y: 10,
                                        transition: { delay: 1, duration: .4, ...transition }
                                    }}
                                    className="line1">
                                    <p className="cardDescription">Tedai Masuke</p>
                                    <p className="cardDate">Kenya 2021</p>
                                </motion.div>
                                <motion.div
                                    ref={ref}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={inView ? { opacity: 1, y: 0, transition: { delay: 1, ...transition } } : { opacity: 0, y: 10 }}
                                    exit={{
                                        opacity: 0,
                                        y: 10,
                                        transition: { delay: 1.2, duration: .4, ...transition }
                                    }}
                                    className="line2">
                                    <p className="cardCategory">Photography</p>
                                    <button className="cardButton">
                                        <Link href="">
                                            Read more
                                        </Link>
                                    </button>
                                </motion.div>
                            </div>
                        )}</InView >

                </div>

                <div className="cards">
                    <InView threshold={.5}>
                        {({ ref, inView }) => (
                            <div className="card">
                                <div className="cardImg">
                                    <motion.div
                                        ref={ref}
                                        initial={{ width: "100%" }}
                                        animate={inView ? { width: "0%", transition: { delay: .4, duration: .4, ...transition } } : { width: "100%", transition: { delay: .4, duration: .4, ...transition } }}
                                        transition={({ delay: .4 }, { duration: .5 }, { ...transition })}
                                        exit={{
                                            width: "100%",
                                            transition: { delay: .2, duration: .4, ...transition }
                                        }}
                                        className="imgAfter" />
                                    <motion.img
                                        initial={{ scale: 1.2 }}
                                        animate={{
                                            scale: 1,
                                            transition: { delay: .2, duration: .5, ...transition }
                                        }}
                                        exit={{
                                            scale: 1.2,
                                            transition: { delay: .2, duration: .5, ...transition }
                                        }}
                                        whileHover={{
                                            scale: 1.2,
                                            transition: { delay: .2, duration: .5, ...transition }
                                        }}
                                        src="../african.webp"
                                        alt=""
                                    />
                                </div>
                                <hr

                                ></hr>
                                <motion.h2
                                    ref={ref}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={inView ? { opacity: 1, y: 0, transition: { delay: 1, ...transition } } : { opacity: 0, y: 10 }}
                                    exit={{
                                        opacity: 0,
                                        y: 10,
                                        transition: { delay: 1, duration: .4, ...transition }
                                    }}
                                    className="cardTitle">African Chique</motion.h2>
                                <motion.div
                                    ref={ref}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={inView ? { opacity: 1, y: 0, transition: { delay: 1.2, ...transition } } : { opacity: 0, y: 10 }}
                                    exit={{
                                        opacity: 0,
                                        y: 10,
                                        transition: { delay: 1.2, duration: .4, ...transition }
                                    }}
                                    className="line1">
                                    <p className="cardDescription">Basetsana Moremi</p>
                                    <p className="cardDate">SA 2021</p>
                                </motion.div>
                                <motion.div
                                    ref={ref}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={inView ? { opacity: 1, y: 0, transition: { delay: 1.2, ...transition } } : { opacity: 0, y: 10 }}
                                    exit={{
                                        opacity: 0,
                                        y: 10,
                                        transition: { delay: 1.2, duration: .4, ...transition }
                                    }}
                                    className="line2">
                                    <p className="cardCategory">Fashion</p>
                                    <button className="cardButton">
                                        <Link href="">
                                            Read more
                                        </Link>
                                    </button>
                                </motion.div>
                            </div>
                        )}</InView >

                </div>

                <div className="cards">
                    <InView threshold={.5}>
                        {({ ref, inView }) => (
                            <div className="card">
                                <div className="cardImg">
                                    <motion.div
                                        ref={ref}
                                        initial={{ width: "100%" }}
                                        animate={inView ? { width: "0%", transition: { delay: .6, duration: .4, ...transition } } : { width: "100%", transition: { delay: .6, duration: .4, ...transition } }}
                                        transition={({ delay: .6 }, { duration: .5 }, { ...transition })}
                                        exit={{
                                            width: "100%",
                                            transition: { delay: .2, duration: .4, ...transition }
                                        }}
                                        className="imgAfter"></motion.div>
                                    <motion.img
                                        initial={{ scale: 1.2 }}
                                        animate={{
                                            scale: 1,
                                            transition: { delay: .2, duration: .5, ...transition }
                                        }}
                                        exit={{
                                            scale: 1.2,
                                            transition: { delay: .2, duration: .5, ...transition }
                                        }}
                                        whileHover={{
                                            scale: 1.2,
                                            transition: { delay: .2, duration: .5, ...transition }

                                        }}

                                        src="../burundi.webp"
                                        alt=""
                                    />
                                </div>
                                <hr

                                ></hr>
                                <motion.h2
                                    ref={ref}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={inView ? { opacity: 1, y: 0, transition: { delay: 1.2, ...transition } } : { opacity: 0, y: 10 }}
                                    exit={{
                                        opacity: 0,
                                        y: 10,
                                        transition: { delay: 1.2, duration: .4, ...transition }
                                    }}
                                    className="cardTitle">Borumbi</motion.h2>
                                <motion.div
                                    ref={ref}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={inView ? { opacity: 1, y: 0, transition: { delay: 1.4, ...transition } } : { opacity: 0, y: 10 }}
                                    exit={{
                                        opacity: 0,
                                        y: 10,
                                        transition: { delay: 1.4, duration: .4, ...transition }
                                    }}
                                    className="line1">
                                    <p className="cardDescription">Chico Mahv</p>
                                    <p className="cardDate">Ghana 2020</p>
                                </motion.div>
                                <motion.div
                                    ref={ref}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={inView ? { opacity: 1, y: 0, transition: { delay: 1.4, ...transition } } : { opacity: 0, y: 10 }}
                                    exit={{
                                        opacity: 0,
                                        y: 10,
                                        transition: { delay: 1.4, duration: .4, ...transition }
                                    }}
                                    className="line2">
                                    <p className="cardCategory">Photography</p>
                                    <button className="cardButton">
                                        <Link href="">
                                            Read more
                                        </Link></button>
                                </motion.div>
                            </div>
                        )}</InView >

                </div>

            </div>
        </div>
    );
}
