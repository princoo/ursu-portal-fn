import { Link } from 'react-router-dom';
import urLogo from '/images/urLogo.png';
import { FaXTwitter } from 'react-icons/fa6';
import { FaFacebookF } from 'react-icons/fa';

export default function Footer() {
  const footerNavs = [
    {
      href: '/about',
      name: 'Services',
    },
    {
      href: '/staff',
      name: 'Team',
    },
    {
      href: '/support',
      name: 'Support',
    },
  ];

  return (
    <footer className="text-sm text-gray-500  px-4 py-1 w-full mx-auto md:px-8 bg-gradient-to-b from-white to-blue-200">
      <div className="max-w-2xl sm:mx-auto sm:text-center">
        <img src={urLogo} className="w-10 sm:mx-auto" />
        <p className="leading-relaxed mt-2">
          Elevating Minds, Empowering Futures: Igniting Passion, Inspiring Excellence
        </p>
      </div>
      <ul className="items-center justify-center space-y-5 sm:flex sm:space-x-4 sm:space-y-0 text-blue-500">
        {footerNavs.map((item, index) => (
          <Link to={item.href} className=" hover:text-gray-800" key={index}>
            {item.name}
          </Link>
        ))}
      </ul>
      <div className="items-center justify-between sm:flex">
        <div className="mt-4 sm:mt-0">&copy; 2024 rights reserved.</div>
        <div className="mt-6 sm:mt-0">
          <ul className="flex items-center space-x-4">
            <Link to={'#'} className="w-6 h-6 border rounded-full flex items-center justify-center">
              <FaFacebookF />
            </Link>

            <Link to={'#'} className="w-6 h-6 border rounded-full flex items-center justify-center">
              <FaXTwitter />
            </Link>
          </ul>
        </div>
      </div>
    </footer>
  );
}
