import style from './Technologies.module.css'
import {Skill} from "./Skill/Skill";

import _react from '../../Images/_react.png'
import  _redux from '../../Images/_redux.png'
import  _typescript from '../../Images/_typescript.png'

export const Technologies =() => {



    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <h1>Мои Скиллы</h1>
                <div className={style.skills_container}>

                    <Skill name={'React'} src={_react}/>

                    <Skill name={'Redux'} src={_redux}/>

                    <Skill name={'Types'} src={_typescript}/>
                </div>
            </div>
        </div>
    )
}