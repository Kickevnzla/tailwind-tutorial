import RocketMan from '../assets/img/rocketman.png';
import RocketRide from '../assets/img/rocketride.png';
import RocketLaunch from '../assets/img/rocketlaunch.png';

const RocketList = [
  {
    id: 0,
    name: 'Explorer',
    price: '$',
    description: 'Affordable Exploration',
    image: RocketMan,
  },
  {
    id: 1,
    name: 'Adventurer',
    price: '$$',
    description: 'Best Selling Rocket!',
    image: RocketRide,
  },
  {
    id: 2,
    name: 'Infinity',
    price: '$$$',
    description: 'Luxury Starship',
    image: RocketLaunch,
  },
];

const Rockets = () => {
  return (
    <section
      id="rockets"
      className="max-w-4xl mx-auto p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height"
    >
      <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-white">
        Our Rockets
      </h2>
      <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
        {RocketList.map((rocket) => (
          <li
            key={rocket.id}
            className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-gray-100 bg-transparent py-6 px-2 rounded-3xl shadow-xl"
          >
            <img src={rocket.image} alt={rocket.name} className="w-1/2 " />
            <h3 className="text-3xl text-center mt-2 text-white">
              {rocket.name}
            </h3>
            <p className="hidden sm:block text-3xl text-center text-slate-400">
              {rocket.price}
            </p>
            <p className="sm:hidden text-2xl text-center mt-2 text-slate-400">
              {rocket.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Rockets;
