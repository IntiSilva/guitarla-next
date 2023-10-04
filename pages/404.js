import Link from "next/link"
import Layout from "../components/layout"

export default function Pagina404() {
  return (
    <Layout
        title="Page Not Found"
    >
        <p className="error">Page Not Found</p>
        <Link href='/'>
            <a className="error-link">
                Go to Home Page
            </a>
        </Link>
    </Layout>
  )
}
