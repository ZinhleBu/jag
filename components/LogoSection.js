import Image from 'next/image'
import logo1 from '../public/BASA.png'
import logo2 from '../public/BBA.png'
import logo3 from '../public/jag.png'

export default function LogoSection() {


    return (

        <div className="logoContainer Container">
            <div className="logoInner">
                <div className="logoWrap">
                    <Image src={logo1} alt=""/>
                </div>
                <div className="logoWrap">
                    <Image src={logo2} alt=""/>
                </div>
                <div className="logoWrap">
                    <Image src={logo3} alt=""/>
                </div>
            </div>
        </div>
    )
}
