import React from 'react'
import { GlobalContext } from '../context/GlobalState'
import { useContext } from 'react'
export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext)
    const values = transactions.map(e => e.amount)
    const income = values.filter(e => e > 0)
    const expense = values.filter(e => e <= 0)
    const incomeTotal = income.reduce((acc, income) => (acc += income), 0).toFixed(2)
    const expenseTotal = expense.reduce((acc, income) => (acc += income), 0).toFixed(2)

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">+${Math.abs(incomeTotal)}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">-${Math.abs(expenseTotal)}</p>
            </div>
        </div>
    )
}
