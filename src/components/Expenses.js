import './Expenses.css'
import React, {useState} from 'react'
import ExpenseFilter from './ExpenseFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'
function Expenses(props){
    const [year,setYear]=useState('2023');
    const filterExpensesByYear=props.expenses.filter((expense)=>{return expense.date.getFullYear().toString()===year;});
    const filterHandler=(selected)=>{
        setYear(selected);
    }
    return (
    <div className="expenses">
        <ExpenseFilter filterHandler={filterHandler} selectedYear={year}/>
        <ExpensesChart expenses= {filterExpensesByYear}/>
        <ExpensesList filterExpensesByYear={filterExpensesByYear}/>
    </div>
    );
}
export default Expenses;