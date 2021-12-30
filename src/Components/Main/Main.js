import style from './Main.module.css'
import {Home} from "../Home/Home";
import {Route, Routes} from "react-router-dom";
import {About} from "../About/About";
import {Skills} from "../Skills/Skills";

export const Main =() => {
    return (
            <div className={style.main_container}>
                <Routes>

                    <Route path="/home" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/skills" element={<Skills/>}/>
                    <Route path="/" element={<Home/>}/>

                </Routes>

            </div>
    )
}