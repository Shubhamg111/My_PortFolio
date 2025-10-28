
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const projects = [
  {title:'Frontend Design', date:'2020-03-11', tag:'Web Design'},
  {title:'Ecommerce Website', date:'2020-05-18', tag:'Web Development'},
  {title:'Tourism Website', date:'2020-09-18', tag:'Web Design'},
  {title:'Library Management System', date:'2021-01-18', tag:'Web Development'},
]

export default function Work() {
  return (
    <Layout>
      <SEO title="Portfolio | Selected Work" description="Portfolio showcases, e‑commerce platforms, and custom applications." url="https://subhamgupta.com.np/work" />
      <section className="container-max mt-10">
        <h1 className="text-3xl font-bold">Portfolio</h1>
        <p className="mt-2 opacity-80">Portfolio showcases, e‑commerce platforms, and custom applications.</p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {projects.map(p => (
            <div className="card p-6" key={p.title}>
              <div className="h-40 rounded-xl bg-gradient-to-br from-brand/15 to-brand/5" />
              <h3 className="mt-4 font-semibold">{p.title}</h3>
              <p className="opacity-70">{p.tag}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}
