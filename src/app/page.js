import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

{console.log(process.env.MONGODB_URI)}

export default function Home() {
  return (
    <main className={styles.main}>
      <Link href="/contact">Contact</Link>
    </main>
  )
}
