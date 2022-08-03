import { createContext, useReducer } from "react";

export const ExpensesContext = createContext({
    expenses : [],
    setExpenses : (expenseList) => {},
    addExpense : ({date, amount, description}) => {},
    updateExpense : (id, {date, amount, description}) => {},
    deleteExpense : (id) => {}
});

const expenseReducer = (state, action) => {
    switch(action.type){
        case "Set" :
            return action.payload
        case "Add" :
            const id = new Date().toDateString() + Math.random().toString();
            return [{...action.payload, id : id}, ...state];
        case "Delete" : 
            return state.filter(exp => exp.id != action.payload);
        case "Update" :
            
            const expToUpdateInDex = state.findIndex( exp => exp.id == action.payload.id);
            const updatedExpense = {...(state[expToUpdateInDex]), ...action.payload.expense };
            const expensesListCopy = [...state];
            expensesListCopy[expToUpdateInDex] = updatedExpense;
            return expensesListCopy;
            
        default :
            return state;
    }
};

const ExpenseContextProvider = ({children}) => {

    const [ expenseState, dispatch ] = useReducer(expenseReducer, []);

    const setExpenses = (expenseList) => {
        dispatch({ type : "Set", payload : expenseList})
    };

    const addExpense = (expenseObject) => {
        dispatch({type : "Add", payload : expenseObject });
    };

    const deleteExpense = (id) => {
        dispatch({type : "Delete", payload : id});
    };

    const updateExpense = (id, expenseObject) => {
        dispatch({type : "Update", payload : { id : id, expense : expenseObject} })
    };

    const value = {
        expenses : expenseState,
        setExpenses : setExpenses,
        addExpense : addExpense,
        updateExpense : updateExpense,
        deleteExpense : deleteExpense
    };

    return <ExpensesContext.Provider value={value} >
        {children}
    </ExpensesContext.Provider>
};

export default ExpenseContextProvider;