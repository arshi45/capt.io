import styles from '../styles/Home.module.css'
import Footer from './footer'
import Link from 'next/link'
import Nav from '../components/navbar'
import { useEffect } from 'react'
import { Auth, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase/db'
import { useRouter } from 'next/router'

export default function Home() {

  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth,(user) => {
      if(!user){
        router.push("/auth")
      }
    },[])
  })

  return (
    <div className={styles.container}>
      <section className={`${styles.main} ${styles.base}`}>
        <div className={styles.outer}>
        <Nav/>
        <div className={styles.landing}>
        <div>
          <h1 className={`${styles.left}`}>Capt.io</h1>
          <p>Create meaningful and memorable stories with your photos</p>
          <Link href="generate"><button>Generate</button></Link>
        </div>
        <img src="/images/cuate.png" alt='sideImage'/>
        </div> 
        </div>
      </section>
      <section className={`${styles.working} ${styles.base}`}>
        <h1>How it works?</h1>
        <p>
          Our website uses an ML model which was trained on nearly 8000 photos to create new captions. When you input a photo it sends a request to the ML model and sends it the desired image. The model then filters the image on 16 levels and generates a relevant caption.
        </p>
      </section>
      <section className={`${styles.about} ${styles.base}`}>
        <h1>Our Team</h1>
        <div className={styles.names}>
        <div className={styles.photo}>
          <img alt='Anubhav' src='images/anubhav.jpeg'/>
          <p>Anubhav Chawla</p>
        </div>
        <div className={styles.photo}>
          <img alt='Arshdeep' src='images/arsh.jpg'/>
          <p>Arshdeep Singh</p>
        </div>
        <div className={styles.photo}>
          <img alt='Gurnoor' src='images/gurnoor.png'/>
          <p>Gurnoor Singh</p>
        </div>
        <div className={styles.photo}>
          <img alt='Nikhil' src='images/nikhil.jpg'/>
          <p>Nikhil Bakshi</p>
        </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}
