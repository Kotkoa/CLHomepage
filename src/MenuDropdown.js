import { Menu, Transition } from '@headlessui/react'
import burger from './img/burger.svg'
import cross from './img/cross.svg'

export default function MenuDropdown({ tabs }) {
    return (
        <Menu as="div" className="relative inline-block text-left">
            {({ open }) => (
                <>
                    <Menu.Button className="flex h-8 w-8 items-center justify-center bg-gradient-to-b from-[#C73C45] to-[#A9222A] py-2.5 px-2">
                        <img src={!open ? burger : cross} alt="menu icon" />
                    </Menu.Button>
                    <Transition
                        show={open}
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                    >
                        <Menu.Items className="absolute -right-4 z-30 mt-9 w-screen  origin-top-right pl-8">
                            <div className="flex flex-col border border-[#7B5151] bg-[#3f0404] p-4 pb-0">
                                {tabs.map((item) => {
                                    return (
                                        <Menu.Item key={item}>
                                            {({ active }) => (
                                                <a
                                                    className={`mb-4 text-sm text-white uppercase${
                                                        active
                                                            ? ' font-bold '
                                                            : ' font-medium'
                                                    }`}
                                                    href="/"
                                                >
                                                    {item}
                                                </a>
                                            )}
                                        </Menu.Item>
                                    )
                                })}
                            </div>
                        </Menu.Items>
                    </Transition>
                </>
            )}
        </Menu>
    )
}
