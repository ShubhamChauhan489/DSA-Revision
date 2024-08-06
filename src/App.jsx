import Header from "./component/Header"
import Hero from "./component/Hero"
import Testimonial from "./component/Testimonial"
import What from "./component/What"
import Footer from "./component/Footer"

const App = () => {
  return (
    <>
    <div className="flex flex-col gap-8 py-4 md:w-4/6 mx-auto">
    {/* navbar section*/}
    <Header/>
    {/* herosection section */}
    <Hero />
    {/* whats insights it */}
    <What/>
    {/* testimonial section */}
    <Testimonial />
    {/* footer section */}
    <Footer />
    </div>
    </>
  )
}

export default App
