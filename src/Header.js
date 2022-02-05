import logo from './img/crypticlabs.svg'
import MenuDropdown from './MenuDropdown'

const Header = ({ tabs }) => {
    return (
        <div className="flex w-full justify-center p-4 lg:px-[120px]">
            <div className="header flex w-full min-w-max items-center justify-between border border-[#7B5151] bg-[#3F0404] pl-4 pr-4 lg:mx-28 lg:mt-6 lg:pl-10 lg:pr-10">
                <img
                    src={logo}
                    alt="cryptic labs logo"
                    className="my-7 mr-10 w-20 lg:w-[109px]"
                />
                <div className="hidden text-right lg:block">
                    {tabs.map((tab) => {
                        return (
                            <a
                                href={`#${tab}`}
                                key={tab}
                                className="ml-16 whitespace-nowrap uppercase text-white"
                            >
                                {tab}
                            </a>
                        )
                    })}
                </div>
                <MenuDropdown tabs={tabs} />
            </div>
        </div>
    )
}

export default Header
