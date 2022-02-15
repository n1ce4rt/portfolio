import style from './Footer.module.scss'
import _vk from '../../Images/icons/vk.svg'
import _instagram from '../../Images/icons/instagram.svg'
import _telegram from '../../Images/icons/telegram.svg'


export const Footer = () => {
    return (
        <section className={style.footer_container}>

            <ul className={style.contact_bar}>

                <li><img src={_vk} width={40} height={40}/><a href="https://vk.com/n1ce4rt1994">VK</a></li>
                <li><img src={_instagram} width={40} height={40}/><a href="https://www.instagram.com/n1ce4rt/">Instagram</a></li>
                <li><img src={_telegram} width={40} height={40}/><a href="aaa" >Telegram</a></li>

            </ul>

        </section>
    )
}