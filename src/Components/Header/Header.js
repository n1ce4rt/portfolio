import style from './Header.module.scss'
import {NavLink} from "react-router-dom";
import {motion} from "framer-motion";
import React, {useState} from "react";


const menuData = ['Home', 'About', 'Skills', 'Contacts']
export const Header = () => {
    const [activeIndex, setActiveIndex] = useState(0)


    return (
        <section className={style.header_container}>

            <div className={style.logo_container}>
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
                            <Link key={item} item={item} isSelected={activeIndex === index} handlerClick={() => setActiveIndex(index)}/>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

const Link = ({item, isSelected, handlerClick}) => {
    return (
        <motion.div
            onClick={handlerClick}>
            <NavLink key={item} className={style.nav_bar_link} to={item}>
                <li style={{color: isSelected? 'black' : '#767676'}}>
                    {item}
                    {isSelected && <ActiveLine/>}
                </li>
            </NavLink>
        </motion.div>
    )
}
const ActiveLine = () => {
    return (
        <motion.div
            layoutId='active'
            style={{
                width: '100%',
                height: '2px',
                background: '#000',
                borderRadius: '50px',
            }}>
        </motion.div>
    )
}