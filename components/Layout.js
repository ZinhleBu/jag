import React from 'react';
import Head from 'next/head';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
    <>

        <Header />
        <main className="main">
            <div className="Container">
                {children}
            </div>

        </main>
        <Footer className="Container" />
    </>
);

export default Layout;
