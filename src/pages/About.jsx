function About() {
  return (
    <main className="flex-grow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">About Isaac</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img src="/assets/isaac-profile.jpg" alt="Isaac, the landscaper" className="w-full rounded-lg shadow-lg" />
          </div>
          <div>
            <p className="text-gray-700 mb-4">
              Hi, I'm Isaac, a passionate landscaper based in Ithaca, NY. With years of experience in landscaping and hardscaping,
              I specialize in creating beautiful, functional outdoor spaces that enhance your property's value and enjoyment.
            </p>
            <p className="text-gray-700 mb-4">
              My services include lawn care, garden design, patio installation, retaining walls, and much more.
              I take pride in using high-quality materials and sustainable practices to ensure lasting results.
            </p>
            <p className="text-gray-700">
              Let me help you bring your vision to life!
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default About