import React, { useState } from 'react'

import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = (props) => {
    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    // Open/close Expense form
    const [isEditing, setIsEditing] = useState(false);

    const newExpenseToggle = () => {
        setIsEditing(!isEditing);
      };

    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={newExpenseToggle}>New Expense</button>}
            {isEditing && <ExpenseForm toggle={newExpenseToggle} onSaveExpenseData={onSaveExpenseDataHandler} />}
        </div>
    );
};

export default NewExpense;