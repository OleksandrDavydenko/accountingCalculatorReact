import React from 'react'
import cn from 'classnames'
import classes from './menu.module.scss'
import { useState } from 'react'
import { MenuButton } from '../../UI/menu_button/MenuButton'
import { NavItems } from './NavItems'

export const Menu = () => {
    const [toggle, setToggle] = useState(true)

    const toggleHeandler = () => {
        setToggle(!toggle)
    }

    let active_cls = classes.menu_container
    let titlecls= classes.title

    if (!toggle) {
        active_cls = cn(active_cls, classes.close)
        titlecls = cn(titlecls, classes.close)
    }

    return(
    <div className={active_cls} >
        <div 
            className={classes.btn_conteiner}
            onClick={toggleHeandler}
        >
            <p className={titlecls}>UAbuh MENU</p>
            <MenuButton 
                toggleHeandler={toggleHeandler} 
                toggleState={toggle}
            />
        </div>
        <NavItems toggleState={toggle} />
    </div>
    )
} 