import {forwardRef} from "react";
import style from './Skill.module.scss'
import {motion} from "framer-motion";



export const Skill = forwardRef(( {title, logo, info}, ref ) => {

    return (
        <div className={style.skill_wrapper} ref={ref}>
            <img src={logo} alt={title} width={100} height={100}></img>
            <h1>{title}</h1>
            <p>{info}</p>
        </div>
    )
})

export const MSkill = motion(Skill)