import React from 'react'

const expertPesons = [
    {
        photo: '',
        name: 'Dr. Eric S. Maskin',
        about: 'Eric Maskin is the Adams University Professor and Professor of Economics and Mathematics at Harvard. ',
    },
    {
        photo: '',
        name: 'Sir Christopher Pissarides',
        about: 'Sir Christopher Pissarides is the Regius Professor of Economics at the London School of Economics.',
    },
    {
        photo: '',
        name: 'Prof. UELI MAURER',
        about: 'Ueli Maurer is professor of computer science and head of the Information Security and Cryptography Research Group.',
    },
    {
        photo: '',
        name: 'Dr. Jonathan Katz',
        about: 'Dr. Jonathan Katz is a professor of computer science at the University of Maryland.',
    },
    {
        photo: '',
        name: 'PROF. VICTOR SHOUP',
        about: 'Victor Shoup is an internationally recognized expert in the field of cryptography.',
    },
    {
        photo: '',
        name: 'HILARIE ORMAN',
        about: 'Hilaire Orman’s expertise centers on the design, development, and analysis of software and systems.',
    },
    {
        photo: '',
        name: 'PROF. YONGGE WANG',
        about: 'Dr. Yongge Wang received his PhD degree from University of Heidelberg of Germany.',
    },
    {
        photo: '',
        name: 'PROF. LIXIN GAO ',
        about: 'Dr. Lixin Gao is a professor of Electrical and Computer Engineering.',
    },
    {
        photo: '',
        name: 'Prof. William K. NG',
        about: 'William K. NG works in the areas of machine learning, privacy-preserving techniques.',
    },
    {
        photo: '',
        name: 'Prof. Kevin Leyton-Brown',
        about: 'Kevin Leyton-Brown is a professor of Computer Science at the University of British Columbia.',
    },
    {
        photo: '',
        name: 'JAN LIPHARDT',
        about: 'Jan Liphardt is an Associate Professor of Bioengineering at Stanford University. He has a physics background.',
    },
    {
        photo: '',
        name: 'DAN KOLKOWITZ',
        about: 'Mr. Kolkowitz brings more than 25 years of experience developing security and network technologies for distributed systems.',
    },
    {
        photo: '',
        name: 'EVELYN HYTOPOULOS',
        about: 'Evelyn Hytopoulos is a senior blockchain economist and the former Chief Economist.',
    },
    {
        photo: '',
        name: 'PROF. JIRI MATERNA',
        about: 'Dr. Jiri Materna is a machine learning expert with basic and applied research experience. ',
    },
]

function Leadership() {
    return (
        <div id="leadership" className="p-4 text-white lg:px-[120px]">
            <div className="mt-32 flex flex-col items-start lg:mt-44  lg:items-center">
                <h1 className="mb-3 text-2xl font-bold uppercase leading-8 lg:mb-7 lg:text-[40px]">
                    Expert team
                </h1>
            </div>
            <div className="flex flex-wrap items-center justify-around lg:justify-between">
                {expertPesons.map((person) => {
                    return (
                        <div
                            key={person.name}
                            className="mb-9 flex h-[540px] max-w-sm flex-col items-center border border-white border-opacity-5 bg-[#2A0808] p-10 pt-14"
                        >
                            <img
                                src={person.photo}
                                alt={person.name}
                                className="h-[218px] w-[218px] border border-white border-opacity-5"
                            />
                            <h1 className="mt-10 mb-4 text-center text-sm font-bold uppercase leading-6  lg:text-[22px] lg:leading-[36px]">
                                {person.name}
                            </h1>
                            <p className="text-center text-xs leading-5 text-[#BFADAD] lg:text-lg lg:leading-8">
                                {person.about}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Leadership
