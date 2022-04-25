import LandingPage from '../components/HomePage/LandingPage'
import Vision from '../components/Vision/Vision'
import styles from '../styles/Home.module.scss'



export default function Home() {
  return (
    <div className={styles.container}>
      <LandingPage />
      <Vision />
    </div>
  )
}
