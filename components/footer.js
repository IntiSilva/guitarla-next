import Link from 'next/link'
import styles from '../styles/footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={`container ${styles.content}`}>
                <nav className={styles.navigation}>
                    <Link href="/">
                        Home
                    </Link>

                    <Link href="/about-us">
                        About Us
                    </Link>

                    <Link href="/shop">
                        Shop
                    </Link>

                    <Link href="/blog">
                         Blog
                    </Link>
                </nav>

                <p className={styles.copyright}>All right reserved { new Date().getFullYear() }</p>
        </div>
    </footer>
  )
}
