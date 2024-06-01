import styles from "./Breadcrumb.module.css"

export default function Breadcrumb({className, children, ...props}) {
  return (
    <ul className={`${styles.base} ${className}`} {...props}>
      {children} 
    </ul>
  )
}