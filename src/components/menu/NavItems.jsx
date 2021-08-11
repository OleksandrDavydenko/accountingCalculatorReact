import React from 'react'
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import classes from './navItems.module.scss';

export const NavItems = ({toggleState}) => {
    
    let cls = classes.nav_container
    if(!toggleState) {
        cls = cn(cls, classes.close)
    }
    
    return(
        <ul className={cls}>
            <li className={classes.nav_element}>
                <NavLink 
                    className={classes.nav_item} 
                    exact={true} 
                    to="/"
                >Розрахунок ЗП
                </NavLink>
            </li>
            <li className={classes.nav_element}>
                <NavLink 
                    className={classes.nav_item} 
                    exact={true} 
                    to="/VAT"
                >Розрахувати ПДВ
                </NavLink>
            </li>
        </ul>
    )
} 