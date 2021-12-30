import style from './Header.module.css'
import { Link } from "react-router-dom";


export const  Header = () => {

    // const [x, setX] = useState(0)
    // const [y, setY] = useState(0)
    //
    // const moveHandler =(e) => {
    //     document.onmousemove = (e) => {
    //
    //         let x = e.screenX - 50;
    //         let y = e.screenY - 105;
    //
    //         setX(x)
    //         setY(y)
    //     }
    // }
    // const arg = (x,y) => {
    //     if (x > 0 && y > 0) return Math.PI / 2 - Math.atan(x / y)
    //     if (x < 0 && y > 0) return Math.PI / 2 - Math.atan(x / y)
    //     if (x < 0 && y < 0) return Math.PI + Math.atan(y / x)
    //     if (x > 0 && y < 0) return 3 * Math.PI / 2 + Math.abs(Math.atan(x / y))
    //
    //
    //
    // }
    //
    // const _style1 = {
    //     transform: `rotate(${57.2958 * arg(x - 35,y)}deg)`,
    // };
    // const _style2 = {
    //     transform: `rotate(${57.2958 * arg(x - 35,y)}deg)`,
    // };
    // return (
    //     <div className={style.wrapper} onMouseMove={(e) => moveHandler(e)}>
    //         <div className={style.eyes_container}>
    //             <span className={style.one}></span>
    //             <span className={style.two}></span>
    //             <div className={style.eyes1} style={_style1}>
    //                 <div className={style.eyses_1} style={ eyesColor? {background: 'red'}: {background: 'black'}}></div>
    //             </div>
    //             <div className={style.eyes2} style={_style2}>
    //                 <div className={style.eyses_2} style={ eyesColor? {background: 'red'}: {background: 'black'}}></div>
    //             </div>
    //         </div>
    //
    //         <div className={style.container}>
    //             <div className={style.logo}>Logo</div>
    //                 <ul className={style.ul}>
    //                     <li><a href='#'>Главная</a></li>
    //                     <li><a href='#'>Скилы</a></li>
    //                     <li><a href='#'>Работы</a></li>
    //                     <li><a href='#'>Контакты</a></li>
    //                 </ul>
    //         </div>
    //
    //     </div>
    // )

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
                        <li><Link className={style.nav_bar_link} to="home">Home</Link></li>
                        <li><Link className={style.nav_bar_link} to="about">About</Link></li>
                        <li><Link className={style.nav_bar_link} to="take_me">Skills</Link></li>
                        <li><Link className={style.nav_bar_link} to="#">Contacts</Link></li>
                    </ul>
                </div>

            </div>
    )
}