import studentHome from '/images/studentsHome.png';
import staffHome from '/images/staffHome.jpg';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <div className="w-full h-screen overflow-hidden relative before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:left-0 before:z-10 before:opacity-30">
        <img
          src={studentHome}
          className="absolute top-0 left-0 min-h-full ob w-full  object-cover"
          alt=""
        />
        <div className="tracking-wider relative z-20 max-w-screen-lg mx-auto flex  h-full items-center">
          <div className="md:w-1/2 w-full">
            <h1 className="text-white font-extrabold text-5xl mb-8">
              Dynamic academic community, Where innovation meets excellence!
            </h1>
            <p className="text-stone-100 text-base">
              Dive into a world of endless possibilities with our esteemed faculty and staff who are
              dedicated to nurturing brilliance and shaping future leaders
            </p>
            <Link to={'/access'}>
              <button className="mt-8 text-white uppercase py-4 text-base font-light px-10 border border-white hover:bg-white hover:bg-opacity-10 rounded-xl">
                Get started
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-blue-100 py-10">
        <div className="max-w-screen-lg mx-auto flex justify-between items-center">
          <div className="max-w-xl">
            <h2 className="font-black text-sky-950 text-3xl mb-4">
              Explore our cutting-edge research, vibrant campus life, and unparalleled educational
              opportunities
            </h2>
            <p className="text-base text-sky-950">
              Join us on this exciting journey of discovery and growth. Discover your potential at
              university of Rwanda.
            </p>
          </div>
        </div>
      </div>

      <div className="py-12 relative overflow-hidden">
        <div className="md:flex max-w-screen-lg mx-auto">
          <div className="w-full flex flex-col items-center md:items-end md:pr-16">
            <h2 className="text-[#64618C] font-bold text-2xl max-w-xs text-center md:text-right mb-5 mt-10">
              Whether you need Assistance
            </h2>
            <div className="h-full mt-auto overflow-hidden relative">
              <img src={staffHome} className="h-full w-full object-contain" alt="" />
            </div>
          </div>

          <div className="py-20 bg-slate-100 relative before:absolute before:h-full before:w-screen before:bg-sky-950 before:top-0 before:left-0">
            <div className="relative z-20 pl-12">
              <h2 className="text-[#f7d0b6] font-black text-5xl leading-snug mb-10">
                Our Staff is here <br />
                to help you
              </h2>
              <p className="text-white text-sm">
                Our dedicated staff is committed to student success, providing unwavering support
                every step of the way. From academic guidance to personal development, we empower
                students to thrive in a nurturing environment. Join our community and experience the
                difference of personalized care and boundless opportunities.
              </p>
              <Link to={'about'}>
                <button className="mt-8 text-white uppercase py-3 text-sm px-10 border border-white hover:bg-white hover:bg-opacity-10 rounded-xl">
                  Meet the staff
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
