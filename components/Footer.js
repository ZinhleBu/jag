import Link from 'next/link'
export default function Footer() {
    
    return (
        <div className="footerContainer Container">
            <div className="footerInner">
                <div className="footerSec">
                    <img src="../jag.png" alt="" />
                </div>
                <div className="footerSec">
                    <p>Sign up for newsletter</p>
                </div>
                <div className="footerSec">
                    <form  action="" method="post">
                        <input className="input" type="email" placeholder="Email address" />
                        <button className="formBtn" type="submit">Send</button>
                    </form>
                </div>
                <div className="footerSec">
                    <div></div>
                </div>
                <div className="footerSec">
                    <nav>
                        <ul>
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/">About</Link>
                            </li>
                            <li>
                                <Link href="/">Gallery</Link>
                            </li>
                            <li>
                                <Link href="/">News</Link>
                            </li>
                            <li>
                                <Link href="/">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="footerSec">
                    <nav>
                        <ul>
                            <li>
                                <Link href="/">Blog</Link>
                            </li>
                            <li>
                                <Link href="/">Newsletter</Link>
                            </li>
                            <li>
                                <Link href="/">Privacy Policy</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="footerSec">
                    <nav>
                        <ul>
                            <li>
                                <Link href="/">Twitter</Link>
                            </li>
                            <li>
                                <Link href="/">Instagram</Link>
                            </li>
                            <li>
                                <Link href="/">Facebook</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div>
                <p>Copyright JAG 2021 /</p>
                <p>Designed by Zinhle </p>

            </div>
        </div>
    )
}
