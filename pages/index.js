import Layout from '../components/layout'
import Guitar from '../components/guitar'
import Post from '../components/post'
import Course from '../components/course'
import styles from '../styles/grid.module.css'

export default function Home({guitars, posts, course}) {

  return (
    <>
      <Layout
        title={'Inicio'}
        description={'Music Blog, Guitars Shop & More'}
      >
        <main className='container'>
            <h1 className='heading'>Our Collecton</h1>
            <div className={styles.grid}>
                {guitars?.map(guitar => (
                    <Guitar
                        key={guitar.id}
                        guitar={guitar.attributes}
                    />
                ))}
            </div>
        </main>

        <Course
          course={course.attributes}
        />

        <section className='container'>
            <h2 className='heading'>Blog</h2>

            <div className={styles.grid}>
                {posts?.map(post => (
                    <Post
                      key={post.id}
                      post={post.attributes}
                    />
                ))}
            </div>
        </section>

      </Layout>
    </>
  )
}

export async function getStaticProps() {
    const urlGuitars = `${process.env.API_URL}/guitars?populate=image`
    const urlPosts = `${process.env.API_URL}/posts?populate=image`
    const urlCourse = `${process.env.API_URL}/course?populate=image`

    const [ resGuitars, resPosts, resCourse ] = await Promise.all([
      fetch(urlGuitars),
      fetch(urlPosts),
      fetch(urlCourse)
    ])
    const [{ data: guitars }, {data: posts}, {data: course}] = await Promise.all([
        resGuitars.json(),
        resPosts.json(),
        resCourse.json()
    ])

    return {
        props: {
            guitars,
            posts,
            course
        }
    }
}