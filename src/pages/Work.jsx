function Work() {
  const assetPath = (fileName) => `${import.meta.env.BASE_URL}assets/${fileName}`

  const projects = [
    { id: 1, title: 'Garden Makeover', image: assetPath('project-garden.svg'), description: 'Layered planting beds, fresh edging, and a clearer path through the yard.' },
    { id: 2, title: 'Patio Installation', image: assetPath('project-patio.svg'), description: 'A compact stone patio planned for outdoor meals, seating, and easy upkeep.' },
    { id: 3, title: 'Lawn Renovation', image: assetPath('project-lawn.svg'), description: 'Turf repair, cleanup, and a maintenance plan for a healthier growing season.' },
    { id: 4, title: 'Retaining Wall', image: assetPath('project-wall.svg'), description: 'Stone wall work that helps manage slope, drainage, and planting space.' },
  ]

  return (
    <main className="flex-grow">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-green-900">Selected work</p>
          <h2 className="mt-3 text-3xl font-bold text-stone-950 sm:text-4xl">Clean, useful upgrades for everyday outdoor life.</h2>
          <p className="mt-4 text-base leading-7 text-stone-700">
            These examples show the kinds of projects Isaac can help plan and build. Real customer photos can replace these illustrations as the portfolio grows.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map(project => (
            <article key={project.id} className="overflow-hidden rounded border border-stone-200 bg-stone-50 shadow-sm">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-stone-950">{project.title}</h3>
                <p className="mt-2 leading-7 text-stone-700">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Work
