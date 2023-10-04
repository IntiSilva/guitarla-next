import { useState } from "react"
import Image from "next/future/image"
import styles from '../../styles/guitars.module.css'
import Layout from "../../components/layout"

export default function Product({guitar, addCart}) {

    const [ quantity, setQuantity ] = useState(0)
    const { name, description, image, price } = guitar[0].attributes

    const handleSubmit = e => {
        e.preventDefault();

        if (quantity < 1) {
            alert('You must select a quantity')
        }

        const selectedGuitar = {
            id: guitar[0].id,
            image: image.data.attributes.url,
            name,
            price,
            quantity

        }

        addCart(selectedGuitar)
    }


    return (
        <Layout
            title={`${name} guitar`}
        >
            <div className={styles.guitar}>
                <Image src={image.data.attributes.url} width={600} height={400} alt={`${name} guitar imagee`} />

                <div className={styles.content}>
                    <h3>{name}</h3>
                    <p className={styles.description}>{description}</p>
                    <p className={styles.price}>${price}</p>

                    <form onSubmit={handleSubmit} className={styles.form}>
                    <label htmlFor='quantity'>Quantity</label>

                    <select
                        onChange={ e => setQuantity(+e.target.value)}
                        id='quantity'>
                        <option value="0">--Select--</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    <input
                    type="submit"
                    value="Add to cart"
                    />
                </form>
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const response = await fetch(`${process.env.API_URL}/guitars`)
    const { data } = await response.json()

    const paths = data.map(guitar => ({
        params: {
            url: guitar.attributes.url
        }
    }))
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params: { url }}) {
    const response = await fetch(`${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`)
    const { data: guitar } = await response.json()
    return {
        props: {
            guitar
        }
    }
}

// export async function getServerSideProps({query: { url }}) {
//     const response = await fetch(`${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`)
//     const { data: guitar } = await response.json()
//     return {
//         props: {
//             guitar
//         }
//     }
// }