import './InputForm.css'
import React,{useState} from 'react'
const InputForm=(props)=>{
    const [enteredTitle,setTitle]=useState('');
    const [enteredDate,setDate]=useState('');
    const [enteredAmount,setAmount]=useState('');
    const submitHandler=(event)=>{
        event.preventDefault();
        const expenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate),
        };
        props.onInputForm(expenseData);
        setTitle('');
        setDate('');
        setAmount('');
    }
    const changeHandler=(id,val)=>{
        if(id==='title'){
            setTitle(val);
        }
        else if(id==='date'){
            setDate(val);
        }
        else{
            setAmount(val);
        }
    }
    return(
        <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
            <lable>Title</lable>
            <input 
            type='text'
             value={enteredTitle}
             onChange={(event)=>changeHandler('title',event.target.value)}/>
            </div>
            <div className='new-expense__control'>
            <lable>Amount</lable>
            <input 
            type='number' 
            value={enteredAmount}
            onChange={(event)=>changeHandler('amount',event.target.value)}/>
            </div>
            <div className='new-expense__control'>
            <lable>Date</lable>
            <input 
            type='date' 
            min='2019-01-01' 
            max='2023-01-09' 
            value ={enteredDate} 
            onChange={(event)=>changeHandler('date',event.target.value)}/>
            </div>
        </div>
        <div className='new-expense__actions'> 
        <button type='submit'>Add expense</button>
        </div>
        </form>
    );
}
export default InputForm;