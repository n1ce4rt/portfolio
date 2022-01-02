import style from './Skills.module.css'
import {Skill} from "./Skill";
import react_logo from '../../Images/icons/Skills_logo/react.svg'
import html_logo from '../../Images/icons/Skills_logo/html5.svg'
import css_logo from '../../Images/icons/Skills_logo/css.svg'
import js_logo from '../../Images/icons/Skills_logo/js.svg'
import redux_logo from '../../Images/icons/Skills_logo/redux.svg'
import typescript_logo from '../../Images/icons/Skills_logo/_typescript.png'
import github_logo from '../../Images/icons/Skills_logo/github.gif'
export const Skills =()=> {


    return (
        <div className={style.skills_container}>
            <Skill title={'HTML'} logo={html_logo} info={'HTML — стандартизированный язык разметки документов для просмотра веб-страниц в браузере.'}/>
            <Skill title={'CSS'} logo={css_logo} info={'CSS — формальный язык описания внешнего вида документа, написанного с использованием языка разметки.'}/>
            <Skill title={'JS'} logo={js_logo} info={'JavaScript — мультипарадигменный язык программирования.'}/>
            <Skill title={'React'} logo={react_logo} info={'React — JavaScript-библиотека для разработки пользовательских интерфейсов.'}/>
            <Skill title={'Redux'} logo={redux_logo} info={'Redux — библиотека для JavaScript предназначенная для управления состоянием приложения.'}/>
            <Skill title={'TypeScript'} logo={typescript_logo} info={'TypeScript — язык для разработки веб-приложений, расширяющее возможности JavaScript.'}/>
            <Skill title={'GitHub'} logo={github_logo} info={'GitHub — крупнейший веб-сервис для хостинга IT-проектов и их совместной разработки.'}/>
        </div>
    )
}