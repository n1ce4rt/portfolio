import style from './Home.module.css'




export const Home =() => {

    return (

            <div className={style.home_container}>

                <div className={style.avatar_container} >
                    <div className={style.avatar} style={{backgroundImage: `url(https://psv4.userapi.com/c520036/u299687518/docs/d36/9e0d7305b2d2/avatar.png?extra=Po8whhaUFfb-L6LL9dvUWOpUaQwN5-0WBildrCER-6vi9h1R0xcgLTdGukbg5u6E26LaoeA7KCetRVNY-h_rs8_-OMNGjsnWdqeVFun_CGmpn9oTrwCc6QCA8lYA0BWqEMoWlNFQB-s9Mx8J8WV8CKqf)`}}></div>
                </div>
                <div className={style.about_me}>
                    <h3 className={style.name}>Arthur Chuikov</h3>
                    <p className={style.content }>Front end developer.</p>
                </div>

            </div>


    )
}
