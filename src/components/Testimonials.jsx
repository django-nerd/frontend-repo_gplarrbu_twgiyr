const quotes = [
  {
    text: 'The team were brilliant — kind, professional, and they explained everything clearly. I feel like myself again.',
    name: 'Sarah, Birkdale',
  },
  {
    text: 'Booked easily, seen quickly, and the exercises actually helped. Highly recommend.',
    name: 'Tom, Southport',
  },
  {
    text: 'Warm and welcoming from the moment you walk in. You feel looked after and listened to.',
    name: 'Aisha, Hillside',
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900">Patient Stories</h2>
          <p className="mt-3 text-slate-600">Real experiences from our local community.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <figure key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <blockquote className="text-slate-700">“{q.text}”</blockquote>
              <figcaption className="mt-4 text-sm font-medium text-slate-900">{q.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
