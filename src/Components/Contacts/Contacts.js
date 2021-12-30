import style from './Contacts.module.css'


export const Contacts =() => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>

                <form action="" method="get" className={style.form}>

                    <div className={style.a}>
                        <input type="text" name="name" id="name" required placeholder="name"/>
                    </div>

                    <div className={style.sss}>
                        <input type="email" name="email" id="email" required placeholder="email" />
                    </div>

                    <div className={style.a}>
                        <textarea name="comment" id="comment" placeholder="some"/>
                    </div>

                    <div className={style.a}>
                        <button className={style.aaa}  type="submit" name="aaa" >Subscribe</button>
                    </div>

                </form>

            </div>
        </div>
    )
}