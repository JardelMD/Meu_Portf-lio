import { Link } from "react-router-dom"
import { ProjectsResources } from "./ProjectsResources"

export const ProjectsList = ({ data }) => {

    // console.log(data.resources.language)

    return (
        <>
            <li>
                <img src={data.photo} alt={data.name} />
                <div>
                    {data.linkProject ? <Link to={data.linkProject} target="_blank" ><button>Projeto</button></Link> : null}
                    <Link to={data.linkRepository} target="_blank" ><button>Repositório</button></Link>
                    <ul>{data.resources.language.map(language => <ProjectsResources key={data.resources.id} language={language} />)}</ul>

                </div>
            </li>
        </>
    )
}
