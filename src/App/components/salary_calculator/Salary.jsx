import React from 'react';
import classes from './salary.module.scss';
import { useState } from 'react';
import SALARY_CONFIG from './salaryConfig';

 export const Salary = () => {

     let [dirty, setDirty] = useState('');
     let [pure, setPure] = useState('')

    function calculateValue(dirty, pure) {

        let newDirty = (dirty - (dirty * SALARY_CONFIG.ndflPercent) -(dirty * SALARY_CONFIG.vsPercent)).toFixed(2)

        let newPure = (pure /0.805).toFixed(2)
        return [newDirty, newPure]
    }

    function handleChangeDirty (event) {
        setDirty(dirty = event.target.value)
        setPure(pure = calculateValue(dirty, pure)[0])
        
    }
    function handleChangePure (event) {
        setPure(pure = event.target.value)
        setDirty(dirty = calculateValue(dirty, pure)[1])
    }

    return (
        <div >
            <h1>Розрахунок заробітної плати</h1>
             <div className={classes.form_container}>
                <input 
                    type="text" 
                    className={classes.input_view}
                    value={dirty}
                    onChange={handleChangeDirty} 
                />
                  <input 
                    type="text" 
                    className={classes.input_view}
                    value={pure}
                    onChange={handleChangePure} 
                />
             </div>
        </div>
    )

}
