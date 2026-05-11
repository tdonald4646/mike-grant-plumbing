import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">MG</span>
              </div>
              <div>
                <span className="font-bold text-slate-900 text-lg">Mike Grant</span>
                <span className="hidden sm:inline text-slate-500 text-sm ml-2">Plumbing & Heating</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Services</a>
              <a href="#about" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">About</a>
              <a href="#reviews" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Reviews</a>
              <a href="#contact" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Contact</a>
            </div>
            <a
              href="tel:07488316884"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="hidden sm:inline">07488 316884</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-slate-800"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-sm text-blue-200">Available for emergencies</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Trusted Plumbing &amp; Heating in{" "}
                <span className="text-blue-400">Witney</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-xl">
                Professional, reliable, and affordable plumbing services. From emergency repairs to complete installations, we have got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:07488316884"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-center transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </a>
                <a
                  href="#services"
                  className="border-2 border-white/30 hover:border-white/60 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold text-center transition-all"
                >
                  View Services
                </a>
              </div>
            </div>
            <div className="hidden lg:flex justify-end">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 bg-yellow-400/20 rounded-full px-4 py-2 mb-4">
                    <span className="text-3xl font-bold text-yellow-400">4.8</span>
                    <div className="flex text-yellow-400 text-xl">★★★★★</div>
                  </div>
                  <p className="text-slate-300">Based on <span className="font-semibold text-white">26 reviews</span></p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-white/10 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full" style={{ width: '98%' }}></div>
                    </div>
                    <span className="text-sm text-slate-300 w-36">Boiler Installation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-white/10 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full" style={{ width: '97%' }}></div>
                    </div>
                    <span className="text-sm text-slate-300 w-36">Bathroom Refits</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-white/10 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                    <span className="text-sm text-slate-300 w-36">Emergency Callouts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-3xl mb-2">🛡️</div>
              <p className="font-bold text-slate-900">Gas Registered</p>
              <p className="text-sm text-slate-500">Fully certified engineer</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">⭐</div>
              <p className="font-bold text-slate-900">4.8 Rating</p>
              <p className="text-sm text-slate-500">26 verified reviews</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🔧</div>
              <p className="font-bold text-slate-900">20+ Years</p>
              <p className="text-sm text-slate-500">Local experience</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">✅</div>
              <p className="font-bold text-slate-900">Guaranteed</p>
              <p className="text-sm text-slate-500">All work certified</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">What We Do</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-3">Our Services</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-lg">
              Comprehensive plumbing and heating solutions for your home
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="group bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-blue-200 hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-6">🔥</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Boiler Services &amp; Installation</h3>
              <p className="text-slate-600 mb-5">Expert boiler servicing, repairs, and new installations. Keep your home warm and efficient.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-slate-500">
                  <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Annual servicing
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-500">
                  <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  New boiler fitting
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-500">
                  <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Repairs &amp; maintenance
                </li>
              </ul>
            </div>

            <div className="group bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-blue-200 hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-6">🚿</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Bathroom Refits</h3>
              <p className="text-slate-600 mb-5">Complete bathroom transformations including free-standing showers, suites, and all plumbing work.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-slate-500">
                  <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Full renovations
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-500">
                  <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Wet rooms
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-500">
                  <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Disabled access
                </li>
              </ul>
            </div>

            <div className="group bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-blue-200 hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-6">🌡️</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Central Heating</h3>
              <p className="text-slate-600 mb-5">From radiator replacements to full system installations, we keep your home comfortable.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-slate-500">
                  <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Radiator fitting
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-500">
                  <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  System upgrades
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-500">
                  <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Power flushing
                </li>
              </ul>
            </div>

            <div className="group bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-blue-200 hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-6">💧</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Taps &amp; Showers</h3>
              <p className="text-slate-600 mb-5">Replacement and installation of taps, showers, and all bathroom fixtures.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-slate-500">
                  <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Mixer taps
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-500">
                  <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Electric showers
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-500">
                  <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Shower enclosures
                </li>
              </ul>
            </div>

            <div className="group bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-blue-200 hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-6">🔍</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Leak Detection &amp; Repair</h3>
              <p className="text-slate-600 mb-5">Fast, accurate leak detection to prevent damage and save you money on water bills.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-slate-500">
                  <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Quick diagnosis
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-500">
                  <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  No-mess repair
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-500">
                  <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Water damage prevention
                </li>
              </ul>
            </div>

            <div className="group bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-blue-200 hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-6">🔄</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Re-piping Services</h3>
              <p className="text-slate-600 mb-5">Complete re-piping throughout your home with minimal disruption to your daily life.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-slate-500">
                  <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Full re-piping
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-500">
                  <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Partial replacements
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-500">
                  <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Quality materials
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 md:py-28 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">About Mike</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-3 mb-6">Your Local Expert Plumber</h2>
              <p className="text-slate-600 text-lg mb-6">
                With over 20 years of experience serving Witney and the surrounding Oxfordshire area, Mike Grant has built a reputation for reliable, high-quality plumbing and heating services.
              </p>
              <p className="text-slate-600 mb-8">
                From a leaking tap to a complete bathroom renovation, every job receives the same attention to detail. As a gas registered engineer, you can trust that all gas work is carried out safely and to the highest standards.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-5 border border-slate-200">
                  <div className="text-3xl font-bold text-blue-600">20+</div>
                  <div className="text-sm text-slate-500">Years Experience</div>
                </div>
                <div className="bg-white rounded-xl p-5 border border-slate-200">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-slate-500">Happy Customers</div>
                </div>
                <div className="bg-white rounded-xl p-5 border border-slate-200">
                  <div className="text-3xl font-bold text-blue-600">26</div>
                  <div className="text-sm text-slate-500">5-Star Reviews</div>
                </div>
                <div className="bg-white rounded-xl p-5 border border-slate-200">
                  <div className="text-3xl font-bold text-blue-600">100%</div>
                  <div className="text-sm text-slate-500">Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="bg-slate-200 border-2 border-dashed rounded-3xl aspect-square flex items-center justify-center">
              <div className="text-center text-slate-400">
                <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="font-medium">Photo Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-3">What Our Customers Say</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <div className="flex text-yellow-400 text-lg mb-4">★★★★★</div>
              <p className="text-slate-600 mb-6 leading-relaxed">"Having used Mike for a number of years now for various plumbing projects from boiler services and replacement taps/showers to a complete bathroom refit, we can highly recommend his services! He is professional, prompt, and reliable."</p>
              <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-lg">A</div>
                <div>
                  <p className="font-bold text-slate-900">Alison Whitehead</p>
                  <p className="text-sm text-slate-400">Verified Customer</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <div className="flex text-yellow-400 text-lg mb-4">★★★★★</div>
              <p className="text-slate-600 mb-6 leading-relaxed">"Superb service. Mike installed two bathrooms, including free-standing shower, ripped out and installed a complete water system and gas central heating. Major renovation job involving re-piping throughout the house."</p>
              <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-lg">H</div>
                <div>
                  <p className="font-bold text-slate-900">Hazel Howarth</p>
                  <p className="text-sm text-slate-400">Verified Customer</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <div className="flex text-yellow-400 text-lg mb-4">★★★★★</div>
              <p className="text-slate-600 mb-6 leading-relaxed">"We had to have some old radiators replaced a bit sharpish in our old cottage and Mike was simply brilliant. He was quick to come out and quote and worked around our holiday we already had planned."</p>
              <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-lg">D</div>
                <div>
                  <p className="font-bold text-slate-900">Dan Harflett</p>
                  <p className="text-sm text-slate-400">Verified Customer</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <div className="flex text-yellow-400 text-lg mb-4">★★★★★</div>
              <p className="text-slate-600 mb-6 leading-relaxed">"Mike has done a couple of jobs for me and has always done the work to a very high standard. Most recently, identifying the source of a leak very quickly and promptly fixing it."</p>
              <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-lg">D</div>
                <div>
                  <p className="font-bold text-slate-900">Dave Johnys</p>
                  <p className="text-sm text-slate-400">Verified Customer</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <div className="flex text-yellow-400 text-lg mb-4">★★★★★</div>
              <p className="text-slate-600 mb-6 leading-relaxed">"I run a small carpentry business in the area and Mike is always my first port of call when I need a reliable plumber. Highly recommended."</p>
              <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-lg">R</div>
                <div>
                  <p className="font-bold text-slate-900">Ryan Dobinson</p>
                  <p className="text-sm text-slate-400">Verified Customer</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <div className="flex text-yellow-400 text-lg mb-4">★★★★★</div>
              <p className="text-slate-600 mb-6 leading-relaxed">"The highest possible recommendation for Mike Grant. We had a tricky bathroom renovation for disability access, in a tiny and awkwardly laid-out 19th-century cottage, on a very tight timeframe."</p>
              <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-lg">K</div>
                <div>
                  <p className="font-bold text-slate-900">K.H. Angeloff</p>
                  <p className="text-sm text-slate-400">Verified Customer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need a Plumber? We are Here to Help</h2>
          <p className="text-blue-100 text-lg mb-8">Contact us today for a free quote or emergency callout</p>
          <a
            href="tel:07488316884"
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            07488 316884
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 md:py-28 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-6">Contact Us</h2>
              <p className="text-slate-300 mb-8">
                Ready to start your project? Get in touch for a free, no-obligation quote. We typically respond within 2 hours.
              </p>
              <div className="space-y-6">
                <a href="tel:07488316884" className="flex items-center gap-4 group">
                  <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Call us on</p>
                    <p className="text-xl font-bold text-white">07488 316884</p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Visit us at</p>
                    <p className="text-xl font-bold text-white">2 Manor Rd, Witney OX28 3SR</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-6">Opening Hours</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-3 border-b border-slate-700">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-green-400"></span>
                      <span className="text-white font-medium">Monday</span>
                    </div>
                    <span className="text-slate-300">8:00 am – 5:00 pm</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-slate-700">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-green-400"></span>
                      <span className="text-white font-medium">Tuesday</span>
                    </div>
                    <span className="text-slate-300">8:00 am – 5:00 pm</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-slate-700">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-green-400"></span>
                      <span className="text-white font-medium">Wednesday</span>
                    </div>
                    <span className="text-slate-300">8:00 am – 5:00 pm</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-slate-700">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-green-400"></span>
                      <span className="text-white font-medium">Thursday</span>
                    </div>
                    <span className="text-slate-300">8:00 am – 5:00 pm</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-slate-700">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-green-400"></span>
                      <span className="text-white font-medium">Friday</span>
                    </div>
                    <span className="text-slate-300">8:00 am – 5:00 pm</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-slate-700">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-green-400"></span>
                      <span className="text-white font-medium">Saturday</span>
                    </div>
                    <span className="text-slate-300">9:00 am – 12:30 pm</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-slate-500"></span>
                      <span className="text-white font-medium">Sunday</span>
                    </div>
                    <span className="text-slate-500">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">MG</span>
              </div>
              <span className="font-bold text-white">Mike Grant Plumbing and Heating</span>
            </div>
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Mike Grant Plumbing and Heating. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}