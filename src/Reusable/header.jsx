import React from 'react'

function Header({icon,title}) {
  return (
    <div style={{
        display:'flex',
        justifyContent:'space-between',
        backgroundColor:'black',
        // height:"7%",
        padding:'0% 5%',
        color:'white',
        display:'flex',
        alignItems:'center'
    }}>
        
        <div >{icon}</div>
        <h1 style={{textTransform:'capitalize'}}>{title}</h1>
        <button style={{backgroundColor:'rgb(56,56,56)',color:'white',fontWeight:'600',padding:'5px 10px',borderRadius:'5px'}}>Logout</button>
    </div>
  )
}

export default Header