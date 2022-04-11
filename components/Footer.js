import Image from 'next/image'
import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0';

const logo = "../jag.png";

export default function Footer() {
    const { user, isLoading } = useUser();

    return (
        <div className="footerContainer">
            <div className="footerInner">
                <div className="footerSec">
                    <img src={logo} alt="logo1" height={70} width={150}/>
                </div>
                <div className="footerSec">
                    <p>Sign up for newsletter</p>
               
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
                                <Link href="/about">About</Link>
                            </li>
                            <li>
                                <Link href="/gallery">Gallery</Link>
                            </li>
                            <li>
                                <Link href="/news">News</Link>
                            </li>
                            {user &&(
                            <li>
                                <Link href="/blog">Blog</Link>
                            </li>
                            )}
                            <li>
                                <Link href="/contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="footerSec">
                    <nav>
                        <ul>
                        {user &&(
                            <li>
                                <Link href="/blog">Blog</Link>
                            </li>
                            )}
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
