import style from './About.module.scss'
import photo from '../../Images/icons/photo.png'

export const About = () => {


    return (
        <div className={style.about_container}>

            <div className={style.photo} style={{backgroundImage: `url(${photo})`}}>

            </div>

            <div className={style.data}>

                <div className={style.data_left}>
                    <h3>Arthur Chuikov & Frontend</h3>
                    <p>Hello, I am a creative photographer based in New York and happy to travel all over Europe to
                        capture your big day in candid and authentic photos. I will create a lasting memory of the
                        people.</p>
                    <a className={style.learn_more}>Learn More<span>   >></span></a>
                </div>

                <div className={style.data_right}>
                    <ul className={style.data_info}>
                        <li><p><span>Birthday:</span>29.06.1994</p></li>
                        <li><p><span>Age:</span>27</p></li>
                        <li><p><span>Address:</span>Russia, Crimea</p></li>
                        <li><p><span>Email:</span>nice.lol.1994@gmail.com</p></li>
                        <li><p><span>Phone:</span>+7978936****</p></li>
                        <li><p><span>Study:</span>None</p></li>
                        <li><p><span>Freelance:</span>Available</p></li>
                    </ul>
                </div>

            </div>

        </div>
    )
}



