import React, { useState, useEffect } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroSlides = [
    "Agentes Autónomos",
    "Sistemas RAG",
    "Automatización Profunda",
    "Educación con IA",
    "Desarrollo a la Medida",
    "Software Propietario"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#020202] text-slate-50 font-sans overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-100 scroll-smooth">

      {/* ANIMACIONES NATIVAS */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.05); }
        }
        @keyframes textSlide {
          0% { opacity: 0; transform: translateY(10px); }
          10% { opacity: 1; transform: translateY(0); }
          90% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-10px); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .animate-pulse-glow {
          animation: pulseGlow 8s infinite ease-in-out;
        }
        .animate-text-slide {
          animation: textSlide 3s cubic-bezier(0.16, 1, 0.3, 1) infinite;
        }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      {/* BACKGROUND TEXTURE */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMjRoMjRWMGgtMjR6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgMjMuNWgyNFYwbS0yMy41IDB2MjQiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')]"></div>

      {/* NAVEGACIÓN */}
      <nav className="fixed w-full z-50 top-0 bg-[#020202]/90 backdrop-blur-3xl border-b border-white/[0.05] animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 z-50 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full shadow-[0_0_12px_rgba(34,211,238,0.9)]"></div>
            <span className="text-2xl font-black tracking-tighter text-white drop-shadow-sm">NSG</span>
          </div>
          <div className="hidden lg:flex items-center space-x-10 text-[11px] font-bold tracking-[0.2em] uppercase text-slate-400">
            <a href="#tesis" className="hover:text-cyan-300 transition-colors">El Problema</a>
            <a href="#portafolio" className="hover:text-cyan-300 transition-colors">Portafolio Operativo</a>
            <a href="#metodo" className="hover:text-cyan-300 transition-colors">Método</a>
            <a href="#firma" className="hover:text-cyan-300 transition-colors">La Firma</a>
          </div>
          <div className="hidden lg:flex items-center">
            <a href="#diagnostico" className="bg-white text-black px-7 py-3 rounded-full text-sm font-bold tracking-wide hover:bg-slate-200 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(103,232,249,0.4)] flex items-center gap-2">
              Solicitar Diagnóstico
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
          <button className="lg:hidden relative z-50 p-2 text-white focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        <div className={`lg:hidden fixed inset-0 bg-[#020202]/95 backdrop-blur-2xl transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'} h-screen w-full pt-28 px-6 flex flex-col`}>
          <div className="flex flex-col space-y-8 text-2xl font-bold text-white text-center">
            <a href="#tesis" onClick={() => setIsMenuOpen(false)} className="hover:text-cyan-400">El Problema</a>
            <a href="#portafolio" onClick={() => setIsMenuOpen(false)} className="hover:text-cyan-400">Portafolio Operativo</a>
            <a href="#metodo" onClick={() => setIsMenuOpen(false)} className="hover:text-cyan-400">Método</a>
            <a href="#firma" onClick={() => setIsMenuOpen(false)} className="hover:text-cyan-400">La Firma</a>
          </div>
          <div className="mt-auto pb-20">
            <a href="#diagnostico" onClick={() => setIsMenuOpen(false)} className="w-full bg-white text-black px-6 py-4 rounded-xl text-base font-bold hover:bg-slate-200 transition-all flex items-center justify-center gap-2">
              Solicitar Diagnóstico
            </a>
          </div>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <section className="relative pt-40 md:pt-52 pb-20 md:pb-24 px-6 flex flex-col items-center justify-center text-center z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150vw] md:w-[1000px] h-[400px] md:h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-600/30 via-emerald-600/10 to-transparent pointer-events-none blur-[80px] md:blur-[120px] animate-pulse-glow"></div>
        <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-center">
          <div className="inline-flex items-center space-x-3 border border-white/[0.08] rounded-full px-5 py-2 mb-8 bg-white/[0.02] backdrop-blur-xl animate-fade-in-up">
            <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-slate-300">NSG · Firma de Tecnología Aplicada</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5rem] font-black tracking-tighter mb-6 leading-[1.1] text-white animate-fade-in-up delay-100 flex flex-col items-center">
            <span>Escalamos tu empresa con</span>
            <span key={currentSlide} className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-emerald-200 to-cyan-400 animate-text-slide block h-[1.2em] overflow-visible drop-shadow-[0_2px_15px_rgba(52,211,153,0.3)]">
              {heroSlides[currentSlide]}.
            </span>
          </h1>
          <p className="max-w-3xl mx-auto text-base md:text-xl text-slate-400 mb-12 leading-relaxed font-light animate-fade-in-up delay-200">
            <strong className="text-white font-medium">El límite de tu negocio no es la demanda, es la operación.</strong> Convertimos operaciones fragmentadas en sistemas inteligentes, conectados y accionables. Diseñamos la infraestructura exacta para que vendas mejor, operes sin fricción y escales con orden.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300 w-full sm:w-auto mb-16">
            <a href="#diagnostico" className="w-full sm:w-auto group relative inline-flex items-center justify-center px-10 py-5 text-sm md:text-base font-bold text-black bg-white rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_50px_rgba(103,232,249,0.4)]">
              <span className="relative z-10 flex items-center gap-3">
                Auditar mi Operación
                <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. LA TESIS */}
      <section id="tesis" className="py-20 md:py-32 bg-[#050505] relative z-10 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 text-white leading-[1.15]">
                Comprar más software <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-600">no resolverá el problema.</span>
              </h2>
              <div className="space-y-6 text-slate-400 text-base md:text-lg leading-relaxed font-light">
                <p>El error común al escalar es apilar herramientas genéricas. El resultado: datos fragmentados, información dispersa, equipos apagando incendios y prospectos que se enfrían por seguimiento inconsistente.</p>
                <div className="p-6 bg-white/[0.02] border-l-2 border-red-500/50 rounded-r-2xl">
                  <p className="text-white text-sm md:text-base font-medium">No puedes escalar sin contratar más personas si tus sistemas actuales están desconectados y dependen del trabajo manual.</p>
                </div>
                <p><strong className="text-white font-medium">NSG no es una agencia de automatización.</strong> Somos una firma que construye infraestructura. Fusionamos software a la medida, Agentes de IA y psicología cognitiva para crear un sistema propietario que tu equipo realmente use y que impacte directamente en tu margen.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-[#020202] border border-white/[0.08] p-8 rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                    <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" /></svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Desarrollo Custom & IA</h3>
                </div>
                <p className="text-sm text-slate-400 font-light leading-relaxed">Software diseñado sobre tus reglas de negocio y potenciado por IA que razona, extrae datos y ejecuta 24/7.</p>
              </div>
              <div className="bg-[#020202] border border-white/[0.08] p-8 rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                    <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" /></svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Psicología de Adopción</h3>
                </div>
                <p className="text-sm text-slate-400 font-light leading-relaxed">El software es inútil si el equipo no lo usa. Diseñamos el onboarding y la experiencia para garantizar cero fricción operativa.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PORTAFOLIO */}
      <section id="portafolio" className="py-20 md:py-32 bg-[#020202] relative z-10 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16 md:mb-20 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">Proyectos de NSG. <br className="md:hidden"/>Infraestructura Real.</h2>
            <p className="text-slate-400 text-base md:text-lg font-light max-w-3xl leading-relaxed">No nos limitamos a implementar tecnología. Diseñamos ecosistemas para integrarse a la operación y producir valor continuo en ventas, conocimiento y ejecución.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.05] rounded-[2rem] p-8 hover:bg-white/[0.05] transition-all duration-500 group">
              <h3 className="text-2xl font-bold mb-4 text-white">Agentes de IA y Ejecución</h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">Asistentes capaces de responder, clasificar y activar acciones reales dentro de una operación, conectados a datos corporativos.</p>
              <ul className="space-y-3 text-slate-300 text-sm font-light">
                <li className="flex items-start gap-2"><span className="text-cyan-400">✦</span> Asistente legal en Slack.</li>
                <li className="flex items-start gap-2"><span className="text-cyan-400">✦</span> Extracción OCR de contratos con Gemini Vision.</li>
                <li className="flex items-start gap-2"><span className="text-cyan-400">✦</span> Secretario IA para correos (Gmail/Outlook).</li>
              </ul>
            </div>
            <div className="bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.05] rounded-[2rem] p-8 hover:bg-white/[0.05] transition-all duration-500 group">
              <h3 className="text-2xl font-bold mb-4 text-white">Sistemas RAG & Conocimiento</h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">Bases vectoriales que permiten consultar manuales, leyes o procesos internos mediante lenguaje natural, centralizando el saber de la empresa.</p>
              <ul className="space-y-3 text-slate-300 text-sm font-light">
                <li className="flex items-start gap-2"><span className="text-cyan-400">✦</span> Bases de conocimiento (MongoDB Atlas & Supabase).</li>
                <li className="flex items-start gap-2"><span className="text-cyan-400">✦</span> Sistemas de consulta semántica corporativa.</li>
              </ul>
            </div>
            <div className="bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.05] rounded-[2rem] p-8 hover:bg-white/[0.05] transition-all duration-500 group">
              <h3 className="text-2xl font-bold mb-4 text-white">Automatización Operativa</h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">Conexión de APIs, CRMs, ERPs y flujos internos para reducir fricción, errores manuales y liberar al equipo de tareas robóticas.</p>
              <ul className="space-y-3 text-slate-300 text-sm font-light">
                <li className="flex items-start gap-2"><span className="text-cyan-400">✦</span> Integración Odoo ERP (Facturas, matching contable).</li>
                <li className="flex items-start gap-2"><span className="text-cyan-400">✦</span> Sincronización Meta Ads, Shopify y Airtable.</li>
                <li className="flex items-start gap-2"><span className="text-cyan-400">✦</span> Dashboards full-stack y monitoreo satelital.</li>
              </ul>
            </div>
            <div className="bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.05] rounded-[2rem] p-8 hover:bg-white/[0.05] transition-all duration-500 group">
              <h3 className="text-2xl font-bold mb-4 text-white">Sistemas Inmobiliarios</h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">Soluciones enfocadas en atención, calificación de prospectos, agendas y continuidad del proceso de venta para no perder leads.</p>
              <ul className="space-y-3 text-slate-300 text-sm font-light">
                <li className="flex items-start gap-2"><span className="text-emerald-400">✦</span> Calificación inteligente y bot multimodal.</li>
                <li className="flex items-start gap-2"><span className="text-emerald-400">✦</span> CRM autónomo y recordatorios duales (WhatsApp).</li>
                <li className="flex items-start gap-2"><span className="text-emerald-400">✦</span> Soporte al cierre con bases de conocimiento.</li>
              </ul>
            </div>
            <div className="bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.05] rounded-[2rem] p-8 hover:bg-white/[0.05] transition-all duration-500 group">
              <h3 className="text-2xl font-bold mb-4 text-white">Educación Personalizada IA</h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">Diseño de sistemas de aprendizaje inteligentes y accionables, soportados por tecnología y experiencia instruccional profunda.</p>
              <ul className="space-y-3 text-slate-300 text-sm font-light">
                <li className="flex items-start gap-2"><span className="text-emerald-400">✦</span> Transformación de PDFs/Cursos en entornos IA.</li>
                <li className="flex items-start gap-2"><span className="text-emerald-400">✦</span> Rutas formativas dinámicas y diseño instruccional.</li>
                <li className="flex items-start gap-2"><span className="text-emerald-400">✦</span> Copilotos educativos.</li>
              </ul>
            </div>
            <div className="bg-gradient-to-b from-white/[0.03] to-transparent border border-emerald-500/20 rounded-[2rem] p-8 hover:bg-white/[0.05] transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 blur-[50px] rounded-full group-hover:bg-emerald-500/20 transition-all"></div>
              <h3 className="text-2xl font-bold mb-4 text-white relative z-10">Productividad & Seguimiento</h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed mb-6 relative z-10">Ayudamos a personas y equipos a sostener objetivos utilizando IA y estructura de servicio con nuestro producto insignia: <strong>NSG Intelligence</strong>.</p>
              <ul className="space-y-3 text-slate-300 text-sm font-light relative z-10">
                <li className="flex items-start gap-2"><span className="text-emerald-400">✦</span> <strong>Horizon:</strong> Toma de notas inteligente y estructurada.</li>
                <li className="flex items-start gap-2"><span className="text-emerald-400">✦</span> <strong>Copilot:</strong> Seguimiento inteligente de accionables.</li>
                <li className="flex items-start gap-2"><span className="text-emerald-400">✦</span> Probado por académicos y directivos.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MÉTODO */}
      <section id="metodo" className="py-20 md:py-32 bg-[#050505] relative z-10 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">Ingeniería de Producción.</h2>
            <p className="text-slate-400 text-base md:text-lg font-light max-w-3xl mx-auto">No diseñamos sistemas solo para funcionar técnicamente. Los diseñamos para ser comprendidos, adoptados y sostenidos en la operación.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { n: "1", t: "Diagnóstico", d: "Auditoría del objetivo comercial y la fricción actual." },
              { n: "2", t: "Arquitectura", d: "Diseño estructural de datos, IA y lógica de negocio." },
              { n: "3", t: "Desarrollo", d: "Código custom y programación de agentes autónomos." },
              { n: "4", t: "Integración", d: "Conexión con tu software actual (CRMs, ERPs)." },
              { n: "5", t: "Implementación", d: "Onboarding, psicología cognitiva y despliegue real." },
              { n: "6", t: "Optimización", d: "Mejora iterativa basada en datos de uso real." },
            ].map((step) => (
              <div key={step.n} className="bg-[#020202] border border-white/[0.05] p-6 rounded-2xl">
                <h4 className="text-base font-bold text-white mb-2">{step.n}. {step.t}</h4>
                <p className="text-xs text-slate-400 font-light">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DIAGNÓSTICO */}
      <section id="diagnostico" className="py-20 md:py-32 relative z-10 bg-[#020202] border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
          <div className="bg-gradient-to-b from-white/[0.03] to-transparent border border-cyan-500/20 rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 relative overflow-hidden backdrop-blur-2xl shadow-[0_20px_80px_rgba(34,211,238,0.05)]">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-500/20 blur-[80px] rounded-full pointer-events-none"></div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-white leading-[1.1]">
                  Encuentra la fuga de capital. <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-emerald-300">Antes de gastar en código.</span>
                </h2>
                <p className="text-slate-400 mb-8 text-base md:text-lg leading-relaxed font-light">
                  Te ofrecemos un Diagnóstico de Arquitectura (valorado corporativamente en <span className="text-white font-medium line-through decoration-red-500/70">$2,500 USD</span>) sin costo. Analizamos tu operación para entregarte soluciones claras, no promesas.
                </p>
                <div className="space-y-4 md:space-y-6 bg-[#020202]/80 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/[0.05]">
                  <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-4 border-b border-white/[0.05] pb-4">Lo que te entregamos en la sesión:</h4>
                  {[
                    { n: "1", t: "Mapeo de Cuellos de Botella", d: "Evaluamos embudos y dependencia humana en tu proceso operativo." },
                    { n: "2", t: "Viabilidad de IA", d: "Identificamos qué procesos exactos pueden delegarse a agentes autónomos hoy." },
                    { n: "3", t: "Blueprint Arquitectónico", d: "El mapa técnico de las integraciones de software que requieres para escalar." },
                  ].map((item) => (
                    <div key={item.n} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 shrink-0">
                        <span className="text-cyan-400 font-bold text-sm">{item.n}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-100 text-sm md:text-base">{item.t}</h4>
                        <p className="text-slate-400 text-xs md:text-sm mt-1 font-light leading-relaxed">{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="w-full max-w-md bg-[#020202] border border-white/[0.1] rounded-[2rem] p-6 md:p-10 relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-3">Solicitar Auditoría</h3>
                    <p className="text-sm text-slate-400 font-light leading-relaxed">Completa el filtro de calificación para agendar una sesión con nuestra dirección.</p>
                  </div>
                  <button className="w-full bg-white hover:bg-slate-200 text-black px-6 py-4 md:py-5 rounded-xl text-sm md:text-base font-bold transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(103,232,249,0.3)] flex items-center justify-center gap-3">
                    Acceder al Filtro Técnico
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                  <div className="mt-8 flex items-center justify-center gap-3 bg-red-500/10 py-3 rounded-lg border border-red-500/20">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                    </span>
                    <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-red-400">3 cupos restantes este mes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. LA FIRMA */}
      <section id="firma" className="py-20 md:py-32 bg-[#050505] relative z-10 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="text-center md:text-left mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Cómo construimos estos sistemas</h2>
            <p className="text-slate-400 text-base md:text-lg font-light max-w-2xl">Nuestra firma está guiada por líderes con más de 25 años de experiencia combinada. Esta es la triada ejecutiva detrás de los ecosistemas NSG.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#020202] border border-white/[0.05] p-8 md:p-10 rounded-[2rem] hover:border-cyan-500/30 transition-all duration-500 flex flex-col h-full relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/5 blur-3xl rounded-full"></div>
              <h4 className="text-xl md:text-2xl font-bold mb-1 text-white relative z-10">Iván Rodríguez</h4>
              <p className="text-cyan-400 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-6 relative z-10">Founder & Director General</p>
              <p className="text-slate-400 text-sm leading-relaxed font-light flex-grow relative z-10">
                Define la visión estratégica y la arquitectura de soluciones. Actúa como el puente definitivo entre los objetivos comerciales de alto nivel y la infraestructura tecnológica de la empresa.
                <br/><br/>
                Aporta la visión de negocio que conecta IA, CRM, automatización y operación para garantizar que los sistemas generen rentabilidad real, ventas estructuradas y dominio operativo.
              </p>
            </div>
            <div className="bg-[#020202] border border-white/[0.05] p-8 md:p-10 rounded-[2rem] hover:border-emerald-500/30 transition-all duration-500 flex flex-col h-full relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/5 blur-3xl rounded-full"></div>
              <h4 className="text-xl md:text-2xl font-bold mb-1 text-white relative z-10">Jorge Calderón</h4>
              <p className="text-emerald-400 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-6 relative z-10">Ingeniería Full-Stack & IA</p>
              <p className="text-slate-400 text-sm leading-relaxed font-light flex-grow relative z-10">
                La ejecución algorítmica y técnica. Desarrollador con sólida experiencia construyendo plataformas reales de extremo a extremo.
                <br/><br/>
                Domina la construcción de agentes, integraciones complejas (Odoo, Shopify, Meta Ads, Slack, WhatsApp API) y sistemas RAG utilizando tecnologías de clase mundial como <strong>React, Node.js, MongoDB Atlas, Supabase, OpenAI y Gemini</strong>.
              </p>
            </div>
            <div className="bg-[#020202] border border-white/[0.05] p-8 md:p-10 rounded-[2rem] hover:border-blue-500/30 transition-all duration-500 md:col-span-2 lg:col-span-1 flex flex-col h-full relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/5 blur-3xl rounded-full"></div>
              <h4 className="text-xl md:text-2xl font-bold mb-1 text-white relative z-10">Themis Nickthel L.</h4>
              <p className="text-blue-400 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-6 relative z-10">Psicología Cognitiva & Adopción</p>
              <p className="text-slate-400 text-sm leading-relaxed font-light flex-grow relative z-10">
                Garantiza que la tecnología se entienda y se adopte. Maestría en Psicología Cognitiva y TIC.
                <br/><br/>
                Ha colaborado con <strong>Google for Education LATAM, Volvo, Top Mexico Real Estate</strong> y en EBAC impactando a +15,000 estudiantes. Aporta la estructura pedagógica, el diseño instruccional y la experiencia de usuario (UX) para que el software genere valor continuo sin fricción humana.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 md:py-12 border-t border-white/[0.05] text-center bg-[#020202] relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          <div className="text-xl md:text-2xl font-black tracking-tighter text-slate-300 mb-4 drop-shadow-sm flex items-center gap-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
            NSG
          </div>
          <p className="text-slate-500 text-[10px] md:text-xs font-medium tracking-widest uppercase">
            © 2026 NSG. Firma de Tecnología Aplicada.
          </p>
        </div>
      </footer>
    </div>
  );
}
