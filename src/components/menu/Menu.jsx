import React from 'react'
import cn from 'classnames'
import classes from './menu.module.scss'
import { useState } from 'react'
import { MenuButton } from '../../UI/menu_button/MenuButton'

export const Menu = () => {
    const [toggle, setToggle] = useState(true)

    const toggleHeandler = () => {
        setToggle(!toggle)
    }

    let active_cls = classes.menu_container

    if (!toggle) {
        active_cls = cn(active_cls, classes.close)
    }

    return(
    <div className={active_cls} >
         <MenuButton toggle={toggleHeandler} />
    </div>
    )
} 