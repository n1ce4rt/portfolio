import React, {useState} from "react";
import {motion} from "framer-motion";

const menuData = ['Home', 'About', 'Skills', 'Contacts']


export const Some = () => {


    const [activeIndex, setActiveIndex] = useState(0)
    return (
        <div
            style={{
                display: 'flex',
                backgroundColor: '#71b25f',
                padding: '1rem',
                borderRadius: '25px'
            }}
        >{
            menuData.map((item, index) => (
                <MenuItem
                    key={item}
                    item={item}
                    isSelected={activeIndex === index}
                    handlerClick={() => setActiveIndex(index)}
                />

            ))
        }</div>
    )
}

function MenuItem({item, isSelected, handlerClick}) {
    return (
        <motion.div
        style={{margin: '0.25rem',}}
        onClick={handlerClick}
        initial={{color: '#000'}}
        animate={{color: isSelected ? 'rgba(255,0,0)' : '#000'}}>
            {item}
            {isSelected && <ActiveLine />}
        </motion.div>

    )
}

const ActiveLine = () => {
    return (
        <motion.div
            layoutId='active'
        style={{
            width: '100%',
            height: '4px',
            background: '#000'
        }}>

        </motion.div>
    )
}