
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import { Link } from 'react-router-dom'
import { blogs } from '../data/blogs'
import { FaPaintBrush, FaCode, FaBolt, FaMobileAlt, FaRocket, FaCheckCircle } from "react-icons/fa"
import { useEffect, useState } from "react";
import CountUp from 'react-countup'
import { LiaChalkboardTeacherSolid } from "react-icons/lia";



export default function Home() {

  const services = [
   
    {
      title: "Full-Stack Instructor",
      icon: <LiaChalkboardTeacherSolid />,
      desc: "React, Django, FastAPI—hands-on training for real-world projects and production-ready skills.",
    },
    {
      title: "Full-Stack Development",
      icon: <FaCode />,
      desc: "Django, FastAPI, React—secure, scalable apps for real business needs.",
    },
    {
      title: "Freelancing",
      icon: <FaBolt />,
      desc: "End-to-end web solutions—clean code, on-time delivery, and scalable architecture for any business.",
    },
    {
      title: "Responsive Design",
      icon: <FaMobileAlt />,
      desc: "Pixel-perfect on desktop, tablet, and mobile.",
    },
    {
      title: "Data Analysis",
      icon: <FaRocket />,
      desc: "Python, Pandas, and visualization—data-driven insights and storytelling for actionable decisions.",
    },
    {
      title: "Software Testing",
      icon: <FaCheckCircle />,
      desc: "CI-ready testing to ship with confidence.",
    },
  ]
  return (
    <Layout>
      <SEO
        title="Python Instructor & Full-Stack Developer in Kathmandu   | Subham Gupta"
        description="Python instructor in Kathmandu offering hands-on Python, Django and full-stack web development training and freelance services."
        url="https://subhamgupta.com.np/"
        canonical="https://subhamgupta.com.np/"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Subham Gupta",
          "jobTitle": "Python Instructor & Full-Stack Developer in Kathmandu",
          "address": "Kathmandu, Nepal",
          "url": "https://subhamgupta.com.np",
          "sameAs": [
            "https://github.com/Shubhamg111",
            "https://www.linkedin.com/in/Shubham-guptaa/"
          ]
        }}
      />
      <Hero />
      
        {/* Services */}
      <section className="container-max mt-20">
        <h3 className="text-3xl font-bold text-center">
            Services
          </h3>
          <p className="text-center leading-7 opacity-90">
            Scalable web development, clean design, and data-driven solutions in Kathmandu.
          </p>
        <div className='grid md:grid-cols-3 gap-6 mt-6'>
      {services.map((s) => (
        <div
          key={s.title}
          className="group p-6 rounded-2xl border border-black/10 dark:border-white/10 shadow-md 
          hover:shadow-xl hover:border-brand transition-all duration-300 cursor-pointer text-center bg-white dark:bg-[#0b111a]"
        >
          {/* Icon */}
          <div className="text-4xl w-14 p-3 m-auto text-brand group-hover:scale-110 transition-transform duration-300">
            {s.icon}
          </div>

          {/* Title */}
          <h3 className="mt-4 font-semibold text-lg group-hover:text-brand transition-colors">
            {s.title}
          </h3>

          {/* Description */}
          <p className="mt-2 opacity-80">{s.desc}</p>
        </div>
      ))}
      </div>
    </section>

      {/* Counter */}
    <section
      className="relative bg-cover bg-center py-20 mt-20"
      style={{ backgroundImage: "url('/src/assets/counters-bg.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-brand/70"></div>

      <div className="relative container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center text-white">
          {/* Works Completed */}
          <div className="flex flex-col items-center space-y-3">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/20">
              <i className="fa-solid fa-check text-2xl"></i>
            </div>
            <p className="text-4xl font-bold">
              <CountUp end={45} duration={2} enableScrollSpy />
            </p>
            <span className="uppercase tracking-wide text-sm">
              WORKS COMPLETED
            </span>
          </div>

          {/* Years of Experience */}
          <div className="flex flex-col items-center space-y-3">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/20">
              <i className="fa-solid fa-newspaper text-2xl"></i>
            </div>
            <p className="text-4xl font-bold">
              <CountUp end={4} duration={2} enableScrollSpy />
            </p>
            <span className="uppercase tracking-wide text-sm">
              YEARS OF EXPERIENCE
            </span>
          </div>

          {/* Total Clients */}
          <div className="flex flex-col items-center space-y-3">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/20">
              <i className="fa-solid fa-users text-2xl"></i>
            </div>
            <p className="text-4xl font-bold">
              <CountUp end={77} duration={2} enableScrollSpy />
            </p>
            <span className="uppercase tracking-wide text-sm">
              TOTAL CLIENTS
            </span>
          </div>

          {/* Award Won */}
          <div className="flex flex-col items-center space-y-3">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/20">
              <i className="fa-solid fa-award text-2xl"></i>
            </div>
            <p className="text-4xl font-bold">
              <CountUp end={15} duration={2} enableScrollSpy />
            </p>
            <span className="uppercase tracking-wide text-sm">
              AWARD WON
            </span>
          </div>
        </div>
      </div>
    </section>

      {/* Blogs */}
      <section className="container-max mt-20">
        <h2 className="text-3xl font-bold text-center font-bold">Latest Blog</h2>
        <p className='text-center leading-7 opacity-90'>Exploring the wonders of sustainable living.</p>
        <div className="mt-6 grid md:grid-cols-3 gap-6 mt-6">
          {blogs.slice(0,3).map(b => (
            <article className="card overflow-hidden" key={b.id}>
              <img src={b.cover} alt={b.title} title={b.title} className="w-full h-44 object-cover" />
              <div className="p-5">
                <p className="text-xs uppercase tracking-wider opacity-60">{b.category}</p>
                <h3 className="text-lg font-semibold mt-1">{b.title}</h3>
                <p className="mt-2 opacity-80">{b.excerpt}</p>
                <Link className="btn sizebtn-xs mt-4" to={`/blog/${b.id}`}>Read more</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Contacts */}
      {/* <section id="contact" className="relative bg-[url('/src/assets/overlay-bg.jpg')] bg-cover bg-center bg-fixed mt-20">
        <div className="absolute inset-0 bg-brand/60"></div>

        <div className="relative container-max py-16">
          <div className="grid md:grid-cols-2 gap-10 bg-white/90 dark:bg-[#0b111a]/80 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-12">
             */}
            {/* Left: Send Message */}
            {/* <div>
              <h5 className="text-2xl font-bold text-brand mb-6">Send Message</h5>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 rounded-lg border border-blue-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-brand focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full p-3 rounded-lg border border-blue-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-brand focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 rounded-lg border border-blue-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-brand focus:outline-none"
                />
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full p-3 rounded-lg border border-blue-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-brand focus:outline-none"
                ></textarea>
                <button
                  type="submit"
                  className="px-6 py-3 bg-brand text-white rounded-lg shadow-lg hover:bg-brand/90 transition duration-300"
                >
                  Send
                </button>
              </form>
            </div> */}

            {/* Right: Get in Touch */}
            {/* <div>
              <h5 className="text-2xl font-bold text-brand mb-6">Get in Touch</h5>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Connect with me today to explore possibilities and unlock opportunities. Let’s collaborate seamlessly.
              </p>

              <ul className="space-y-3 text-gray-800 dark:text-gray-200">
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-location-dot text-brand"></i> Kathmandu, Nepal
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-envelope text-brand"></i>
                  <a href="mailto:guptashuvam111@gmail.com" className="hover:text-brand">
                    guptashuvam111@gmail.com
                  </a>
                </li>
              </ul>

              <div className="flex gap-4 mt-6">
                {[
                  { href: "https://www.facebook.com/s.u.b.h.a.m.0522/", icon: "fa-brands fa-facebook", color: "bg-[#1877F2]" },
                  { href: "https://www.instagram.com/s.u.b.h.a.m.0522/", icon: "fa-brands fa-instagram", color: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600" },
                  { href: "https://github.com/Shubhamg111", icon: "fa-brands fa-github", color: "bg-gray-900" },
                  { href: "https://www.linkedin.com/in/shubham-guptaa/", icon: "fa-brands fa-linkedin", color: "bg-[#0077B5]" },
                ].map((s) => (
                  <a
                    key={s.icon}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${s.color} w-10 h-10 flex items-center justify-center rounded-full text-white text-lg shadow-md hover:scale-110 transition-transform`}
                  >
                    <i className={s.icon}></i>
                  </a>
                ))}
              </div>
            </div> */}
          {/* </div>
        </div>
      </section> */}

    {/* Hire Me Section */}
    <section className="pt-12 text-center">
      <div className="container-max bg-white dark:bg-[#0b111a] rounded-2xl p-8 md:pt-12">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Looking for a skilled web developer or instructor?
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Contact me today to discuss your project or training needs.
        </p>
        <a
          href="mailto:guptashuvam111@gmail.com"
          className="px-6 py-2 border-2 border-brand text-brand rounded-lg font-semibold hover:bg-brand hover:text-white transition duration-300"
        >
          Hire Me
        </a>
      </div>
    </section>

    </Layout>
  )
}
