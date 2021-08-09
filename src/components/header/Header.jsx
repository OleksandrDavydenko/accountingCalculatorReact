import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from './logo.png';
import classes from './header.module.scss'

export const Header = () => {
    return (
        <header className={classes['App-header']}>
            <div className={classes.container}>
                <img 
                    src={logo} 
                    className={classes["App-logo"]} 
                    alt="UAbuh-logo" 
                />
                <p>Accounting Calculator</p>
            </div>
            <ul>
                <li> <NavLink className={classes.nav_item} exact={true} to="/">Розрахунок ЗП</NavLink></li>
                <li> <NavLink className={classes.nav_item} exact={true} to="/VAT">Розрахувати ПДВ</NavLink></li>
            </ul>
        </header>
    )
} 