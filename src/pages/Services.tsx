
import Layout from '../components/Layout'
import SEO from '../components/SEO'
// import { FaPaintBrush, FaCode, FaBolt, FaMobileAlt, FaRocket, FaCheckCircle } from "react-icons/fa"
import { motion } from "framer-motion";
import { 
  FaPaintBrush, FaCode, FaBolt, FaMobileAlt, FaRocket,
  FaCheckCircle, FaSearch, FaPenNib
} from "react-icons/fa";


export default function Services() {
      const services = [
   
    {
      title: "Full-Stack Instructor",
      icon: <FaCode />,
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
      
     const steps = [
    {
      icon: <FaSearch />,
      title: "Discovery",
      desc: "Understand goals, audience, and technical needs.",
    },
    {
      icon: <FaPenNib />,
      title: "Design",
      desc: "Wireframes & interactive prototypes for feedback.",
    },
    {
      icon: <FaCode />,
      title: "Development",
      desc: "Agile sprints with regular updates and testing.",
    },
    {
      icon: <FaRocket />,
      title: "Launch & Support",
      desc: "Deployment, monitoring, and continuous improvements.",
    },
  ];
  return (
    <Layout>
      <SEO title="Services | Web Development & Training" description="Scalable web development, UI/UX, automation, and software testing in Kathmandu." url="https://subhamgupta.com.np/services" />
      
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

      

      <section className="container-max mt-24 relative">
        <h3 className="text-3xl font-bold text-center">My Process</h3>
        <p className="text-center leading-7 opacity-90 max-w-2xl mx-auto">
          A clear, collaborative process ensures projects are delivered on time and exceed expectations.
        </p>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 w-1 bg-gradient-to-b from-brand/40 via-brand/20 to-transparent md:-translate-x-1/2 h-full" />

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                className={`relative md:flex md:items-center `}
                initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                {/* Icon Circle */}
                <div
                  className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10 
                            w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center
                            shadow-lg"
                >
                  {step.icon}
                </div>

                {/* Card */}
                <div
                  className={`mt-10 md:mt-0 md:w-1/2 p-6 rounded-2xl border border-black/10 dark:border-white/10
                              bg-white dark:bg-[#0b111a] shadow-md hover:shadow-brand/30 hover:shadow-lg transition
                              ${i % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"}`}
                >
                  <h4 className="font-semibold text-xl text-brand">{step.title}</h4>
                  <p className="mt-2 opacity-80">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      <section className="container-max mt-20 text-center bg-brand/10 dark:bg-brand/20 p-10 rounded-2xl">
        <h3 className="text-2xl md:text-3xl font-bold">Let’s Build Something Great</h3>
        <p className="mt-2 opacity-90 max-w-xl mx-auto">
          Have a project in mind or need a reliable developer for your team?  
          Let’s discuss your idea and turn it into reality.
        </p>
        <a
          href="/contact"
          className="inline-block mt-6 px-6 py-3 bg-brand text-white rounded-lg font-semibold hover:bg-brand/90 transition"
        >
          Contact Me
        </a>
      </section>
    </Layout>
  )
}
