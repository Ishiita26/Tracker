/* Issues occur when we want to manage large number of states.
Prop drilling krni pdhti hai ek ek component se state pass krne pdhte hai 
isse better we can keep our states in context waha se directly component access
krlega no need to pass from one component to another. Time efficient and less
chances of error */

/* const [state,dispatch] = useReducer(reducer,initialState)
PURE FUNCTION: Jo koi side effect produce ni krta and returns same datatype 
of out as of input.
REDUCER FUNCTION: takes in a state and action and returns a new state
DISPATCH: trigger action.
reducer(function hota hai) must be defined and it should return something.
const reduce =(state,action) =>{
    return state;
}
*/

import React, { useReducer, createContext } from 'react';
import contextReducer from './contextReducer'


//creating context
const initialState = JSON.parse(localStorage.getItem('transactions')) || [[{"amount":45,"category":"House","type":"Expense","date":"2023-04-12","id":"67d55855-e1d6-400d-8498-0036ba0c16c8"},{"amount":15,"category":"Travel","type":"Expense","date":"2023-04-18","id":"7049a338-3308-4a8d-a564-a09918732246"},{"amount":50,"category":"Business","type":"Income","date":"2023-04-18","id":"ac8495be-e072-4eaf-a5ba-ccde8d4f7143"},{"amount":100,"category":"Salary","type":"Income","date":"2023-04-12","id":"ee6b5736-4ae2-41ad-8063-f5c971fd9eb6"}]];
 {/*empty array no transaction at the start*/}

export const ExpenseTrackerContext = createContext(initialState);

//exporting new component function called provider
/*rendering full logic for context,everything wrappedin this component
is going to have access to the context*/

//reducer - means how we'll change our state.

/*USE REDUCER is use state hook but when you've complex states*/
export const Provider = ({ children }) => {

    const[transactions,dispatch] = useReducer(contextReducer, initialState);
    
    //Action
    const deleteTransaction = (id) => {
        dispatch({ type: 'DELETE_TRANSACTION', payload:id })
        {/*after deleteion dispatch will run and payload will be displayed*/}
    }

    const addTransaction = (transaction) => {
        dispatch({ type:'ADD_TRANSACTION', payload:transaction })
        {/*payload is transaction we dont have any id yet,we'll add now*/}
    }
  
    const balance = transactions.reduce((acc, currVal) => (currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount), 0);

    return (
        <ExpenseTrackerContext.Provider value={{
            deleteTransaction,
            addTransaction,
            transactions,
            balance
        }}>
        {children}
        </ExpenseTrackerContext.Provider>
    )
}





