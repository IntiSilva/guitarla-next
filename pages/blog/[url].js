import Image from "next/future/image"
import Layout from "../../components/layout"
import { formatDate } from '../../utils/helpers'
import styles from '../../styles/blog.module.css'

export default function Post({post}) {
    const { title, content, image, publishedAt } = post[0].attributes

    return (
        <Layout
            title={title}
        >
            <article className={`${styles.post} ${styles['mt-3']}`}>
                <Image src={image.data.attributes.url} width={1000} height={600} alt={`image blog ${title}`} />

                <div className={styles.content}>
                    <h3>{title}</h3>
                    <p className={styles.date}>{formatDate(publishedAt)}</p>
                    <p className={styles.text}>{content}</p>
                </div>
            </article>
        </Layout>
    )
}


export async function getServerSideProps({query: {url}}) {
    const response = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=image`)
    const { data: post } = await response.json()
    return {
        props: {
            post
        }
    }
}