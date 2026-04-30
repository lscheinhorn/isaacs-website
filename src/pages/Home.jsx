import { Link } from 'react-router-dom'

function Home() {
  const heroImage = `${import.meta.env.BASE_URL}assets/hero-landscape.svg`
  const services = [
    'Garden design and planting',
    'Patios, walkways, and stonework',
    'Retaining walls and drainage',
    'Seasonal cleanup and lawn care',
  ]
  const highlights = [
    { label: 'Local', value: 'Ithaca based' },
    { label: 'Built for', value: 'Upstate weather' },
    { label: 'Focus', value: 'Clean, durable work' },
  ]

  return (
    <main className="flex-grow">
      <section className="relative overflow-hidden bg-green-950 text-white">
        <img src={heroImage} alt="" className="absolute inset-0 h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-green-950/50"></div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-stone-100/90 to-transparent"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-lime-100">Ithaca landscaping and hardscaping</p>
            <h2 className="text-4xl font-bold leading-tight text-stone-50 sm:text-5xl lg:text-6xl">
              Outdoor spaces that look sharp and hold up.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-100">
              Isaac's Landscaping helps homeowners turn tired yards into useful, welcoming spaces with thoughtful planting, clean stonework, and practical seasonal care.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="inline-flex justify-center rounded bg-lime-200 px-5 py-3 text-sm font-bold text-green-950 transition hover:bg-lime-100 focus:outline-none focus:ring-2 focus:ring-lime-100 focus:ring-offset-2 focus:ring-offset-green-950">
                Request a consultation
              </Link>
              <Link to="/work" className="inline-flex justify-center rounded border border-stone-100/70 px-5 py-3 text-sm font-bold text-white transition hover:bg-stone-100 hover:text-green-950 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-950">
                View recent work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-stone-50/95">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-6 sm:grid-cols-3 sm:px-6 lg:px-8">
          {highlights.map((item) => (
            <div key={item.label} className="border-l-4 border-lime-700 pl-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-stone-500">{item.label}</p>
              <p className="text-lg font-bold text-stone-950">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-green-900">What we handle</p>
            <h3 className="mt-3 text-3xl font-bold text-stone-950">From first cleanup to finished patio.</h3>
            <p className="mt-4 text-base leading-7 text-stone-700">
              The goal is simple: a yard that feels cared for, works for how you live, and does not become another project you have to babysit.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <div key={service} className="rounded border border-stone-200 bg-stone-50 p-5 shadow-sm">
                <p className="text-lg font-semibold text-stone-950">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
