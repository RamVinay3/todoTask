import React from 'react'
import styles from './stylings/error.module.css'
import { useRouteError } from "react-router-dom"
function Error() {
  const error = useRouteError();
  console.error(error);
  return (
    
    <div className={styles.error}>
     <h1 > 404 Page not found</h1>
     <h2>{error.statusText || error.message}</h2>
    </div>
  )
}

export default Error;