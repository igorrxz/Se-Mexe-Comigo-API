import styles from "./Fieldset.module.css"


export default function Fieldset({
  children,
  className,
  type,
  ...props
}) {
  return (
    <fieldset data-fielset-type={type} className={`${styles.base} ${className}`} {...props}>
      {children}
    </fieldset>
  )
}