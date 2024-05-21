import styles from "./EditData.module.css"

import Button from "@/common/components/Button/Button"
import Fieldset from "@/common/components/Fieldset"

export default function EditData() {
  return (
    <div>
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
      <Button className={styles.save}>Salvar</Button>
    </div>
  )
}