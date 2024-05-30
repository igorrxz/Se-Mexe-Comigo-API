import styles from "./OptionBar.module.css"

import useOption from "./userOptions"

<<<<<<< HEAD
export default function OptionBar({className, ...props}) {
=======
export default function OptionBar(className, ...props) {
>>>>>>> original-main/profile
  const [option, setOption] = useOption()

  const switchToNotifications = () => setOption("notifications")
  const switchToEditData = () => setOption("editdata")
  const switchToSuport = () => setOption("suport")

  return (
    <ul className={`${styles.optionBar} ${className}`}>
<<<<<<< HEAD
      <li onClick={switchToEditData} data-item-active-status={option === "editdata" || !option ? "active" : "normal"} className={styles.item}>Editar Dados</li>
=======
      <li onClick={switchToEditData} data-item-active-status={option === "editdata" ? "active" : "normal"} className={styles.item}>Editar Dados</li>
>>>>>>> original-main/profile
      <li onClick={switchToNotifications} data-item-active-status={option === "notifications" ? "active" : "normal"} className={styles.item}>Notificações</li>
      <li onClick={switchToSuport} data-item-active-status={option === "suport" ? "active" : "normal"} className={styles.item}>Suporte e Ajuda </li>
    </ul>
  )
}