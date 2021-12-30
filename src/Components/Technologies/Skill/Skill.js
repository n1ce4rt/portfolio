import style from './Skill.module.css'

export const Skill =( {name, src} ) => {

    return (
        <div className={style.wrapper}>
            <img className={style.active} src={src} alt={name} width={90} height={90}></img>
            <h2>{name}</h2>
            <p>Ну там експорт конст чот функция ретерн жысыкс хз</p>
        </div>
    )
}