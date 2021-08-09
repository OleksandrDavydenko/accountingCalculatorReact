import React from 'react'
import cn from 'classnames'
import classes from './menu.module.scss'
import { useState } from 'react'

export const Menu = () => {
    const [toggle, setToggle] = useState(true)

    let active_cls = classes.menu_container

    if (!toggle) {
        active_cls = cn(active_cls, classes.close)
    }

    return(
    <div className={active_cls} >
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