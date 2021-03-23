import { format } from 'date-fns'
//fix

export function formatDate(Date){
    const newDate = format(Date, 'dd/MM/yyyy')
    return newDate;
}

