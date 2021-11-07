import React,{Fragment, useState} from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';


function App() {
  const[userList,setuserList]=useState([]);
    const addUserHandler=(Uname,Uage)=>{
      setuserList((prevUserList)=>{
        return[...prevUserList,
          { name:Uname,
            age:Uage,
            id:Math.random().toString()}];

      })
    }

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={userList}/>

      </Fragment>
  );
}

export default App;
