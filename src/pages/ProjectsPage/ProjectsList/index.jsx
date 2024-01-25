import { Link } from "react-router-dom"
import { ProjectsResources } from "./ProjectsResources"
import styles from "../../ProjectsPage/style.module.scss"
import { useState } from "react";

export const ProjectsList = ({ data }) => {
    const [showImage, setShowImage] = useState(false);

    const toggleElement = () => {
        setShowImage(!showImage);
    };

    return (
        <>
            <li>
                {!showImage ? (<img onClick={toggleElement} src={data.photo} alt={data.name} />) : (
                    <div onClick={toggleElement} className={styles.div}>
                        <h2>{data.name}</h2>
                        <p>{data.description}</p>
                    </div>
                )}

                <section>
                    <p>Links disponíveis:</p>
                    <div>
                        {data.linkProject ? <Link to={data.linkProject} target="_blank" ><button>Projeto</button></Link> : null}
                        <Link to={data.linkRepository} target="_blank" ><button>Repositório</button></Link>
                    </div>
                    <p>Recursos utilizados:</p>
                    <div>
                        <ul>{data.resources.language.map(language => <ProjectsResources key={data.resources.id} language={language} />)}</ul>
                    </div>
                </section>
            </li>
        </>
    )
}
