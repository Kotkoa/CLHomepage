import About from './About'
import Header from './Header'
import Home from './Home'
import Focus from './Focus'
import Contact from './Contact'
import Leadership from './Leadership'

const tabs = ['home', 'about', 'focus', 'leadership', 'contact']

function App() {
    return (
        <div className="wrapper h-full min-h-screen min-w-full overflow-x-hidden bg-background font-red">
            <div className="container max-w-screen-1xl xl:mx-auto">
                <div className="landing bg-city bg-auto bg-bottom bg-no-repeat">
                    <Header tabs={tabs} />
                    <Home />
                </div>
                <div className="divider mx-8 mt-[71px] flex items-center  justify-center border-t-2 border-[#311717] pt-14 lg:mt-52 lg:pt-28">
                    <p className="max-w-5xl text-center text-base font-medium leading-7 tracking-wider text-white lg:text-2xl lg:leading-[42px]">
                        Cryptic Labs is an innovative commercial lab,
                        accelerator and advisory focused on solving fundamental
                        problems in blockchain, security, privacy and trust.
                    </p>
                </div>
                <About />
                <Focus />
                <Leadership />
                <Contact />
            </div>
        </div>
    )
}

export default App
