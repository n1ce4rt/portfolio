import style from './Main.module.scss'
import {Home} from "../Home/Home";
import {Route, Routes} from "react-router-dom";
import {About} from "../About/About";
import {Skills} from "../Skills/Skills";
import {Technologies} from "../Technologies/Technologies";
import {ContactsMuiFormik} from "../Contacts/Contacts_mui_formik";

export const Main =() => {
    return (
            <div className={style.main_container}>
                <Routes>

                    <Route path="/home" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/skills" element={<Skills/>}/>
                    <Route path="/projects" element={<Technologies/>}/>
                    <Route path="/contacts" element={<ContactsMuiFormik/>}/>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/portfolio" element={<Home/>}/>

                </Routes>

            </div>
    )
}