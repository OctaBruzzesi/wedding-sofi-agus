'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Shirt, Calendar, MapPin, Gift, Camera, Lightbulb, BadgeDollarSign, Instagram, Copy, Check, Mail } from 'lucide-react'
import RSVPDialog from '@/components/rsvp-dialog'

// Componente para el modal de inspiración Dress Code - Movido al nivel superior
function DressCodeInspoModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null
  return (
    <div
      className="fixed inset-0 flex items-center justify-center backdrop-blur-sm"
      style={{ 
        pointerEvents: 'auto',
        zIndex: 999999,
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
      }}
    >
      <div
        className="rounded-2xl shadow-2xl max-w-lg w-full p-6 relative bg-white max-h-[90vh] overflow-y-auto mx-4"
        style={{
          backgroundImage: "url('/FondoCuadrito1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 999999,
        }}
      >
        <Button
          className="bg-stone-100 border-stone-600 text-stone-600 hover:bg-stone-50 rounded-full transform hover:scale-105 transition-all duration-300 absolute top-4 right-4"
          onClick={onClose}
          aria-label="Cerrar"
          style={{ zIndex: 999999 }}
        >
          ×
        </Button>

        <div className="space-y-6 pt-8">
          <div>
          <p className="text-stone-700 text-sm text-center mt-3 mb-4">
          Vestimenta formal para comenzar</p>
            <img
              src="/Trafi2.jpeg"
              alt="Inspiración 1"
              className="rounded-xl mb-2 w-[90%] mx-auto object-cover h-48"
              style={{ objectPosition: 'center 70%' }}
            />
          </div>
          <div>
            <img
              src="/Trafi3.jpeg"
              alt="Inspiración 2"
              className="rounded-xl mb-2 w-[90%] mx-auto object-cover h-48"
            />
          </div>
          <p className="text-stone-700 text-sm text-center mt-0 whitespace-nowrap">
            Llevar zapatillas para cambiarse y bailar cómodos<br />Hombres además remera negra</p>
          <div>
            <img
              src="/Achos.jpeg"
              alt="Inspiración 3"
              className="rounded-xl mb-2 w-[90%] mx-auto object-cover h-48"
              style={{ objectPosition: 'center 45%' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

// Componente para el modal de datos bancarios - Movido al nivel superior
function BankDataModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [copiedCBU, setCopiedCBU] = useState<string | null>(null)

  const copyToClipboard = async (text: string, cbuName: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedCBU(cbuName)
      setTimeout(() => setCopiedCBU(null), 2000)
    } catch (err) {
      console.error('Error al copiar:', err)
    }
  }

  if (!open) return null
  return (
    <div
      className="fixed inset-0 flex items-center justify-center backdrop-blur-sm"
      style={{ 
        pointerEvents: 'auto',
        zIndex: 999999,
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
      }}
    >
      <div
        className="rounded-2xl shadow-2xl max-w-lg w-full p-6 relative bg-white max-h-[90vh] overflow-y-auto mx-4"
        style={{
          backgroundImage: "url('/FondoCuadrito1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 999999,
        }}
      >
        <Button
          className="bg-stone-100 border-stone-600 text-stone-600 hover:bg-stone-50 rounded-full transform hover:scale-105 transition-all duration-300 absolute top-4 right-4"
          onClick={onClose}
          aria-label="Cerrar"
          style={{ zIndex: 999999 }}
        >
          ×
        </Button>

        <div className="space-y-6 pt-8">
          <h3 className="text-2xl font-bold text-stone-600 text-center">Datos Bancarios</h3>
          
          {/* Cuenta A */}
          <div className="bg-white/80 rounded-xl p-4 border border-stone-200">
            <h4 className="text-lg font-semibold text-stone-700 mb-3">🇺🇾 URU - Dólares</h4>
            <div className="space-y-2 text-stone-600">
              <p><span className="font-medium">Banco:</span> Banco Itaú</p>
              <p><span className="font-medium">Titular:</span> Sofia Plager</p>
              <div className="flex items-center justify-between">
                <p><span className="font-medium">Cuenta:</span> 2872690</p>
                <Button
                  size="sm"
                  variant="outline"
                  className="ml-2 h-8 w-8 p-0 bg-stone-50 border-stone-300 hover:bg-stone-100"
                  onClick={() => copyToClipboard('2872690', 'uruguay')}
                >
                  {copiedCBU === 'uruguay' ? (
                    <Check className="h-3 w-3 text-green-600" />
                  ) : (
                    <Copy className="h-3 w-3 text-stone-600" />
                  )}
                </Button>
              </div>
            </div>
          </div>

          {/* Cuenta B */}
          <div className="bg-white/80 rounded-xl p-4 border border-stone-200">
            <h4 className="text-lg font-semibold text-stone-700 mb-3">🇦🇷 ARG - Pesos y Dólares</h4>
            <div className="space-y-2 text-stone-600">
              <p><span className="font-medium">Banco:</span> Santander</p>
              <p><span className="font-medium">Titular:</span> Diego Serra</p>
              <div className="flex items-center justify-between">
                <p><span className="font-medium">Alias:</span> SERRA.D</p>
                <Button
                  size="sm"
                  variant="outline"
                  className="ml-2 h-8 w-8 p-0 bg-stone-50 border-stone-300 hover:bg-stone-100"
                  onClick={() => copyToClipboard('SERRA.D', 'argentina')}
                >
                  {copiedCBU === 'argentina' ? (
                    <Check className="h-3 w-3 text-green-600" />
                  ) : (
                    <Copy className="h-3 w-3 text-stone-600" />
                  )}
                </Button>
              </div>
            </div>
          </div>

          <p className="text-stone-700 text-sm text-center flex items-center justify-center">
              Si querés hacernos un regalo en efectivo, podes dárselo ese día a Diego, el papá de Agus.
          </p>
          
          <p className="text-stone-700 text-sm text-center mt-6">
            ¡Muchas gracias por acompañarnos en este momento tan especial!
          </p>
          
        </div>
      </div>
    </div>
  )
}

function getTimeLeft() {
  const target = new Date('2025-08-30T17:00:00-03:00').getTime()
  const now = new Date().getTime()
  const diff = target - now

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)
  return { days, hours, minutes, seconds }
}

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft())

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex justify-center mb-10">
      <div className="flex gap-6 bg-white/80 backdrop-blur rounded-2xl shadow-lg px-8 py-4 border border-stone-200">
        {[
          { label: 'DÍAS', value: timeLeft.days },
          { label: 'HORAS', value: timeLeft.hours },
          { label: 'MIN', value: timeLeft.minutes },
          { label: 'SEG', value: timeLeft.seconds },
        ].map((item, idx) => (
          <div key={item.label} className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold text-stone-600 poltawski-nowy animate-fade-in-up">
              {String(item.value).padStart(2, '0')}
            </span>
            <span className="text-xs md:text-sm text-stone-500 tracking-widest font-semibold poltawski-nowy mt-1">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function WeddingPage() {
  const heroRef = useRef<HTMLElement>(null)
  const whereRsvpRef = useRef<HTMLElement>(null)
  const whereRef = useRef<HTMLDivElement>(null)
  const rsvpRef = useRef<HTMLDivElement>(null)
  const dressGiftsInstagramRef = useRef<HTMLElement>(null)
  const dressCodeRef = useRef<HTMLDivElement>(null)
  const giftsRef = useRef<HTMLDivElement>(null)
  const instagramRef = useRef<HTMLDivElement>(null)
  const galleryRef = useRef<HTMLElement>(null)

  // Estados para los modales - Movidos al nivel superior
  const [dressCodeModalOpen, setDressCodeModalOpen] = useState(false)
  const [bankDataModalOpen, setBankDataModalOpen] = useState(false)

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
      whereRsvpRef.current,
      dressGiftsInstagramRef.current,
      galleryRef.current,
    ]
    sections.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="bg-top sm:bg-cover min-h-screen">
      {/* Modales a nivel superior para evitar problemas de z-index */}
      <DressCodeInspoModal open={dressCodeModalOpen} onClose={() => setDressCodeModalOpen(false)} />
      <BankDataModal open={bankDataModalOpen} onClose={() => setBankDataModalOpen(false)} />

      {/* Hero Section */}
      <section
        ref={heroRef}
        style={{
          backgroundImage: "url('/Fondo4.webp')",
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "repeat",
        }}
        className="min-h-screen flex flex-col items-center justify-center px-4 text-center opacity-0 translate-y-8 transition-all duration-1000 ease-out relative"
      >
        <div className="max-w-4xl mx-auto relative z-0">
          <div className="w-32 h-1 bg-gradient-to-r from-stone-400 to-neutral-600 mx-auto mb-8 animate-expand"></div>
          <h1 className="text-6xl md:text-8xl font-bold text-stone-500 mb-4 poltawski-nowy animate-fade-in-up [font-variant-ligatures:none]">
            Sofi <span className="text-5xl text-stone-600">&</span> Agus
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-stone-400 to-neutral-600 mx-auto mb-8 animate-expand"></div>
          <h2 className="text-2xl md:text-2xl text-stone-700 mb-12 tracking-wider font-light animate-fade-in-up delay-300 poltawski-nowy">
            ¡NOS CASAMOS!
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-500">
            <RSVPDialog triggerClassName="bg-gradient-to-r from-stone-600 to-neutral-700 hover:from-stone-700 hover:to-neutral-800 text-white px-12 py-4 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 mb-16 text-[1.2rem] animate-bounce-gentle poltawski-nowy" />
          </div>
        </div>
        {/* Countdown debajo del Hero */}
        <Countdown />
      </section>

      {/* Where & RSVP Combined Section */}
      <section
        ref={whereRsvpRef}
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url('/Fondo12.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          animation: "gradientBG 12s ease infinite",
        }}
        className="opacity-0 translate-y-8 transition-all duration-1000 ease-out"
      >
        {/* Where Sub-section */}
        <div
          ref={whereRef}
          className="pt-20 pb-8 px-4"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl mb-4 animate-fade-in-up text-stone-500 poltawski-nowy">
                ¿DÓNDE Y CUÁNDO?
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-stone-400 to-neutral-600 mx-auto animate-expand"></div>
            </div>
            {/* Solo un cuadro, centrado y más ancho */}
            <div className="flex justify-center">
              <div
                className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-stone-100 transform hover:scale-105 transition-all hover:shadow-2xl animate-slide-in-left max-w-2xl w-full"
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
                  <p className="text-lg">Ceremonia: 17 h | Fiesta: 18.30 h</p>
                  <p className="text-lg font-medium">Salón: Espacio PK Campo</p>
                  <p className="text-stone-600">Capilla del Señor, Prov. de Bs As</p>
                </div>
                <div className="flex justify-center">
                  <a
                    href="https://www.google.com/maps/place/Espacio+PK+Campo/@-34.3582413,-59.1240167,17z/data=!3m1!4b1!4m6!3m5!1s0x95bb83bc2e574ef5:0xce69798a50b7e448!8m2!3d-34.3582413!4d-59.1214364!16s%2Fg%2F11rnd2kl2v?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="bg-stone-100 border-stone-600 text-stone-600 hover:bg-stone-50 rounded-full transform hover:scale-105 transition-all duration-300"
                    >
                      <MapPin className="w-4 h-4 mr-2" />
                      Ver ubicación
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RSVP Sub-section */}
        <div
          ref={rsvpRef}
          className="pt-8 pb-20 px-4"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl poltawski-nowy text-stone-600 mb-6 animate-fade-in-up ">
              ¡Nos encantaría compartirlo con vos!
            </h2>
            <p className="text-lg text-stone-800 poltawski-nowy mb-12 max-w-2xl mx-auto animate-fade-in-up delay-200">
              Confirmá asistencia e indicanos si necesitás transporte desde CABA
            </p>

            <RSVPDialog triggerClassName="bg-gradient-to-r from-stone-600 to-neutral-700 hover:from-stone-700 hover:to-neutral-800 text-white px-12 py-4 rounded-full shadow-xl transform hover:scale-105 transition-all text-lg duration-300 mb-4 animate-bounce-gentle poltawski-nowy" />
          </div>
        </div>
      </section>

      {/* Dress Code, Gifts & Instagram Combined Section */}
      <section
        ref={dressGiftsInstagramRef}
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url('/Fondo13.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
        className="opacity-0 translate-y-8 transition-all duration-1000 ease-out"
      >
        {/* Dress Code Sub-section */}
        <div
          ref={dressCodeRef}
          className="py-16 px-4"
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center">
              <div
                className="bg-white/90 backdrop-blur-sm rounded-3xl p-4 sm:p-5 shadow-xl border border-stone-100 max-w-md w-full mx-auto flex flex-col items-center relative"
                style={{
                  backgroundImage: "url('/FondoCuadrito1.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Shirt className="w-7 h-7 text-stone-600 justify-center" />
                <div className="h-3" />
                <h3 className="text-2xl font-bold text-stone-600  mb-4">Dress Code</h3>
                <p className="text-stone-700  mb-4 text-center">
                  Empezamos formal y terminamos cómodos
                </p>
                <Button
                  className="bg-stone-100 border border-stone-600 text-stone-600 hover:bg-stone-50 rounded-full transform hover:scale-105 transition-all duration-300"
                  onClick={() => setDressCodeModalOpen(true)}
                >
                  <Lightbulb className="w-4 h-4 mr-2" />
                  Ver inspiración
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Gifts Sub-section */}
        <div
          ref={giftsRef}
          className="py-16 px-4"
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-neutral-100 transform hover:scale-105 transition-all duration-500 animate-slide-in-right max-w-md w-full"
                    style={{
                    backgroundImage: "url('/FondoCuadrito1.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
              >
                <Gift className="w-7 h-7 text-stone-600 justify-center mx-auto" />
                <div className="h-3" />
                <h3 className="text-2xl font-bold text-stone-600 mb-4 text-center">Quiero regalar</h3>
                
                <p className="text-stone-700  mb-4 text-center">
                  Si querés hacernos un regalo podés colaborar con nuestra luna de miel
                </p>
                <Button
                  className="bg-stone-100 border border-stone-600 text-stone-600 hover:bg-stone-50 rounded-full transform hover:scale-105 transition-all duration-300"
                  onClick={() => setBankDataModalOpen(true)}
                >
                  <BadgeDollarSign className="w-4 h-4 mr-2" />
                  Ver datos bancarios
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Instagram Sub-section */}
        <div
          ref={instagramRef}
          className="py-16 px-4"
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-stone-100 transform hover:scale-105 transition-all duration-500 max-w-md mx-auto"
              style={{
                backgroundImage: "url('/FondoCuadrito1.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Instagram className="w-8 h-8 text-stone-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-stone-600 mb-4">Instagram</h3>
              <p className="text-stone-700 mb-6 text-center">
                ¡Seguinos en Instagram y viví la previa con nosotros!
              </p>
              <a
                href="https://www.instagram.com/wedding_cruzando_el_charco"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className="bg-stone-100 border border-stone-600 text-stone-600 hover:bg-stone-50 rounded-full transform hover:scale-105 transition-all duration-300"
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  @wedding_cruzando_el_charco
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section
        ref={galleryRef}
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url('/Fondo10.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
        className="py-20 px-4 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4 animate-fade-in-up text-stone-500 poltawski-nowy">
              ¡TE ESPERAMOS!
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-stone-400 to-neutral-600 mx-auto animate-expand"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="aspect-square rounded-3xl shadow-lg transform hover:scale-105 transition-all duration-500 group cursor-pointer animate-fade-in-up overflow-hidden"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <img
                  src={`/Pareja${i}.jpeg`}
                  alt={`Pareja ${i}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  style={i === 5 ? { objectPosition: 'center 70%' } : i === 6 ? { objectPosition: 'center 70%' } : {}}
                />
              </div>
            ))}
          </div>

          {/* Botón de RSVP al final de la galería */}
          <div className="text-center">
            <RSVPDialog triggerClassName="bg-gradient-to-r from-stone-600 to-neutral-700 hover:from-stone-700 hover:to-neutral-800 text-white px-12 py-4 rounded-full shadow-xl transform hover:scale-105 transition-all text-lg duration-300 animate-bounce-gentle poltawski-nowy" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center bg-stone-500 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-3xl font-serif mb-4 animate-fade-in-up">
            Sofi & Agus
          </h3>
          <p className="text-stone-200 mb-4 animate-fade-in-up delay-100 poltawski-nowy">
            30 de Agosto, 2025
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-stone-400 to-neutral-400 mx-auto animate-expand"></div>
          <p className="text-stone-200 mt-6 animate-fade-in-up delay-200 poltawski-nowy">
            ¡Nos vemos en nuestro casamiento!
          </p>
        </div>
      </footer>
    </div>
  )
}
