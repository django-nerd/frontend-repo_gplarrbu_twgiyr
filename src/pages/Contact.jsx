import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h1 className="text-3xl font-bold text-slate-900">Get in touch</h1>
              <p className="mt-3 text-slate-700">Questions, bookings, or advice — we’re here to help.</p>

              <form className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">First name</label>
                  <input type="text" className="mt-1 w-full rounded-lg border-slate-300 focus:border-sky-500 focus:ring-sky-500" placeholder="Jane" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Last name</label>
                  <input type="text" className="mt-1 w-full rounded-lg border-slate-300 focus:border-sky-500 focus:ring-sky-500" placeholder="Doe" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-slate-700">Email</label>
                  <input type="email" className="mt-1 w-full rounded-lg border-slate-300 focus:border-sky-500 focus:ring-sky-500" placeholder="you@example.com" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-slate-700">Message</label>
                  <textarea rows="5" className="mt-1 w-full rounded-lg border-slate-300 focus:border-sky-500 focus:ring-sky-500" placeholder="How can we help?" />
                </div>
                <div className="sm:col-span-2">
                  <button type="submit" className="inline-flex items-center rounded-full bg-sky-600 text-white font-semibold px-5 py-3 shadow hover:bg-sky-700">Send message</button>
                </div>
              </form>
            </div>

            <aside className="space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h2 className="font-semibold text-slate-900">Clinic details</h2>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  <li>Tel: 01704 000 000</li>
                  <li>Email: hello@birkdalehealth.co.uk</li>
                  <li>Address: Birkdale Village, Southport</li>
                </ul>
                <div className="mt-4 text-xs text-slate-500">Mon–Fri 8:30–18:00 • Sat 9:00–13:00 • Sun Closed</div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-slate-200">
                <iframe
                  title="map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-3.020%2C53.630%2C-2.960%2C53.660&layer=mapnik&marker=53.646%2C-2.990"
                  className="w-full h-64"
                />
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
