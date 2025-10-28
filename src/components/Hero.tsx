import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import Tilt from "react-parallax-tilt"

export default function Hero() {
  return (
    <section className="container m-auto mt-10 md:mt-10">
      <div className="relative grid md:grid-cols-2 items-center gap-10 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-xl overflow-hidden px-8 py-12 md:px-16 md:py-16">
        
        {/* Image - first on mobile, second on desktop */}
        <motion.div
          className="relative flex justify-center order-1 md:order-2"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} perspective={1000} scale={1.05} transitionSpeed={1000}>
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative"
            >
              {/* Profile Image */}
              <img
                src="/src/assets/profile2.png"
                alt="Best Python instructor and Django developer in Kathmandu"
                className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-2xl shadow-2xl ring-2 ring-brand/40 relative z-10"
              />

              {/* Glow background */}
              <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-brand/40 via-purple-500/30 to-blue-500/30 blur-3xl -z-10"></div>

              {/* Glass reflection overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/20 to-transparent opacity-30 pointer-events-none"></div>
            </motion.div>
          </Tilt>
        </motion.div>

        {/* Text - second on mobile, first on desktop */}
        <motion.div 
          className="z-10 order-2 md:order-1 text-center md:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="uppercase tracking-widest text-brand/80">Kathmandu, Nepal</p>
          <h1 className="text-3xl md:text-5xl font-extrabold mt-3 leading-tight text-white">
            I am <span className="text-brand">S</span>ubham <span className="text-brand">G</span>upta
          </h1>
          <p className="mt-5 text-lg text-gray-200">
            Python Instructor • Web Developer • Tech Enthusiast
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-wrap gap-4 justify-center md:justify-start">
            <Link className="btn bg-brand text-white hover:bg-brand/90" to="/about">  
              About me →
            </Link>
            <Link className="btn btn-outline" to="https://mail.google.com/?view=cm&to=guptashuvam111@gmail.com&su=Subject%20Here&body=Body%20Here" target="_blank">  
              Hire Me
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex space-x-3 mt-6 justify-center md:justify-start">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/s.u.b.h.a.m.0522/"
              target="_blank"
              rel="noopener noreferrer"
              title="Python instructor in Kathmandu"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1877F2] text-white text-xl hover:scale-110 transition-transform"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/shubham-guptaa/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0077B5] text-white text-xl hover:scale-110 transition-transform"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/s.u.b.h.a.m.0522/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white text-xl hover:scale-110 transition-transform"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
