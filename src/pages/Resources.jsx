import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const posts = [
  {
    title: 'How to sit well at your desk',
    excerpt: 'Small adjustments can reduce neck and back pain. Here are five that make a difference.',
    tag: 'Physio tips',
  },
  {
    title: 'Sleep: simple steps for better rest',
    excerpt: 'Better sleep supports recovery and mood. Start with a consistent routine and a calm wind-down.',
    tag: 'Wellness',
  },
  {
    title: 'Stretch or strengthen?',
    excerpt: 'Both matter — the right balance depends on your goals. Here’s how we think about it.',
    tag: 'Movement',
  },
]

export default function Resources() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-3xl font-bold text-slate-900">Patient Resources</h1>
              <p className="mt-3 text-slate-700">Straightforward, practical advice from our clinicians. New articles every month.</p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {posts.map((p) => (
                <article key={p.title} className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-md transition-shadow">
                  <div className="text-xs font-semibold text-sky-700 uppercase tracking-wide">{p.tag}</div>
                  <h3 className="mt-3 font-semibold text-slate-900">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{p.excerpt}</p>
                  <button className="mt-4 text-sm font-semibold text-sky-700 hover:underline">Read more</button>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
