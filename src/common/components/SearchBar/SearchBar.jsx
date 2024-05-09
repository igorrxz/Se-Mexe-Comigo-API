import { FiSearch } from 'react-icons/fi'
import styles from "./SearchBar.module.css"

export default function SearchBar({className, children, ...props}){
    return(
        <div className={styles.container}>
                <div className={styles.containerInput}>
                    <button className={styles.buttonSearch}>
                        <FiSearch size={25} color="#000"/>
                    </button>
                    <input 
                    type="text" 
                    placeholder= "Digite uma pergunta..."
                    />
                </div>
            </div>
    )
}