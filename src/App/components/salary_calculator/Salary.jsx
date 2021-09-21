import React from 'react';
import classes from './salary.module.scss';
import { useState, useRef } from 'react';
import calculateValue from './calculateValue';

 export const Salary = () => {

    let [dirtySalary, setDirtySalary] = useState('');
    let [pureSalary, setPureSalary] = useState('');

    const dirtySalaryRef = useRef(dirtySalary);
    const pureSalaryRef = useRef(pureSalary);
    //sss
    function handleChangeDirty (event) {
        setDirtySalary(event.target.value)
        dirtySalaryRef.current = event.target.value
        setPureSalary(calculateValue(dirtySalaryRef.current, pureSalaryRef.current)[0]) 
    }

    function handleChangePure (event) {
        setPureSalary(event.target.value)
        pureSalaryRef.current = event.target.value
        setDirtySalary(calculateValue(dirtySalaryRef.current, pureSalaryRef.current)[1])
    }

    return (
        <div >
            <h1>Розрахунок заробітної плати</h1>
             <div className={classes.form_container}>
                <input
                    type="text" 
                    className={classes.input_view}
                    value={dirtySalary}
                    onChange={handleChangeDirty} 
                />
                <input 
                    type="text" 
                    className={classes.input_view}
                    value={pureSalary}
                    onChange={handleChangePure} 
                />
             </div>
        </div>
    )
}
