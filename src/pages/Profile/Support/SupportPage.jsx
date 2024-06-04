import styles from "./SupportPage.module.css"

import SearchBar from "@/common/components/SearchBar"
import Button from "@/common/components/Button/Button"

export default function SuportPage() {
    return (
        <div className={`${styles.suport} container seventyPercentOfScreenHeight`}>
            <h3 className={`${styles.title} noneInMobile`}>Suporte e Ajuda</h3>
            <SearchBar
                placeholder="Digite alguma coisa..."
                className={styles.searchBar}
            />
            <div className={styles.wrapper}>
                <Button variant="inverted" className={styles.button}>
                    Termos e Serviços
                </Button>
                <Button variant="inverted" className={styles.button}>
                    Ajuda com o Site
                </Button>
                <Button variant="inverted" className={styles.button}>
                    Contatos
                </Button>
            </div>
            <div className={styles.container}>
                <h3 className={styles.subtitle}>Enviar uma solicitação</h3>
                <p className={styles.text}>
                    Não importa se é um probleminha técnico ou um surto, estamos aqui para
                    ajudar!
                </p>
                <form className={styles.form}>
                    <label className={styles.label}>1. Escolha um Assunto</label>
                    <textarea className={styles.textarea}></textarea>
                    <label className={styles.label}>2. Descrição</label>
                    <textarea
                        className={`${styles.textarea} ${styles.doubleHeight}`}
                    ></textarea>
                    <Button className={styles.send}>Enviar</Button>
                </form>
            </div>
        </div>
    )
}
