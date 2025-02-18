import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Phone, Mail, MessageSquare, ArrowRight, Facebook, Instagram, Linkedin, Globe2, BarChart3, PenTool } from 'lucide-react';

const WhatsAppBubbleComponent = () => (
  <a
    href="https://wa.me/56912345678"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 bg-white p-2 rounded-full shadow-lg hover:scale-110 transition-all z-50 flex items-center justify-center"
    title="Contactar al Director"
  >
    <img 
      src="/whatsapp-logo.png" 
      alt="WhatsApp"
      className="w-10 h-10"
    />
    <span className="absolute -top-2 -right-2 bg-[rgb(234,38,48)] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">1</span>
  </a>
);

const HeaderComponent = () => (
  <header className="fixed w-full bg-[rgb(41,77,154)] shadow-md z-50 pt-1 pb-1"> {/* Reducir el padding */}
    <nav className="container mx-auto px-8"> 
      <div className="flex items-center justify-between h-full">
        <Link to="/" className="flex items-center h-full py-2">
          <img 
            src="/ebt-media-logo.png" 
            alt="EBT Media Logo"
            className="h-24 w-auto object-contain" // Mantener el tamaño del logo
          />
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-white hover:text-gray-200 font-medium">Inicio</Link>
          <Link to="/about" className="text-white hover:text-gray-200 font-medium">Nosotros</Link>
          <Link to="/services" className="text-white hover:text-gray-200 font-medium">Servicios</Link>
          <Link to="/contact" className="text-white hover:text-gray-200 font-medium">Contacto</Link>
        </div>
        <a 
          href="https://wa.me/56912345678" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[rgb(48,118,74)] text-white px-5 py-2.5 rounded-lg font-medium flex items-center space-x-2 hover:bg-[rgb(38,108,64)] transition-colors shadow-md"
        >
          <MessageSquare className="h-5 w-5 text-white" />
          <span>Chatear</span>
        </a>
      </div>
    </nav>
  </header>
);

const FooterComponent = () => (
  <footer className="bg-[rgb(41,77,154)] text-white py-12">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center space-x-2 mb-6">
            <img 
              src="/ebt-media-logo.png" 
              alt="EBT Media Logo" 
              className="h-70 w-auto"
            />
          </div>
          <p className="text-gray-300 mb-6">
            Transformamos tu presencia digital con estrategias efectivas y resultados medibles.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-6">Servicios</h3>
          <ul className="space-y-4">
            <li>
              <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                Publicidad Digital
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                Desarrollo Web
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                Asesoría en Marketing
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-6">Enlaces</h3>
          <ul className="space-y-4">
            <li>
              <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                Nosotros
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-6">Contacto</h3>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-gray-300" />
              <span className="text-gray-300">+56 9 1234 5678</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-gray-300" />
              <span className="text-gray-300">contacto@ebtmedia.cl</span>
            </li>
            <li className="flex items-center space-x-3">
              <MessageSquare className="h-5 w-5 text-gray-300" />
              <a 
                href="https://wa.me/56912345678"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
        <p>&copy; {new Date().getFullYear()} EBT Media. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
);

const HomeComponent = () => (
  <div>
    <section className="pt-32 pb-24 bg-[rgb(254,255,254)] text-[rgb(41,77,154)] relative group">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 transition-opacity group-hover:opacity-65"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2070")',
          opacity: 0.3
        }}
      ></div>
      <div className="container mx-auto px-6 relative z-10 mt-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-8 leading-tight">Transforma tu Presencia Digital</h1>
          <p className="text-xl mb-10">Ayudamos a empresas a crecer a través de soluciones estratégicas de marketing digital.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="bg-[rgb(234,38,48)] text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-[rgb(244,142,60)] transition-colors shadow-lg">
              Comenzar
            </Link>
            <a 
              href="https://wa.me/56912345678" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[rgb(48,118,74)] text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-[rgb(38,108,64)] transition-colors shadow-lg flex items-center space-x-2"
            >
              <MessageSquare className="h-5 w-5" />
              <span>Chatear</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section className="py-24 bg-[rgb(254,255,254)]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-[rgb(41,77,154)]">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all group relative overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center z-0 transition-opacity opacity-20 group-hover:opacity-50"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015")'
              }}
            ></div>
            <div className="relative z-10">
              <Globe2 className="h-14 w-14 text-[rgb(41,77,154)] mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-[rgb(41,77,154)]">Publicidad Digital</h3>
              <p className="text-[rgba(254,255,254,255)]-600 mb-6">Campañas estratégicas en Google y Meta para alcanzar a tu público objetivo.</p>
              <Link to="/services" className="text-[rgb(41,77,154)] flex items-center space-x-2 hover:text-[rgb(41,77,154)] font-medium">
                <span>Ver Más</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all group relative overflow-hidden">
            <div 
               className="absolute inset-0 bg-cover bg-center z-0 transition-opacity opacity-20 group-hover:opacity-50"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2070")'
              }}
            ></div>
            <div className="relative z-10">
              <PenTool className="h-14 w-14 text-[rgb(41,77,154)] mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-[rgb(41,77,154)]">Desarrollo Web</h3>
              <p className="text-[rgba(254,255,254,255)]-600 mb-6">Sitios web personalizados construidos en un mes, diseñados para convertir visitantes en clientes.</p>
              <Link to="/services" className="text-[rgb(41,77,154)] flex items-center space-x-2 hover:text-[rgb(41,77,154)] font-medium">
                <span>Ver Más</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all group relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 transition-opacity opacity-20 group-hover:opacity-50" // Cambiar la opacidad inicial a 100%
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070")'
          }}
        ></div>
        <div className="relative z-10">
          <BarChart3 className="h-14 w-14 text-[rgb(41,77,154)] mb-6" />
          <h3 className="text-2xl font-bold mb-4 text-[rgb(41,77,154)]">Asesoría en Marketing</h3>
          <p className="text-black-600 mb-6">Orientación experta para ayudarte a tomar decisiones informadas de marketing.</p>
          <Link to="/services" className="text-[rgb(41,77,154)] flex items-center space-x-2 hover:text-[rgb(41,77,154)] font-medium">
            <span>Ver Más</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
</div>
        </div>
      </div>
    </section>

    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070")'
        }}
      ></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[rgb(41,77,154)]">¿Por qué elegirnos?</h2>
            <p className="text-gray-700 mb-8">Combinamos estrategia, creatividad y tecnología para impulsar el crecimiento de tu negocio en el mundo digital.</p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full bg-[rgb(234,38,48)] flex items-center justify-center text-white text-sm">✓</div>
                <span className="text-gray-700">Estrategias personalizadas para cada cliente</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full bg-[rgb(234,38,48)] flex items-center justify-center text-white text-sm">✓</div>
                <span className="text-gray-700">Equipo experto y dedicado</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full bg-[rgb(234,38,48)] flex items-center justify-center text-white text-sm">✓</div>
                <span className="text-gray-700">Resultados medibles y transparentes</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000" 
              alt="Equipo trabajando" 
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <p className="text-[rgb(41,77,154)] font-bold text-xl">+500</p>
              <p className="text-gray-600 text-sm">Clientes Satisfechos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const AboutComponent = () => (
  <div className="pt-32 pb-24 bg-[rgb(254,255,254)] text-[rgb(41,77,154)]">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto mt-8">
        <h1 className="text-4xl font-bold mb-10 text-[rgb(41,77,154)] text-center">Sobre EBT Media</h1>
        <div className="relative mb-12">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
            alt="Reunión de equipo" 
            className="w-full rounded-xl shadow-lg"
          />
          <div className="absolute -bottom-6 right-6 bg-white p-4 rounded-lg shadow-lg">
            <p className="text-[rgb(41,77,154)] font-bold">3+ Años</p>
            <p className="text-gray-600 text-sm">de Experiencia</p>
          </div>
        </div>
        <div className="prose max-w-none">
          <p className="text-lg text-[rgb(41,77,154)] mb-8 leading-relaxed">
            Durante los últimos 3 años, EBT Media ha estado a la vanguardia de la innovación en marketing digital, 
            ayudando a empresas a alcanzar sus objetivos de crecimiento a través de soluciones digitales estratégicas.
          </p>
          <p className="text-lg text-[rgb(41,77,154)] mb-12 leading-relaxed">
            Nuestro equipo de profesionales experimentados combina creatividad con análisis de datos para 
            entregar resultados excepcionales a nuestros clientes. Nos enorgullecemos de mantenernos adelante 
            en las tendencias de la industria y mantener relaciones sólidas con nuestros clientes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <img 
              src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800" 
              alt="Equipo colaborando" 
              className="rounded-lg shadow-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" 
              alt="Análisis de datos" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <h2 className="text-3xl font-bold mt-16 mb-10 text-[rgb(41,77,154)]">Nuestros Valores</h2>
          <ul className="space-y-6">
            <li className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[rgb(41,77,154)] flex items-center justify-center text-white">✓</div>
              <div>
                <h3 className="text-xl font-bold text-[rgb(41,77,154)] mb-2">Innovación</h3>
                <p className="text-[rgb(41,77,154)]">Constantemente exploramos nuevas tecnologías y estrategias para mantener a nuestros clientes a la vanguardia.</p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[rgb(41,77,154)] flex items-center justify-center text-white">✓</div>
              <div>
                <h3 className="text-xl font-bold text-[rgb(41,77,154)] mb-2">Transparencia</h3>
                <p className="text-[rgb(41,77,154)]">Creemos en la comunicación abierta y los resultados medibles.</p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[rgb(41,77,154)] flex items-center justify-center text-white">✓</div>
              <div>
                <h3 className="text-xl font-bold text-[rgb(41,77,154)] mb-2">Éxito del Cliente</h3>
                <p className="text-[rgb(41,77,154)]">Tu crecimiento es nuestra prioridad. Medimos nuestro éxito a través de tus logros.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const ServicesComponent = () => (
  <div className="pt-32 pb-24 bg-[rgb(254,255,254)] text-[rgb(41,77,154)]">
    <div className="container mx-auto px-6 mt-8">
      <h1 className="text-4xl font-bold text-center mb-16 text-[rgb(41,77,154)]">Nuestros Servicios</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white p-10 rounded-xl shadow-lg hover:shadow-xl transition-all relative overflow-hidden group">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-65 transition-all duration-300"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&q=80&w=1000")'
            }}
          ></div>
          <div className="relative z-10 group-hover:-translate-y-1 transition-transform duration-300">
            <Globe2 className="h-16 w-16 text-[rgb(41,77,154)] mb-6 group-hover:text-[rgb(234,38,48)] transition-colors duration-300" />
            <h2 className="text-2xl font-bold mb-6 text-[rgb(41,77,154)] group-hover:text-[rgb(234,38,48)] transition-colors duration-300">Publicidad Digital</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed group-hover:text-gray-900 transition-colors duration-300" style={{ textShadow: '0 0 1px white, 0 0 2px white' }}>
              Campañas estratégicas en Google y Meta diseñadas para alcanzar a tu público objetivo 
              y generar resultados medibles.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center space-x-3 group-hover:translate-x-1 transition-transform duration-300">
                <div className="w-5 h-5 rounded-full bg-[rgb(41,77,154)] group-hover:bg-[rgb(234,38,48)] flex items-center justify-center text-white text-xs transition-colors duration-300">✓</div>
                <span className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors duration-300" style={{ textShadow: '0 0 1px white, 0 0 2px white' }}>Gestión de Google Ads</span>
              </li>
              <li className="flex items-center space-x-3 group-hover:translate-x-1 transition-transform duration-300">
                <div className="w-5 h-5 rounded-full bg-[rgb(41,77,154)] group-hover:bg-[rgb(234,38,48)] flex items-center justify-center text-white text-xs transition-colors duration-300">✓</div>
                <span className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors duration-300" style={{ textShadow: '0 0 1px white, 0 0 2px white' }}>Anuncios en Facebook e Instagram</span>
              </li>
              <li className="flex items-center space-x-3 group-hover:translate-x-1 transition-transform duration-300">
                <div className="w-5 h-5 rounded-full bg-[rgb(41,77,154)] group-hover:bg-[rgb(234,38,48)] flex items-center justify-center text-white text-xs transition-colors duration-300">✓</div>
                <span className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors duration-300" style={{ textShadow: '0 0 1px white, 0 0 2px white' }}>Campañas de Retargeting</span>
              </li>
            </ul>
            <Link 
              to="/contact" 
              className="inline-block bg-[rgb(234,38,48)] text-white px-8 py-3.5 rounded-lg hover:bg-[rgb(244,142,60)] transition-colors shadow-md font-medium"
            >
              Comenzar
            </Link>
          </div>
        </div>
        
        <div className="bg-white p-10 rounded-xl shadow-lg hover:shadow-xl transition-all relative overflow-hidden group">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-65 transition-all duration-300"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1000")'
            }}
          ></div>
          <div className="relative z-10 group-hover:-translate-y-1 transition-transform duration-300">
            <PenTool className="h-16 w-16 text-[rgb(41,77,154)] mb-6 group-hover:text-[rgb(234,38,48)] transition-colors duration-300" />
            <h2 className="text-2xl font-bold mb-6 text-[rgb(41,77,154)] group-hover:text-[rgb(234,38,48)] transition-colors duration-300">Desarrollo Web</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed group-hover:text-gray-900 transition-colors duration-300" style={{ textShadow: '0 0 1px white, 0 0 2px white' }}>
              Sitios web personalizados construidos en un mes, diseñados para convertir visitantes 
              en clientes y mostrar tu marca profesionalmente.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center space-x-3 group-hover:translate-x-1 transition-transform duration-300">
                <div className="w-5 h-5 rounded-full bg-[rgb(41,77,154)] group-hover:bg-[rgb(234,38,48)] flex items-center justify-center text-white text-xs transition-colors duration-300">✓</div>
                <span className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors duration-300" style={{ textShadow: '0 0 1px white, 0 0 2px white' }}>Diseño Responsivo</span>
              </li>
              <li className="flex items-center space-x-3 group-hover:translate-x-1 transition-transform duration-300">
                <div className="w-5 h-5 rounded-full bg-[rgb(41,77,154)] group-hover:bg-[rgb(234,38,48)] flex items-center justify-center text-white text-xs transition-colors duration-300">✓</div>
                <span className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors duration-300" style={{ textShadow: '0 0 1px white, 0 0 2px white' }}>Optimización SEO</span>
              </li>
              <li className="flex items-center space-x-3 group-hover:translate-x-1 transition-transform duration-300">
                <div className="w-5 h-5 rounded-full bg-[rgb(41,77,154)] group-hover:bg-[rgb(234,38,48)] flex items-center justify-center text-white text-xs transition-colors duration-300">✓</div>
                <span className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors duration-300" style={{ textShadow: '0 0 1px white, 0 0 2px white' }}>Sistema de Gestión de Contenido</span>
              </li>
            </ul>
            <Link 
              to="/contact" 
              className="inline-block bg-[rgb(234,38,48)] text-white px-8 py-3.5 rounded-lg hover:bg-[rgb(244,142,60)] transition-colors shadow-md font-medium"
            >
              Comenzar
            </Link>
          </div>
        </div>

        <div className="bg-white p-10 rounded-xl shadow-lg hover:shadow-xl transition-all md:col-span-2 relative overflow-hidden group">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-65 transition-all duration-300"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=2000")'
            }}
          ></div>
          <div className="relative z-10 group-hover:-translate-y-1 transition-transform duration-300">
            <BarChart3 className="h-16 w-16 text-[rgb(41,77,154)] mb-6 group-hover:text-[rgb(234,38,48)] transition-colors duration-300" />
            <h2 className="text-2xl font-bold mb-6 text-[rgb(41,77,154)] group-hover:text-[rgb(234,38,48)] transition-colors duration-300">Asesoría en Marketing</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed group-hover:text-gray-900 transition-colors duration-300" style={{ textShadow: '0 0 1px white, 0 0 2px white' }}>
              Orientación experta para ayudarte a tomar decisiones informadas de marketing y desarrollar 
              estrategias efectivas para el crecimiento de tu negocio.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center space-x-3 group-hover:translate-x-1 transition-transform duration-300">
                <div className="w-5 h-5 rounded-full bg-[rgb(41,77,154)] group-hover:bg-[rgb(234,38,48)] flex items-center justify-center text-white text-xs transition-colors duration-300">✓</div>
                <span className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors duration-300" style={{ textShadow: '0 0 1px white, 0 0 2px white' }}>Desarrollo de Estrategias</span>
              </li>
              <li className="flex items-center space-x-3 group-hover:translate-x-1 transition-transform duration-300">
                <div className="w-5 h-5 rounded-full bg-[rgb(41,77,154)] group-hover:bg-[rgb(234,38,48)] flex items-center justify-center text-white text-xs transition-colors duration-300">✓</div>
                <span className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors duration-300" style={{ textShadow: '0 0 1px white, 0 0 2px white' }}>Análisis de Mercado</span>
              </li>
              <li className="flex items-center space-x-3 group-hover:translate-x-1 transition-transform duration-300">
                <div className="w-5 h-5 rounded-full bg-[rgb(41,77,154)] group-hover:bg-[rgb(234,38,48)] flex items-center justify-center text-white text-xs transition-colors duration-300">✓</div>
                <span className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors duration-300" style={{ textShadow: '0 0 1px white, 0 0 2px white' }}>Optimización de Rendimiento</span>
              </li>
            </ul>
            <Link 
              to="/contact" 
              className="inline-block bg-[rgb(234,38,48)] text-white px-8 py-3.5 rounded-lg hover:bg-[rgb(244,142,60)] transition-colors shadow-md font-medium"
            >
              Comenzar
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ContactComponent = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="pt-32 pb-24 bg-[rgb(254,255,254)] text-[rgb(41,77,154)]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mt-8">
          <h1 className="text-4xl font-bold text-center mb-16 text-[rgb(41,77,154)]">Contáctanos</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-[rgb(41,77,154)]">Ponte en Contacto</h2>
              <p className="text-[rgb(41,77,154)] mb-10 leading-relaxed">
                ¿Listo para llevar tu presencia digital al siguiente nivel? Contáctanos hoy 
                y conversemos sobre cómo podemos ayudar a tu empresa a crecer.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-[rgb(41,77,154)] bg-opacity-10 rounded-xl flex items-center justify-center">
                    <Phone className="h-7 w-7 text-[rgb(41,77,154)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[rgb(41,77,154)] text-lg mb-1">Teléfono</h3>
                    <p className="text-[rgb(41,77,154)]">+56 9 1234 5678</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-[rgb(41,77,154)] bg-opacity-10 rounded-xl flex items-center justify-center">
                    <Mail className="h-7 w-7 text-[rgb(41,77,154)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[rgb(41,77,154)] text-lg mb-1">Correo</h3>
                    <p className="text-[rgb(41,77,154)]">contacto@ebtmedia.cl</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-[rgb(41,77,154)] bg-opacity-10 rounded-xl flex items-center justify-center">
                    <MessageSquare className="h-7 w-7 text-[rgb(41,77,154)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[rgb(41,77,154)] text-lg mb-1">WhatsApp</h3>
                    <a 
                      href="https://wa.me/56912345678"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[rgb(41,77,154)] hover:text-[rgb(38,108,64)] transition-colors"
                    >
                      Escríbenos por WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800" 
                  alt="Equipo de soporte" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
            
            <div>
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(41,77,154)] focus:border-transparent"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Correo
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(41,77,154)] focus:border-transparent"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(41,77,154)] focus:border-transparent"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(41,77,154)] focus:border-transparent"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[rgb(234,38,48)] text-white px-6 py-3.5 rounded-lg hover:bg-[rgb(244,142,60)] transition-colors shadow-md font-medium"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[rgb(254,255,254)]">
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/about" element={<AboutComponent />} />
          <Route path="/services" element={<ServicesComponent />} />
          <Route path="/contact" element={<ContactComponent />} />
        </Routes>
        <FooterComponent />
        <WhatsAppBubbleComponent />
      </div>
    </Router>
  );
}

export default App;