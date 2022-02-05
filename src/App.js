import About from './About'
import Header from './Header'
import Home from './Home'

const tabs = ['home', 'about', 'focus', 'leadership', 'contact us']

function App() {
    return (
        <div className="wrapper h-full min-h-screen min-w-full overflow-x-hidden bg-background font-red">
            <div className="container mx-auto max-w-screen-1xl">
                <div className="landing relative">
                    <img
                        className=""
                        src="/mainBg.png"
                        alt="night city backgroung"
                    />
                    <Header tabs={tabs} />
                    <Home />
                </div>
                <About />
                <div className="focus"></div>
                <div className="leadership"></div>
                <div className="contactus"></div>
                <div className="footer"></div>
            </div>
        </div>
    )
}

export default App
