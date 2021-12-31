import style from './Header.module.css'
import { Link } from "react-router-dom";


export const  Header = () => {

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
                        <Link className={style.nav_bar_link} to="home"><li>Home</li></Link>
                        <Link className={style.nav_bar_link} to="about"><li>About</li></Link>
                        <Link className={style.nav_bar_link} to="skills"><li>Skills</li></Link>
                        <Link className={style.nav_bar_link} to="projects"><li>Projects</li></Link>
                        <Link className={style.nav_bar_link} to="contacts"><li>Contacts</li></Link>
                    </ul>
                </div>

            </div>
    )
}