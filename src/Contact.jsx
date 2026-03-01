import { useState } from 'react'
import emailIcon from './img/email.svg'
import validate from './utils/validate'

function Contact() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate(values)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length === 0) {
      alert(JSON.stringify(values, null, 2))
    }
  }

  return (
    <div
      id="contact"
      className="mt-32 flex w-full flex-col px-4 text-white lg:mt-44 lg:flex-row lg:px-[120px]"
    >
      <div className="mr-40 flex flex-col items-start text-white lg:w-5/12 lg:items-center">
        <h1 className="mb-6 text-2xl leading-8 font-bold uppercase lg:mb-10 lg:text-[40px]">
          Contact us
        </h1>
        <div className="flex items-center">
          <img src={emailIcon} alt="contact us" />
          <p className="ml-5 text-sm leading-5 font-medium tracking-wider md:ml-6 md:text-xl md:leading-7 lg:text-lg">
            contact@aureliustrustlabs.org
          </p>
        </div>
      </div>
      <form
        className="mt-11 mb-20 flex w-full max-w-[662px] flex-col self-center border border-white/5 bg-[#2A0808] px-5 pt-2.5 pb-6 lg:mt-0 lg:w-5/12"
        onSubmit={handleSubmit}
      >
        <label
          htmlFor="name"
          className="mt-6 mb-3 text-sm font-medium tracking-widest uppercase"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Full name"
          onChange={handleChange}
          value={values.name}
          className="border border-[#6A5353] bg-transparent px-5 py-3.5 placeholder:text-sm placeholder:font-medium placeholder:tracking-widest placeholder:text-white"
        />
        {errors.name ? (
          <div className="text-sm text-red-400">{errors.name}</div>
        ) : null}

        <label
          htmlFor="email"
          className="mt-6 mb-3 text-sm font-medium tracking-widest uppercase"
        >
          Email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="example@youremail.com"
          onChange={handleChange}
          value={values.email}
          className="border border-[#6A5353] bg-transparent px-5 py-3.5 placeholder:text-sm placeholder:font-medium placeholder:tracking-widest placeholder:text-white"
        />
        {errors.email ? (
          <div className="text-sm text-red-400">{errors.email}</div>
        ) : null}

        <label
          htmlFor="message"
          className="mt-6 mb-3 text-sm font-medium tracking-widest uppercase"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Send us a message"
          onChange={handleChange}
          value={values.message}
          className="border border-[#6A5353] bg-transparent px-5 py-3.5 placeholder:text-sm placeholder:font-medium placeholder:tracking-widest placeholder:text-white"
        ></textarea>
        {errors.message ? (
          <div className="text-sm text-red-400">{errors.message}</div>
        ) : null}

        <input
          type="submit"
          value="Send Message"
          className="mt-10 w-full bg-linear-to-b from-[#C73C45] to-[#A9222A] py-4 text-center text-base font-bold tracking-wider text-white hover:cursor-pointer sm:w-56 sm:px-8 sm:py-6 sm:text-xl sm:uppercase"
        />
      </form>
    </div>
  )
}

export default Contact
