import { useEffect } from "react";
import styles from '../styles/Button.module.css'

export function Button(props){
    useEffect( () => {
        return () => {
            console.log("Texto do anchor mudou")
        }
    }, [props.text2])

   return (
       <button onClick = { () => {
        props.func()}}
        className = {styles.container}
        >
        {props.text}
        </button>
   )
}