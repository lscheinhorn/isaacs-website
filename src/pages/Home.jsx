function Home() {
  return (
    <main className="flex-grow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Isaac's Landscaping</h2>
          <p className="text-xl text-gray-600 mb-8">Professional landscaping and hardscaping services in Ithaca, NY</p>
          <img src="/assets/hero-image.jpg" alt="Beautiful landscaped garden" className="w-full max-w-4xl mx-auto rounded-lg shadow-lg mb-8" />
          <p className="text-lg text-gray-700">Transform your outdoor space with our expert services.</p>
        </div>
      </div>
    </main>
  )
}

export default Home