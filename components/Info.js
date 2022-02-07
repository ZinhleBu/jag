import Image from 'next/image'
import mike from '../public/mike.jpg'
import omar from '../public/omar.jpg'

export default function Info() {


    return (

        <div className="infoContainer Container">
            <div className="infoInner">
                <section className="infoSec1">
                    <h1>BECOME A<br></br> <span>FRIEND</span> OF JAG </h1>
                    <p>
                        Getting to know some of the young
                        and upcoming artists in the city
                        of Johannesburg
                        <br></br>
                        Join us in this exploration and witness
                        Some of the best works of art by some
                        of the leading artists in the country
                    </p>
                    
                    <button className="infoButton">
                        <a href="">
                            Join us
                        </a>
                    </button>
                   
                </section>
                <section className="infoSec2">
                    <div className="imgContainer">
                        <Image 
                        src={omar} 
                        alt=""
                         />
                    </div>
                    <div className="imgContainer">
                    <Image 
                        src={mike} 
                        alt=""
                         />
                    </div>
                </section>
            </div>
        </div>
    )
}
