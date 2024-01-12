import { useNavigate } from "react-router-dom";
import { Title } from "../Title";
import styles from "./style.module.scss"
import file from "../../files/curriculo.pdf"

export const Header = () => {
    const navigate = useNavigate();
    const redirectToProjectsPage = () => {
        navigate("/projects")
    }
    const redirectToAboutMePage = () => {
        navigate("/about")
    }
    const redirectToContactsPage = () => {
        navigate("/contacts")
    }
    const downloadPDF = () => {
        const pdfUrl = file;
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.setAttribute('download', 'Currículo Jardel Moreira Dylewski.pdf');
        document.body.appendChild(link);
        link.click();
    }
    return (
        <>
            <section className={styles.header}>
                <div>
                    <Title>Portfólio Jardel</Title>
                    <nav>
                        <ul>
                            <li><button className={styles.btnDefault} onClick={redirectToProjectsPage}>Projetos</button></li>
                            <li><button className={styles.btnDefault} onClick={redirectToAboutMePage}>Sobre</button></li>
                            <li><button className={styles.btnDefault} onClick={downloadPDF}>Currículo</button></li>
                            <li><button className={styles.btnDefault} onClick={redirectToContactsPage}>Contato</button></li>
                        </ul>
                    </nav>
                </div>
            </section>

        </>
    )
}