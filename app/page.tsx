'use client'

import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Calendar, MapPin, Gift, Camera } from 'lucide-react'
import RSVPDialog from '@/components/rsvp-dialog'

export default function WeddingPage() {
  const heroRef = useRef<HTMLElement>(null)
  const whereRef = useRef<HTMLElement>(null)
  const rsvpRef = useRef<HTMLElement>(null)
  const galleryRef = useRef<HTMLElement>(null)


  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    }, observerOptions)

    const sections = [
      heroRef.current,
      whereRef.current,
      rsvpRef.current,
      galleryRef.current,
    ]
    sections.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-stone-50 to-neutral-50">
      {/* Hero Section */}
      <section
        ref={heroRef}
        style={{
          backgroundImage: "url('/Fondo1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="min-h-screen flex flex-col items-center justify-center px-4 text-center opacity-0 translate-y-8 transition-all duration-1000 ease-out relative overflow-hidden"
      >
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold text-neutral-800 mb-4 font-serif animate-fade-in-up">
            Sofi <span className="text-5xl text-stone-600 italic">&</span> Agus
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-stone-400 to-neutral-600 mx-auto mb-8 animate-expand"></div>
          <h2 className="text-2xl md:text-3xl text-stone-700 mb-12 tracking-wider font-light animate-fade-in-up delay-300">
            ¡NOS CASAMOS!
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-500">
            <RSVPDialog triggerClassName="animate-bounce-gentle" />
          </div>
        </div>
      </section>

      {/* Where Section */}
      <section
        ref={whereRef}
        className="py-20 px-4 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
      >
        <div className="max-w-6xl mx-auto">
  <div className="text-center mb-16">
    <h2 className="text-4xl md:text-5xl font-serif text-neutral-800 mb-4 animate-fade-in-up">
      Dónde y cuándo?
    </h2>
    <div className="w-24 h-1 bg-gradient-to-r from-stone-400 to-neutral-600 mx-auto animate-expand"></div>
  </div>
  {/* Imagen izquierda, más arriba */}
  <img
    src="/branch_0_0.png"
    alt="Decoración izquierda"
    className="hidden md:block absolute -left-35 -top-18 w-40"
    style={{ zIndex: 1 }}
  />
  {/* Solo un cuadro, centrado y más ancho */}
  <div className="flex justify-center">
      <div
    className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-stone-100 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl animate-slide-in-left max-w-2xl w-full"
    style={{
      backgroundImage: "url('/FondoCuadrito1.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
      <div className="flex items-center gap-3 mb-6 justify-center">
        <Calendar className="w-8 h-8 text-stone-600 justify-center" />
      </div>
      <div className="space-y-3 text-stone-700 mb-6 text-center">
        <p className="text-xl font-medium">Sábado 30 de Agosto, 2025</p>
        <p className="text-lg">17:00 h</p>
        <p className="text-lg font-medium">Salón: Espacio PK Campo</p>
        <p className="text-stone-600">Capilla del Señor, Provincia de Buenos Aires</p>
      </div>
      <div className="flex justify-center">
        <a
          href="https://www.google.com/maps/place/Espacio+PK+Campo/@-34.3582413,-59.1240167,17z/data=!3m1!4b1!4m6!3m5!1s0x95bb83bc2e574ef5:0xce69798a50b7e448!8m2!3d-34.3582413!4d-59.1214364!16s%2Fg%2F11rnd2kl2v?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="outline"
            className="border-stone-600 text-stone-600 hover:bg-stone-50 rounded-full transform hover:scale-105 transition-all duration-300"
          >
            <MapPin className="w-4 h-4 mr-2" />
            Ver ubicación
          </Button>
        </a>
      </div>
    </div>
  </div>
</div>
      </section>

      {/* RSVP Section */}
      <section
        ref={rsvpRef}
        className="py-20 px-4 bg-gradient-to-r from-stone-100/50 to-neutral-100/50 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-neutral-800 mb-6 animate-fade-in-up">
            ¡Queremos compartir este día contigo!
          </h2>
          <p className="text-lg text-stone-700 mb-12 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Confirmá asistencia y completá algunas preguntas en el siguiente
            formulario.
          </p>

          <RSVPDialog triggerClassName="bg-gradient-to-r from-stone-600 to-neutral-700 hover:from-stone-700 hover:to-neutral-800 text-white px-12 py-4 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 mb-16 animate-bounce-gentle" />

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            {/* Dress Code */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-stone-100 transform hover:scale-105 transition-all duration-500 animate-slide-in-left">
              <div className="flex items-center gap-3 mb-6 justify-center">
                <span className="text-3xl">👔</span>
                <h3 className="text-2xl font-serif text-neutral-800">
                  Dress Code
                </h3>
              </div>
              <p className="text-stone-700 text-lg mb-4">
                Vestimenta Formal, elegante
              </p>
              <div className="flex justify-center gap-2">
                <div className="w-4 h-4 bg-neutral-600 rounded-full"></div>
                <div className="w-4 h-4 bg-stone-600 rounded-full"></div>
                <div className="w-4 h-4 bg-stone-500 rounded-full"></div>
              </div>
            </div>

            {/* Gifts */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-neutral-100 transform hover:scale-105 transition-all duration-500 animate-slide-in-right">
              <div className="flex items-center gap-3 mb-6 justify-center">
                <span className="text-3xl">🎁</span>
                <h3 className="text-2xl font-serif text-neutral-800">
                  Quiero regalar
                </h3>
              </div>
              <p className="text-stone-700 mb-6">
                Si deseas hacernos un regalo...
              </p>
              <Button
                variant="outline"
                className="border-neutral-600 text-neutral-600 hover:bg-neutral-50 rounded-full transform hover:scale-105 transition-all duration-300"
              >
                Ver datos bancarios
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section
        ref={galleryRef}
        className="py-20 px-4 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Camera className="w-8 h-8 text-stone-600" />
              <h2 className="text-4xl md:text-5xl font-serif text-neutral-800">
                Nuestra Historia
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-stone-400 to-neutral-600 mx-auto animate-expand"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="aspect-square bg-gradient-to-br from-stone-200 to-neutral-300 rounded-3xl shadow-lg transform hover:scale-105 transition-all duration-500 flex items-center justify-center group cursor-pointer overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-full h-full bg-gradient-to-br from-stone-300/50 to-neutral-400/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <span className="text-4xl opacity-60">📸</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center bg-neutral-800 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-3xl font-serif mb-4 animate-fade-in-up">
            Sofi & Agus
          </h3>
          <p className="text-stone-200 mb-4 animate-fade-in-up delay-100">
            30 de Agosto, 2025
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-stone-400 to-neutral-400 mx-auto animate-expand"></div>
          <p className="text-stone-200 mt-6 animate-fade-in-up delay-200">
            ¡Nos vemos en nuestra boda!
          </p>
        </div>
      </footer>
    </div>
  )
}
