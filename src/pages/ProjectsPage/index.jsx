import { useNavigate } from "react-router-dom"
import { database } from "../../services/database"
import { ProjectsList } from "./ProjectsList"
import styles from "./style.module.scss"

export const ProjectsPage = () => {
    const navigate = useNavigate()
    const backToHomepage = () => {
        navigate("/")
    }
    return (
        <>
            <section className={styles.project}>
                <header>
                    <button onClick={backToHomepage}>Voltar</button>
                </header>
                <div>
                    <ul>
                        {database.map(data => <ProjectsList key={data.id} data={data} />)}
                    </ul>
                </div>
            </section>
        </>
    )
}