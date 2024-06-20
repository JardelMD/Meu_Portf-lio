import { useNavigate } from "react-router-dom";
import styles from "./styled.module.scss";
import { FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
import { Footer } from "../../components/Footer";


export const ContactsPage = () => {
    const navigate = useNavigate();
    const redirectToHome = () => {
        navigate("/")
        window.location.reload()
        window.scrollTo(0, 0)
    }
    return (
        <section className={styles.main}>
            <header>
                <h1>Jardel Moreira Dylewski</h1>
                <button onClick={redirectToHome}>Voltar</button>
            </header>
            <div>
                <h1>Meus contatos:</h1>
                <ul>
                    <li>
                        <h2>LinkedIn: </h2>
                        <a href="https://www.linkedin.com/in/jardel-moreira-dylewski-a965a1272/" target="_blank"> <FaLinkedin size={50} color="#0a66c2" /></a>
                    </li>
                    <li>
                        <h2>Email: </h2>
                        <a href="#" title={'jardeldylewski@hotmail.com'} ><PiMicrosoftOutlookLogoFill size={50} color="#0078d4" /> </a>
                        <span>jardeldylewski@hotmail.com</span>
                    </li>
                    <li>
                        <h2>WhatsApp: </h2>
                        <a href="https://wa.me/+5551999567434" target="_blank"><FaWhatsappSquare size={50} color="#00a884" /></a>
                    </li>
                </ul>
            </div>
            <Footer />
        </section>
    )
}