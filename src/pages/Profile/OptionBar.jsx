import styles from "./OptionBar.module.css"

export default function OptionBar() {
  return (
    <ul className={styles.optionBar}>
      <li data-item-active-status="normal" className={styles.item}>Editar Dados</li>
      <li data-item-active-status="active" className={styles.item}>Notificações</li>
      <li data-item-active-status="normal" className={styles.item}>Suporte e Ajuda </li>
    </ul>
  )
}
