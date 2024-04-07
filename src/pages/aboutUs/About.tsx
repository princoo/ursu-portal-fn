import { Link } from 'react-router-dom';
import about from '/images/about-header.png';
import { CiUser } from 'react-icons/ci';

export default function About() {
  const team = [
    {
      name: 'KWIZERA Aaron',
      title: 'Guild President',
    },
    {
      name: 'DUSENGIMANA Sylvie',
      title: 'Vice Guild president',
    },
    {
      name: 'UBARUTA Joilie',
      title: 'General Secretary',
    },
    {
      name: 'BADAGA Nice',
      title: 'Speaker of Board',
    },
    {
      name: 'SHYAKA Pacifique',
      title: 'Vice Speaker',
    },
    {
      name: 'UMUNEZERO Benie',
      title: 'Secretary of Board',
    },
    {
      name: 'Z. Billy Charmant',
      title: 'Security and Discipline',
    },
    {
      name: 'SHEMA Bravo',
      title: 'Social Affair',
    },
    {
      name: 'SHYAKA Frank',
      title: 'Sports and Associations',
    },
    {
      name: 'UMUHOZA Honoline',
      title: 'Gender and protocal',
    },
    {
      name: 'JOAN',
      title: 'Information',
    },
    {
      name: 'ALEX',
      title: 'M. incharge of Disability',
    },
    {
      name: 'JOSHUA',
      title: 'Production and planning',
    },
    {
      name: 'DAN',
      title: 'Finance',
    },
    {
      name: 'NDABARASA',
      title: 'Arbitration',
    },
  ];
  return (
    <div className="p-5">
      <div className="borer-2 border-ble-400 rounded-xl shadow-lg flex flex-col md:flex-row md:h-80 px-3 xl:pl-20 gap-3">
        <div className="img w-full md:w-1/2">
          <img src={about} alt="image" className="h-full w-full object-cover" />
        </div>
        <div className="header flex flex-col gap-4 md:justify-evenly">
          <h1 className="text-4xl font-bold capitalize break-words">
            At the intersection of tradition and innovation
          </h1>
          <span>
            {' '}
            We have been at the forefront of education, research and discovery. And we are still
            leading the way and We wish you fruitful learning journey to reach your career goals
            with a view to building stronger communities
          </span>
          <div className="action flex gap-5">
            <Link to={'#'}>
              <button className="bg-blue-500 p-2 rounded-lg text-white font-medium">
                Explore our history
              </button>
            </Link>
            <Link to={'#'}>
              <button className="bg-gray-300 p-2 rounded-lg text-black font-medium">
                Explore our locations
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="ethos mt-12 w-full flex flex-col gap-2 px-5 py-10 rounded-xl bg-gradient-to-r from-blue-300 via-indigo-500 to-indigo-300">
        <h1 className="text-4xl font-bold"> Our ethos</h1>
        <p className="text-lg">
          The University is committed to being a diverse, inclusive, and welcoming community. We are
          dedicated to creating an environment of respect and support for all members of our
          community. We provide a wide range of resources and services to help all members of the
          University community thrive.
        </p>
      </div>
      <section className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="max-w-xl mx-auto sm:text-center">
            <h3 className=" text-3xl font-semibold sm:text-4xl">Meet the leadership team</h3>
            {/* <p className="text-gray-600 mt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry standard dummy text ever since the 1500s, when an unknown.
            </p> */}
          </div>
          <div className="mt-12">
            <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              {team.map((item, idx) => (
                <li key={idx}>
                  <div className="w-full h-60 sm:h-52 md:h-56">
                    {/* <img
                      src={item.avatar}
                      className="w-full h-full object-cover object-center shadow-md rounded-xl"
                      alt=""
                    /> */}
                    <CiUser className="w-full h-full object-cover object-center shadow-md rounded-xl" />
                  </div>
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold">{item.name}</h4>
                    <p className="text-blue-600">{item.title}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
