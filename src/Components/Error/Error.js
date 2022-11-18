import {Link} from 'react-router-dom';
import style from './Error.module.scss';



export const Error =() => {



  return (

    <div className={style.error}>
      <h1>Oops where am I?</h1>
      <Link to="some" className={style.btn_error}>Return home page?</Link>

    </div>

  );
};