import { FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
import styles from "./style.module.scss"

export const Footer = () => {
    return (
        <>
            <section className={styles.footer}>
                <ul>
                    <li><a href="https://www.linkedin.com/in/jardel-moreira-dylewski-a965a1272/" target="_blank"> <FaLinkedin size={50} color="#0a66c2"/></a></li>
                    <li><a href="#" title={'jardeldylewski@hotmail.com'} ><PiMicrosoftOutlookLogoFill size={50} color="#0078d4"/></a></li>
                    <li><a href="https://wa.me/+5551999567434" target="_blank"><FaWhatsappSquare size={50} color="#00a884"/></a></li>
                </ul>
            </section>
        </>
    )
}