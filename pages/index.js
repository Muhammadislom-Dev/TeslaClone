import Head from 'next/head'
import Header from '../components/Header'
import ModelS from '../components/ModelS'
import Navbar from '../components/Navbar'
import ModelY from '../components/ModelY'
import styles from '../styles/Home.module.css'
import SolarPanel from '../components/SolarPanels'
import ModelX from '../components/ModelX'
import SolarRoof from '../components/SolerRoof'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tesla Clone</title>
      </Head>
       <Navbar />
       <Header />
       <ModelX />
       <ModelS />
       <ModelY />
       <SolarRoof />
       <SolarPanel />
    </div>
  )
}
