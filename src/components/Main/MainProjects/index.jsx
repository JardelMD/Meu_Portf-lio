import { Link } from "react-router-dom"
import { useState } from "react"
import { MainProjectsResources } from "./MainProjectsResources";
import styles from "../../Main/style.module.scss"

export const MainProjectsList = ({ data }) => {
    const [showImage, setShowImage] = useState(false);

    const toggleElement = () => {
        setShowImage(!showImage);
    };

    return (
        <>
            <li>
                {!showImage ? (<img onClick={toggleElement} src={data.photo} alt={data.name} />) : (
                    <section onClick={toggleElement} className={styles.div}>
                        <h2>{data.name}</h2>
                        <p>{data.description}</p>
                    </section>
                )}
                <section>
                    <p>Links disponíveis:</p>
                    <div>
                        {data.linkProject ? <Link to={data.linkProject} target="_blank" ><button>Projeto</button></Link> : null}
                        <Link to={data.linkRepository} target="_blank" ><button>Repositório</button></Link>
                    </div>
                    <p>Recursos utilizados:</p>
                    <div>
                        <ul>{data.resources.language.map(language => <MainProjectsResources key={data.resources.id} language={language} />)}</ul>
                    </div>
                </section>
            </li>
        </>
    )
}