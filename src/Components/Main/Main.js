import style from './Main.module.css'
import {Home} from "../Home/Home";
import {Route, Routes} from "react-router-dom";
import {About} from "../About/About";
import {Skills} from "../Skills/Skills";
import {Project} from "../MyJobs/Project/Project";
import {Technologies} from "../Technologies/Technologies";
import {Contacts} from "../Contacts/Contacts";

export const Main =() => {
    return (
            <div className={style.main_container}>
                <Routes>

                    <Route path="/home" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/skills" element={<Skills/>}/>
                    <Route path="/projects" element={<Technologies/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="/" element={<Home/>}/>

                </Routes>

            </div>
    )
}