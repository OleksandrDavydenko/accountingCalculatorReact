import React from "react";
import classes from './dropdown.module.scss'
import {MenuButton} from '../menu_button/MenuButton'


export const Dropdown = () => {
    return (
        <div className={classes.dropdown_conteiner}>
            <div className={classes.input_view} >
                {'20 %'}
                <div className={classes.dropdown_button}>
                   <MenuButton/> 
                </div>
            </div>
        </div>
    )
} 