import React from 'react'

const About = () => {
  return (
    <section id="about" className="w-full py-8 md:py-18 lg:py-24 xl:py-20 text-black bg-gray-50">
  <div className="container mx-auto px-4 md:px-6">
    <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
      <div className="flex flex-col justify-center space-y-4">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl">
            Trusted Legal Expertise
          </h1>
          <p className="max-w-2xl text-gray-700 text-lg md:text-xl leading-relaxed">
          At Legal Tax Solutions, we specialize in delivering expert tax services that cater to both individual and corporate needs. Our experienced team offers personalized tax planning, preparation, and compliance strategies, ensuring you maximize savings while staying fully compliant with the latest regulations. Trust us to simplify the complexities of taxes, allowing you to focus on what matters most. Schedule a consultation today to see how we can help you achieve your financial goals with precision and care.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-md bg-gray-800 px-6 text-base font-medium text-white shadow-lg transition-colors hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900"
          >
            Contact Us
          </a>
          <a
            href="#services"
            className="inline-flex h-12 items-center justify-center rounded-md bg-blue-900 px-6 text-base font-medium text-white shadow-lg transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700"
          >
            Our Services
          </a>
        </div>
      </div>
      <img
        src="https://res.cloudinary.com/dffnyrdjn/image/upload/v1725544422/nkwgjkt0qnu36ipnraja.jpg"
        width="550"
        height="750"
        alt="Legal Services"
        className="mx-auto aspect-video h-[450px] overflow-hidden rounded-xl object-cover shadow-lg"
      />
    </div>
  </div>
</section>
  )
}

export default About
