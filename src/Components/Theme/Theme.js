import style from './Theme.module.scss';
export const Theme = ({callback, theme}) => {


  return (
    <div className={style.theme_wrapper}>
      <div className={style.theme_container}>

        <div>
          <label className={style.switch}>
            <input type="checkbox" onChange={() => callback()} checked={theme}/>
            <span className={style.slider}> </span>
          </label>
        </div>

      </div>
    </div>

  );


};
