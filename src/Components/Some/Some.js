import {motion} from 'framer-motion';
import {useEffect, useRef, useState} from 'react';
import style from './Some.module.scss';
// import {photoArr} from "../About/About";

export const Some = () => {


  const [width, setWidth] = useState(0);
  const slider = useRef();

  useEffect(() => {

    console.log(slider.current.scrollWidth, slider.current.offsetWidth);
    setWidth(slider.current.scrollWidth - slider.current.offsetWidth);

  },[]);
  return (
    <section className={style.some_container}>



      <motion.div className={style.slider_wrapper} ref={slider}>
        <motion.div
          className={style.inner_slider}
          drag="x"
          dragConstraints={{right: -15, left: -width}}>
          {
            // photoArr.map((photo, index) => {
            //     return (
            //         <motion.div className={style.item} key={index}>
            //             {/* <img src={photo} alt={'photo'}/> */}
            //         </motion.div>
            //     )
            // })
          }
        </motion.div>
      </motion.div>


    </section>
  );
};