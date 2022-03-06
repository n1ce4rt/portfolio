import style from './Skills.module.scss'
import {MSkill} from "./Skill";
import {motion} from "framer-motion";
import {skills} from '../Store/Store_logo'


export const Skills = ({theme}) => {


    return (
        <motion.div className={style.skills_container}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once: true}}
        >
            {
                skills.map((e, index) => {
                    return <MSkill key={e.id} custom={index + 1} variants={e.variants} title={e.title}
                                   logo={theme ? e.logoW : e.logoB} info={e.info} theme={theme} color={e.color}/>
                })
            }

        </motion.div>
    )
}
