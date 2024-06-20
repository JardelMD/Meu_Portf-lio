import { FaHtml5, FaCss3Alt, FaReact, FaGithub, FaNodeJs, FaSass, FaPython } from "react-icons/fa"
import { FaGitAlt } from "react-icons/fa6"
import { DiDjango } from "react-icons/di";
import { SiTypescript, SiStyledcomponents, SiExpress, SiTailwindcss, SiPostgresql, SiPrisma, SiJest, SiSqlite } from "react-icons/si"
import { IoLogoJavascript } from "react-icons/io5"
import styles from "./style.module.scss"
import Foto from "../../assets/Foto.jpg"
import { MainProjectsList } from "./MainProjects/index"
import { mainProjects } from "../../services/database"
import { useNavigate } from "react-router-dom"

export const Main = () => {
    const navigate = useNavigate()
    const redirectToProjectsPage = () => {
        navigate("/projects")
        window.location.reload()
        window.scrollTo(0, 0)
    }
    return (
        <>
            <section className={styles.main}>
                <div className={styles.divAbout}>
                    <img src={Foto} alt="Foto Jardel" />
                    <p>
                        Olá, me chamo Jardel Moreira Dylewski. Sou formado em Licenciatura em Matemática pela Universidade Federal de Pelotas (UFPel), possuo Mestrado e Doutorado em Matemática Aplicada pela Universidade Federal do Rio Grande do Sul (UFRGS). Durante toda a minha formação tive contato com programação, desenvolvendo trabalhos e projetos de pesquisa. Após a conclusão do meu doutorado, conversando com alguns desenvolvedores formados, tive interesse em ingressar nessa promissora área, e aqui estou. Atualmente, sou desenvolvedor Web Full Stack pela <a className={styles.link} href="https://kenzie.com.br/" target="_blank">Kenzie Academy Brasil</a>.
                    </p>
                </div>
                <div className={styles.divProjects}>
                    <h2>Principais projetos front-end:</h2>
                    <ul>
                        {mainProjects.map(data => <MainProjectsList key={data.id} data={data} />)}
                    </ul>
                    <p>Para mais visualizar mais projetos front-end, <a className={styles.link} onClick={redirectToProjectsPage} target="_blank">clique aqui</a>.</p>
                </div>
                <div>
                    <h2> Minhas habilidades como desenvolvedor:</h2>
                    <div className={styles.divHab}>
                        <p>Front-End:</p>
                        <ul>
                            <li><a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="_blank" ><FaHtml5 size={50} color="#E65100" title="HTML" /></a></li>
                            <li><a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target="_blank" ><FaCss3Alt size={50} color="#0277BD" title="CSS" /></a></li>
                            <li><a href="https://www.javascript.com/" target="_blank" ><IoLogoJavascript size={50} color="#FFD600" title="JavaScript" /></a></li>
                            <li><a href="https://react.dev/" target="_blank" >< FaReact size={50} color="#80DEEA" title="React" /></a></li>
                            <li><a href="https://sass-lang.com/" target="_blank" >< FaSass size={50} color="#F06292" title="SASS" /></a></li>
                            <li><a href="https://styled-components.com/" target="_blank" ><SiStyledcomponents size={50} color="#000000" title="Styled-components" /></a></li>
                            <li><a href="https://tailwindcss.com/" target="_blank"><SiTailwindcss size={50} color="#00ACC1" title="TailwindCSS" /></a></li>
                            <li><a href="https://git-scm.com/" target="_blank" ><FaGitAlt size={50} color="#F4511E" title="Git" /></a></li>
                            <li><a href="https://github.com/" target="_blank" ><FaGithub size={50} color="#4C4C4C" title="Github" /></a></li>
                        </ul>
                    </div>
                    <div className={styles.divHab}>
                        <p>Back-End:</p>
                        <ul>
                            <li><a href="https://www.typescriptlang.org/" target="_blank" ><SiTypescript size={50} color="#0D61A9" title="TypeScript" /></a></li>
                            <li><a href="https://nodejs.org/en" target="_blank" ><FaNodeJs size={50} color="#21A366" title="Node.js" /></a></li>
                            <li><a href="https://expressjs.com/pt-br/" target="_blank"><SiExpress size={50} color="#6D7479" title="Express.js" /></a></li>
                            <li><a href="https://www.postgresql.org/" target="_blank" ><SiPostgresql size={50} color="#336791" title="PostgreSQL" /></a></li>
                            <li><a href="https://www.prisma.io/" target="_blank"><SiPrisma size={50} color="#2d3748" title="Prisma" /></a></li>
                            <li><a href="https://jestjs.io/pt-BR/" target="_blank"><SiJest size={50} color="#681da8" title="Jest" /></a></li>
                            <li><a href="https://www.python.org/" target="_blank"><FaPython size={50} title="Python" color="#2d3748" /></a></li>
                            <li><a href="https://www.djangoproject.com/" target="_blank"><DiDjango size={50} color="#0C4B33" title="Django" /></a></li>
                            <li><a href="https://sqlite.org/" target="_blank"><SiSqlite size={50} color="#044a64" title="SQLite" /></a></li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}