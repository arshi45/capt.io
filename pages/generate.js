import styles from "../styles/Generate.module.css"
import Link from "next/link"

const Generate = () => {
    return (
        <div className={styles.generate}>
            <div className={styles.header}>
                <Link href="/"><button>Back</button></Link>
                <h1>Capt.io</h1>
            </div>
            <div className={styles.inputBox}>
                <div style={{padding:0}}>
                    <label for="upload-file"><img src="images/upload.svg"/></label>
                    <input id="upload-file" type="file" accept=".jpg,.jpeg,.png"></input>
                    <p>Upload your photo</p>
                </div>
                <div className={styles.bar}></div>
                <button>Generate Caption</button>
            </div>
        </div>
    )
}

export default Generate