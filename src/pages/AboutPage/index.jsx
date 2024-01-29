import { useNavigate } from "react-router-dom";
import Foto from "../../assets/Foto.jpg";
import { Footer } from "../../components/Footer";
import styles from "./style.module.scss"
import { Title } from "../../components/Title";

export const AboutMePage = () => {
    const navigate = useNavigate();
    const redirectToHome = () => {
        navigate("/")
    }
    return (
        <section className={styles.main}>
            <header>
                <h1>Jardel Moreira Dylewski</h1>
                <button onClick={redirectToHome}>Voltar</button>
            </header>
            <div>
                <div>
                    <img src={Foto} alt="Foto Jardel" />

                </div>
                <div>
                    <h1>Sobre mim:</h1>
                    <p>Olá, me chamo Jardel Moreira Dylewski. Sou natural de Dom Feliciano-RS, mas moro em Porto Alegre-RS há alguns anos.
                        Sou formado em Licenciatura em Matemática pela Universidade Federal de Pelotas (UFPel), possuo Mestrado em Matemática Aplicada eD outorado em Matemática Aplicada pela Universidade Federal do Rio Grande do Sul (UFRGS). Durante toda a minha formação tive contato com programação, desenvolvendo trabalhos e projetos de pesquisa. Após a conclusão do meu doutorado, conversando com alguns desenvolvedores formados, tive interesse em ingressar nessa promissora área, e aqui estou! Atualmente sou Desenvolvedor Front-End e estou cursando Back-End na <a className={styles.link} href="https://kenzie.com.br/">Kenzie Academy Brasil</a> para concluir meu curso de Desenvolvedor Web Fullstack.</p>
                </div>
            </div>
            <Footer />
        </section>
    )
}