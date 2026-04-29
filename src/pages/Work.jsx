function Work() {
  const projects = [
    { id: 1, title: 'Garden Makeover', image: '/assets/project1.jpg', description: 'Complete garden redesign with new plants and pathways.' },
    { id: 2, title: 'Patio Installation', image: '/assets/project2.jpg', description: 'Beautiful stone patio for outdoor entertaining.' },
    { id: 3, title: 'Lawn Renovation', image: '/assets/project3.jpg', description: 'Full lawn restoration and maintenance plan.' },
    { id: 4, title: 'Retaining Wall', image: '/assets/project4.jpg', description: 'Sturdy retaining wall for slope stabilization.' },
  ]

  return (
    <main className="flex-grow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Work