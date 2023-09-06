import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'
const ExpensesList=(props)=>
{
    if(props.filterExpensesByYear.length===0){
        return (<h2 className='expenses-list__fallback'>No such expenses found</h2>);
    }
        return(
        <ul className='expenses-list'>
        {props.filterExpensesByYear.map(
            (expense)=>{
                return (
                    <ExpenseItem expense={expense}/>
                );
            }
        )}
        </ul> 
        );
    }
export default ExpensesList;