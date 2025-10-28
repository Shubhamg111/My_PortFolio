
import TestimonialsSlider from '../components/Testimonials'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython, faReact, faJs } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faServer, faPalette } from "@fortawesome/free-solid-svg-icons";
const skills = [
  { name: "Python", icon: faPython, delay: 0 },
  { name: "Django", icon: faServer, delay: 200 },
  { name: "React", icon: faReact, delay: 400 },
  { name: "Tailwind / Bootstrap", icon: faPalette, delay: 600 },
  { name: "MySQL", icon: faDatabase, delay: 800 },
  { name: "Data Viz", icon: faJs, delay: 1000 },
];
export default function About() {
  return (
    <Layout>
      <SEO title="About | Subham Gupta" description="About Subham Gupta — Python instructor and full‑stack web developer based in Kathmandu." url="https://subhamgupta.com.np/about" />

      {/* About Me */}
      <section className="container-max mt-10 grid md:grid-cols-2 gap-8 items-start">
        <img
          src="/src/assets/logo.png"
          alt="Best Python instructor and Django developer in Kathmandu"
          className="rounded-2xl shadow-sm border border-black/5 dark:border-white/10 
                    w-full max-w-sm object-cover mx-auto"/>
        <div>
          <h1 className="text-3xl font-bold">About</h1>
          <p className="mt-4 leading-7 opacity-90 text-justify">
            Hi, I’m Shubham Gupta — a Python instructor in Kathmandu, web developer, and tech enthusiast. With more than 4 years of experience, I create responsive websites and scalable applications while also helping new developers master programming. Whether it’s coding with Python, building with Django, or solving real-world problems, I’m all about making tech simple, effective, and impactful.
          </p>
          <p className="mt-3 opacity-90 text-justify">
            I have hands‑on experience across Python, Django, JavaScript, and SQL, plus data analysis, visualization, and ML. I focus on reliable, user‑centric products that deliver real value.
          </p>
        </div>
      </section>


{/* Skills and Tools */}
<section className="mx-auto mt-20 py-6 relative">
  {/* Background subtle pattern */}
  <div className="absolute inset-0 pointer-events-none">
  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <circle 
          cx="3" 
          cy="3" 
          r="3" 
          className="text-gray-300 dark:text-gray-700" 
          fill="currentColor" 
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#dots)" />
  </svg>
  </div>

  <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 text-center relative z-10">
    Skills & Tools
  </h2>
  <p className="mt-3 text-center text-gray-500 dark:text-gray-400 max-w-xl mx-auto relative z-10">
    A curated selection of technologies and tools I use to build modern applications.
  </p>


  <div className="flex flex-wrap justify-center gap-6 mt-12">
  {skills.map((skill, index) => (
    <div
      key={skill.name}
      className="group relative flex items-center px-5 py-3 rounded-full bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-md cursor-pointer transition-transform hover:scale-110 hover:shadow-xl hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white animate-float"
      style={{
        animationDelay: `${skill.delay}ms`,
        transform: `rotate(${index * 15 - 30}deg) translate(${index * 6}px, ${index * -6}px)`,
      }}
    >
      <FontAwesomeIcon icon={skill.icon} className="mr-2 text-2xl" />
      <span className="font-semibold">{skill.name}</span>
    </div>
  ))}
</div>

  {/* Floating animation keyframes */}
  {/* <style>{`
    @keyframes float {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-10px) rotate(3deg); }
    }
    .animate-float {
      animation: float 4s ease-in-out infinite;
    }
  `}</style> */}
</section>



      {/* Testimonials */}
      <TestimonialsSlider/>
    </Layout>
  )
}
