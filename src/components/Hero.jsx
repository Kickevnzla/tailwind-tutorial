import RocketDab from '../assets/img/rocketdab.png';

const Hero = () => {
  return (
    <section
      className="max-w-4xl mx-auto flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height"
      id="hero"
    >
      <article className="sm:w-1/2">
        <h2 className="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-white">
          We Boldy Go <span className="text-indigo-300">WhereNo Rocket</span>{' '}
          Has Gone Before...
        </h2>
        <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-400">
          We're building rockets for the next century today. From the moon to
          Mars, Jupiter and beyond...
        </p>
        <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-400">
          Think Acme Rockets.
        </p>
      </article>
      <img src={RocketDab} alt="Rocket Dab" className="sm:w-1/2" />
    </section>
  );
};

export default Hero;
