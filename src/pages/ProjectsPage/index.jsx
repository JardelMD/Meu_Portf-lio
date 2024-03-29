import { useNavigate } from "react-router-dom"
import { database } from "../../services/database"
import { ProjectsList } from "./ProjectsList"
import styles from "./style.module.scss"

export const ProjectsPage = () => {
    const navigate = useNavigate()
    const backToHomepage = () => {
        navigate("/")
        window.location.reload()
        window.scrollTo(0, 0)
    }
    return (
        <>
            <section className={styles.project}>
                <div className={styles.divHeader}>
                    <header>
                        <button onClick={backToHomepage}>Voltar</button>
                    </header>
                </div>
                <div className={styles.divProjects}>
                    <h2>Projetos Front-end:</h2>
                    <ul>
                        {database.map(data => <ProjectsList key={data.id} data={data} />)}
                    </ul>
                </div>
            </section>
        </>
    )
}