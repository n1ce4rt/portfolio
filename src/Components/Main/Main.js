import style from './Main.module.css'
import {Home} from "../Home/Home";
import {Jobs} from "../MyJobs/Jobs";
import {Route, Routes} from "react-router-dom";
import {About} from "../About/About";

export const Main =() => {
    return (
            <div className={style.main_container}>
                <Routes>

                    <Route path="/home" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/#" element={<Home/>}/>

                </Routes>

            </div>
    )
}