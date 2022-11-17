import {useState} from 'react';
import {motion} from 'framer-motion';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import { IconButton } from '@mui/material';
import {animation} from '../Animation/Animation';
import { photoArr } from '../../Images/images';
import style from './About.module.scss';


export const About = () => {

  const [count, setCount] = useState(0);
    

    
  return (
    <motion.div className={style.about_container}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true}}
    >

      <div className={style.photo} style={{backgroundImage: `url(${photoArr[count]})`}}>
        <IconButton aria-label="prev" size="small" color="error" 
          onClick={() => setCount(count === 0 ? 4 : count - 1)}>
          <ChevronLeftOutlinedIcon fontSize="inherit" />
        </IconButton>
        <IconButton aria-label="next" size="small" color="error" 
          onClick={() => setCount(count < 4 ? count + 1 : 0)}>
          <ChevronLeftOutlinedIcon sx={{transform: 'rotate(180deg)'}}/>
        </IconButton>
      </div>

      <div className={style.data}>

        <motion.div className={style.data_left} custom={1} variants={animation.aboutLeft}>
          <h3>Arthur Chuikov & Frontend</h3>
          <p>Hello everyone, I am a beginner front-end developer, currently looking for a job.
                        I live in the Crimea near the Black Sea.
                        Active positive guy, in my free time from programming I go in for sports.</p>
                    
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
  );
};



