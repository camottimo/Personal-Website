export default function Contact() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">Reach out ✍️</h2>
      <div className="space-y-4">
        <p className="text-gray-600">If you're interested in my work, I'd love to hear from you.</p>
        <p className="text-gray-600">Feel free to drop me a message, and I'll get back to you asap!</p>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="First name" className="rounded-lg border-gray-200" required />
            <input type="text" placeholder="Last name" className="rounded-lg border-gray-200" required />
            <input type="tel" placeholder="Phone number" className="rounded-lg border-gray-200" required />
            <input type="email" placeholder="Email" className="rounded-lg border-gray-200" required />
          </div>
          <textarea placeholder="Message" rows={6} className="w-full rounded-lg border-gray-200" required />
          <button type="submit" className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
            Submit →
          </button>
        </form>
      </div>
    </section>
  )
} 