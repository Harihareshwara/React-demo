import React ,{useState} from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from "../UI/Button";
import ErrorModule from "../UI/ErrorModule";
import Wrapper from "../Helpers/Wrapper";
import Styles from "../UI/ErrorModule.module.css";



const AddUser=props=>{
const [enteredUserName,setEnteredUsername]=useState('');
const [enteredAge,setEnteredAge]=useState('');
const [error,setError]=useState();


    const addUserHandler=(event)=>{
        event.preventDefault();
        if(enteredUserName.trim().length===0||enteredAge.trim().length===0){
            setError({
                title:'Inavalid Input',
                message:'Inavalid Username and Age Give Proper Credentials '
            })
            return;
        }
    if(+enteredAge<1){
        setError({
            title:'Inavalid Input',
            message:'Inavalid Age Give Proper age greater than One'
        });
            return;
        };
    
        props.onAddUser(enteredUserName, enteredAge);
       setEnteredUsername('');
       setEnteredAge('');
    };
    const UserNamechangeHandler= (event) =>{
        setEnteredUsername(event.target.value);
    };
    const UserAgechangeHandler=(event)=>{
        setEnteredAge(event.target.value);
    };
    const errorHandler=()=>{
        setError(null);
    }
    
return(
    <React.Fragment>
    {error && <ErrorModule title={error.title} message={error.message} onConfirm={errorHandler}/>}
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
          <header className={Styles.header}>
              <h2>LOGIN</h2>
          </header>
   
        <label htmlFor="username">UserName</label>
        <input id="username"
         type="text"
         value={enteredUserName}
          onChange={UserNamechangeHandler}/>
        <label htmlFor="age">Age(Years)</label>
        <input id="age" 
        type="number"
        value={enteredAge}
         onChange={UserAgechangeHandler}/>
         <Button type="submit">AddUser</Button>
      </form>
      
</Card>
</React.Fragment>



);
};
export default AddUser;