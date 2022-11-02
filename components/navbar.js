import styles from "../styles/Nav.module.css"
import Link from "next/link"
import { auth } from "../firebase/db"
import { signOut } from "firebase/auth"
import { useRouter } from "next/router"

const Nav = () => {

        const router = useRouter();
        const handleLogOut = () => {
            signOut(auth).then(
                router.push("/auth")
            ).catch((err) => {
                console.log("Error logging Out")
            })
        }
        return (
            <div className={styles.nav}>
                <Link href="/">Home</Link>
                <Link href="generate">Generate</Link>
                <a href="#contact">Contact</a>
                <button onClick={handleLogOut}>Log Out</button>
            </div>
        );
}

export default Nav