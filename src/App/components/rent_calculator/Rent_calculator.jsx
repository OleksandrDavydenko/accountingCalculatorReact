import React, {useRef, useState, useContext, useEffect} from 'react';
import ReactTable from "react-table-6";
import "react-table-6/react-table.css" ;
import classes from './rentCalculator.module.scss';
import {columns} from './columns';
import { Context } from "../../../index";
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { Loader } from '../loader/Loader';


export const RentCalculator = () => {
    const [data, setData] = useState([])
    const korespondentName = useRef(null)
    const agreementNumber = useRef(null)
    const aremeentDate = useRef(null)
    const monthPayment = useRef(null)

    const {auth, firestore} = useContext(Context)
    const [user] = useAuthState(auth)

    const [dbData, loading] = useCollectionData(
        firestore.collection('users').doc(user.uid).collection("agreements")
    )
    useEffect(() => {
        setData(dbData)
    }, [dbData]);

    const sendData = async (obj) => {
        //добавляем новый обьект "Договор"
        await firestore.collection('users').doc(user.uid).collection("agreements").add(
            obj
        )
    }

    if (loading) {
        return <Loader/>
    }



    const incomeData = {
        korespondentName: '',
        agreementNumber: '',
        aremeentDate: '',
        monthPayment: ''
    }

    const onButtonClick = ()=> {
        incomeData.korespondentName = korespondentName.current.value
        incomeData.agreementNumber = agreementNumber.current.value
        incomeData.aremeentDate = aremeentDate.current.value
        incomeData.monthPayment = monthPayment.current.value

        sendData(incomeData)
    }








    return (
        <div className={classes.container}>
            <div>
                <input 
                    ref={korespondentName}
                    type="text"
                    placeholder="Назва орендодавця"
                    className={classes.input_view}
                />
                <input 
                    ref={agreementNumber}
                    type="text"
                    placeholder="№ Договору"
                    className={classes.input_view}
                />
                <input 
                    ref={aremeentDate}
                    type="date"
                    placeholder="дата договору"
                    className={classes.input_view}
                />
                <input 
                    ref={monthPayment}
                    type="number"
                    placeholder="місячний платіж"
                    className={classes.input_view}
                />
                <button 
                    className={classes.add_button}
                    onClick={onButtonClick}
                >
                    Додати договір
                </button>
            </div>
            <ReactTable
                className={classes.table}
                columns={columns}
                data={data}
                defaultPageSize={5}
                noDataText={'Договори відсутні...'}
            >

            </ReactTable>
        </div>
    )

}


