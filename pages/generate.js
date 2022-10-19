import styles from "../styles/Generate.module.css"

const Generate = () => {
    return (
        <div className={styles.generate}>
            <h1>Capt.io</h1>
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