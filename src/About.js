import React from 'react'

function About() {
    return (
        <div
            id="about"
            className="mt-28 flex w-full flex-col items-center justify-center p-4 text-white lg:mt-64 lg:flex-row lg:px-[120px]"
        >
            <div className="mr-0 mb-6 lg:mb-0 lg:mr-24 lg:w-1/2">
                <h1 className="mb-7 uppercase lg:mb-5">About us</h1>
                <p className=" text-sm font-medium leading-6 tracking-wide text-white lg:text-lg lg:leading-9">
                    We are comprised of expert security advisors,
                    cryptographers, researchers, engineers, scientists and
                    outstanding blockchain practitioners, We work with companies
                    globally to solve security, privacy, and decentralized and
                    distributed trust challenges. Cryptic Labs also functions as
                    a commercial accelerator focusing on security, economics,
                    privacy and trust to advance the viability of the
                    Blockchain.
                    <br />
                    <br />
                    To established companies, we offer advice and collaboration
                    on research and applied technology solutions. To startup
                    companies in our accelerator, we act as a bridge between
                    venture capital, academia and industry in the research and
                    development of practical industry-altering solutions, ideas
                    and resources.
                </p>
            </div>
            <div className="max-w-[550px] lg:w-5/12">
                <img src="./workprogress.jpg" alt="work process" />
            </div>
        </div>
    )
}

export default About
