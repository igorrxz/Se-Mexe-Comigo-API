import { FiSearch } from "react-icons/fi"

import styles from "./SearchBar.module.css"

export default function SearchBar({
  className,
  placeholder,
  children,
  name,
  id,
  ...props
}) {
  return (
    <div className={`${styles.base} ${className}`}>
      <FiSearch size={25} height={24} color="#000" />
      <input
        placeholder={placeholder}
        className={styles.innerInput}
        type="text"   
        {...props}
      />
    </div>
  )
}
