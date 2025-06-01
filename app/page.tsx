"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Gift, Camera, Heart } from "lucide-react"

export default function WeddingPage() {
  const heroRef = useRef<HTMLElement>(null)
  const whereRef = useRef<HTMLElement>(null)
  const rsvpRef = useRef<HTMLElement>(null)
  const galleryRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        }
      })
    }, observerOptions)

    const sections = [heroRef.current, whereRef.current, rsvpRef.current, galleryRef.current]
    sections.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50 to-emerald-50">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="min-h-screen flex flex-col items-center justify-center px-4 text-center opacity-0 translate-y-8 transition-all duration-1000 ease-out relative overflow-hidden"
      >
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="mb-8 animate-float">
            <Heart className="w-16 h-16 text-green-600 mx-auto mb-4 animate-pulse" />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-emerald-800 mb-4 font-serif italic animate-fade-in-up">
            Agus <span className="text-green-600">&</span> Sofi
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-emerald-600 mx-auto mb-8 animate-expand"></div>
          <h2 className="text-2xl md:text-3xl text-green-700 mb-12 tracking-wider font-light animate-fade-in-up delay-300">
            ¡NOS CASAMOS!
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-500">
            <Button
              size="lg"
              className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              Confirmar asistencia
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-green-700 text-green-700 hover:bg-green-50 px-8 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              Agendar evento
            </Button>
          </div>
        </div>

        {/* Animated decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-green-200 rounded-full opacity-60 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-emerald-200 rounded-full opacity-60 animate-float-delayed"></div>
        <div className="absolute top-1/2 left-5 w-12 h-12 bg-green-300 rounded-full opacity-60 animate-float-slow"></div>
        <div className="absolute top-1/3 right-20 w-8 h-8 bg-emerald-300 rounded-full opacity-40 animate-float"></div>

        {/* Floating leaves animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 text-green-400 text-2xl animate-float-leaf">🍃</div>
          <div className="absolute top-3/4 right-1/3 text-emerald-400 text-xl animate-float-leaf-delayed">🍃</div>
          <div className="absolute top-1/2 right-1/4 text-green-500 text-lg animate-float-leaf-slow">🍃</div>
        </div>
      </section>

      {/* Where Section */}
      <section ref={whereRef} className="py-20 px-4 opacity-0 translate-y-8 transition-all duration-1000 ease-out">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif italic text-emerald-800 mb-4 animate-fade-in-up">Dónde</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-600 mx-auto animate-expand"></div>
            <div className="mt-4 flex justify-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mx-1 animate-bounce"></div>
              <div className="w-2 h-2 bg-emerald-400 rounded-full mx-1 animate-bounce delay-100"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full mx-1 animate-bounce delay-200"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Ceremony */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-green-100 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl animate-slide-in-left">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-8 h-8 text-green-600 animate-pulse" />
                <h3 className="text-2xl font-serif text-emerald-800">Ceremonia</h3>
              </div>
              <div className="space-y-3 text-green-700 mb-6">
                <p className="text-xl font-medium">30 de Agosto</p>
                <p className="text-lg">18:00 hs.</p>
                <p className="text-lg font-medium">Nuestra Capilla del Señor</p>
                <p className="text-green-600">Av. Libertador 2450</p>
              </div>
              <Button
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 rounded-full transform hover:scale-105 transition-all duration-300"
              >
                <MapPin className="w-4 h-4 mr-2" />
                Ver ubicación
              </Button>
            </div>

            {/* Party */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-emerald-100 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl animate-slide-in-right">
              <div className="flex items-center gap-3 mb-6">
                <Gift className="w-8 h-8 text-emerald-600 animate-pulse" />
                <h3 className="text-2xl font-serif text-emerald-800">Fiesta</h3>
              </div>
              <div className="space-y-3 text-green-700 mb-6">
                <p className="text-lg">Después de la ceremonia</p>
                <p className="text-xl font-medium">Quinta Los Jazmines</p>
                <p className="text-green-600">Ruta 8 Km 25.5</p>
              </div>
              <Button
                variant="outline"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 rounded-full transform hover:scale-105 transition-all duration-300"
              >
                <MapPin className="w-4 h-4 mr-2" />
                Ver ubicación
              </Button>
            </div>
          </div>

          {/* Decorative flower illustration */}
          <div className="flex justify-center mt-16">
            <div className="w-32 h-32 relative animate-spin-slow">
              <div className="absolute inset-0 bg-gradient-to-br from-green-300 to-emerald-400 rounded-full opacity-30"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-emerald-300 to-green-400 rounded-full opacity-50"></div>
              <div className="absolute inset-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                <span className="text-2xl animate-pulse">🌿</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section
        ref={rsvpRef}
        className="py-20 px-4 bg-gradient-to-r from-green-100/50 to-emerald-100/50 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-emerald-800 mb-6 animate-fade-in-up">
            ¡Queremos compartir este día contigo!
          </h2>
          <p className="text-lg text-green-700 mb-12 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Confirmá asistencia y completá algunas preguntas en el siguiente formulario.
          </p>

          <Button
            size="lg"
            className="bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white px-12 py-4 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 mb-16 animate-bounce-gentle"
          >
            Confirmar asistencia
          </Button>

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            {/* Dress Code */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-green-100 transform hover:scale-105 transition-all duration-500 animate-slide-in-left">
              <div className="flex items-center gap-3 mb-6 justify-center">
                <span className="text-3xl animate-bounce">👔</span>
                <h3 className="text-2xl font-serif text-emerald-800">Dress Code</h3>
              </div>
              <p className="text-green-700 text-lg mb-4">Vestimenta Formal, elegante</p>
              <div className="flex justify-center gap-2">
                <div className="w-4 h-4 bg-emerald-600 rounded-full animate-pulse"></div>
                <div className="w-4 h-4 bg-green-600 rounded-full animate-pulse delay-100"></div>
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse delay-200"></div>
              </div>
            </div>

            {/* Gifts */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-emerald-100 transform hover:scale-105 transition-all duration-500 animate-slide-in-right">
              <div className="flex items-center gap-3 mb-6 justify-center">
                <span className="text-3xl animate-bounce delay-100">🎁</span>
                <h3 className="text-2xl font-serif text-emerald-800">Quiero regalar</h3>
              </div>
              <p className="text-green-700 mb-6">Si deseas hacernos un regalo...</p>
              <Button
                variant="outline"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 rounded-full transform hover:scale-105 transition-all duration-300"
              >
                Ver datos bancarios
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section ref={galleryRef} className="py-20 px-4 opacity-0 translate-y-8 transition-all duration-1000 ease-out">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Camera className="w-8 h-8 text-green-600 animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-serif italic text-emerald-800">Nuestra Historia</h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-600 mx-auto animate-expand"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="aspect-square bg-gradient-to-br from-green-200 to-emerald-300 rounded-3xl shadow-lg transform hover:scale-105 transition-all duration-500 flex items-center justify-center group cursor-pointer overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-full h-full bg-gradient-to-br from-green-300/50 to-emerald-400/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <span className="text-4xl opacity-60 animate-pulse">📸</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center bg-emerald-800 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-3xl font-serif italic mb-4 animate-fade-in-up">Agus & Sofi</h3>
          <p className="text-green-200 mb-4 animate-fade-in-up delay-100">30 de Agosto, 2024</p>
          <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto animate-expand"></div>
          <p className="text-green-200 mt-6 animate-fade-in-up delay-200">¡Nos vemos en nuestra boda!</p>
        </div>
      </footer>
    </div>
  )
}
