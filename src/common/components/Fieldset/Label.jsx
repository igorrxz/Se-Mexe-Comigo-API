import styles from "./Label.module.css"

export default function Label({children, className, ...props}) {
  return (
    <label className={`${styles.base} ${className}`} {...props}>{children}</label>
  )
}