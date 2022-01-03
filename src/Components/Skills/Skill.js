import style from './Skill.module.scss'

export const Skill =( {title, logo, info} ) => {

    return (
        <div className={style.skill_wrapper}>
            <img src={logo} alt={title} width={100} height={100}></img>
            <h1>{title}</h1>
            <p>{info}</p>
        </div>
    )
}