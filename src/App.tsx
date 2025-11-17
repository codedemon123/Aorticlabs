import{ useState } from "react";
export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Header */}
      <header className="fixed w-full bg-white/90 backdrop-blur z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="AorticLabs logo" className="h-10 w-10 object-contain" />
            <span className="text-xl font-semibold tracking-tight">Aorticlabs</span>
          </div>

          <nav className="hidden md:flex gap-2 items-center text-sm">
            <a href="#home" className="px-3 py-2 hover:text-blue-600">Home</a>
            <a href="#about" className="px-3 py-2 hover:text-blue-600">About</a>
            <a href="#contact" className="px-3 py-2 hover:text-blue-600">Contact</a>
          </nav>

          {/* Mobile button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t bg-white/90">
            <div className="px-6 py-3 flex flex-col">
              <a href="#home" onClick={() => setOpen(false)} className="py-2">Home</a>
              <a href="#about" onClick={() => setOpen(false)} className="py-2">About</a>
              <a href="#contact" onClick={() => setOpen(false)} className="py-2">Contact</a>
            </div>
          </div>
        )}
      </header>

      {/* Main */}
      <main id="home" className="pt-24">
        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Left side */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Building the world's most efficient interconnects for AI data centers
            </h1>

            <p className="mt-6 text-lg text-gray-700">
              We bring coherent interconnect technology into data centers — drastically reducing latency and power usage while increasing AI throughput.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-700"
              >
                Get in touch
              </a>
              <a
                href="#about"
                className="px-6 py-3 rounded-lg border border-gray-200 font-medium hover:bg-gray-100"
              >
                Learn more
              </a>
            </div>

            <ul className="mt-8 text-sm text-gray-600 space-y-2">
              <li>• Pluggable optics</li>
              <li>• Data Center Interconnects</li>
              <li>• Photonic Integrated Circuits</li>
            </ul>
          </div>

          {/* Right side — Single Image */}
          <div className="flex items-center justify-center">
  <div className="relative w-full max-w-xl h-80 overflow-hidden">
    <img
      src="/aise1.jpeg"
      alt="AorticLabs"
      className="absolute inset-0 w-full h-full object-contain"
    />
  </div>
</div>


        </section>

        {/* ABOUT */}
        <section id="about" className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold">About Us</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              AorticLabs builds next-generation coherent interconnects designed to meet the extreme performance demands of modern AI data centers. We integrate photonics, pluggable optics, and advanced signaling architectures to deliver low-latency, low-power, and highly scalable data center connectivity purpose-built for AI training and inference.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold">Mission</h3>
                <p className="text-sm text-gray-600 mt-2">Reduce interconnect power & latency for AI.</p>
              </div>

              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold">Approach</h3>
                <p className="text-sm text-gray-600 mt-2">Photonics + ASIC + tightly integrated software.</p>
              </div>

              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold">Applications</h3>
                <p className="text-sm text-gray-600 mt-2">Distributed training & inference clusters.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-16">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold">Contact</h2>
              <p className="mt-4 text-gray-700">Want to collaborate or pilot our interconnects?</p>

              <div className="mt-6 space-y-3 text-sm text-gray-600">
                <div>
                  <strong>Email:</strong> <a href="mailto:info@aorticlabs.io" className="underline">info@aorticlabs.io</a>
                </div>
              </div>
            </div>

            {/* Form */}
            <form
              action="https://formspree.io/f/YOUR_ID"
              method="POST"
              className="bg-white p-6 border rounded-lg shadow-sm"
            >
              <label className="block">
                <span className="text-sm font-medium">Name</span>
                <input
                  name="name"
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2"
                  required
                />
              </label>

              <label className="block mt-4">
                <span className="text-sm font-medium">Message</span>
                <textarea
                  name="message"
                  rows={1}
                  className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2"
                  required
                ></textarea>
              </label>

              <button type="submit" className="mt-4 px-4 py-2 rounded-md bg-blue-600 text-white">
                Send
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white/80 backdrop-blur py-6">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="AorticLabs logo" className="h-8 w-8" />
            <span className="text-sm">© {new Date().getFullYear()} AorticLabs</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
