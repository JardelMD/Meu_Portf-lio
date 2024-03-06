import { useNavigate } from "react-router-dom"
import styles from "./style.module.scss"
import { FaExclamationCircle } from "react-icons/fa";


export const NotFoundPage = () => {
    const navigate = useNavigate();
    const redirectToHome = () => {
        navigate("/")
        window.location.reload()
        window.scrollTo(0, 0)
    }
    return (
        <main className={styles.main}>
            <div >
                <h1><span className={styles.error}>Error 404:</span> Not Found</h1>

                <button onClick={redirectToHome}>Homepage</button>
            </div>
            <FaExclamationCircle size={200} color="var(--color-failed)"/>
        </main>
    )
}