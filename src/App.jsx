import About from './About'
import Header from './Header'
import Home from './Home'
import Focus from './Focus'
import Contact from './Contact'
import Leadership from './Leadership'
import Footer from './Footer'

const tabs = ['home', 'about', 'focus', 'leadership', 'contact']

function App() {
  return (
    <div className="wrapper bg-background font-red h-full min-h-screen min-w-full overflow-x-hidden">
      <div className="max-w-screen-1xl container xl:mx-auto">
        <div
          className="landing bg-auto bg-bottom bg-no-repeat"
          style={{ backgroundImage: `url('${import.meta.env.BASE_URL}img/mainBg.webp')` }}
        >
          <Header tabs={tabs} />
          <Home />
        </div>
        <div className="divider mx-8 mt-[71px] flex items-center justify-center border-t-2 border-[#311717] pt-14 lg:mt-52 lg:pt-28">
          <p className="max-w-5xl text-center text-base leading-7 font-medium tracking-wider text-white lg:text-2xl lg:leading-[42px]">
            Aurelius Trust Labs is a strategic research and advisory firm
            focused on distributed systems, applied cryptography, digital
            identity, and economic trust architectures.
          </p>
        </div>
        <About />
        <Focus />
        <Leadership />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
