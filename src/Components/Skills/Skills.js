import style from './Skills.module.scss'
import {animation} from "../Animation/Animation";
import {MSkill, Skill} from "./Skill";
import react_logo from '../../Images/icons/Skills_logo/react.svg'
import html_logo from '../../Images/icons/Skills_logo/html5.svg'
import css_logo from '../../Images/icons/Skills_logo/css.svg'
import js_logo from '../../Images/icons/Skills_logo/js.svg'
import redux_logo from '../../Images/icons/Skills_logo/redux.svg'
import typescript_logo from '../../Images/icons/Skills_logo/typescript.png'
import { motion } from "framer-motion";
import github_logo from '../../Images/icons/Skills_logo/github.gif'
import sass_logo from '../../Images/icons/Skills_logo/sass.svg'

const skills = [
    {   id: 1,
        title: 'HTML',
        logo: html_logo,
        info: 'HTML — стандартизированный язык разметки документов для просмотра веб-страниц в браузере.',
        custom: 1,
        variants: animation.skillsTop
    },
    {   id: 2,
        title: 'CSS',
        logo: css_logo,
        info: 'CSS — формальный язык описания внешнего вида документа, написанного с использованием языка разметки.',
        custom: 2,
        variants: animation.skillsBottom
    },
    {   id: 3,
        title: 'JS',
        logo: js_logo,
        info: 'JavaScript — мультипарадигменный язык программирования.',
        custom: 1,
        variants: animation.skillsTop
    },
    {   id: 4,
        title: 'React',
        logo: react_logo,
        info: 'React — JavaScript-библиотека для разработки пользовательских интерфейсов.',
        custom: 2,
        variants: animation.skillsBottom
    },
    {   id: 5,
        title: 'Redux',
        logo: redux_logo,
        info: 'Redux — библиотека для JavaScript предназначенная для управления состоянием приложения.',
        custom: 2,
        variants: animation.skillsTop
    },
    {   id: 6,
        title: 'TypeScript',
        logo: typescript_logo,
        info: 'TypeScript — язык для разработки веб-приложений, расширяющее возможности JavaScript.',
        custom: 1,
        variants: animation.skillsBottom
    },
    {   id: 7,
        title: 'GitHub',
        logo: github_logo,
        info: 'GitHub — крупнейший веб-сервис для хостинга IT-проектов и их совместной разработки.',
        custom: 2,
        variants: animation.skillsTop
    },
    {   id: 8,
        title: 'Sass',
        logo: sass_logo,
        info: 'Sass — это метаязык, предназначенный для увеличения уровня абстракции CSS-кода и упрощения файлов каскадных таблиц стилей.',
        custom: 1,
        variants: animation.skillsBottom
    },
]
export const Skills =() => {


    return (
        <motion.div className={style.skills_container}
             initial='hidden'
             whileInView='visible'
             viewport={{once: true}}
            >
            {
                skills.map((e) => {
                    return <MSkill key={e.id} custom={e.custom} variants={e.variants} title={e.title} logo={e.logo} info={e.info}/>
                })
            }

        </motion.div>
    )
}