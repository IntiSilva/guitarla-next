import Image from "next/future/image"
import Link from 'next/link'
import styles from '../styles/guitars.module.css'

export default function Guitar({guitar}) {
  const { description, image, name, price, url } = guitar

  return (
    <div className={styles.guitar}>
        <Image src={image.data.attributes.formats.medium.url} width={600} height={400} alt={`${name} guitar imagee`} />

        <div className={styles.content}>
            <h3>{name}</h3>
            <p className={styles.description}>{description}</p>
            <p className={styles.price}>${price}</p>
            <Link href={`/guitars/${url}`}>
              <a className={styles.link}>
                See product
              </a>
            </Link>
        </div>
    </div>
  )
}
