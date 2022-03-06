import style from './Main.module.scss'
import {Home} from "../Home/Home";
import {Route, Routes} from "react-router-dom";
import {About} from "../About/About";
import {Skills} from "../Skills/Skills";
import {ContactsMuiFormik} from "../Contacts/Contacts_mui_formik";
import {Error} from "../Error/Error";
import {Some} from "../Some/Some";

export const Main =({theme}) => {
    return (
            <div className={ theme? style.main_container_dark : style.main_container_light}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/about" element={<About theme={theme}/>}/>
                    <Route path="/skills" element={<Skills theme={theme}/>}/>
                    <Route path="/contacts" element={<ContactsMuiFormik theme={theme}/>}/>
                    <Route path="/portfolio" element={<Home/>}/>
                    <Route path="/some" element={<Some/>}/>
                    <Route path="*" element={<Error/>}/>

                </Routes>

            </div>
    )
}