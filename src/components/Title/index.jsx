import styles from "./style.module.scss"

export const Title = ({ children }) => {
    return (
        <>
            <h1 className={styles.title}>{children}</h1>
        </>
    )
}