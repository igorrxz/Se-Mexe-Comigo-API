import profileImage from "@/assets/Profile.png"

import styles from "./ProfilePage.module.css"
import Arrow from "@/common/components/svg/Arrow"
import OptionBar from "./OptionBar"
import Fieldset from "@/common/components/Fieldset"
import PhotoCamera from "@/common/components/svg/PhotoCamera"

export default function ProfilePage() {
  return (
    <main className={`${styles.profile} single`}>
      <Arrow className={styles.back} />
      <div className="container">
        <div className={styles.top}>
          <img
            className={styles.image}
            src={profileImage}
            alt="Profile Image"
          />
          <p className={`${styles.name} big`}>Nome de Usuário</p>
          <PhotoCamera className={styles.camera} />
        </div>
        <OptionBar />
        <form className={styles.optionsList}>
          <Fieldset.Root className={styles.fieldset} type="input">
            <Fieldset.Label>Nome</Fieldset.Label>
            <Fieldset.Input placeholder="Nome do Usuário" />
          </Fieldset.Root>
          <Fieldset.Root className={styles.fieldset} type="input">
            <Fieldset.Label>Apelido</Fieldset.Label>
            <Fieldset.Input placeholder="Apelido do usuário" />
          </Fieldset.Root>
          <Fieldset.Root className={styles.fieldset} type="input">
            <Fieldset.Label>Gênero</Fieldset.Label>
            <ul className={styles.genderOptions}>
              <li className={styles.genderOption}>
                <Fieldset.Checkbox className={styles.checkbox} />
                <span className={styles.gender}>Masculino</span>
              </li>
              <li className={styles.genderOption}>
                <Fieldset.Checkbox className={styles.checkbox} />
                <span className={styles.gender}>Feminino</span>
              </li>
              <li className={styles.genderOption}>
                <Fieldset.Checkbox className={styles.checkbox} />
                <span className={styles.gender}>Outro</span>
              </li>
            </ul>
          </Fieldset.Root>
          <Fieldset.Root className={styles.fieldset} type="input">
            <Fieldset.Label>Celular</Fieldset.Label>
            <Fieldset.Input placeholder="(00) 90000-0000" />
          </Fieldset.Root>
          <Fieldset.Root className={styles.fieldset} type="input">
            <Fieldset.Label>CEP</Fieldset.Label>
            <Fieldset.Input placeholder="30800-220" />
          </Fieldset.Root>
        </form>
      </div>
    </main>
  )
}
