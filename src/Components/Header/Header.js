import style from './Header.module.scss'
import { NavLink } from "react-router-dom";

export const  Header = () => {

    const setActive =(isActive) => {
       return  {
           color: isActive ? 'black' : '#767676',
           borderBottom: isActive ? '1px solid black': 'none',
       }
    }


    return (
            <div className={style.header_container}>

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
                        <NavLink className={style.nav_bar_link} style={({isActive}) => setActive(isActive)} to="home"><li>Home</li></NavLink>
                        <NavLink className={style.nav_bar_link} style={({isActive}) => setActive(isActive)} to="about"><li>About</li></NavLink>
                        <NavLink className={style.nav_bar_link} style={({isActive}) => setActive(isActive)} to="skills"><li>Skills</li></NavLink>
                        {/*<NavLink className={style.nav_bar_link} style={({isActive}) => setActive(isActive)} to="projects"><li>Projects</li></NavLink>*/}
                        <NavLink className={style.nav_bar_link} style={({isActive}) => setActive(isActive)} to="contacts"><li>Contacts</li></NavLink>
                    </ul>
                </div>
            </div>
    )
}