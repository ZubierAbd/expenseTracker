import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

//Initial State

const InitialState = {
    transactions: [{
        id: 1, text: 'Dog food', amount: -20
    }, {
        id: 2, text: 'Dota 2 stuff', amount: -200
    }, {
        id: 3, text: 'Cocaine', amount: -13
    }, {
        id: 4, text: 'TCS Payment', amount: 700
    }]
}

//Create Context 

export const GlobalContext = createContext(InitialState)

//Provider component 

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, InitialState)

    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions, deleteTransaction,
        addTransaction
    }}> {
            children
        }</GlobalContext.Provider >)
}


