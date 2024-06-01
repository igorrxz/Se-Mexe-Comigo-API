import styles from "./FriendsProfile.module.css"

import Lines from "@/common/components/svg/Line"
import Star from "@/common/components/svg/Star"

export default function FriendsProfile() {
  return (
    <main className={styles.friendsProfile}>
      <p>
        <span>Home</span>
        <span>Se Mexe Comigo</span>
      </p>
      <h2 className={styles.title}>Se Mexe Comigo</h2>
      <section className={styles.wrapper}>
        <h6 className={styles.username}>Matheus Guilherme da Silva Lins</h6>
        <div className={styles.field}>
          <Star height={24} width={24} />
          <h6 className={styles.subtitle}>Avaliações</h6>
          <div className={styles.avaliation}>
            <span className={styles.grade}>
              <strong>
                0.00/<span>5</span>
              </strong>
              <span className="">(0)</span>
            </span>
            <Lines className={styles.diagram} />
          </div>
        </div>
        <div className={styles.field}>
          <h6>Data de Nascimento</h6>
          <span>29/10/2000</span>
        </div>
        <div className={styles.field}>
          <h6>Genero</h6>
          <span>Masculino</span>
        </div>
      </section>
    </main>
  )
}
