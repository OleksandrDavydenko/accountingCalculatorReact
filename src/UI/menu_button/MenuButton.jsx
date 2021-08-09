import React from 'react'
import classes from './menuButton.module.scss'

export const MenuButton = ({toggle}) => {
    return(
        <div
            onClick={toggle}
            className={classes.hamburger} 
        >
            <span className={classes.stick} ></span>
            <span className={classes.stick}></span>
            <span className={classes.stick}></span>
        </div>
    )
}