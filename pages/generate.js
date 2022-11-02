import styles from "../styles/Generate.module.css"
import Link from "next/link"
import {storage} from "../firebase/db"
import {ref} from "firebase/storage"
import { useState } from "react"
import { uploadBytes } from "firebase/storage"

const Generate = () => {

    const [name,setName] = useState(null);
    const [message,setMessage] = useState(false);

    const handleChange = (event) => {
        if(event.target.files[0]){
            setName(event.target.files[0]);
            setMessage(true);
        }
    }
    const handleClick = () => {
        const upload = ref(storage,"images/"+name.name);
        uploadBytes(upload,name).then((snapshot) => {
            console.log("Sent");
        });
    }
    return (
        <div className={styles.generate}>
            <div className={styles.header}>
                <Link href="/"><button>Back</button></Link>
                <h1>Capt.io</h1>
            </div>
            <div className={styles.inputBox}>
                <div style={{padding:0}}>
                    <label for="upload-file"><img src="images/upload.svg" alt="Upload"/></label>
                    <input id="upload-file" type="file" accept=".jpg,.jpeg,.png" onChange={handleChange}></input>
                    {message?<p>{name.name}</p>:<p>Upload your photo</p>}
                </div>
                <div className={styles.bar}></div>
                <button onClick={handleClick}>Generate Caption</button>
            </div>
        </div>
    )
}

export default Generate