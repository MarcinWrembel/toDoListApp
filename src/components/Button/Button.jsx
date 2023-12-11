
import styles from './Button.module.css'

export function Button({children, onClick, isEmpty}) {
    return <button className={styles.button} onClick={onClick} disabled={isEmpty}>{children}</button>
}