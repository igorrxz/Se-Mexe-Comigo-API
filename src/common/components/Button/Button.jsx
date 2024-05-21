import styles from "./Button.module.css"

export default function Button({className, variant = "normal", children, ...props}) {
  return (
    <button data-button-variant={variant} className={`${styles.base} ${className}`} {...props}>{children}</button>
  )
}