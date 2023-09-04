import './Expenses.css'
import React, {useState} from 'react'
import ExpenseFilter from './ExpenseFilter'
import ExpenseItem from './ExpenseItem'
function Expenses(props){
    const [year,setYear]=useState('2023');
    const filterHandler=(selected)=>{
        setYear(selected);
    }
    return (
    <div className="expenses">
        <ExpenseFilter filterHandler={filterHandler} selectedYear={year}/>
        <ExpenseItem expense={props.expenses[0]}/>
        <ExpenseItem expense={props.expenses[1]}/>
        <ExpenseItem expense={props.expenses[2]}/>
        <ExpenseItem expense={props.expenses[3]}/>
    </div>
    );
}
export default Expenses;