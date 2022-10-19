import styles from "../styles/Footer.module.css"

const Footer = () => {
    return (
        <div className={styles.footer}>
            <h1>Contact.</h1>
            <div>
                <h3>Phone<br/><p>+91 XXXXX XXXXX</p></h3>
                <h3>E-Mail<br/><p>testuser@gmail.com</p></h3>
            </div>
        </div>)
}

export default Footer