import styles from "./SuportPage.module.css"

import SearchBar from "@/common/components/SearchBar"
import Button from "@/common/components/Button/Button"


export default function SuportPage() {
    return (
        <main>
            <SearchBar/>
            <div className={styles.wrapper}>
                <Button variant="inverted">Termos e Serviços</Button>
                <Button variant="inverted">Ajuda com o Site</Button>
                <Button variant="inverted">Contatos</Button>
            </div>
            <div className={styles.container}>
                <h3 className={styles.title}>Enviar uma solicitação</h3>
                <p className={styles.text}>Não importa se é um probleminha técnico<br/>
                    ou um surto, estamos aqui para ajudar!</p>
                <form className={styles.form}>
                    <label >1. Escolha um Assunto</label>
                    <textarea className={styles.textarea}></textarea>
                    <label>2. Descrição</label>
                    <textarea className={`${styles.textarea} ${styles.doubleHeight}`} ></textarea>
                </form>
                <Button>Enviar</Button>
            </div>
        </main>
    )
}