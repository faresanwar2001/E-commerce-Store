import paypal from "../../Assets/images/asset 56.webp"
import visa from "../../Assets/images/asset 57.webp"
import pic1 from "../../Assets/images/asset 55.webp"
import pic2 from "../../Assets/images/asset 58.webp"
import { Link } from "react-router-dom"
import style from "./Footer.module.css"



export default function Footer(){



    return <>
    
    
                        <section className={style.onetech}>
                            <div className="container">
                                <div className={style.onetechData}>
                                    <div className={style.onetechleft}>
                                        <h1>Topico</h1>
                                        <h4>Got Question? Call Us 24/7</h4>
                                        <h3>+38 068 005 3570</h3>
                                        <h3>faresaof20@gmail.com</h3>
                                        <p>17 Princess Road, London Grester London NW18JR, UK</p>
                                        <i className="fa-brands fa-facebook-f"></i>
                                        <i className="fa-brands fa-twitter"></i>
                                        <i className="fa-brands fa-youtube"></i>
                                        <i className="fa-brands fa-google"></i>
                                    </div>
                                    <div className={style.onetechcenter}>
                                        <h3>Find it Fast</h3>
                                        <ul>
                                            <li><Link to="">Computers & Laptops</Link></li>
                                                    <li><Link to="">Cameras & Photos</Link></li>
                                                    <li><Link to="">Hardware</Link></li>
                                                    <li><Link to="">SmartPhones & Tablets </Link>
                                                    </li>
                                                    <li><Link to="">Tv & Audio</Link> </li>
                                                    <li> <Link to="">Gadget</Link></li>
                                                    <li><Link to="">Car Electronic</Link></li>
                                                    <li ><Link to="">VideoGames & consoles</Link></li>
                                        </ul>
                                    </div>
                                    <div className={style.onetechcenter}>
                                        <h3>Find it Fast</h3>
                                        <ul>
                                            <li><Link to="">Computers & Laptops</Link></li>
                                                    <li><Link to="">Cameras & Photos</Link></li>
                                                    <li><Link to="">Hardware</Link></li>
                                                    <li><Link> to="">SmartPhones & Tablets </Link>
                                                    </li>
                                                    <li><Link to="">Tv & Audio</Link> </li>
                                                    <li> <Link to="">Gadget</Link></li>
                                                    <li><Link to="">Car Electronic</Link></li>
                                                    <li ><Link to="">VideoGames & consoles</Link></li>
                                        </ul>
                                    </div>
                                    
                                </div>
                            </div>
                        </section>
                        <div className={style.footermon}>
                            <div className="container">
                                <div className={style.moninfo}>
                                    <div className={style.monleft}>
                                        <p>Copyright ©2024 All rights reserved | This template is made by <span>Triple-O</span> </p>
                                    </div>
                                    <div className={style.monright}>
                                        <img src={pic1} alt=""/>
                                        <img src={paypal} alt=""/>
                                        <img src={visa} alt=""/>
                                        <img src={pic2} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
    
    
    </>
}