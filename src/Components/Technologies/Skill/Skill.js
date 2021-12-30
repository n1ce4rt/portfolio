import style from './Skill.module.css'

export const Skill =( {name, src} ) => {

    return (
        <div className={style.wrapper}>
            <img className={style.active} src={'https://sun9-40.userapi.com/impg/4NEErz1n2Y5FiODndZoKjbpyl4F9oN00G0NzvQ/T31vgdyb4Gg.jpg?size=1104x1472&quality=95&sign=9f2efce52b9cd4d4d38dd0c2eab920e4&type=album'} alt={name} width={90} height={90}></img>
            <h2>{name}</h2>
            <p>Ну там експорт конст чот функция ретерн жысыкс хз</p>
        </div>
    )
}