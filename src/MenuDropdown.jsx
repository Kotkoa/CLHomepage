import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react'
import burger from './img/burger.svg'
import cross from './img/cross.svg'

export default function MenuDropdown({ tabs }) {
  return (
    <Menu as="div" className="relative inline-block text-left lg:hidden">
      {({ open }) => (
        <>
          <MenuButton className="flex h-8 w-8 items-center justify-center bg-linear-to-b from-[#C73C45] to-[#A9222A] px-2 py-2.5">
            <img src={!open ? burger : cross} alt="menu icon" />
          </MenuButton>
          <MenuItems
            transition
            className="absolute -right-4 z-30 mt-9 w-screen origin-top-right pl-12 transition duration-100 ease-out data-closed:scale-95 data-closed:opacity-0"
          >
            <div className="flex flex-col border border-[#7B5151] bg-[#3F0404] p-4 pb-0">
              {tabs.map((item) => (
                <MenuItem key={item}>
                  {({ focus }) => (
                    <a
                      className={`mb-4 text-sm uppercase text-white${
                        focus ? 'font-bold' : 'font-medium'
                      }`}
                      href={`#${item}`}
                    >
                      {item}
                    </a>
                  )}
                </MenuItem>
              ))}
            </div>
          </MenuItems>
        </>
      )}
    </Menu>
  )
}
