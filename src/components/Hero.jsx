import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-xl text-white">
          <p className="uppercase tracking-wider text-sky-300/90 text-xs font-semibold mb-3">Southport • UK</p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">Trusted Care, Local to You</h1>
          <p className="mt-4 text-slate-200/90 text-lg">Birkdale Health provides friendly, professional healthcare with fully qualified practitioners. We combine modern medical insight with a warm, human approach.</p>
          <div className="mt-6 flex items-center gap-3">
            <Link to="/contact" className="inline-flex items-center rounded-full bg-sky-600 hover:bg-sky-700 text-white font-semibold px-5 py-3 transition-colors shadow">
              Book an Appointment
            </Link>
            <Link to="/services" className="inline-flex items-center rounded-full border border-white/30 text-white hover:bg-white/10 font-semibold px-5 py-3 transition-colors">
              View Services
            </Link>
          </div>

          <div className="mt-6 flex items-center gap-6 text-slate-300">
            <div className="text-sm">Accredited Clinic</div>
            <div className="text-sm">Member of HCPC & CSP</div>
            <div className="text-sm">Fully Qualified Practitioners</div>
          </div>
        </div>
      </div>
    </section>
  )
}
