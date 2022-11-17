import {NavLink} from 'react-router-dom';
import {motion} from 'framer-motion';
import React, {useState} from 'react';
import {Theme} from '../Theme/Theme';
import style from './Header.module.scss';


const menuData = ['Home', 'About', 'Skills', 'Contacts'];
export const Header = ({callback, theme}) => {
  const [activeIndex, setActiveIndex] = useState(0);


  return (
    <section className={style.header_container}>


      <div className={style.logo_container} style={{color: theme? 'gray' : 'white'}}>
        <span className={style.letter}><i>n</i></span>
        <span className={style.letter}><i>i</i></span>
        <span className={style.letter}><i>c</i></span>
        <span className={style.letter}><i>e</i></span>
        <span className={style.letter}><i>a</i></span>
        <span className={style.letter}><i>r</i></span>
        <span className={style.letter}><i>t</i></span>
      </div>

      <div className={style.nav_container}>
        <ul className={style.nav_bar}>

          {menuData.map((item, index) => {
            return (
              <Link key={item} item={item} isSelected={activeIndex === index} handlerClick={() => setActiveIndex(index)} theme={theme}/>
            );
          })}
          <li>
            <Theme callback={callback} theme={theme}/>
          </li>
        </ul>
      </div>
    </section>
  );
};

const Link = ({item, isSelected, handlerClick, theme}) => {
  return (
    <motion.div
      onClick={handlerClick}>
      <NavLink key={item} className={style.nav_bar_link} to={item}>
        <li style={{color: theme? 'gray' : '#000'}}>
          {item}
          {isSelected && <ActiveLine theme={theme}/>}
        </li>
      </NavLink>
    </motion.div>
  );
};
const ActiveLine = ({theme}) => {
  return (
    <motion.div
      layoutId="active"
      style={{
        width: '100%',
        height: '2px',
        background: (theme? 'gray' : '#000' ),
        borderRadius: '50px',
      }}>
    </motion.div>
  );
};