import moment from 'moment';

export const getDataFormat = () => {
    const currentDate = moment();
    const day = currentDate.date();
    const month = currentDate.month() + 1; // Adiciona 1 porque os meses são indexados de 0 a 11
    const year = currentDate.year();
    const formattedMonth = String(month).padStart(2, '0');
    const movementDay = `${day}/${formattedMonth}/${year}`;
   return movementDay; // Saída: dia/mês/ano (por exemplo, 22/03/2024)
}
export const getTimeFormat = () => {
    const currentDate = moment();
   return currentDate.format('HH:mm:ss');
}
export function extrairId(str:any) {
    // Verifica se a string contém o padrão comum de um ObjectId
    const match = str.match(/ObjectId\("(\w+)"\)/);
    // Se encontrar, retorna o ID, senão retorna a string original
    return match ? match[1] : str;
}
