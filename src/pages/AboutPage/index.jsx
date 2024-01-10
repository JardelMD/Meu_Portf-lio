import { useNavigate } from "react-router-dom";
import Foto from "../../assets/Foto.jpg";
import { Footer } from "../../components/Footer";

export const AboutMePage = () => {
    const navigate = useNavigate();
    const redirectToHome = () => {
        navigate("/")
    }
    return (
        <section>
            <div >
                <div>
                    <img src={Foto} alt="Foto Jardel" />
                    <button onClick={redirectToHome}>Voltar</button>
                </div>
                <h1>Sobre mim:</h1>
                <p>Olá, me chamo Jardel Moreira Dylewski. Sou natural de Dom Feliciano-RS, mas moro em Porto Alegre-RS há alguns anos.
                    Sou formado em Licenciatura em Matemática pela Universidade Federal de Pelotas (UFPel), possuo Mestrado em Matemática Aplicada eD outorado em Matemática Aplicada pela Universidade Federal do Rio Grande do Sul (UFRGS). Durante toda a minha formação tive contato com programação, desenvolvendo trabalhos e projetos de pesquisa. Após a conclusão do meu doutorado, conversando com alguns desenvolvedores formados, tive interesse em ingressar nessa promissora área, e aqui estou! Atualmente sou Desenvolvedor Front-End e estou cursando Back-End na <a href="https://kenzie.com.br/">Kenzie Academy Brasil</a> para concluir meu curso de Desenvolvedor Web Fullstack.</p>
            </div>
            <Footer/>
        </section>
    )
}