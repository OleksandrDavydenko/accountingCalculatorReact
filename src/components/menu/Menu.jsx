import React from 'react'
import classes from './menu.module.scss'
import { useState } from 'react'

export const Menu = () => {
    const [toggle, setToggle] = useState(true)
    const cls = [
        classes.menu_container,
    ]
    const close = {
        width: "100px"
    }
    let styleWidth = {
        width: "350px"
    }

    if (!toggle) {
        styleWidth = close
    }

    return(
    <div className={cls} style={styleWidth}>
        <div 
            className={classes.hamburger} 
            onClick={()=>{setToggle(!toggle)
            console.log(toggle);}}
        >
            <span className={classes.stick} ></span>
            <span className={classes.stick}></span>
            <span className={classes.stick}></span>
        </div>

    </div>
    )
} 