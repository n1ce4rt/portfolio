import style from './Main.module.scss'
import {Home} from "../Home/Home";
import {Route, Routes} from "react-router-dom";
import {About} from "../About/About";
import {Skills} from "../Skills/Skills";
import {ContactsMuiFormik} from "../Contacts/Contacts_mui_formik";
import {Error} from "../Error/Error";
import {Some} from "../Some/Some";

export const Main =() => {
    return (
            <div className={style.main_container}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/skills" element={<Skills/>}/>
                    <Route path="/contacts" element={<ContactsMuiFormik/>}/>
                    <Route path="/portfolio" element={<Home/>}/>
                    <Route path="/some" element={<Some/>}/>
                    <Route path="*" element={<Error/>}/>

                </Routes>

            </div>
    )
}