import focus_1 from './img/focus_1.svg'
import focus_2 from './img/focus_2.svg'
import focus_3 from './img/focus_3.svg'
import focus_4 from './img/focus_4.svg'

const focusTags = [
    {
        logo: focus_1,
        header: 'Advisory Services',
        text: 'Provides blockchain assessment and development services, deep security services, and privacy safeguarding consulting through our Advisory team. We address the most complex opportunities to both foster and implement dynamic, forward-looking solutions for emerging and enterprise clients.',
    },
    {
        logo: focus_2,
        header: 'Blockchain Technology',
        text: 'Security Analysis; Economics; Fundamentals; Privacy and Anonymity; Oracles, Real World Events and Sensor Data; Blockchain Time Dynamics and Scaling; Smart Contracts; Proofs.',
    },
    {
        logo: focus_3,
        header: 'Blockchain Economics & Education',
        text: 'We share a deep understanding of the economics of blockchain and token economics by Nobel economic laureates and applied economists. We also offer blockchain education and certification for Enterprise and large organizations.',
    },
    {
        logo: focus_4,
        header: 'Security Research & Innovation',
        text: 'We assist clients facing fundamental security challenges which affect the design and integrity of their networks, applications, digital transformation efforts and advanced research and development efforts. We work enterprises, governments and emerging companies in the following: Applied Cryptography, IoT and Cloud Security, Network and Data Security, A.I and Machine Learning',
    },
]

function Focus() {
    return (
        <div id="focus" className="w-full px-4 text-white lg:px-[120px]">
            <div className="mt-32 flex flex-col items-start lg:mt-44  lg:items-center">
                <h1 className="mb-3 text-2xl font-bold uppercase leading-8 lg:mb-7 lg:text-[40px]">
                    Where we focus
                </h1>
                <p className="mb-9 text-xs font-medium tracking-wide lg:mb-24 lg:text-lg">
                    To our clients and partners we provide
                </p>
            </div>
            <div className="flex flex-wrap items-center justify-around lg:justify-between">
                {focusTags.map((tag) => {
                    return (
                        <div
                            key={tag.header}
                            className="mb-6 flex w-80 flex-col items-center border border-white border-opacity-5 bg-[#2A0808] px-10 pt-8 pb-6 lg:mb-10 lg:h-[590px] lg:w-[calc(50%-20px)] lg:max-w-[580px] lg:pt-12 lg:pb-14"
                        >
                            <img
                                src={tag.logo}
                                alt={tag.header}
                                className=" mb-6 w-16 lg:mb-11 lg:w-28"
                            />
                            <h1 className="text-center text-base font-bold uppercase leading-6  lg:text-[22px] lg:leading-7">
                                {tag.header}
                            </h1>
                            <p className="mt-4 text-center text-xs leading-6 text-[#BFADAD] lg:mt-5 lg:text-lg lg:leading-8">
                                {tag.text}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Focus
