export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-500 to-sky-500 text-white flex items-center justify-center text-sm font-bold">BH</div>
            <span className="font-semibold text-slate-900">Birkdale Health</span>
          </div>
          <p className="mt-3 text-sm text-slate-600">Trusted, local healthcare in Southport. Friendly people, evidence-based care.</p>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">Clinic</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>Mon–Fri: 8:30–18:00</li>
            <li>Sat: 9:00–13:00</li>
            <li>Sun: Closed</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>Tel: 01704 000 000</li>
            <li>Email: hello@birkdalehealth.co.uk</li>
            <li>Address: Birkdale Village, Southport</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Birkdale Health. All rights reserved.
      </div>
    </footer>
  )
}
