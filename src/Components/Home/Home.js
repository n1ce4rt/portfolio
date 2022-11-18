import {motion} from 'framer-motion';
import avatar from '../../Images/avatar.jpg';
import {animation} from '../Animation/Animation';
import style from './Home.module.scss';


export const Home = () => {

  return (

    <motion.section
      initial="hidden"
      whileInView="visible"
      className={style.home_container}>


      <div className={style.avatar_wrapper}>
        <div className={style.avatar} style={{backgroundImage: `url(${avatar})` }}></div>
      </div>

      <div className={style.about_me}>
        <motion.h3 custom={1} variants={animation.home} className={style.name}>Arthur Chuikov</motion.h3>
        <motion.p custom={5} variants={animation.home} className={style.content}>Front-end web developer.</motion.p>
      </div>


    </motion.section>

  );
};
