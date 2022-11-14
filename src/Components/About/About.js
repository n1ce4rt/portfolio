import style from './About.module.scss'
import avatar from '../../Images/icons/avatar.jpg'
import photo0 from '../../Images/icons/photo.jpg'
import photo1 from '../../Images/icons/photo_1.jpg'
import photo2 from '../../Images/icons/photo_2.jpg'
import photo3 from '../../Images/icons/photo3.png'
import {useState} from "react";
import {motion} from "framer-motion";
import {animation} from "../Animation/Animation";

export const photoArr = [avatar, photo0, photo1, photo2, photo3]

export const About = ({theme}) => {

    const [count, setCount] = useState(1)

    const changePhoto = () => {
        if (count === 4) {
            setCount(0)
        } else {
            setCount(count + 1)
        }
    }
    
    return (
        <motion.div className={style.about_container}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once: true}}
        >

            <div className={style.photo} style={{backgroundImage: `url(${photoArr[count]})`}}>

            </div>

            <div className={style.data}>

                <motion.div className={style.data_left} custom={1} variants={animation.aboutLeft}>
                    <h3>Arthur Chuikov & Frontend</h3>
                    <p>Hello everyone, I am a beginner front-end developer, currently looking for a job.
                        I live in the Crimea near the Black Sea.
                        Active positive guy, in my free time from programming I go in for sports.</p>
                    <a className={style.learn_more} style={{color: theme? '#9e8d77' : '#000'}} onClick={() => changePhoto()}>See More<span>   >></span></a>
                </motion.div>

                <motion.div className={style.data_right} custom={2} variants={animation.aboutRight}>
                    <ul className={style.data_info}>
                        <li><p><span>Birthday:</span>29.06.1994</p></li>
                        <li><p><span>Age:</span>27</p></li>
                        <li><p><span>Address:</span>Russia, Crimea</p></li>
                        <li><p><span>Email:</span>nice.lol.1994@gmail.com</p></li>
                        <li><p><span>Phone:</span>+7978936****</p></li>
                        <li><p><span>Study:</span>None</p></li>
                        <li><p><span>Freelance:</span>Available</p></li>
                    </ul>
                </motion.div>

            </div>

        </motion.div>
    )
}



