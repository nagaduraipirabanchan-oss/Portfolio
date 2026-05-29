export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-10 flex flex-col items-center justify-center text-center"
    >

      <h1 className="text-5xl font-bold mb-16 max-w-4xl">
        Let's Connect.
      </h1>

      <form className="space-y-5 w-full max-w-3xl text-left">

        <input
          placeholder="Name"
          className="w-full p-5 glass rounded-2xl outline-none"
        />

        <input
          placeholder="Email"
          className="w-full p-5 glass rounded-2xl outline-none"
        />

        <input
          placeholder="Subject"
          className="w-full p-5 glass rounded-2xl outline-none"
        />

        <textarea
          placeholder="Message"
          rows={6}
          className="w-full p-5 glass rounded-2xl outline-none resize-none"
        />

        <div className="flex justify-center">
          <button className="px-10 py-4 bg-white text-black font-black rounded-full hover:bg-cyan-500 transition-all">
            Send Message
          </button>
        </div>

      </form>

    </section>
  );
}