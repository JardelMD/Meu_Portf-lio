import { useNavigate } from "react-router-dom";
import Foto from "../../assets/Foto.jpg";
import { Footer } from "../../components/Footer";
import styles from "./style.module.scss"

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
                        Sou formado em Licenciatura em Matemática pela Universidade Federal de Pelotas (UFPel), possuo Mestrado em Matemática Aplicada e Doutorado em Matemática Aplicada pela Universidade Federal do Rio Grande do Sul (UFRGS). Durante toda a minha formação tive contato com programação, desenvolvendo trabalhos e projetos de pesquisa. Após a conclusão do meu doutorado, conversando com alguns desenvolvedores formados, tive interesse em ingressar nessa promissora área, e aqui estou! Atualmente sou Desenvolvedor Front-End e estou cursando Back-End na <a className={styles.link} href="https://kenzie.com.br/" target="_blank">Kenzie Academy Brasil</a> para concluir meu curso de Desenvolvedor Web Fullstack.</p>
                </div>
            </div>
            <div className={styles.div}>
                <h2>Minha jornada até agora:</h2>
                <ul>
                    <li>03/2013 - 02/2016: Licenciatura em Matemática (UFPel);</li>
                    <li>03/2017 - 03/2019: Mestrado em Matemática Aplicada (UFRGS);</li>
                    <li>04/2019 - 03/2023: Doutorado em Matemática Aplicada (UFRGS);</li>
                    <li>05/2023 - atualmente: Desenvolvimento Web Fullstack (<a className={styles.link} href="https://kenzie.com.br/" target="_blank">Kenzie Academy Brasil</a>).</li>
                </ul>
            </div>
            <Footer />
        </section>
    )
}