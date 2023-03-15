import { Input as TextInput } from '@mui/material'
import React from 'react'

function Input({text,setText,placeholder,type,...props}) {
    
  return (
   <TextInput 
   autoFocus={true} 
   color={'primary'} 
   autoCapitalize={true} 
//    className='' 
    placeholder={placeholder}
    type={type}
    value={text}
   onChange={(e)=>setText(e.currentTarget.value)}
    {...props}
   />
  )
}

export default Input