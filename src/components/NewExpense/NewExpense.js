import {useState} from 'react'
import InputForm from './InputForm'
import './NewExpense.css'
const NewExpense=(props)=>{
    const clickAddHandler=()=>{
        setNewForm(
            <div className='new-expense'>
            <InputForm onInputForm={dataHandler} onCancel={cancelHandle}/>
            </div> 
            );
    }
    const [newForm,setNewForm]=useState(<button onClick={clickAddHandler}>Add expense</button>);
    const cancelHandle=()=>{
        setNewForm(<button onClick={clickAddHandler}>Add expense</button>);
    }
    const dataHandler = (data) =>{
        props.onNewExpense(data);
    }
    return(
        <div className='new-expense'>
        {newForm}  
        </div>
        
    );
}
export default NewExpense;