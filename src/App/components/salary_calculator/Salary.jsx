import React from 'react';
import classes from './salary.module.scss';
import { useState, useRef } from 'react';
import checkValue from '../../utils/checkValue';
import calculateValue from './calculateValue';

 export const Salary = () => {

    let [dirtySalary, setDirtySalary] = useState('');
    let [pureSalary, setPureSalary] = useState('');

    const dirtySalaryRef = useRef(dirtySalary);
    const pureSalaryRef = useRef(pureSalary);
    
     function handleChangeDirty(event) {
         
         const checkedValue = checkValue(event.target.value) // ��������� ��������, ������������ ����� ��� ��� �������� � �����
         
        setDirtySalary(checkedValue)
        dirtySalaryRef.current = checkedValue
        setPureSalary(calculateValue(dirtySalaryRef.current, pureSalaryRef.current)[0]) 
    }

     function handleChangePure(event) {

         const checkedValue = checkValue(event.target.value) // ��������� ��������, ������������ ����� ��� ��� �������� � �����
 
        setPureSalary(checkedValue)
        pureSalaryRef.current = checkedValue
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
