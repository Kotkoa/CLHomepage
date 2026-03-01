import logo from './img/aurelius_logo.png'
import MenuDropdown from './MenuDropdown'

const Header = ({ tabs }) => {
  return (
    <div className="flex w-full justify-center p-4 lg:px-[120px]">
      <div className="header flex w-full min-w-max items-center justify-between border border-[#7B5151] bg-[#3F0404] pr-4 pl-4 lg:mx-28 lg:mt-6 lg:pr-10 lg:pl-10">
        <img
          src={logo}
          alt="Aurelius Trust Labs logo"
          className="my-4 mr-10 h-12 w-auto lg:h-16"
        />
        <div className="hidden text-right lg:block">
          {tabs.map((tab) => {
            return (
              <a
                href={`#${tab}`}
                key={tab}
                className="ml-16 whitespace-nowrap text-white uppercase"
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
