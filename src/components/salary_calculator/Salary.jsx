import React from 'react';
import classes from './salary.module.scss';
import {FromsInput} from '../../UI/forms_input/Forms_input'



 export const Salary = () => {

    return (
        <div >
            <h1>Розрахунок заробітної плати</h1>
             <div className={classes.form_container}>
                 <FromsInput />
                 <FromsInput />
             </div>
        </div>
    )

}
