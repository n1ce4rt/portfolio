import style from './Project.module.css'

export const Project =({name, info}) => {



    return (
        <div className={style.container}>

            <div className={style.wall}><button className={style.PB}>Смотреть</button></div>
            <div className={style.info}>
                <h3>{name}</h3>
                <p>{info}</p>
            </div>
        </div>
    )
}