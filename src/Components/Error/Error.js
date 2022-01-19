import style from './Error.module.scss'
import {Link} from "react-router-dom";



export const Error =() => {



    return (

        <div className={style.error}>
            <h1>Oops where am I?</h1>
            <Link to="home" className={style.btn_error}>Return</Link>

        </div>

    )
}