import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Landscaping inquiry from ${formData.name}`)
    const body = encodeURIComponent(`${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`)

    window.location.href = `mailto:isaac@isaacslandscaping.com?subject=${subject}&body=${body}`
    setStatus('Your email app should open with this message ready to send.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <main className="flex-grow">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-green-800">Start a project</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">Tell Isaac what you want the yard to become.</h2>
          <p className="mt-4 text-base leading-7 text-slate-700">
            Share a few details about the space, the work you have in mind, and the best way to reach you.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="rounded border border-stone-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-950">Contact details</h3>
              <div className="mt-5 space-y-4 text-slate-700">
                <p><strong className="text-slate-950">Phone:</strong> (607) 555-0123</p>
                <p><strong className="text-slate-950">Email:</strong> isaac@isaacslandscaping.com</p>
                <p><strong className="text-slate-950">Service Area:</strong> Ithaca, NY and nearby communities</p>
              </div>
              <p className="mt-6 text-sm leading-6 text-slate-600">
                Replace the phone number and email before public launch if these are placeholders.
              </p>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="space-y-5 rounded border border-stone-200 bg-white p-6 shadow-sm">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-800">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-2 block w-full rounded border border-stone-300 px-3 py-3 shadow-sm focus:border-green-700 focus:outline-none focus:ring-2 focus:ring-green-700/20"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-800">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2 block w-full rounded border border-stone-300 px-3 py-3 shadow-sm focus:border-green-700 focus:outline-none focus:ring-2 focus:ring-green-700/20"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-800">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-2 block w-full rounded border border-stone-300 px-3 py-3 shadow-sm focus:border-green-700 focus:outline-none focus:ring-2 focus:ring-green-700/20"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full rounded bg-green-800 px-4 py-3 font-bold text-white transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2"
              >
                Send Message
              </button>
              {status && (
                <p className="text-sm text-green-800" role="status">
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact
