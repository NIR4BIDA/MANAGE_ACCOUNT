import InputForm from './InputForm'
import './NewExpense.css'
const NewExpense=(props)=>{
    const dataHandler = (data) =>{
        props.onNewExpense(data);
    }
    return(
        <div className='new-expense'>
            <InputForm onInputForm={dataHandler}/>
        </div> 
    );
}
export default NewExpense;