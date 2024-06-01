import styles from "./OptionBar.module.css"

import useOption from "./userOptions"

export default function OptionBar(className, ...props) {
  const [option, setOption] = useOption()

  const switchToNotifications = () => setOption("notifications")
  const switchToEditData = () => setOption("editdata")
  const switchToSuport = () => setOption("suport")

  return (
    <ul className={`${styles.optionBar} ${className}`}>
      <li onClick={switchToEditData} data-item-active-status={option === "editdata" ? "active" : "normal"} className={styles.item}>Editar Dados</li>
      <li onClick={switchToNotifications} data-item-active-status={option === "notifications" ? "active" : "normal"} className={styles.item}>Notificações</li>
      <li onClick={switchToSuport} data-item-active-status={option === "suport" ? "active" : "normal"} className={styles.item}>Suporte e Ajuda </li>
    </ul>
  )
}
