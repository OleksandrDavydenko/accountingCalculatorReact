import React, {useRef, useState, useContext} from 'react';
import ReactTable from "react-table-6";  
import "react-table-6/react-table.css" ;
import classes from './rentCalculator.module.scss';
/* import {data} from './data' */
import {columns} from './columns';
import { Context } from "../../../index";
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { Loader } from '../loader/Loader';
import firebase from '@firebase/app-compat';



export const RentCalculator = () => {
    const [data, setData] = useState()
    const korespondentName = useRef(null)
    const agreementNumber = useRef(null)
    const aremeentDate =useRef(null)
    const monthPayment =useRef(null)



    const {auth, firestore} = useContext(Context)
    const [user] = useAuthState(auth)

    const [dbData, loading] = useCollectionData(
        firestore.collection('agreements').orderBy('createdAt')
    )

    const sendData = async () => {
        firestore.collection('agreements').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            agreement: {test:'test'},
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
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

    let incomeArray = []
    function onButtonClick() {
        incomeData.korespondentName = korespondentName.current.value
        incomeData.agreementNumber = agreementNumber.current.value
        incomeData.aremeentDate = aremeentDate.current.value
        incomeData.monthPayment = monthPayment.current.value

        incomeArray = [...incomeArray, incomeData]

        const dataNew = incomeArray
        console.log(dataNew);

       
        setData(incomeArray);
        sendData()

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


