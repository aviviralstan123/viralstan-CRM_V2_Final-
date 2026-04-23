// import Navbar from '../components/layout/Navbar'
// import Footer from '../components/layout/Footer'
// import Hero from '../components/sections/Hero'
// import Stats from '../components/sections/Stats'
// import Clients from '../components/sections/Clients'
// import Features from '../components/sections/Features'
// import Tools from '../components/sections/Tools'
// import Domains from '../components/sections/Domains'
// import Process from '../components/sections/Process'
// import Portfolio from '../components/sections/Portfolio'
// import FAQ from '../components/sections/FAQ'
// import IntelligenceHub from '../components/sections/IntelligenceHub'
// import CTA from '../components/sections/CTA'

// export default function Home() {
//   return (
//     <div style={{ background:'#080b14', minHeight:'100vh' }}>
//       <Navbar />
//       <Hero />
//       <Stats />
//       <Clients />
//       <Features />
//       <Tools />
//       <Domains />
//       <Process />
//       <Portfolio />
//       <FAQ />
//       <IntelligenceHub />
//       <CTA />
//       <Footer />
//     </div>
//   )
// }


import Navbar from '../components/layout/navbar/Navbar'
import Footer from '../components/layout/Footer'
import Hero from '../components/home/Hero'
import Stats from '../components/home/Stats'
import Clients from '../components/home/Clients'
import Features from '../components/home/Features'
import Tools from '../components/home/Tools'
import Domains from '../components/home/Domains'
import Process from '../components/home/Process'
import Portfolio from '../components/home/Portfolio'
import FAQ from '../components/home/FAQ'
import IntelligenceHub from '../components/home/IntelligenceHub'
import CTA from '../components/home/CTA'
import Testimonials from '../components/home/Testimonials'

export default function Home() {
  return (
    <div className='font-sans' style={{ background:'#F4F6FF', minHeight:'100vh' }}>
      {/* <Navbar /> */}
      <Hero />
      <Stats />
      <Clients />
      <Features />
      <Tools />
      <Domains />
      <Process />
      <Portfolio />
      <FAQ />
      <IntelligenceHub />
      <Testimonials/>
      <CTA />
    </div>
  )
}