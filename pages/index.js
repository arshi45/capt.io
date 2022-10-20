import styles from '../styles/Home.module.css'
import Footer from './footer'
import Link from 'next/link'
import Nav from '../components/navbar'
import Image from 'next/image'

export default function Home() {

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
          <Image alt='Anubhav'/>
          <p>Anubhav Chawla</p>
        </div>
        <div className={styles.photo}>
          <Image alt='Arshdeep'/>
          <p>Arshdeep Singh</p>
        </div>
        <div className={styles.photo}>
          <Image alt='Gurnoor'/>
          <p>Gurnoor Singh</p>
        </div>
        <div className={styles.photo}>
          <Image alt='Nikhil'/>
          <p>Nikhil Bakshi</p>
        </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}
