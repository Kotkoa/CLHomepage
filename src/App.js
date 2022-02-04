import Header from './Header'
import Home from './Home'

function App() {
    return (
        <div className="wrapper min-h-screen min-w-full bg-background font-red">
            <div className="container mx-auto max-w-screen-1xl">
                <div className="landing relative">
                    <img
                        className=""
                        src="/mainBg.png"
                        alt="night city backgroung"
                    />
                    <Header />
                    <Home />
                </div>
                <div className="about"></div>
                <div className="focus"></div>
                <div className="leadership"></div>
                <div className="contactus"></div>
                <div className="footer"></div>
            </div>
        </div>
    )
}

export default App
