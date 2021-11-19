import React from 'react';
import ReactTable from "react-table-6";
import "react-table-6/react-table.css" ;
import classes from './rentTableV6.module.scss';




export const RentTableV6 = ({data}) => {

   const columns = [
/*         {
            Header: "ID",
            accessor: 'ID',
            width: 70
        }, */
        {
            Header: "Орендодавець",
            accessor: 'korespondentName',
            style: {
                borderRight: '1px solid grey'
            },
            /* width: 200, */
        },
        {
            Header: "№ Договору",
            accessor: 'agreementNumber',
                style: {
                borderRight: '1px solid grey'
            },
            /* width: 200, */
        },
        {
            Header: "Дата договору",
            accessor: 'aremeentDate',
                style: {
                borderRight: '1px solid grey'
            },
        },
        {
            Header: "Місячний платіж",
            accessor: 'monthPayment',
                style: {
                borderRight: '1px solid grey'
            },
            /* width: 200, */
        },
        
    ]

    const useMemoData = React.useMemo(() => data, [data])
    return (
            <ReactTable
                className={classes.table}
                columns={columns}
                data={useMemoData}
                defaultPageSize={7}
                noDataText={'Договори відсутні...'}
            >
            </ReactTable>
    )

}


