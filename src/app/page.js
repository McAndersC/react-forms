import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

{console.log('SE MIG!!!', process.env.MONGODB_URI)}

export default function Home() {
  return (
    <main className={styles.main}>
      <h1><Link href="/contact">Contact</Link></h1>
    </main>
  )
}
