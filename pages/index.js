import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar/index'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Amir Blaq</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

      <main className={styles.main}>

      <NavBar styles={styles}/>
      <div id={styles.heroContainer}>
        <img src="/hero-yellow.PNG" alt="Vercel Logo" className={styles.heroYellow} />
        <div>
          <img src="/blaw.jpg" alt="Vercel Logo" />
          <img src="/slip.jpg" alt="Vercel Logo" />
        </div>
      </div>

      <div id={styles.midMenu}>
        <div className={styles.box}>
          MENS
        </div>
        <div className={styles.box}>
          WOMENS
        </div>
        <div className={styles.box}>
          KIDS
        </div>
      </div>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
