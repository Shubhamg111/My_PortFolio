
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import blogs from '../data/blogs.json'
import { Link } from 'react-router-dom'

export default function BlogList() {
  return (
    <Layout>
      <SEO title="Blog | Tutorials & Articles" description="Tutorials on Python, Django, SEO, AI and more." url="https://subhamgupta.com.np/blog" />
      <section className="container-max mt-10">
        <h1 className="text-3xl font-bold">Blog</h1>
        <p className="mt-2 opacity-80">Insights on Python, web development, SEO, and AI.</p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {blogs.map(b => (
            <article className="card overflow-hidden" key={b.id}>
              <img src={b.cover} alt={b.title} title={b.title} className="w-full h-44 object-cover" />
              <div className="p-5">
                <p className="text-xs uppercase tracking-wider opacity-60">{b.category}</p>
                <h3 className="text-lg font-semibold mt-1">{b.title}</h3>
                <p className="mt-2 opacity-80">{b.excerpt}</p>
                <Link className="btn mt-4" to={`/blog/${b.id}`}>Read more</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  )
}
