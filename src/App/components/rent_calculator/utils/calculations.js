//Принимает входящие данные, производит расчеты и возвращает обьект с рассчитаными данными:

export const calculations = (incomeData) => {
 const calculatedData = incomeData

 let number = 1

    for (let i = 0; i < calculatedData.length; i++) {
        const element = calculatedData[i]
    // Добавим порядковый номер каждому элементу
        element.number = number++
     // Определим количество месяцев действия для каждого Договора numberOfMonth
        calculatedData[i].numberOfMonth =  monthDiff(new Date(calculatedData[i].aremeentDate), new Date(calculatedData[i].aremeentDateEnd))
    }

        return calculatedData
}

// Вспомагательные функции:


//Возвращает месяцы, округляет до целого
function monthDiff(dateFrom, dateTo) {
    return ((dateTo.getTime() - dateFrom.getTime()) / 1000 / 60 / 60 /24 / (365/12)).toFixed(1);
    //Как вариант решения:
    /* Math.round(dateTo.getMonth() - dateFrom.getMonth() +
    (12 * (dateTo.getFullYear() - dateFrom.getFullYear())) + 
    ((dateTo.getDate() - dateFrom.getDate()) / 365/12)) */
}