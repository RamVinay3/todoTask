import React, { useState } from 'react'
import Input from './Input'

function Form() {
    const [title,setTitle]=useState('')
  return (
    <div style={{
        display:'flex',
        flexDirection:'column',
        // width:'30%',
        // boxSizing:'border-box',
        // padding:'0 3%',
        alignItems:'center',
        marginTop:'5%'
        }}>
        <div style={{
             display:'flex',
        flexDirection:'column', 
        width:'30%',
        // boxSizing:'border-box',
        padding:'0 3%',

        }}>
        <Input setText={setTitle} text={title} placeholder="enter Title"/>
        <Input setText={setTitle} text={title} placeholder="make description"/>
        <Input setText={setTitle} text={title} placeholder="set Date"/>
        <Input setText={setTitle} text={title}  placeholder="Set Time"/>
        </div>
    </div>
  )
}

export default Form