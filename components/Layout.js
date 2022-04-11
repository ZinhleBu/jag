import React from 'react';
import Head from 'next/head';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
    <>
        <Head>
            <link
                rel="stylesheet"
                href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                crossOrigin="anonymous"
            />
            <link rel="stylesheet" href="https://cdn.auth0.com/js/auth0-samples-theme/1.0/css/auth0-theme.min.css" />
            <title>Jag</title>
        </Head>
        <Header />
        <main id="app" className="main" data-testid="layout">
            <div className="Container">{children}</div>
            <Footer />
        </main>
    </>
);

export default Layout;
