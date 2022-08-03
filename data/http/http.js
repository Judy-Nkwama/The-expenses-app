const axios = require("axios").default;

const baseURL = "https://first-project-7f43c-default-rtdb.firebaseio.com";

export const postExpense = async (expenseData) => {
    try{
        const respose = await axios.post(`${baseURL}/expenses.json`, expenseData);
        return respose.data.name;
    }catch( exeption ){
        throw( new Error(exeption.message));
    }
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

export const updateExpenseDb = async (expenseId, expenseObject) => {
    return await axios.put(`${baseURL}/expenses/${expenseId}.json`, expenseObject);
};

export const deleteExpense = async (expenseId) => {
    return await axios.delete(`${baseURL}/expenses/${expenseId}.json`);
};