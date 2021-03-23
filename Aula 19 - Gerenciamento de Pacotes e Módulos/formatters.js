import { format } from 'date-fns'


export function formatDate(Date){
    const newDate = format(Date, 'dd/MM/yyyy')
    return newDate;
}

