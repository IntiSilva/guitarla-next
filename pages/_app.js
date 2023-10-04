import { useState, useEffect } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const cartLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('cart')) ?? [] : []
  const [ cart, setCart ] = useState(cartLS)
  const [ pageIsReady, setPageIsReady ] = useState(false)

  useEffect(() => {
    setPageIsReady(true)
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

                {/* Cart functions Start */}

  const addCart = guitar => {
    // Check if the guitar is already in the cart
    if(cart.some( guitarState =>  guitarState.id === guitar.id )) {
        // Iterate to update the quantity
        const updatedCart = cart.map( guitarState => {
            if( guitarState.id === guitar.id ) {
                guitarState.quantity = guitar.quantity;
            }
            return guitarState;
        });
        // Asign to array
        setCart([...updatedCart]);
        localStorage.setItem('cart', JSON.stringify( cart ));
    } else {
        // If the product doesnt exist, its new so its added
        setCart([...cart, guitar]);
        localStorage.setItem('cart', JSON.stringify( cart ));
    }
}

const deleteProduct = id => {
    const updatedCart = cart.filter( producto => producto.id != id)
    setCart(updatedCart)
    window.localStorage.setItem('cart', JSON.stringify( cart ));
}

const updateQuantity = guitar => {
  const updatedCart = cart.map( guitarState => {
    if(guitarState.id === guitar.id ) {
      guitarState.quantity = parseInt( guitar.quantity )
    }
    return guitarState
  })
  setCart(updatedCart)
  window.localStorage.setItem('cart', JSON.stringify( cart ));
}

            {/* Cart functions End */}

  return pageIsReady ? <Component {...pageProps} 
    cart={cart}
    addCart={addCart}
    deleteProduct={deleteProduct}
    updateQuantity={updateQuantity}

  /> :null
}

export default MyApp
