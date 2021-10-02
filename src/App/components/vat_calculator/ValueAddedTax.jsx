import React from 'react';
import classes from './valueAddedTax.module.scss';

import { Dropdown } from '../../UI/Dropdown/Dropdown';


export const ValueAddedTax = () => {

return (
    <div >
        <h1>Розрахунок ПДВ</h1>
        <div className={classes.form_container}>
            <div className={classes.title_box}>
                <h6 className={classes.title}>%ПДВ:</h6>
            </div>
            <Dropdown />
            <div className={classes.title_box}>
                <h6 className={classes.title}>Сума, без ПДВ:</h6>
            </div>          
            <input 
                type="text"
                placeholder="0.00"
                className={classes.input_view}
                value={0}
                onChange={0} 
            />
            <div className={classes.title_box}>
                <h6 className={classes.title}>Сума ПДВ:</h6>
            </div>          
            <input 
                type="text"
                placeholder="0.00"
                className={classes.input_view}
                value={0}
                onChange={0} 
            />
            <div className={classes.title_box}>
                <h6 className={classes.title}>Загальна сума, з ПДВ:</h6>
            </div>          
            <input 
                type="text"
                placeholder="0.00"
                className={classes.input_view}
                value={0}
                onChange={0} 
            />
            </div>
    </div>
)
}
