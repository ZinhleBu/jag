import Image from 'next/image'
import logo1 from '../public/BASA.png'
import logo2 from '../public/BBA.png'
import logo3 from '../public/jag.png'

export default function LogoSection() {


    return (

        <div className="logoContainer">
            <div className="logoInner">
                <div className="logoWrap">
                    <Image src={logo1} height={150} width={200} alt=""/>
                </div>
                <div className="logoWrap">
                    <Image src={logo2} height={200} width={400} alt=""/>
                </div>
                <div className="logoWrap">
                    <Image src={logo3} height={100} width={200} alt=""/>
                </div>
            </div>
        </div>
    )
}
