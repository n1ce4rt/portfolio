import {forwardRef} from "react";
import style from './Skill.module.scss'
import {motion} from "framer-motion";



export const Skill = forwardRef(( {title, logo, info, color, theme}, ref ) => {
    return (
        <div className={style.skill_wrapper} ref={ref} style={{
            border: theme ? ` 1px solid ${color}` : ' 1px solid grey',
        }}>
            <img src={logo} alt={title} width={100} height={100}></img>
            <h1 style={{color: theme? 'gray' : '#000'}}>{title}</h1>
            <p style={{color: theme? 'gray' : '#000'}}>{info}</p>
        </div>
    )
})

export const MSkill = motion(Skill)