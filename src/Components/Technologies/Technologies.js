import style from './Technologies.module.css'
import {Skill} from "../Skills/Skill";

import _react from '../../Images/icons/Skills_logo/_react.png'
import  _redux from '../../Images/icons/Skills_logo/_redux.png'
import  _typescript from '../../Images/icons/Skills_logo/_typescript.png'

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