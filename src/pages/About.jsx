function About() {
  const profileImage = `${import.meta.env.BASE_URL}assets/profile-landscaper.svg`
  const principles = [
    'Clear estimates before work begins',
    'Planting choices that match the site',
    'Hardscaping planned for drainage and durability',
    'Respectful cleanup at the end of each job',
  ]

  return (
    <main className="flex-grow">
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:px-8">
          <div className="overflow-hidden rounded border border-stone-200 bg-stone-100 shadow-sm">
            <img src={profileImage} alt="Isaac, the landscaper" className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-green-800">About Isaac</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">Practical landscaping with a careful eye.</h2>
            <p className="mt-5 text-base leading-7 text-slate-700">
              Isaac's Landscaping is built around straightforward communication, durable materials, and outdoor spaces that make sense for Ithaca homes. The work ranges from routine lawn care to patios, retaining walls, planting beds, and full yard refreshes.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-700">
              Every project starts with the same questions: how should the space feel, how will it drain, how much maintenance should it need, and what will still look right after a few seasons?
            </p>
            <ul className="mt-6 grid gap-3">
              {principles.map((principle) => (
                <li key={principle} className="flex gap-3 text-slate-800">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-400"></span>
                  <span>{principle}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
