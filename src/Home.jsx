import React from 'react'
import Header from './Reusable/header';
import HomeIcon from '@mui/icons-material/Home';
import styles from './stylings/home.module.css'
import { Navigate, useNavigate } from 'react-router-dom';
// import { useHistory } from "react-router-dom";
const types=['Todo Tasks','Completed Tasks','Thoughts','Urgent Tasks']
const category=[
    {
        name:'Add Tasks',
        description:"Add a remainder to accomplish a new Task",
        link:'/addtasks'

    },
    {
        name:'Todo Tasks',
        description:'These are tasks which are to be done.',
        link:'/todo-tasks'
    },
    {
        name:'Completed Tasks',
        description:'These are tasks done by you.',
        link:'/completed-tasks'
    },
    {
        name:'Thoughts',
        description:'your thoughts regarding a matter',
        link:'/thoughts'
    },
    {
        name:'Urgent Tasks',
        description:'This tasks are considered to be priority',
        link:'/urgent-tasks'
    }
]
const Display=({item})=>{
    const {name,description}=item;
const navigate=useNavigate()
    // const history=useHistory();
    return(
        <div className={styles.card} onClick={(e)=>{
            console.log(e)
            
     
            navigate(item.link)
        }}
          >
            <h3>{name}</h3>
            <p> {description}</p>
        </div>
    )
}
const  Home=()=> {
  
 return  (
    <div>
        <Header
        icon={<HomeIcon/>}
        title={"HomePage"}
        />
        <div className={styles.main}>
        {
            category.map((l,i)=>{
                return(
                    // <h1>{JSON.stringify(l)}</h1>
                    <Display item={l}/>
                )
            })
        }
        </div>
    </div>
 )
}

export default  Home;