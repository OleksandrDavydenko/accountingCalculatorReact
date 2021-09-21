import React from 'react';
import classes from './salary.module.scss';
<<<<<<< HEAD
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
=======
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
>>>>>>> 82719c2f299edb5422fa23c532a570b43bb565a5
    }

    return (
        <div >
            <h1>Розрахунок заробітної плати</h1>
             <div className={classes.form_container}>
<<<<<<< HEAD
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
=======
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
>>>>>>> 82719c2f299edb5422fa23c532a570b43bb565a5
                    onChange={handleChangePure} 
                />
             </div>
        </div>
    )
<<<<<<< HEAD
=======

>>>>>>> 82719c2f299edb5422fa23c532a570b43bb565a5
}
