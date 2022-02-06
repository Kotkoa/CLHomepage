import email from './img/email.svg'

function Contact() {
    return (
        <div
            id="contact"
            className="mt-32 flex w-full flex-col px-4 text-white lg:mt-44 lg:flex-row lg:px-[120px]"
        >
            <div className="mr-40 flex flex-col items-start  text-white  lg:w-5/12  lg:items-center ">
                <h1 className="mb-6 text-2xl font-bold uppercase leading-8 lg:mb-10 lg:text-[40px]">
                    Contact us
                </h1>
                <div className="flex items-center">
                    <img src={email} alt="contact us" />
                    <p className="ml-5 text-sm font-medium leading-5 tracking-wider md:ml-6 md:text-xl  md:leading-7 lg:text-lg">
                        contact@crypticlabs.org
                    </p>
                </div>
            </div>
            <form className="mt-11 mb-20 flex w-full max-w-[662px] flex-col self-center border border-white border-opacity-5 bg-[#2A0808] px-5 pt-2.5 pb-6 lg:mt-0 lg:w-5/12">
                <label
                    for="name"
                    className="mt-6 mb-3 text-sm font-medium uppercase tracking-widest"
                >
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Full name"
                    className="border border-[#6A5353] bg-transparent px-5 py-3.5 placeholder:text-sm placeholder:font-medium placeholder:tracking-widest placeholder:text-white"
                />

                <label
                    for="email"
                    className="mt-6 mb-3 text-sm font-medium uppercase tracking-widest"
                >
                    Email
                </label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="example@youremail.com"
                    className="border border-[#6A5353] bg-transparent px-5 py-3.5 placeholder:text-sm placeholder:font-medium placeholder:tracking-widest placeholder:text-white"
                />

                <label
                    for="message"
                    className="mt-6 mb-3 text-sm font-medium uppercase tracking-widest"
                >
                    message
                </label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Send us a message"
                    className="border border-[#6A5353] bg-transparent px-5 py-3.5 placeholder:text-sm placeholder:font-medium placeholder:tracking-widest placeholder:text-white"
                ></textarea>

                <input
                    type="submit"
                    value="Send Message"
                    className="mt-10 w-full bg-gradient-to-b from-[#C73C45] to-[#A9222A] py-4 text-center text-base font-bold tracking-wider text-white sm:w-56 sm:py-6 sm:px-8 sm:text-xl sm:uppercase"
                />
            </form>
        </div>
    )
}

export default Contact
