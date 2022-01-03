import style from './Home.module.scss'
import avatar from '../../Images/icons/avatar.png'




export const Home =() => {

    return (

            <div className={style.home_container}>




                <div>
                    <div className={style.avatar} style={{backgroundImage: `url(${avatar})`}}></div>
                </div>

                <div className={style.about_me}>
                    <h3 className={style.name}>Arthur Chuikov</h3>
                    <p className={style.content}>Front end developer.</p>
                </div>




            </div>

    )
}
