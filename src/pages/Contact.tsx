import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt} from 'react-icons/fa'


export default function Contact() {
  return (
    <Layout>
      <SEO
        title="Contact | Hire Subham Gupta"
        description="Looking for a skilled web developer or Python instructor? Get in touch."
        url="https://subhamgupta.com.np/contact"
      />

       {/* Hero */}
      <section className="text-center bg-gradient-to-r from-brand/10 to-brand/20 dark:from-brand/20 dark:to-brand/30 p-5 pb-0">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold"
        >
          Let’s Connect
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-3 opacity-80 max-w-xl mx-auto"
        >
          I’d love to hear about your project or any collaboration ideas.  
                Reach out using the details below.
        </motion.p>
      </section>

      <section className="bg-gradient-to-r from-brand/10 to-brand/20 dark:from-brand/20 dark:to-brand/30 py-6">
            <div className="container-max text-center">
              {/* Info Grid */}
              <div className="grid sm:grid-cols-3 gap-8 mt-8">
                {/* Email */}
                <div className="flex flex-col items-center p-6 rounded-xl bg-white dark:bg-[#0b111a] shadow-md">
                  <FaEnvelope className="text-brand text-3xl mb-3" />
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="opacity-80 mt-1">guptashuvam111@gmail.com</p>
                </div>

                {/* Phone */}
                <div className="flex flex-col items-center p-6 rounded-xl bg-white dark:bg-[#0b111a] shadow-md">
                  <FaPhoneAlt className="text-brand text-3xl mb-3" />
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="opacity-80 mt-1">+977-9829590999</p>
                </div>

                {/* Address */}
                <div className="flex flex-col items-center p-6 rounded-xl bg-white dark:bg-[#0b111a] shadow-md">
                  <FaMapMarkerAlt className="text-brand text-3xl mb-3" />
                  <h3 className="font-semibold text-lg">Address</h3>
                  <p className="opacity-80 mt-1">Lalitpur, Bagmati Province, Nepal</p>
                </div>
              </div>
            </div>
          </section>
     

      {/* Contact Grid */}
      <section className="container-max mt-12 grid md:grid-cols-2 gap-10">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card p-6"
        >
          <h2 className="text-2xl font-semibold">Send a Message</h2>
          <form
            className="mt-6 space-y-4"
            action="https://formspree.io/f/xwpeqrbe"
            method="POST"
          >
            <input
              className="w-full px-4 py-3 rounded-xl border border-black/10 dark:border-white/10 bg-transparent"
              name="name"
              placeholder="Name"
              required
            />
            <input
              type="email"
              className="w-full px-4 py-3 rounded-xl border border-black/10 dark:border-white/10 bg-transparent"
              name="email"
              placeholder="E-mail"
              required
            />
            <input
              className="w-full px-4 py-3 rounded-xl border border-black/10 dark:border-white/10 bg-transparent"
              name="subject"
              placeholder="Subject"
              required
            />
            <textarea
              className="w-full px-4 py-3 rounded-xl border border-black/10 dark:border-white/10 bg-transparent"
              name="message"
              placeholder="Your message"
              rows={6}
              required
            />
            <button className="btn w-full" type="submit">
              Send
            </button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card p-6 flex flex-col justify-between"
        >
          <div>
            <h2 className="text-2xl font-semibold">Get in Touch</h2>
            <p className="opacity-80 mt-2">
              Based in <strong>Kathmandu, Nepal</strong>—available for remote work worldwide.
              I’m always open to new projects, teaching opportunities, and collaborations,  
              whether you need a full-stack web solution, Python training, or data analysis expertise.
            </p>

            <ul className="mt-6 space-y-3 text-base opacity-90">
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-brand" />
                <span>guptashuvam111@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-brand" />
                <span>Kathmandu, Nepal</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <Link
                to="https://github.com/Shubhamg111"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-black/10 dark:border-white/10 hover:bg-brand hover:text-white transition"
              >
                <FaGithub size={20} />
              </Link>
              <Link
                to="https://www.linkedin.com/in/Shubham-guptaa/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-black/10 dark:border-white/10 hover:bg-brand hover:text-white transition"
              >
                <FaLinkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Optional Map */}
          {/* <div className="mt-10 rounded-xl overflow-hidden h-48">
            <iframe
              title="Google Map - Kathmandu"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.188059059392!2d85.3240!3d27.7172"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div> */}
        </motion.div>
      </section>


       
    </Layout>
  )
}
