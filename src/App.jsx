import {
  Navbar,
  Hero,
  Separator,
  Rockets,
  Testimonials,
  Contact,
  Footer,
} from './components';

const App = () => {
  return (
    <div className="min-h-screen bg-violet-950 text-white">
      <Navbar />
      <Hero />
      <Separator />
      <Rockets />
      <Separator />
      <Testimonials />
      <Separator />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
