import styles from "../styles/Nav.module.css"
import Link from "next/link"

const Nav = () => {
        return (
            <div className={styles.nav}>
                <Link href="/">Home</Link>
                <Link href="generate">Generate</Link>
                <a href="#contact">Contact</a>
            </div>
        );
}

export default Nav