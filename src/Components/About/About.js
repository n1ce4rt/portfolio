import style from './About.module.css'
import photo from '../../Images/icons/photo.png'
import avatar from "../../Images/icons/avatar.png";
export const About =() => {



    return (
        <div className={style.about_container}>

                    <div className={style.photo} style={{backgroundImage: `url(${photo})`}}></div>

                    <div className={style.data}>

                        <div className={style.data_left}>
                            <h3>Adriano Smith & Photographer</h3>
                            <p>Hello, I am a creative photographer based in New York and happy to travel all over Europe to capture your big day in candid and authentic photos. I will create a lasting memory of the people.</p>
                            <a className={style.learn_more}>Learn More<span>   >></span></a>
                        </div>

                        <div className={style.data_right}>
                            <ul className={style.data_info}>
                                <li><p><span>Birthday:</span>01.07.1990</p></li>
                                <li><p><span>Age:</span>31</p></li>
                                <li><p><span>Address:</span>Ave 11, New York, USA</p></li>
                                <li><p><span>Email:</span>mail@gmail.com</p></li>
                                <li><p><span>Phone:</span>+77 022 177 05 05</p></li>
                                <li><p><span>Study:</span>University of Texas</p></li>
                                <li><p><span>Freelance:</span>Available</p></li>
                            </ul>
                        </div>

                    </div>

        </div>
    )
}



