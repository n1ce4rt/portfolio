import style from './Skill.module.css'

export const Skill =( {title, logo, info} ) => {

    return (
        <div className={style.wrapper}>
            <img className={style.active} src={logo} alt={title} width={100} height={100}></img>
            <h1>{title}</h1>
            <p>{info}</p>
        </div>
    )
}