function About() {
  return (
    <div
      id="about"
      className="mt-28 flex w-full flex-col items-center justify-center px-4 text-white lg:mt-64 lg:flex-row lg:px-30"
    >
      <div className="mr-0 mb-6 lg:mr-24 lg:mb-0 lg:w-1/2">
        <h1 className="mb-7 text-2xl leading-8 font-bold uppercase lg:mb-5 lg:text-[40px]">
          About us
        </h1>
        <p className="text-sm leading-6 font-medium tracking-wide text-[#A9B1BD] lg:text-lg lg:leading-9">
          We are comprised of expert security advisors, cryptographers,
          researchers, engineers, scientists and outstanding blockchain
          practitioners. We work with organizations globally to solve security,
          privacy, and decentralized trust challenges. Aurelius Trust Labs also
          functions as a strategic accelerator focusing on security, economics,
          privacy and trust to advance the viability of distributed systems.
          <br />
          <br />
          To established companies, we offer advice and collaboration on
          research and applied technology solutions. To startup companies in our
          accelerator, we act as a bridge between venture capital, academia and
          industry in the research and development of practical
          industry-altering solutions, ideas and resources.
        </p>
      </div>
      <div className="max-w-137.5 lg:w-5/12">
        <img src="/workprogress.jpg" alt="work process" />
      </div>
    </div>
  )
}

export default About
