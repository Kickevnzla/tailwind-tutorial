import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-teal-700 sticky top-0 z-50">
      <section
        className="max-w-4xl mx-auto p-4 flex justify-between items-center"
        aria-label="main"
      >
        <h1
          className="text-3xl font-medium"
          onClick={() => setIsOpen(false)}
          onKeyUp={(e) => e.key === 'Enter' && setIsOpen(false)}
        >
          <a href="#hero">🚀 Acme Rockets</a>
        </h1>
        <div>
          <button
            id="hamburger-btn"
            className={`text-3xl md:hidden cursor-pointer relative w-8 h-8 ${isOpen ? 'toggle-btn' : ''}`}
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* &#9776; */}
            <div
              className="bg-white w-8 h-1 rounded absolute top-4 -mt-0.5 transition-all duration-500 before:content-[''] before:bg-white before:w-8 before:h-1 before:rounded before:absolute before:-translate-x-4 before:-translate-y-3 before:transition-all before:duration-500
            after:content-[''] after:bg-white after:w-8 after:h-1 after:rounded after:absolute after:-translate-x-4 after:translate-y-3 after:transition-all after:duration-500 "
            >
              {' '}
            </div>
          </button>
          <nav className="hidden md:block space-x-8 text-xl">
            <a href="#rockets" className="hover:opacity-90">
              Our Rockets
            </a>

            <a href="#testimonials" className="hover:opacity-90">
              Testimonials
            </a>

            <a href="#contact" className="hover:opacity-90">
              Contact Us
            </a>
          </nav>
        </div>
      </section>
      {isOpen && (
        <section
          id="mobile-menu"
          className="absolute top-68 bg-violet-950 w-full text-5xl flex flex-col justify-items-center origin-top animate-open-menu"
          onClick={() => setIsOpen(false)}
          onKeyUp={(e) => e.key === 'Enter' && setIsOpen(false)}
        >
          {/* <button
            type="button"
            className="text-8xl self-end px-6"
            onClick={() => setIsOpen(false)}
          >
            &times;
          </button> */}
          <nav
            className="flex flex-col min-h-screen items-center py-8"
            aria-label="mobile"
          >
            <a
              href="#hero"
              className="w-full text-center py-6 hover:opacity-90"
            >
              Home
            </a>
            <a
              href="#rockets"
              className="w-full text-center py-6 hover:opacity-90"
            >
              Our Rockets
            </a>
            <a
              href="#testimonials"
              className="w-full text-center py-6 hover:opacity-90"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="w-full text-center py-6 hover:opacity-90"
            >
              Contact Us
            </a>
          </nav>
        </section>
      )}
    </header>
  );
};

export default Navbar;
