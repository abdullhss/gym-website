import './App.css'
import Hero from './components/Hero'
import Programs from './components/Programs'
import ChooseUs from './components/ChooseUs'
import Plans from './components/Plans'
import Testimonial from './components/Testimonial'
import Email from './components/Email'
import Footer from './components/Footer'
export default function App() {
  return (
    <div className="App">
      <Hero></Hero>
      <Programs></Programs>
      <ChooseUs></ChooseUs>
      <Plans></Plans>
      <Testimonial></Testimonial>
      <Email></Email>
      <Footer></Footer>
    </div>
  )
}
