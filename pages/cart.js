import { useState, useEffect } from 'react'
import Image from 'next/future/image'
import Layout from '../components/layout'
import styles from '../styles/cart.module.css'

export default function Cart({cart, updateQuantity, deleteProduct}) {

    const [ total, setTotal] = useState(0)

    useEffect(() => {
        const totalEstimate = cart.reduce( (total, product) => total + (product.quantity * product.price), 0)
        setTotal(totalEstimate)
    }, [cart])


  return (
    <Layout title='Shopping Cart'>
        <main className="container">
            <h1 className="heading">Shopping Cart</h1>

            <div className={styles.content}>
                <div className={styles.cart}>
                    <h2>Items</h2>

                    {cart.length === 0 ? 'Empty Cart' : (
                        cart.map ( product => (
                            <div key={product.id} className={styles.product}>
                                <div>
                                    <Image width={250} height={480} src={product.image} alt={product.name} />
                                    </div>

                                <div>
                                    <p className={styles.name}>{product.name}</p>
                                    <p>Quantity: </p>

                                    <select
                                    value={product.quantity}
                                    className={styles.select}
                                    onChange={e => updateQuantity({
                                        quantity: +e.target.value,
                                        id: product.id
                                    })}
                                    >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>

                                    <p className={styles.price}>$ <span>{product.price}</span></p>
                                    <p className={styles.subtotal}>Subtotal: $ <span>{product.quantity * product.price}</span></p>

                                </div>

                                    <button
                                        type='button'
                                        className={styles.btn_delete}
                                        onClick={() => deleteProduct(product.id)}
                                    >
                                        X
                                    </button>
                                </div>
                        ))
                    )}
                </div>

            <aside className="summary">
                <h3>Order Summary</h3>
                <p>Payment total: ${total}</p>
            </aside>

            </div>

        </main>
    </Layout>
  )
}
