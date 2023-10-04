import Image from 'next/future/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'
import cartImage from "../public/img/cart.png"

export default function Header() {

    const router = useRouter()

    return (
        <header className={styles.header}>
            <div className={`container ${styles.nav}`}>
                <Link href={'/'}>
                    <a>
                        <Image src="/img/logo.svg" width={300} height={40} alt='logo image' />

                    </a>
                </Link>

                <nav className={styles.navigation}>
                    <Link href="/">
                        <a className={ router.pathname === '/' ? styles.active : ''}>
                            Home
                        </a>
                    </Link>

                    <Link href="/about-us">
                        <a className={ router.pathname === '/about-us' ? styles.active : ''}>
                            About us
                        </a>
                    </Link>


                    <Link href="/shop">
                        <a className={ router.pathname === '/shop' ? styles.active : ''}>
                            Shop
                        </a>
                    </Link>

                    <Link href="/blog">
                        <a className={ router.pathname === '/blog' ? styles.active : ''}>
                            Blog
                        </a>
                    </Link>

                    <Link href="/cart">
                        <a className={ router.pathname === '/cart' ? styles.active : ''}>
                            <Image src={cartImage} width={30} height={25} alt='cart imagee' />
                        </a>
                    </Link>

                </nav>
            </div>
        </header>
    )
}
