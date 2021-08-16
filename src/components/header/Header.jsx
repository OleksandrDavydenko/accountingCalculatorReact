import React from 'react'
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
        </header>
    )
} 