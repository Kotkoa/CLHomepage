import logo from './crypticlabs.svg'

const tabs = ['home', 'about', 'focus', 'leadership', 'contact us']

const Header = () => {
    return (
        <div className="absolute top-0 left-0 flex w-full justify-center">
            <div className="header nax-w-[1200px] mx-28 mt-6 flex w-full items-center justify-between border border-[#7B5151] bg-[#3f0404] opacity-70">
                <img
                    src={logo}
                    alt="cryptic labs logo"
                    className="my-7 ml-10 mr-10"
                />
                <div className="">
                    {tabs.map((tab) => {
                        return (
                            <a
                                href="#"
                                key={tab}
                                className="mr-16 uppercase text-white"
                            >
                                {tab}
                            </a>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Header
