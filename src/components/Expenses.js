import './Expenses.css'
import React, {useState} from 'react'
import ExpenseFilter from './ExpenseFilter'
import ExpenseItem from './ExpenseItem'
function Expenses(props){
    const [year,setYear]=useState('2023');
    const filterExpensesByYear=props.expenses.filter((expense)=>{return expense.date.getFullYear().toString()===year;});
    const filterHandler=(selected)=>{
        setYear(selected);
    }
    return (
    <div className="expenses">
        <ExpenseFilter filterHandler={filterHandler} selectedYear={year}/>
        {
            filterExpensesByYear.map(
                (expense)=>{
                    return (
                        <ExpenseItem expense={expense}/>
                    );
                }
            )
        }
    </div>
    );
}
export default Expenses;