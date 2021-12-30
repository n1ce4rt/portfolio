import style from './Main.module.css'
import {Home} from "../Home/Home";
import {Route, Routes} from "react-router-dom";
import {About} from "../About/About";
import {Skill} from "../Technologies/Skill/Skill";

export const Main =() => {
    return (
            <div className={style.main_container}>
                <Routes>

                    <Route path="/home" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/skills" element={<Skill/>}/>
                    <Route path="/" element={<Home/>}/>

                </Routes>

            </div>
    )
}