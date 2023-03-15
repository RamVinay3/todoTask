import React from 'react'
import Header from '../Reusable/header'
import styles from '../stylings/addtasks.module.css'
import AddTaskIcon from '@mui/icons-material/AddTask';
import Input from '../Reusable/Input';
import Form from '../Reusable/Form';
function Addtasks() {
  return (
    <div >
           
        <Header title={"add task"} icon={<AddTaskIcon fontSize='large'/>}/>
        <Form/>
    
    </div>
  )
}

export default Addtasks