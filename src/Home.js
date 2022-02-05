import React from 'react'

const Home = () => {
    return (
        <div
            id="home"
            className="flex w-full flex-col items-center p-4 pb-0 lg:px-[120px]"
        >
            <h1 className="mt-16 max-w-[1074px] text-center text-4xl font-bold leading-[46px] tracking-wider text-white md:text-[56px] md:leading-[76px] lg:mt-40">
                Republic of Palau and Cryptic Labs Launch the World’s First Web3
                Digital Resident ID Card
            </h1>
            <a
                href="https://rns.id"
                className="mt-20 max-w-max bg-gradient-to-b from-[#C73C45] to-[#A9222A] py-5 px-[75px] text-xl text-white"
            >
                RNS ID
            </a>
        </div>
    )
}

export default Home
