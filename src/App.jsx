import {
  Navbar,
  Hero,
  Separator,
  Rockets,
  Testimonials,
  Contact,
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
    </div>
  );
};

export default App;
