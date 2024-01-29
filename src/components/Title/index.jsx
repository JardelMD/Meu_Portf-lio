import styles from "./style.module.scss"

export const Title = ({ children }) => {
    return (
        <>
            <h1 className={styles.autotyping}>{children}</h1>
        </>
    )
}