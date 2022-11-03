import { useState } from "react";
import styles from "../styles/Auth.module.css"
import { auth } from "../firebase/db";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"
import { useRouter } from "next/router";
import {collection,addDoc} from "firebase/firestore";
import { firestore } from "../firebase/db";

const Auth = () => {

    const router = useRouter();
    const [details,setDetails] = useState({
        email:'',
        password:''
    });

    const [type,setType] = useState(false)


    const handleLogin = () => {
        signInWithEmailAndPassword(auth,details.email,details.password)
        .then( (userCredential) => {
            const user  = userCredential.user;
            router.push('/')
        }).catch( (error) => {
            console.log(error)
        })
    }

    const handleSignup = () => {
        console.log(details)
        createUserWithEmailAndPassword(auth,details.email,details.password)
        .then( async (userCredential) => {
            const user  = userCredential.user.uid;
            const ref = collection(firestore,"preferences")
            await addDoc(ref,{userId:user,language:"English"})
            router.push('/')
        }).catch( (error) => {
            console.log(error)
        })

    }

    const handleChange = (e) => {
        setDetails(prevState => {
            return {...prevState,
            [e.target.name]:e.target.value
            }
        })
    }

    const handleClick = () => {
        setType(!type)
    }

    return (
        <div className={styles.auth}>
            <div className={styles.authForm}>
                <label>Email</label>
                <input type="email" placeholder="Email" name="email" onChange={handleChange}/>
                <label>Password</label>
                <input type="password" placeholder="Password" name="password" onChange={handleChange}/>
                {type?<div><label>Enter your password again</label>
                <input type="password" placeholder="Password"/></div>:null}
                {type?null:<button onClick={handleLogin}>Login</button>}
                {type?<button onClick={handleSignup}>SignUp</button>:null}
                {type?null:<button onClick={handleClick} className={styles.link}>Sign Up</button>}     
                {type?<button onClick={handleClick} className={styles.link}>Login</button>:null}
            </div>
        </div>
    )
}

export default Auth;