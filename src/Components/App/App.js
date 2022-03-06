import {Header} from "../Header/Header";
import style from './App.module.scss'
import {Footer} from "../Footer/Footer";
import {Main} from "../Main/Main";
import { useEffect, useState} from "react";

function App() {


    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        const themeSave = localStorage.getItem('theme')
        setIsDark((themeSave === 'dark'))
    }, [isDark])

    const changeTheme = () => {
        setIsDark(!isDark)
        localStorage.setItem('theme', !isDark ? 'dark' : 'light')
    }

    return (
        <div className={isDark? style.app_dark : style.app_light}>
            <Header callback={changeTheme} theme={isDark}/>
            <Main theme={isDark}/>
            <Footer theme={isDark}/>
        </div>
    );
}

export default App;

