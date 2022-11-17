import style from './Jobs.module.css';
import {Project} from './Project/Project';

export const Jobs =() => {
  return (
    <div className={style.wrapper}>

      <div className={style.container}>
        <h2>Мои работы</h2>
        <div className={style.jobs}>
          <Project name={'Название 1'} info={'О проэкте 1'}/>
          <Project name={'Название 2'} info={'О проэкте 2'}/>
        </div>
      </div>

    </div>
  );
};