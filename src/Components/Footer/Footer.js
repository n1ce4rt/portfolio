import style from './Footer.module.css'
import _vk from '../../Images/icons/vk.svg'
import _instagram from '../../Images/icons/instagram.svg'
import _telegram from '../../Images/icons/telegram.svg'


export const Footer =() => {
    return (
        <div className={style.footer_container}>

            <ul className={style.footer_contact_bar}>

                <li><img className={style.img} src={_vk} width={40} height={40}/><a href="aaa" className={style.text}>VK</a></li>
                <li><img className={style.img} src={_instagram} width={40} height={40}/><a href="aaa" className={style.text}>Instagram</a></li>
                <li><img className={style.img} src={_telegram} width={40} height={40}/><a href="aaa" className={style.text}>Telegram</a></li>

            </ul>

        </div>
    )
}