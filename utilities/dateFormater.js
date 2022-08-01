export const formatDate = date => `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

export const dateMinusXdays = (date, daysNumber) => new Date(date.getFullYear(), date.getMonth(), date.getDate() - daysNumber);