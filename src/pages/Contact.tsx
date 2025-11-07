import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaFacebook} from 'react-icons/fa'
import React, { useRef } from "react";
import emailjs from "@emailjs/browser"; 
import Swal from 'sweetalert2'


export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dv5dcsg",        
        "template_ssf84u7",        
        form.current,
        "IJPGolQ9Xs9OtczhO"       
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          Swal.fire({
            title: 'Success!',
            text: 'Message Sent Successfully!',
            icon: 'success',
            confirmButtonText: 'Ok',
            timer:3000
          })
          form.current.reset(); // Clear form after success
        },
        (error) => {
          console.error("Error:", error.text);
          alert("❌ Failed to send message.");
          Swal.fire({
            title: 'Error!',
            text: 'Failed to send message.',
            icon: 'error',
            confirmButtonText: 'Cool',
            timer:3000
          })
        }
      );
  };

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
          I’d love to hear about your project or collaboration ideas.
        </motion.p>
      </section>

      <section className="bg-gradient-to-r from-brand/10 to-brand/20 dark:from-brand/20 dark:to-brand/30 py-6">
        <div className="container-max text-center">
          <div className="grid sm:grid-cols-3 gap-8 mt-8">
            
            <div className="flex flex-col items-center p-6 rounded-xl bg-white dark:bg-[#0b111a] shadow-md">
              <FaEnvelope className="text-brand text-3xl mb-3" />
              <h3 className="font-semibold text-lg">Email</h3>
              <p className="opacity-80 mt-1">guptashuvam111@gmail.com</p>
            </div>

            <div className="flex flex-col items-center p-6 rounded-xl bg-white dark:bg-[#0b111a] shadow-md">
              <FaPhoneAlt className="text-brand text-3xl mb-3" />
              <h3 className="font-semibold text-lg">Phone</h3>
              <p className="opacity-80 mt-1">+977-9829590999</p>
            </div>

            <div className="flex flex-col items-center p-6 rounded-xl bg-white dark:bg-[#0b111a] shadow-md">
              <FaMapMarkerAlt className="text-brand text-3xl mb-3" />
              <h3 className="font-semibold text-lg">Address</h3>
              <p className="opacity-80 mt-1">Lalitpur, Nepal</p>
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
          transition={{ duration: 0.6 }}
          className="card p-6"
        >
          <h2 className="text-2xl font-semibold">Send a Message</h2>
          <form className="mt-6 space-y-4 text-center" ref={form} onSubmit={sendEmail}>
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
            <button className="btn" type="submit">
              Send
            </button>
          </form>

        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card p-6 flex flex-col justify-between"
        >
          <div>
          <h2 className="text-2xl font-semibold">Get in Touch</h2>
            <p className='opacity-80 mt-1'>Based in Lalitpur and Kathmandu, Nepal, I offer remote web development, Python training, and data analysis services worldwide. I’m open to new projects, collaborations, and teaching opportunities — whether you need a full-stack web application, custom software development, or hands-on Python and Data Science training.</p>
            <p className='flex items-center mt-2'>
              <i className="fa-solid fa-envelope text-brand me-2"></i>
              <span className='opacity-80'>guptashuvam111@gmail.com</span>
            </p>
            <p>
              <i className="fa-solid fa-location-dot text-brand me-2 mt-2"></i>
              <span className='opacity-80'>Lalitpur, Kathmandu, Nepal</span>
            </p>
          {/* Social Links (✅ Use <a> instead of Link) */}
          <div className="flex space-x-4 mt-6">
            <a
              href="https://www.facebook.com/s.u.b.h.a.m.0522/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://github.com/Shubhamg111"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/Shubham-guptaa/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
          </div>
        </motion.div>

      </section>
    </Layout>
  );
}
