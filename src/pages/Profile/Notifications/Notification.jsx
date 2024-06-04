import styles from "./Notification.module.css"

import Button from "@/common/components/Button"

export default function Notification() {
    function handleOnSubmit(event) {
        event.preventDefault()
    }

    return (
        <div>
            <h3 className={`${styles.title} noneInMobile`}>Notificações</h3>
            <form className={styles.form} onSubmit={handleOnSubmit}>
                <fieldset className={styles.fieldset}>
                    <input type="checkbox" />
                    <p>Desejo receber eventos do calendário do
                        Se Mexe Comigo.</p>
                </fieldset>
                <fieldset className={styles.fieldset}>
                    <input type="checkbox" />
                    <p>Desejo compartilhar minha localização em
                        tempo real.</p>
                </fieldset>
            </form>
            <Button className={styles.save}>Salvar</Button>
        </div>
    )
}
