const expertPersons = [
  {
    photo: '/photo_01.jpg',
    name: 'Dr. Adrian K. Mercer',
    about:
      'Adrian Mercer is a Distinguished Professor of Economics and Game Theory at a leading Ivy League institution.',
  },
  {
    photo: '/photo_02.jpg',
    name: 'Prof. Daniel H. Whitmore',
    about:
      'Daniel Whitmore is a Regius Professor of Economics specializing in labor markets and macroeconomic policy.',
  },
  {
    photo: '/photo_03.jpg',
    name: 'Prof. Markus Reinhardt',
    about:
      'Markus Reinhardt is a professor of computer science and leads the Applied Cryptography and Information Security Research Group.',
  },
  {
    photo: '/photo_04.jpg',
    name: 'Dr. Samuel R. Lowell',
    about:
      'Dr. Samuel Lowell is a professor of computer science specializing in cryptographic protocols and formal verification.',
  },
  {
    photo: '/photo_05.jpg',
    name: 'Prof. Leonard Voss',
    about:
      'Leonard Voss is an internationally recognized expert in the field of post-quantum cryptography.',
  },
  {
    photo: '/photo_06.jpg',
    name: 'Helena Strauss',
    about:
      'Helena Strauss brings deep expertise in the design, development, and analysis of secure distributed software systems.',
  },
  {
    photo: '/photo_07.jpg',
    name: 'Prof. Kenji Takahiro',
    about:
      'Dr. Kenji Takahiro received his PhD from the Technical University of Munich and specializes in zero-knowledge proofs.',
  },
  {
    photo: '/photo_08.jpg',
    name: 'Prof. Isabelle Fournier',
    about:
      'Dr. Isabelle Fournier is a professor of Electrical and Computer Engineering with focus on network security.',
  },
  {
    photo: '/photo_09.jpg',
    name: 'Prof. Matteo Rinaldi',
    about:
      'Matteo Rinaldi works in the areas of machine learning, privacy-preserving computation, and federated systems.',
  },
  {
    photo: '/photo_10.jpg',
    name: 'Prof. Oliver Bennett',
    about:
      'Oliver Bennett is a professor of Computer Science specializing in algorithmic game theory and mechanism design.',
  },
  {
    photo: '/photo_11.jpg',
    name: 'Dr. Elias Hoffman',
    about:
      'Elias Hoffman is an Associate Professor of Computational Biology with a background in statistical physics and modeling.',
  },
  {
    photo: '/photo_12.jpg',
    name: 'Marcus Vale',
    about:
      'Marcus Vale brings more than 25 years of experience developing security and network technologies for distributed systems.',
  },
  {
    photo: '/photo_13.jpg',
    name: 'Dr. Sophia Demir',
    about:
      'Sophia Demir is a senior blockchain economist and former Chief Economist at a major digital asset exchange.',
  },
  {
    photo: '/photo_14.jpg',
    name: 'Dr. Tomas Novak',
    about:
      'Dr. Tomas Novak is a machine learning expert with extensive basic and applied research experience in AI security.',
  },
]

function Leadership() {
  return (
    <div id="leadership" className="p-4 text-white lg:px-[120px]">
      <div className="mt-32 flex flex-col items-start lg:mt-44 lg:items-center">
        <h1 className="mb-3 text-2xl leading-8 font-bold uppercase lg:mb-20 lg:text-[40px]">
          Expert team
        </h1>
      </div>
      <div className="flex flex-wrap items-center justify-around">
        {expertPersons.map((person) => {
          return (
            <div
              key={person.name}
              className="mb-9 flex h-[390px] max-w-[300px] flex-col items-center border border-white/5 bg-[#2A0808] p-10 pt-14 md:h-[540px] md:max-w-sm"
            >
              <img
                src={person.photo}
                alt={person.name}
                className="h-[166px] w-[166px] border border-white/5 md:h-[218px] md:w-[218px]"
              />
              <h1 className="mt-10 mb-4 text-center text-sm leading-6 font-bold uppercase lg:text-[22px] lg:leading-[36px]">
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
