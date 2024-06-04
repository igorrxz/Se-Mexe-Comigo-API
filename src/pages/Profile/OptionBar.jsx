import styles from "./OptionBar.module.css"

import bellIcon from "@/assets/BellIcon.png"
import calendarIcon from "@/assets/CalendarIcon.png"
import documentIcon from "@/assets/DocumentIcon.png"
import supportIcon from "@/assets/SupportIcon.png"
import tierIcon from "@/assets/TierIcon.png"
import gearIcon from "@/assets/GearIcon.png"

import useOption from "./userOptions"

export default function OptionBar({ className, ...props }) {
  const [option, setOption] = useOption()

  const switchToNotifications = () => setOption("notifications")
  const switchToEditData = () => setOption("editdata")
  const switchToSuport = () => setOption("suport")

  return (
    <ul className={`${styles.optionBar} ${className}`}>
      <li onClick={switchToEditData} data-item-active-status={option === "editdata" ? "active" : "normal"} className={styles.item}>
        <img src={gearIcon} alt="" />
        <span>Editar Dados</span>
      </li>
      <li onClick={switchToNotifications} data-item-active-status={option === "notifications" ? "active" : "normal"} className={styles.item}>
        <img src={bellIcon} alt="" />
        <span>Notificações</span>
      </li>
      <li onClick={switchToSuport} data-item-active-status={option === "suport" ? "active" : "normal"} className={styles.item}>
        <img src={supportIcon} alt="" />
        <span>Suporte e Ajuda</span>
      </li>
    </ul>
  )
}
