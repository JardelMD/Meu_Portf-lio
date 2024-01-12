import { useNavigate } from "react-router-dom"
import { database } from "../../services/database"
import { ProjectsList } from "./ProjectsList"

export const ProjectsPage = () => {
    const navigate = useNavigate()
    const backToHomepage = () => {
        navigate("/")
    }
    return (
        <>
            <section>
                <div>
                <button onClick={backToHomepage}>Voltar</button>
                <ul>
                    {database.map(data => <ProjectsList key={data.id} data={data}/>)}
                </ul>
                </div>
            </section>
        </>
    )
}