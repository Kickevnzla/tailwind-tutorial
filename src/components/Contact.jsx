const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto p-6 my-12 scroll-mt-16 widescreen:section-min-height tallscreen:section-min-height"
    >
      <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-white">
        Contact Us
      </h2>
      <form
        action=""
        className="max-w-4xl mx-auto text-2xl sm:text-3xl flex flex-col items-left gap-4"
      >
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          name="subject"
          id="subject"
          required
          minLength="3"
          maxLength="64"
          placeholder="Your Subject"
          className="w-full text-white sm:text-3xl p-3 rounded-xl "
        />
        <label htmlFor="message">Message:</label>
        <textarea
          name="message"
          id="message"
          cols={30}
          rows={10}
          placeholder="Your Message"
          required
          className="w-full text-white sm:text-3xl p-3 rounded-xl "
        />
        <button
          type="submit"
          className="bg-teal-700 hover:bg-teal-600 active:bg-teal-500 text-white p-3 w-48 rounded-xl"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
