import react_logo from '../Skills_logo/react.svg'
import html_logo from '../Skills_logo/html5.svg'
import css_logo from '../Skills_logo/css.svg'
import js_logo from '../Skills_logo/js.svg'
import redux_logo from '../Skills_logo/redux.svg'
import typescript_logo from '../Skills_logo/typescript.png'
import github_logo from '../Skills_logo/ghw.png'
import github_logo_black from '../Skills_logo/ghb.png'
import sass_logo from '../Skills_logo/sass.svg'
import {animation} from "../../../Components/Animation/Animation";

export const skills = [
    {   id: 1,
        title: 'HTML',
        color: '#c026ff',
        logoW: html_logo,
        logoB: html_logo,
        info: 'HTML — стандартизированный язык разметки документов для просмотра веб-страниц в браузере.',
        variants: animation.skills
    },
    {   id: 2,
        title: 'CSS',
        color: '#0075bd',
        logoW: css_logo,
        logoB: css_logo,
        info: 'CSS — формальный язык описания внешнего вида документа, написанного с использованием языка разметки.',
        variants: animation.skills
    },
    {   id: 8,
        title: 'Sass',
        color: '#f06292',
        logoW: sass_logo,
        logoB: sass_logo,
        info: 'Sass — это метаязык, предназначенный для увеличения уровня абстракции CSS-кода и упрощения файлов каскадных таблиц стилей.',
        variants: animation.skills
    },
    {   id: 3,
        title: 'JS',
        color: 'rgba(255,214,0,0.75)',
        logoW: js_logo,
        logoB: js_logo,
        info: 'JavaScript — мультипарадигменный язык программирования.',
        variants: animation.skills
    },
    {   id: 4,
        title: 'React',
        color: '#3397d9',
        logoW: react_logo,
        logoB: react_logo,
        info: 'React — JavaScript-библиотека для разработки пользовательских интерфейсов.',
        variants: animation.skills
    },
    {   id: 5,
        title: 'Redux',
        color: '#7e57c2',
        logoW: redux_logo,
        logoB: redux_logo,
        info: 'Redux — библиотека для JavaScript предназначенная для управления состоянием приложения.',
        variants: animation.skills
    },
    {   id: 6,
        title: 'TypeScript',
        color: '#2d79c7',
        logoW: typescript_logo,
        logoB: typescript_logo,
        info: 'TypeScript — язык для разработки веб-приложений, расширяющее возможности JavaScript.',
        variants: animation.skills
    },
    {   id: 7,
        title: 'GitHub',
        color: 'rgba(255,255,255,0.75)',
        logoW: github_logo,
        logoB: github_logo_black,
        info: 'GitHub — крупнейший веб-сервис для хостинга IT-проектов и их совместной разработки.',
        variants: animation.skills
    },
]