export const columns = [
/*         {
            Header: "ID",
            accessor: 'ID',
            width: 70
        }, */
        {
            Header: "Орендодавець",
            accessor: 'korespondentName',
            style: {
                fontSize: 17,
                borderRight: '1px solid'
            },
            width: 200,
        },
        {
            Header: "№ Договору",
            accessor: 'agreementNumber',
           /*  width: 150, */
        },
        {
            Header: "Дата договору",
            accessor: 'aremeentDate',
            /* width: 120 */

        },
        {
            Header: "Місячний платіж",
            accessor: 'monthPayment',
            /* width: 170 */
        },
        
    ]