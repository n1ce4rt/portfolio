import style from './Footer.module.scss'
import {ReactComponent as  Vk} from '../../Images/icons/vk.svg'
import {ReactComponent as  Instagram} from '../../Images/icons/instagram.svg'
import {ReactComponent as  Telegram} from '../../Images/icons/telegram.svg'


export const Footer = ({theme}) => {
    return (
        <section className={style.footer_container}>

            <ul className={style.contact_bar}>
                <li><Vk style={{fill: ( theme? 'white' : 'black' )}} width={40} height={40}/><a href="https://vk.com/n1ce4rt1994">VK</a></li>
                <li><Instagram style={{fill: ( theme? 'white' : 'black' )}} width={40} height={40}/><a href="https://www.instagram.com/n1ce4rt/">Instagram</a></li>
                <li><Telegram style={{fill: ( theme? 'white' : 'black' )}} width={40} height={40}/><a href="https://t.me/N1CE4RT">Telegram</a></li>
            </ul>

        </section>
    )
}