import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        <section className="py-16 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-slate-900">About Birkdale Health</h1>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Our mission is simple: provide high-quality care that feels human. We bring together experienced clinicians across physiotherapy, health checks, and wellness — all focused on listening, explaining clearly, and helping you get back to feeling your best.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Why patients choose us', text: 'Friendly team, clear advice, and appointments that run on time. We treat the person, not just the symptom.' },
                { title: 'Qualified & accredited', text: 'Our practitioners are fully qualified and members of professional bodies such as HCPC and CSP.' },
                { title: 'Local & convenient', text: 'Based in Birkdale, Southport — easy to reach by train, bus, or car with nearby parking.' },
              ].map((c) => (
                <div key={c.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <h3 className="font-semibold text-slate-900">{c.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{c.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-xl font-semibold text-slate-900">Meet the team</h2>
              <p className="mt-2 text-slate-700">A multi-disciplinary team of physiotherapists, health advisors, and wellness practitioners. Warm people, strong clinical expertise, and a shared commitment to good outcomes.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
