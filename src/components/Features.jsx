import { Stethoscope, HeartPulse, Leaf, Activity } from 'lucide-react'

const features = [
  {
    icon: Stethoscope,
    title: 'Health Checks',
    desc: 'Comprehensive assessments tailored to your needs, with clear, jargon-free advice.',
  },
  {
    icon: Activity,
    title: 'Physiotherapy',
    desc: 'Evidence-based treatment to reduce pain, restore movement, and build strength.',
  },
  {
    icon: HeartPulse,
    title: 'Wellness Clinic',
    desc: 'Support for recovery, sleep, stress, and lifestyle — practical steps that work for you.',
  },
  {
    icon: Leaf,
    title: 'Preventative Care',
    desc: 'Small changes, big impact. Programmes to keep you well and active for longer.',
  },
]

export default function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900">Care that fits around you</h2>
          <p className="mt-3 text-slate-600">A friendly, modern clinic offering accessible healthcare and wellbeing support, right here in Southport.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200 p-6 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-emerald-500 to-sky-500 text-white flex items-center justify-center">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
