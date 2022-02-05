import logo from './img/crypticlabs.svg'
import MenuDropdown from './MenuDropdown'

const Header = ({ tabs }) => {
    return (
        <div className="absolute top-0 left-0 flex w-full justify-center">
            <div className="header mx-4 mt-4 flex w-full max-w-[1200px] items-center justify-between border border-[#7B5151] bg-[#3f0404] pl-4 pr-4 opacity-70 lg:mx-28 lg:mt-6 lg:pl-10 lg:pr-10">
                <img
                    src={logo}
                    alt="cryptic labs logo"
                    className="my-7 mr-10 w-20 lg:w-[109px]"
                />
                <div className="lg:hidden">
                    <MenuDropdown tabs={tabs} />
                </div>
                <div className="hidden text-right lg:block">
                    {tabs.map((tab) => {
                        return (
                            <a
                                href="/"
                                key={tab}
                                className="mr-16 whitespace-nowrap uppercase text-white"
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
