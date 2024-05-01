import styles from "./Input.module.css"

export default function Input({className, ...props}){
  return (
    <input type="text" className={`${styles.base} ${className}`} {...props}/>
  )
}