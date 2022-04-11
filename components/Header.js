import React, { useState } from 'react';
import { motion } from "framer-motion";
import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/jag.png'
import { useUser } from '@auth0/nextjs-auth0';

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

export default function Header() {
    const { user, isLoading } = useUser();


    return (

        <div className="header">
            <motion.div
                key={2}

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
                    key={3}

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
                        <Link href="/" title="" passHref>
                            <motion.a
                                key={4}

                                whileHover={{
                                    color: "red"

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
                    {user && (
                        <>
                            <li className="li">
                                <Link href='/blog'>

                                    <a className="a">Blog</a>

                                </Link>
                            </li>

                        </>
                    )}

                </motion.div>


            </div>
            {!isLoading && !user && (
                <Link

                    href="/api/auth/login">
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
                            >L</motion.span>
                            <motion.span key={8}
                            >o</motion.span>
                            <motion.span key={9}
                            >g</motion.span>
                            <motion.span key={10}
                            >i</motion.span>
                            <motion.span key={11}
                            >n</motion.span>
                        </motion.div>
                        Login</motion.a>
                </Link>
            )}
            {user && (
                <>
                    <div className="logo">
                        <Link  href="/api/auth/logout">
                            <motion.a
                                key={13}
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
                                href="/api/auth/logout"
                                className="signupButton">

                                <motion.div
                                    key={14}

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
                                    }}
                                    exit={{
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
                                    <motion.span key={15}
                                    >L</motion.span>
                                    <motion.span key={16}
                                    >o</motion.span>
                                    <motion.span key={17}
                                    >g</motion.span>
                                    <motion.span key={18}
                                    >o</motion.span>
                                    <motion.span key={19}
                                    >u</motion.span>
                                    <motion.span key={20}
                                    >t</motion.span>

                                </motion.div>
                                Logout</motion.a>
                        </Link>
                        <div>
                            <img src={user.picture} alt="Profile"
                                className="nav-user-profile rounded-circle"
                                width="50"
                                height="50"
                                decode="async"
                                data-testid="navbar-picture-desktop" />
                        </div>
                        <a href="/profile"> Profile</a>
                    </div>
                </>
            )}
        </div>
    )
}
