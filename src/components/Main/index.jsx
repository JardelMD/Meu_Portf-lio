import { FaHtml5, FaCss3Alt, FaReact, FaGithub, FaNodeJs, FaSass } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { SiTypescript, SiStyledcomponents, SiExpress, SiTailwindcss, SiPostgresql,  SiPrisma } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import styles from "./style.module.scss";

export const Main = () => {
    return (
        <>
            <section className={styles.main}>
                <div>
                    <h2> Minhas habilidades como desenvolvedor:</h2>
                    <div>
                        <p>Front-End:</p>
                        <ul>
                            <li><a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="_blank" ><FaHtml5 size={50} color="#E65100" title="HTML"/></a></li>
                            <li><a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target="_blank" ><FaCss3Alt size={50} color="#0277BD" title="CSS"/></a></li>
                            <li><a href="https://www.javascript.com/" target="_blank" ><IoLogoJavascript size={50} color="#FFD600" title="JavaScript"/></a></li>
                            <li><a href="https://react.dev/" target="_blank" >< FaReact size={50} color="#80DEEA"  title="React"/></a></li>
                            <li><a href="https://sass-lang.com/" target="_blank" >< FaSass size={50} color="#F06292" title="SASS"/></a></li>
                            <li><a href="https://styled-components.com/" target="_blank" ><SiStyledcomponents size={50} color="#000000" title="Styled-components"/></a></li>
                            <li><a href="https://tailwindcss.com/" target="_blank"><SiTailwindcss size={50} color="#00ACC1"  title="TailwindCSS"/></a></li>
                            <li><a href="https://git-scm.com/" target="_blank" ><FaGitAlt size={50} color="#F4511E" title="Git"/></a></li>
                            <li><a href="https://github.com/" target="_blank" ><FaGithub size={50} color="#4C4C4C" title="Github"/></a></li>
                        </ul>
                    </div>
                    <div>
                        <p>Back-End:</p>
                        <ul>
                            <li><a href="https://www.typescriptlang.org/" target="_blank" ><SiTypescript size={50} color="#0D61A9" title="TypeScript"/></a></li>
                            <li><a href="https://nodejs.org/en" target="_blank" ><FaNodeJs size={50} color="#21A366" title="Node.js"/></a></li>
                            <li><a href="https://expressjs.com/pt-br/" target="_blank"><SiExpress size={50} color="#6D7479" title="Express.js"/></a></li>
                            <li><a href="https://www.postgresql.org/" target="_blank" ><SiPostgresql size={50} color="#336791" title="PostgreSQL" /></a></li>
                            <li><a href="https://www.prisma.io/" target="_blank"><SiPrisma size={50} color="#2d3748" title="Prisma" /></a></li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}