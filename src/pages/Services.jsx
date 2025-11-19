import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Stethoscope, Activity, HeartPulse, Leaf, ShieldCheck } from 'lucide-react'

const services = [
  {
    icon: Activity,
    name: 'Physiotherapy',
    desc: 'Hands-on therapy, rehabilitation plans, and exercise programmes to relieve pain and improve movement.',
  },
  {
    icon: Stethoscope,
    name: 'Health Checks',
    desc: 'Health screenings with easy-to-understand results and practical advice to support your wellbeing.',
  },
  {
    icon: HeartPulse,
    name: 'Wellness Treatments',
    desc: 'Support for sleep, stress, recovery and lifestyle — helping healthy habits stick.',
  },
  {
    icon: Leaf,
    name: 'Preventative Care',
    desc: 'Keep well for longer with programmes focused on mobility, strength, and cardiovascular health.',
  },
]

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-3xl font-bold text-slate-900">Our Services</h1>
              <p className="mt-3 text-slate-700">Practical, evidence-based care delivered by friendly practitioners.</p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map(({ icon: Icon, name, desc }) => (
                <div key={name} className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-emerald-500 to-sky-500 text-white flex items-center justify-center">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-4 font-semibold text-slate-900">{name}</h3>
                  <p className="mt-2 text-sm text-slate-600">{desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 flex items-start gap-3">
              <ShieldCheck className="text-emerald-600" size={20} />
              <p className="text-sm text-emerald-900">All services are delivered by qualified practitioners and supervised by senior clinicians. We follow national guidance and best practice.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
