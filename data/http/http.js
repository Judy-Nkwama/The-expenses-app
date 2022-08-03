const axios = require("axios").default;

const baseURL = "https://first-project-7f43c-default-rtdb.firebaseio.com";

export const postExpense = (expenseData) => {
    axios.post(`${baseURL}/expenses.json`, expenseData);
};

export const fetchExpense = async () => {
    const expenses = [];
    try{
        const responce = await axios.get(`${baseURL}/expenses.json`);

        //console.log(responce);

        const data = responce.data;
        for( let key in data ){
            const expenseI = {
                id : key,
                amount : data[key].amount,
                description : data[key].description,
                date : new Date(data[key].date)
            };
            expenses.push(expenseI)
        }
    }catch(exeption){
        console.log(`An error occured when fetching data : ${exeption.message}`);
    }
    
    return expenses;
};