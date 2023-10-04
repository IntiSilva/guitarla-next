import Layout from "../components/layout"
import Guitar from "../components/guitar"
import styles from '../styles/grid.module.css'

export default function Shop({guitars}) {

  return (
    <Layout
      title={'Online Shop'}
      description="Online shop, guitars shop, instruments, GuitarLA"
    >
        <main className="container">
            <h1 className="heading">Our Collection</h1>

            <div className={styles.grid}>
              {guitars?.map(guitar => (
                  <Guitar
                      key={guitar.id}
                      guitar={guitar.attributes}
                  />
              ))}
            </div>
        </main>
    </Layout>
  )
}


 export async function getStaticProps() {
     const response = await fetch(`${process.env.API_URL}/guitars?populate=image`)
     const {data: guitars} = await response.json() 
     return {
       props: {
        guitars
       }
     }
 }


// export async function getServerSideProps() {
//     const response = await fetch(`${process.env.API_URL}/guitars?populate=image`)
//     const {data: guitars} = await response.json() 
//     return {
//       props: {
//         guitars
//       }
//     }
// }