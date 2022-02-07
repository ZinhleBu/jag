import Head from 'next/head'
import { motion } from "framer-motion";
import React, { Fragment } from 'react';

import Header from '../components/header'


export default function About() {
  return (
    <Fragment>
      <Head>
        <title>About </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className="main">
        <Header />
        <h1>about</h1>
      </main>
    </Fragment>

  )
}
