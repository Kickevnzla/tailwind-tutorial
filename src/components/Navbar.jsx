const Navbar = () => {
  return (
    <header className="bg-teal-700 sticky top-0 z-50">
      <section
        className="max-w-4xl mx-auto p-4 flex justify-between items-center"
        aria-label="main"
      >
        <h1 className="text-3xl font-medium">
          <a href="#hero">🚀 Acme Rockets</a>
        </h1>
        <div>
          <button
            id="mobile-open-button"
            className="text-3xl sm:hidden focus:outline-none"
            type="button"
          >
            &#9776;
          </button>
          <nav className="hidden sm:block text-xl">
            <ul className="flex space-x-8">
              <li>
                <a href="#rocket" className="hover:opacity-90">
                  Our Rockets
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:opacity-90">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:opacity-90">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </header>
  );
};

export default Navbar;
