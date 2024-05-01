import styles from "./Checkbox.module.css"


export default function Checkbox({className, ...props}){
  return (
    <input type="radio" className={`${styles.base} ${className}`} {...props} />
  )
}